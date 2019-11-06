<template>
  <div class="message">
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
      <p @click="modify">修改信息</p>
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
  methods: {
    modify: function() {
      this.info.currentComponent = "preStorage";
    }
  }
};
</script>

<style scoped>
.message {
  width: 6.9rem;
  height: 4.55rem;
  border-radius: 0.1rem;
  border: 0.02rem solid #073b79;
  background-color: #fbfdff;
  margin-top: 2.5rem;
  box-sizing: border-box;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
}
.message h2 {
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
  margin-left: 0.24rem;
  letter-spacing: 0.03rem;
}
input::placeholder {
  color: #6989af;
}
.ticket input {
  width: 3rem;
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