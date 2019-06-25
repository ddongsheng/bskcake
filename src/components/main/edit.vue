<template>
  <div class="hello">
    <div class="main-login">
      <div class="login-title">
        <div class="btn">
          <label class="back" @click="back"></label>
        </div>
      </div>
      <div class="login-top">注册</div>
      <div class="denglu">
        <div class="yhm">用户名</div>
        <input type="text" class="login-num" v-model="uname">
        <div class="mima">密码</div>
        <input type="password" class="login-num" v-model="upwd">
      </div>
      <div class="change-login" @click="edit">注册</div>
    </div>
  </div>
</template>

<script>
import Store from "storejs";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      loginNum: 0,
      uname: "",
      upwd: "",
      userInfo: {}
    };
  },
  mounted() {},
  methods: {
    edit() {
      var data = {
        id: Math.random() * 500,
        username: this.uname,
        password: this.upwd,
        avatar: "https://avatars0.githubusercontent.com/u/22588905?v=4&s=120"
      };
      this.$apis.edit(data).then(res => {
        console.log(res);

        if (res.data.code == 1) {
          console.log(res.data.msg);
          this.$router.push({
            path: "/user"
          });
        } else if (res.data.code == 0) {
           console.log(res.data.msg);
          Toast({
            message: res.data.msg,
            position: "bottom",
            duration: 1000
          });
        }
      });
    },
    back() {
      this.$router.push({
        path: "/user"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.main-login {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(54, 209, 220, 1);
  z-index: 100001;
  .login-top {
    color: #fff;
    font-size: 8.533vw;
    position: absolute;
    line-height: 12vw;
    left: 5.333vw;
    top: 10.667vw;
  }
}
.login-title {
  width: 100%;
  height: 11.2vw;
  line-height: 11.2vw;
  color: #fff;
  font-size: 4.267vw;
  position: relative;
  .btn {
    position: absolute;
    width: 10vw;
    height: 100%;
  }
  .back {
    position: absolute;
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    top: 50%;
    margin-top: -0.3rem;
    left: 4vw;
    border-left: 0.2rem solid;
    border-bottom: 0.2rem solid;
    transform: rotate(45deg);
    line-height: 11.2vw;
    color: #fff;
    text-align: center;
  }
}
.yhm {
  margin-top: r(200);
  color: rgb(255, 255, 255);
  font-size: 3.733vw;
  line-height: 5.333vw;
}
.mima {
  color: rgb(255, 255, 255);
  font-size: 3.733vw;
  line-height: 5.333vw;
}
input {
  background: none;
  color: #fff;
  border-bottom-color: #fff;
  border-radius: 0;
}
.login-num {
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  outline: 0px;
  height: 11.2vw;
  font-size: 4.6vw;
}
.denglu {
  width: 89.333vw;
  height: 43.48vw;
  margin: 12.333vw auto;
  position: relative;
}
.change-login {
  text-align: center;
  width: 33.067vw;
  height: 12.533vw;
  line-height: 12.533vw;
  border-radius: 4.267vw;
  border: 1px solid #fff;
  color: #fff;
  margin: 0 auto;
  font-size: 8.533vw;
}
</style>


