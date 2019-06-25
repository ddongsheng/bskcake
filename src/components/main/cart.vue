<template>
  <div class="hello">
    <div class="am-u-sm-12 clplr gwc-gg-2" style="display:none">购物车是空的哦~</div>
    <div
      class="am-u-sm-12 clplr left ng-scope"
      style="margin-bottom: 4vw; background: #fff;"
      v-for="(item,index) in cartList"
      :key="index"
    >
      <div class="am-u-sm-12 clplr gwc-yh" style="padding-bottom: 4.26vw;">
        <div class="am-u-sm-12 clplr gwc-yh-1">
          <div
            class="gwc-yh-2"
            align="center"
            ng-touchend="checkChange(obj)"
            style="float: left; margin-left: 4vw; margin-right: 3vw;"
          >
            <input type="checkbox" v-model="item.bool" @click="setSel">
          </div>
          <div class="gwc-yh-3" style="float: left;">
            <div class="gwc-yh-4" style="float: left; margin-right: 4vw;">
              <a href="#">
                <img :src="item.url">
              </a>
            </div>
          </div>
          <div class="gwc-yh-3-a" style="float: left; width: 52vw;">
            <div class="gwc-yh-bl ng-binding"></div>
            <div class="gwc-yh-bl ng-binding">{{item.Name}}</div>
            <div class="am-u-sm-12 clplr gwc-yh-56">
              <div class="am-u-sm-6 clplr gwc-yh-5 ng-binding" style="float:left">{{item.Size}}</div>
              <div class="am-u-sm-6 clplr gwc-yh-6 gwc-jjh">
                <div class="am-u-sm-4 clplr" align="right" style="flex:1">
                  <a @click="jian(item)">
                    <img src="https://res.bestcake.com\m-images\order\reduce-1.png">
                  </a>
                </div>
                <div class="am-u-sm-4 clplr" align="center" style="flex:1">
                  <span class="ng-binding">{{item.num}}</span>
                </div>
                <div class="am-u-sm-4 clplr jiahao" align="left" style="flex:1">
                  <a @click="jia(item)">
                    <img src="https://res.bestcake.com\m-images\order\add.png">
                  </a>
                </div>
              </div>
            </div>
            <!--<div class="am-u-sm-12 clplr gwc-fz1">餐具套装1套</div>-->
            <div class="am-u-sm-12 clplr gwc-fz2">
              <div class="am-u-sm-3 clplr ng-binding">{{item.num*item.CurrentPrice}}.00</div>
            </div>
          </div>
        </div>
      </div>
      <!--优惠方式-->
      <div class="am-u-sm-12 clplr gwc-lz-1" style="padding-left:12.33vw;">
        <div class="am-u-sm-12 clplr" style="border-bottom: 0.133vw solid #ddd;"></div>
        <div class="gwc-bir-1" style="color: #f2495e;margin-right: 1.333vw;font-weight: bold;">优惠方式</div>
        <div class="gwc-bir-1 ng-binding" style="color: #333;">不参与活动</div>
      </div>
    </div>
    <!--第二部分第二块-->
    <div class="am-u-sm-12 clplr tuijian">
      <!--HOT Recommend内容  -->
      <div class="am-u-sm-12 clplr gwc-hr" align="center">
        <div
          class="am-u-sm-12 clplr"
          style="line-height: 7.46vw; color: #333; font-weight: bold; font-size: 6.4vw;"
        >Hot&nbsp; Recommend</div>
        <div
          class="am-u-sm-12 clplr gwc-hr-1"
          style="padding-left: 0.3vw; padding-bottom: 2vw; padding-top: 2vw;"
        >
          <div class="am-u-sm-12 clplr gwc-hr-2"></div>
        </div>
        <div
          class="am-u-sm-12 clplr"
          style="line-height: 4vw; color: #333; font-weight: bold; font-size: 4vw;"
        >热销新品推荐</div>
      </div>
      <!--蛋糕列表内容-->
      <div class="am-u-sm-12 clplr gwc-cake" style="padding-bottom: 22.66vw;">
        <div class="am-u-sm-12 clplr hotli">
          <div class="am-u-sm-6 clplr gwc-cake-1" style="padding-right: 1.73vw;">
            <div class="am-u-sm-12 clplr gwc-cake-2">
              <a href="#">
                <img src="https://res.bestcake.com\m-images\cart\mw_firm_sq.jpg">
              </a>
            </div>
            <div class="am-u-sm-12 clplr gwc-cake-3">伴手礼系列-吉致生巧</div>
            <div class="am-u-sm-12 clplr">
              <div
                class="am-u-sm-10 clplr gwc-cake-5"
                style="font-size: 3.46vw; color: #333; line-height: 3.46vw;"
              >
                <a style="font-size: 3.46vw; color: #333;font-weight: bold;">168.00</a>/1盒
              </div>
              <div class="am-u-sm-2 clplr gwc-cake-4">
                <img src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg">
              </div>
            </div>
          </div>
          <div class="am-u-sm-6 clplr gwc-cake-1" style="padding-right: 1.73vw;">
            <div class="am-u-sm-12 clplr gwc-cake-2">
              <a href="#">
                <img src="https://res.bestcake.com\m-images\cart\mw_firm_nzt_v1.jpg">
              </a>
            </div>
            <div class="am-u-sm-12 clplr gwc-cake-3">伴手礼系列-吉致牛轧糖</div>
            <div class="am-u-sm-12 clplr">
              <div
                class="am-u-sm-10 clplr gwc-cake-5"
                style="font-size: 3.46vw; color: #333; line-height: 3.46vw;"
              >
                <a style="font-size: 3.46vw; color: #333;font-weight: bold;">68.00</a>/16粒装
              </div>
              <div class="am-u-sm-2 clplr gwc-cake-4">
                <img src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg">
              </div>
            </div>
          </div>
          <div class="am-u-sm-6 clplr gwc-cake-1" style="padding-right: 1.73vw;">
            <div class="am-u-sm-12 clplr gwc-cake-2">
              <a href="#">
                <img src="https://res.bestcake.com\m-images\cart\mw_firm_pf_v1.jpg">
              </a>
            </div>
            <div class="am-u-sm-12 clplr gwc-cake-3">伴手礼系列-吉致泡芙</div>
            <div class="am-u-sm-12 clplr">
              <div
                class="am-u-sm-10 clplr gwc-cake-5"
                style="font-size: 3.46vw; color: #333; line-height: 3.46vw;"
              >
                <a style="font-size: 3.46vw; color: #333;font-weight: bold;">88.00</a>/0.8磅
              </div>
              <div class="am-u-sm-2 clplr gwc-cake-4">
                <img src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--结算内容-->
      <div class="am-u-sm-12 clplr gwc-js">
        <div class="clplr gwc-js-1">
          <img src="https://res.bestcake.com/m-images/order/mw_firm_duihao_2.jpg" alt>
        </div>
        <div class="clplr gwc-js-2">
          <input type="checkbox" @click="setAllsel" v-model="allSel">全选
        </div>
        <div class="clplr gwc-js-3">
          <a @click="clears">清空</a>
        </div>
        <div class="clplr gwc-js-5">
          <div class="clplr gwc-js-6">
            <div class="clplr" style="float: left; width: 38vw; text-align: right;">
              <div class="clplr gwc-js-7 ng-binding" style="float: right; padding-right: 4vw;"></div>
              <div style="font-size: 2.9333vw;">合计：{{allPrice}}</div>
            </div>
            <!-- <div class=" clplr gwc-js-7" align="right">564.00</div>-->
          </div>
          <div style="clear: both;"></div>
          <div class="clplr">
            <div class="clplr" style="float: left; width: 38vw; text-align: right;">
              <div class="clplr gwc-js-8" style="float: right; padding-right: 4vw;">0.00</div>
              <div style="font-size: 2.4vw;">已优惠：</div>
            </div>
          </div>
        </div>
        <div class="clplr gwc-js-4" align="center">
          <a>结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var vm = "";
import Store from "storejs";
export default {
  data() {
    return {
      cartList: [],
      selList: [],
      allSel: false
    };
  },
  mounted() {
    vm = this;
    vm.pageInit();
  },
  methods: {
    pageInit() {
      var cartList = Store.get("cartList");
      console.log(cartList);
      if (cartList) {
        cartList.map(item => {
          item.bool = false;
        });
      }

      this.cartList = cartList;
    },
    setSel() {
      // console.log(this.cartList); // 0 bool true 1 bool false
      var selList = [];
      setTimeout(() => {
        // 函数执行时异步
        this.cartList.map(item => {
          console.log(item.bool);
          if (item.bool) {
            selList.push(item);
          }
        });
        // vue.$set()
        this.selList = selList;
      }, 80);
    },
    setAllsel() {
      var setalllist = [];
      this.cartList.forEach(item => {
        // console.log(item);
        if (this.allSel == false) {
          item.bool = true;
          setalllist.push(item);
        } else {
          item.bool = false;
        }
      });
      this.selList = setalllist;
    },
    jia(item) {
      // console.log(item);

      item.num++;
    },
    jian(item) {
      item.num--;
      if (item.num == 0) {
        item.num = 1;
      }
    },
    clears() {
      var nolist = [];
      setTimeout(() => {
        this.cartList.forEach(item => {
          if (item.bool == false) {
            nolist.push(item);
          } else {
            nolist = [];
            this.$store.state.shopCart["N"] = 0;
            this.pageInit();
          }
        });
        console.log(nolist);
        this.cartList = nolist;
        Store.set("cartList", nolist);
      }, 80);
    }
  },
  computed: {
    //  computed 要在视图进行调用一波
    allPrice() {
      var num = 0;
      this.selList.map(item => {
        //console.log(item.bool);
        num += item.num * item.CurrentPrice;
      });
      if (this.cartList) {
        if (this.selList.length == this.cartList.length) {
          this.allSel = true;
        } else {
          this.allSel = false;
        }
      }

      return num;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hotli {
  height: r(1014);
}
.gwc-gg-2 {
  height: r(120);
  line-height: 16vw;
  color: #141414;
  font-size: 3.2vw;
  background: #fff;
  text-align: center;
}

.tuijian {
  width: r(722);
  padding-top: r(129);
  padding-left: r(27);
}
.gwc-hr {
  margin-bottom: r(90);
}
.gwc-hr-1 {
  width: r(554);
}
.gwc-hr-2 {
  width: 52.3vw;
  height: r(4);
  background: #333;
}
.gwc-cake-1 {
  width: r(348);
  height: r(444);
  padding-bottom: 8.26vw;
  float: left;
}
.gwc-cake-2 {
  img {
    width: r(330);
    height: r(330);
  }
}
.gwc-cake-3 {
  line-height: 5.33vw;
  font-size: 3.73vw;
  color: #333;
  margin-bottom: 2.4vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 1.2vw;
  font-weight: bold;
}
.gwc-cake-4 {
  float: right;
  img {
    width: r(42);
    height: r(42);
  }
}
.gwc-cake-5 {
  float: left;
}
.gwc-js {
  background: #fff;
  position: fixed;
  right: 0;
  bottom: 11.333vw;
  height: r(112);
}
.gwc-js-1 {
  float: left;
  margin-left: 3vw;
  margin-right: 1.33vw;
  img {
    width: 5.33vw;
    margin-top: 4.34vw;
  }
}
.gwc-js-2 {
  padding-top: 4.53vw;
  padding-bottom: 4.53vw;
  font-size: 4vw;
  color: #333;
  line-height: 5.6vw;
  float: left;
  width: 13vw;
  text-align: center;
}
.gwc-js-3 {
  a {
    padding-top: 4.93vw;
    font-size: 3.46vw;
    color: #333;
    line-height: 4.93vw;
    float: left;
    width: 8.06vw;
    text-align: center;
    margin-right: 0.12vw;
  }
}
.gwc-js-5 {
  float: left;
  margin-top: 2.53vw;
  margin-right: 1.74vw;
  width: 36.67vw;
}
.gwc-js-6 {
  width: 41vw;
  line-height: 6.4vw;
}
.gwc-js-7 {
  float: left;
  font-size: 4.8vw;
  color: #f2495e;
  font-weight: bold;
  padding-right: 1vw;
}
.gwc-js-8 {
  float: left;
  font-size: 2.4vw;
  font-weight: bold;
  color: #333;
  padding-right: 1vw;
}
.gwc-js-4 {
  float: left;
  a {
    display: block;
    width: 30.66vw;
    line-height: 15vw;
    background: #02d4d7;
    color: #fff;
    font-weight: bolder;
    font-size: r(32);
  }
}
.gwc-yh {
  height: r(242);
}
.gwc-yh-2 {
  width: 5.33vw;
  margin-top: 17vw;
}
.gwc-yh-4 {
  padding-top: 4.26vw;
  height: r(200);
}
.gwc-yh-4 img {
  width: 30.4vw;
}
.gwc-yh-3-a {
  padding-top: 5.06vw;
}
.gwc-yh-3-a .gwc-yh-bl {
  font-size: 4.26vw;
  color: #000;
  line-height: 5.06vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 49vw;
}
.gwc-yh-56 {
  margin: 1.2vw 0;
  height: r(50);
}
.gwc-yh-5 {
  line-height: 3.46vw;
  height: 3.46vw;
  font-size: 2.93vw;
  color: #ccc;
  line-height: 3.46vw;
  margin-top: 1.69vw;
  width: r(160);
}
.gwc-yh-6 {
  float: right;
  height: r(50);
  width: r(160);
  display: flex;
  margin-top: 1.69vw;
}
.gwc-jjh div a {
  color: #333;
  font-weight: bold;
  display: block;
  width: 6vw;
  line-height: 6vw;
  text-align: center;
}
.gwc-jjh div a img {
  width: 2.67vw;
}
.gwc-jjh span {
  display: block;
  margin: 0 auto;
  color: #333;
}
.gwc-fz2 {
  font-size: 3.46vw;
  color: #030303;
  font-weight: bold;
  line-height: 4vw;
  margin-top: 2.66vw;
}
.gwc-lz-1 {
  width: r(656);
  height: r(96);
}
.gwc-bir-1 {
  line-height: 5.33vw;
  margin-top: 3.86vw;
  margin-bottom: 3.86vw;
  font-size: 3.73vw;
}
.gwc-lz-1 .gwc-bir-1 {
  float: left;
}
</style>


