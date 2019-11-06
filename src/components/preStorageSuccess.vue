<template>
  <div class="preStorageSuccess">
    <div class="presuccess">
      <img src="../assets/succicon.png" alt="succicon" />&nbsp;预存成功
    </div>
    <div class="myMessage">
      <h2>我的预存信息</h2>
      <div class="editMessage">
        <div class="name">
          <p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</p>：
          <input type="text" v-model="info.message.name" readonly />
        </div>
        <div class="ticket">
          <p>准考证号</p>：
          <input type="number" v-model="info.message.ticket" readonly />
        </div>
      </div>
      <div class="button">
        <img src="../assets/reflect.png" alt="reflect" />
        <p @click="submit">确定</p>
      </div>
      <div class="button button2">
        <img src="../assets/reflect.png" alt="reflect" />
        <p @click="modify">修改信息</p>
      </div>
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
          message: {
            ticket: "654564654545455",
            name: "柳小橙"
          },
          currentComponent: "preStorage"
        };
      }
    }
  },
  methods: {
    submit: function() {
      this.info.currentComponent = "submitSuccess";

      let formData = new FormData();
      formData.append("username", this.info.message.name);
      formData.append("admission_card_id", this.info.message.ticket);
      this.axios
        .get(
          `https://wx.redrock.team/wxapi/cetpre/message/preset/input`,
          { data: formData },
          {
            headers: { Authorization: window.localStorage.getItem("token_cet") }
          }
        )
        .then(res => {
          this.info.currentComponent = "submitSuccess";
          //         if(localStorage.getItem('from') === 'true' ||document.referrer.indexOf('redirect/query' != -1)) {
          //             localStorage.setItem('from', '');
          //             window.location.href = 'https://wx.idsbllp.cn/cetsearch/login/redirect/query';
          //         }else {
          //             this.info.currentComponent = "submitSuccess";
          //         }
          //     })
          //     .catch(err =>{
          //         alert("服务器繁忙，请稍后重试");
          //         console.log(err);
        });
    },
    modify: function() {
      this.info.currentComponent = "preStorage";
    }
  }
};
</script>

<style scoped>
.preStorageSuccess {
  margin-top: 0.31rem;
}
.presuccess {
  width: 4.23rem;
  height: 1.19rem;
  border-radius: 0.1rem;
  border: 0.02rem solid #073b79;
  margin-bottom: 1.05rem;
  margin-left: auto;
  margin-right: auto;
  background-color: #fbfdff;
  font-family: tiaotiao;
  color: #073b79;
  font-size: 0.359rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.presuccess img {
  width: 0.42rem;
  height: 0.42rem;
}
.myMessage {
  width: 6.9rem;
  height: 6.07rem;
  border-radius: 0.1rem;
  border: 0.02rem solid #073b79;
  background-color: #fbfdff;
  box-sizing: border-box;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
}
.myMessage h2 {
  font-family: tiaotiao;
  font-weight: normal;
  font-size: 0.38rem;
  color: #073b79;
  margin-top: 0.4rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.editMessage {
  width: auto;
  font-family: tiaotiao;
  color: #073b79;
  font-size: 0.3rem;
  margin-top: 0.5rem;
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
  letter-spacing: 0.03rem;
  margin-left: 0.24rem;
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
  font-family: tiaotiao;
}
.button2 {
  margin-top: 0.5rem;
}
.button img {
  width: 0.31rem;
  height: 0.37rem;
  position: absolute;
  top: 0.05rem;
  left: 0.06rem;
}
</style>