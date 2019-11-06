<template>
  <div class="preStorage">
    <p>拍照识别</p>
    <div class="camera">
      <div class="leftTop"></div>
      <div class="leftBottom"></div>
      <div class="rightTop"></div>
      <div class="rightBottom"></div>
      <img src="../assets/camera.png" alt="camera" @click="selectImage" />
    </div>
    <p>其他预存方式</p>
    <div class="editMessage">
      <div class="name">
        <p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</p>：
        <input type="text" placeholder="请输入您的姓名" v-model="info.message.name" />
      </div>
      <div class="ticket">
        <p>准考证号</p>：
        <input type="number" placeholder="请输入您的准考证号" v-model="info.message.ticket" />
      </div>
    </div>
    <div class="button">
      <img src="../assets/reflect.png" alt="reflect" />
      <p @click="submitMessage">提交信息</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: function() {
        return {
          info: {
            message: {
              ticket: "654564654545455",
              name: "柳小橙"
            },
            currentComponent: "preStorage"
          }
        };
      }
    }
  },
  data() {
    return {
      haveSign: false
    };
  },
  methods: {
    selectImage: function() {
      if (this.haveSign) {
        const self = this;
        console.log(window.wx);
        window.wx.chooseImage({
          count: 1,
          sizeType: ["compressed"],
          sourceType: ["album", "camera"],
          success: function(res) {
            self.info.currentComponent = "waitLoad";
            let localIds = res.localIds;
            window.wx.getLocalImgData({
              localId: localIds[0],
              success: function(res) {
                let localData = res.localData; // localData是图片的base64数据，可以用img标签显示
                let form = new FormData();
                form.append("file", localData);
                self.axios
                  .post(
                    `https://wx.redrock.team/wxapi/cetpre/message/preset/ocr_base64`,
                    form,
                    {
                      headers: {
                        Authorization: window.localStorage.getItem("token_cet")
                      }
                    }
                  )
                  .then(res => {
                    if (res.data.status === 500) {
                      alert("服务器忙，请稍后重试");
                      self.info.currentComponent = "preStorage";
                    } else if (res.data.error_code === 10010) {
                      alert("图像识别暂仅支持png/jpg/bmp格式");
                      self.info.currentComponent = "preStorage";
                    } else {
                      let data = res.data.data;
                      if (
                        data.username.length > 0 &&
                        data.admission_card_id.length == 15
                      ) {
                        self.info.currentComponent = "preStorageSuccess";
                        self.info.message.ticket = data.admission_card_id;
                        self.info.message.name = data.username;
                      } else {
                        alert("没有识别到有效信息，请重试");
                        self.info.currentComponent = "preStorage";
                      }
                    }
                  })
                  .catch(err => {
                    alert("识别出错，请重试");
                    self.info.currentComponent = "preStorage";
                    console.log(err);
                  });
              }
            });
          },
          fail: function(err) {
            alert("选择图片出错，请退出后重试");
          }
        });
      } else {
        return;
      }
    },
    submitMessage: function() {
      let reg = /[\u4E00-\u9FFF]+/;
      if (
        reg.test(this.info.message.name) &&
        this.info.message.ticket.length == 15
      ) {
        this.info.currentComponent = "preStorageSuccess";
      } else {
        alert("您的输入有误，请重新输入");
      }
    }
  },
  mounted() {
    const self = this;
    window.WXSHARE.ready(function() {
      self.haveSign = true;
    });
  }
};
</script>

<style scoped>
.preStorage {
  width: 6.9rem;
  height: 9.99rem;
  background-color: #fbfdff;
  margin-top: 0.43rem;
  border-radius: 0.1rem;
  border: 0.02rem solid #073b79;
  box-sizing: border-box;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  padding-top: 0.4rem;
}
.preStorage p {
  font-family: tiaotiao;
  font-size: 0.38rem;
  color: #073b79;
}
.camera {
  margin-top: 0.5rem;
  margin-bottom: 0.8rem;
  width: auto;
  height: 3.05rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.camera img {
  width: 2.22rem;
  height: 2.22rem;
}
.leftTop {
  position: absolute;
  border-left: 0.06rem solid #799cc6;
  border-top: 0.06rem solid #799cc6;
  border-top-left-radius: 0.1rem;
  left: 0;
  top: 0;
  width: 0.56rem;
  height: 0.56rem;
}
.leftBottom {
  position: absolute;
  border-left: 0.06rem solid #799cc6;
  border-bottom: 0.06rem solid #799cc6;
  border-bottom-left-radius: 0.1rem;
  left: 0;
  bottom: 0;
  width: 0.56rem;
  height: 0.56rem;
}
.rightTop {
  position: absolute;
  border-right: 0.06rem solid #799cc6;
  border-top: 0.06rem solid #799cc6;
  border-top-right-radius: 0.1rem;
  right: 0;
  top: 0;
  width: 0.56rem;
  height: 0.56rem;
}
.rightBottom {
  position: absolute;
  border-right: 0.06rem solid #799cc6;
  border-bottom: 0.06rem solid #799cc6;
  border-bottom-right-radius: 0.1rem;
  right: 0;
  bottom: 0;
  width: 0.56rem;
  height: 0.56rem;
}
.editMessage {
  width: auto;
  margin-top: 0.4rem;
}
.editMessage p {
  white-space: nowrap;
}
.name {
  width: 100%;
  border-bottom: 0.02rem solid #cad6e4;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 0.3rem;
  margin-bottom: 0.25rem;
  padding-bottom: 0.05rem;
}
input {
  border: none;
  outline: none;
  font-size: 0.28rem;
  font-family: "PingFangSC-Regular", sans-serif;
  color: #f8822b;
  margin-left: 0.24rem;
  letter-spacing: 0.03rem;
}
input::placeholder {
  color: #6989af;
}
.ticket {
  width: 100%;
  border-bottom: 0.02rem solid #cad6e4;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 0.3rem;
  padding-bottom: 0.05rem;
}
.button {
  width: 2.94rem;
  height: 0.75rem;
  border: 0.02rem solid #073b79;
  border-radius: 0.1rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.75rem;
  background-color: #9bc2ff;
  position: relative;
  font-size: 0.38rem;
  line-height: 0.75rem;
  text-align: center;
  color: #073b79;
}
.button img {
  width: 0.31rem;
  height: 0.37rem;
  position: absolute;
  top: 0.05rem;
  left: 0.06rem;
}
</style>