<template>
  <div class="hello">
    <div class="main-login" v-if="loginNum==0">
      <div class="login-title">
        <div class="btn">
          <label class="back" @click="back"></label>
        </div>
      </div>
      <div class="denglu">
        <div class="login-top">登录</div>
        <div class="yhm">用户名</div>
        <input type="text" class="login-num" v-model="uname">
        <div class="mima">密码</div>
        <input type="password" class="login-num" v-model="upwd">
        <div class="user-btn">
          <div class="change-login" @click="login">登录</div>
          <div class="change-register" @click="register">注册</div>
        </div>
      </div>
    </div>
    <div v-if="loginNum==1">
      <div class="am-g clplr">
        <!--第一块头像内容-->
        <!--ng-click="showH5Login('/ww/user-info.html')" 取消掉进入会员专享-->
        <div class="am-u-sm-12 clplr person-tx-1">
          <div class="am-u-sm-12 clplr person-tx-2" align="center" @click="goinfo">
            <img
              ng-src="https://res.bestcake.com/m-images/order/mw-person-tx.png"
              src="https://res.bestcake.com/m-images/order/mw-person-tx.png"
            >
          </div>
          <div class="am-u-sm-12 clplr person-tx-3 ng-binding" align="center">{{userInfo.username}}</div>
        </div>
        <!--第二块列表部分-->
        <div class="am-u-sm-12 clplr person-vip">
          <div class="am-u-sm-3 clplr">
            <div class="am-u-sm-12 clplr person-vip-1" align="center">会员等级</div>
            <div class="am-u-sm-12 clplr person-vip-2 ng-binding" align="center">V0</div>
          </div>
          <div class="am-u-sm-3 clplr">
            <div class="am-u-sm-12 clplr person-vip-1" align="center">吉致币</div>
            <div class="am-u-sm-12 clplr person-vip-2 ng-binding" align="center">0</div>
          </div>
          <div class="am-u-sm-3 clplr">
            <div class="am-u-sm-12 clplr person-vip-1" align="center">优惠券</div>
            <div class="am-u-sm-12 clplr person-vip-2 ng-binding" align="center">0</div>
          </div>
          <div class="am-u-sm-3 clplr">
            <div class="am-u-sm-12 clplr person-vip-1" align="center">兑换券</div>
            <div class="am-u-sm-12 clplr person-vip-2 ng-binding" align="center">0</div>
          </div>
        </div>
        <!--第三块我的订单-->
        <div class="am-u-sm-12 clplr person-dd">
          <div class="person-dd-1">
            <div class="person-dd-2">
              <img src="https://res.bestcake.com\m-images\order\mw-person-dd.png">
            </div>
            <div class="person-dd-3">我的订单</div>
            <div class="person-dd-4 person-dd-5" style>
              <img src="https://res.bestcake.com\m-images\order\mw_firm_right.jpg">
            </div>
          </div>
          <div class="personclear"></div>
          <div class="person-dd-1">
            <div class="person-dd-2">
              <img src="https://res.bestcake.com\m-images\order\mw_firm_ad.jpg">
            </div>
            <div class="person-dd-3">收货地址</div>
            <div class="person-dd-4 person-dd-5" style>
              <img src="https://res.bestcake.com\m-images\order\mw_firm_right.jpg">
            </div>
          </div>
        </div>
        <!--第四块客服热线-->
        <div class="am-u-sm-12 clplr person-rx-1" align="center">
          <a href="#" style="    color: #999;">客服热线：400-627-5757</a>
        </div>
        <!--第五块证照信息-->
        <div class="am-u-sm-12 clplr person-rx-2" align="center">
          <a href="#" style=" color: #999;">服务协议与证照信息</a>
        </div>
      </div>
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
  mounted() {
    this.pageInit();
  },
  methods: {
    pageInit() {
      if (!Store.get("userInfo")) {
        this.loginNum = 0;
      } else {
        this.userInfo = Store.get("userInfo");
        this.loginNum = 1;
      }
    },
    login() {
      var data = {
        uname: this.uname,
        upwd: this.upwd
      };
      this.$apis.login(data).then(res => {
        if (res.data.code == 0) {
          Toast({
            message: "账号或密码错误",
            position: "bottom",
            duration: 5000
          });
          console.log("ok11");
        } else if (res.data.code == 1) {
          alert("登录成功");
          this.loginNum = 1;
          this.userInfo = res.data.data;
          Store.set("userInfo", this.userInfo);
        } else {
          Toast({
            message: res.data.msg,
            position: "bottom",
            duration: 5000
          });
          console.log(res.data.msg);
        }
      });
    },
    register() {
      this.$router.push({
        path: "/edit"
      });
    },
    back() {
      this.$router.push({
        path: "/index"
      });
    },
    goinfo(){
       this.$router.push({
        path: "/userinfo"
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
    left: -0.667vw;
    top: r(-128);
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
.user-btn {
  display: flex;
  margin-top: r(200);
}
.change-login {
  text-align: center;
  width: 33.067vw;
  height: 12.533vw;
  line-height: 12.533vw;
  border-radius: 4.267vw;
  border: 1px solid #fff;
  color: #fff;
  flex: 1;
  font-size: 8.533vw;
}
.change-register {
  text-align: center;
  width: 33.067vw;
  height: 12.533vw;
  line-height: 12.533vw;
  border-radius: 4.267vw;
  border: 1px solid #fff;
  color: #fff;
  flex: 1;
  font-size: 8.533vw;
}

// -----用户详情页
.am-g {
  margin: 0 auto;
  width: 100%;
}
.person-tx-1 {
  background: #fff;
}
.person-tx-2 {
  padding-top: 6.66vw;
  img {
    width: 21.06vw;
    border-radius: 50%;
  }
}
.person-tx-3 {
  padding-top: 1.33vw;
  line-height: 5.33vw;
  font-size: 3.73vw;
  color: #333;
}
.person-vip {
  padding-top: 8.66vw;
  background: #fff;
  padding-bottom: 4vw;
  display: flex;
}
.person-vip-1 {
  line-height: 4vw;
  font-size: 2.93vw;
  color: #ccc;
  flex: 1;
}
.person-vip-2 {
  padding-top: 1.73vw;
  line-height: 5.73vw;
  font-size: 4.8vw;
  color: #333;
  flex: 1;
}
.person-dd {
  margin-top: 4vw;
  background: #fff;
  height: r(220);
}
.person-dd-1 {
  float: left;
  width: 100%;
}
.person-dd-1 div {
  float: left;
}
.person-dd-2 {
  padding-left: 4vw;
  padding-top: 3.38vw;
  padding-bottom: 4vw;
}
.person-dd-2 img {
  width: 4vw;
}
.person-dd-3 {
  padding-left: 2.66vw;
  padding-top: 3.86vw;
  padding-bottom: 3.86vw;
  font-size: 0.4rem;
}
.person-dd-1 .person-dd-5 {
  float: right;
  margin-right: 4vw;
}
.person-dd-4 {
  padding-top: 3.86vw;
}
.person-dd-4 img {
  width: 2.4vw;
}
.person-rx-1 {
  margin-top: 35.73vw;
  line-height: 4vw;
  color: #999;
  font-size: 2.93vw;
  a {
    text-decoration: none;
  }
}
.person-rx-2 {
  margin-top: 10vw;
  line-height: 4vw;
  color: #999;
  font-size: 2.93vw;
  a {
    text-decoration: none;
  }
}
</style>


