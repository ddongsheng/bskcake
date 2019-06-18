<template>
  <div class="hello">
    <div>
      <div class="swipslider">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
            <img class="imgs" :src="item">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="m_cake_title clplr">
        <div class="information-zw">{{showData.Name}}</div>
      </div>
    </div>
    <!--蛋糕图片和名称-->
    <div class="am-u-sm-12 clplr bgw mt4">
      <div>
        <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-a">
          <div class="cake-info-left qfc">甜度</div>
          <div class="cake-info-right hfc">
            <img src="https://res.bestcake.com/m-images/ww/jz/tiandu_3.png">
          </div>
        </div>
        <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-b">
          <div class="cake-info-left qfc">口味</div>
          <div class="cake-info-right hfc">{{showData.CategoryName}}</div>
        </div>
        <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-c">
          <div class="cake-info-left qfc">原材料</div>
          <div class="cake-info-right hfc">{{showData.Resourse}}{{showData.Resource}}</div>
        </div>
        <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-d">
          <div class="cake-info-left qfc">适合人群</div>
          <div class="cake-info-right hfc">所有人群</div>
        </div>
        <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-e">
          <div class="cake-info-left qfc">保鲜条件</div>
          <div
            class="cake-info-right hfc"
          >最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月30日建议3天内食用。</div>
        </div>
      </div>
    </div>
    <!-- 商品评价 -->
    <div class="am-u-sm-12 clplr bgw mt4 p4">
      <div class="am-u-sm-6 clplr evaluate-a" align="left">
        <div class="left">
          <img src="https://res.bestcake.com/m-images/ww/detail/evaluate-a.png">
        </div>
        <div class="right">商品评价</div>
      </div>
      <div class="am-u-sm-6 clplr evaluate-b" align="right">
        <div class="left qfc">(1441条)</div>
      </div>
    </div>
    <!-- 商品磅数 -->
    <div class="am-u-sm-12 clplr bgw mt4 spbs">
      <div class="am-u-sm-12 clplr cake-size-a">
        <div
          class="li-select"
          v-for="(item,index) in sizeList"
          :key="index"
          @click="selSize(index)"
          :class="{liselected:selNum==index}"
        >
          {{item.Size}}
          <div id="app">
            <div class="purchase-c">
              <div class="purchase-c-1">{{money}}.00</div>
              <div class="purchase-c-2">
                <div class="purchase-c-2-left">已优惠：</div>
                <div class="purchase-c-2-right">0.00</div>
              </div>
            </div>
            <div class="purchase-a">
              <div>立即购买</div>
            </div>
            <div class="purchase-b">
              <div class="purchase-2" @click="add">加入购物车</div>
            </div>
          </div>
        </div>
      </div>
      <div class="am-u-sm-12 clplr cake-size-b">
        <div class="am-u-sm-6 clplr doc-icon-custom-1">
          <div class="left">
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png">
          </div>
          <div class="right">13.5*13.5cm</div>
        </div>
        <div class="am-u-sm-6 clplr doc-icon-custom-2">
          <div class="left">
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png">
          </div>
          <div class="right">适合4-5人分享</div>
        </div>
        <div class="am-u-sm-6 clplr doc-icon-custom-3">
          <div class="left">
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png">
          </div>
          <div class="right">含五人份餐具</div>
        </div>
        <div class="am-u-sm-6 clplr doc-icon-custom-4">
          <div class="left">
            <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png">
          </div>
          <div class="right">至少需提前一天预约</div>
        </div>
      </div>
    </div>
    <!-- 商品购买数量 -->
    <div class="am-u-sm-12 clplr bgw mt4 p4">
      <div class="am-u-sm-6 clplr amount-a">购买数量</div>
      <div class="am-u-sm-6 clplr amount-b">
        <span>+</span>
        <span>1</span>
        <span>-</span>
      </div>
    </div>
    <!-- -----底部 -->
    <div class="clear"></div>
    <div class="jg-gonggao">
      <div class="jg-gonggao1">
        <div class="jg-text-z">划线价格</div>
        <div class="jg-text-y">商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参考。</div>
      </div>
      <div class="jg-gonggao1">
        <div class="jg-text-z">未划线价格</div>
        <div class="jg-text-y">商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。</div>
      </div>
    </div>

    <!-- ------ -->
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      bannerList: [],
      goods: {},
      sizeList: [],
      showData: {},
      money:{},
      selNum: 0
    };
  },
  mounted() {
    this.pageInit();
    // this.selSize(this.sizeList.CurrentPrice, 0);
  },
  methods: {
    pageInit() {
      //不同前缀不同数据
      if (this.$route.query.c.indexOf("NS") != -1) {
        this.GetNSCakeByName(res => {
          this.goods = res;
        });
        this.setBannerList("ns-detail");
      } else if (this.$route.query.c.indexOf("KSK") != -1) {
        this.GetCakeByName(res => {
          this.goods = res;
        });
        this.setBannerList("jd-detail");
      } else if (this.$route.query.c.indexOf("RP") != -1) {
        this.GetRuPCakeByName(res => {
          this.goods = res;
        });
        this.setBannerList("rp-detail");
      } else {
        this.GetjzCakeInfo(res => {
          this.goods = res;
        });
        this.setBannerList("jz-detail");
      }
    },

    setBannerList(path) {
      //  星光游乐园/星光游乐园-1.jpg
      for (var i = 0; i < 4; i++) {
        // https://res.bestcake.com/m-images/ns-detail/星光游乐园/星光游乐园-1.jpg
        // https://res.bestcake.com/m-images/jd-detail/奥利奥雪域牛乳芝士/奥利奥雪域牛乳芝士-1.jpg
        // https://res.bestcake.com/m-images/rp-detail/奥利奥雪域牛乳芝士/奥利奥雪域牛乳芝士-1.jpg

        var str = `https://res.bestcake.com/m-images/${path}/${
          this.$route.query.key
        }/${this.$route.query.key}-${i + 1}.jpg`;
        this.bannerList.push(str);
      }
      console.log(this.bannerList[0]);
      // this.showData.push(this.bannerList[0])
      //console.log(this.showData);
    },
    // 焦点图详情接口 NS
    GetNSCakeByName(callback) {
      var data = {
        Name: this.$route.query.key
      };
      this.$apis.GetNSCakeByName(data).then(res => {
        callback(res);
      });
    },
    //商品详情接口 RP
    GetRuPCakeByName(callback) {
      var data = {
        Name: this.$route.query.key
      };
      this.$apis.GetRuPCakeByName(data).then(res => {
        callback(res);
      });
    },
    //商品详情接口 KSK
    GetCakeByName(callback) {
      var data = {
        ProName: this.$route.query.key
      };
      this.$apis.GetCakeByName(data).then(res => {
        callback(res);
      });
    },
    //商品详情接口 JZ
    GetjzCakeInfo(callback) {
      var data = {
        ProName: this.$route.query.key
      };
      this.$apis.GetjzCakeInfo(data).then(res => {
        callback(res);
      });
    },
    selSize(index) {
      this.selNum = index;
      this.money=this.sizeList[this.selNum].CurrentPrice;
      console.log(index)
      console.log(this.sizeList[this.selNum].CurrentPrice);
    },
    // -----
    add() {
      var data = {
        id: this.sizeList[this.selNum].ID || this.sizeList[this.selNum].Id, //产品ID
        Name: this.showData.Name, //产品详情图片拼接,//贝利
        CurrentPrice: this.sizeList[this.selNum].CurrentPrice, //产品价格
        Size: this.sizeList[this.selNum].Size, //产品规格
        url: this.bannerList[0], //产品购物车显示图片
        SupplyNo: this.sizeList[this.selNum].SupplyNo //产品货号类型
      };
      this.$store.commit("add", data);
      MessageBox.confirm("加入购物车成功").then(action => {
        this.$router.push({
          path: "/cart",
          query: data
        });
      });
    }
  },
  watch: {
    goods: {
      handler() {
        var city = "上海";
        if (this.goods.data.Tag.length) {
          // console.log(this.goods.data.Tag);
          this.goods.data.Tag.forEach(item => {
            if (city == item.City) {
              this.sizeList.push(item);
            }
          });
          this.showData = this.sizeList[0];
          this.money=this.sizeList[0].CurrentPrice;
        } else {
          this.sizeList = this.goods.data.Tag.infos.CakeType;
          // console.log(this.goods.data.Tag.infos.CakeType)
          this.showData = this.goods.data.Tag.infos;
          this.money=JSON.parse(this.sizeList[0].CurrentPrice);
        }
        console.log(this.sizeList);
        console.log(this.showData);
        console.log(this.money);
        // this.sizeList  规格分类
        // this.showData  详情数据
        // console.log( this.sizeList)

        // console.log(this.goods.data.Tag)
        // console.log(this.sizeList);
      },
      deep: true
    }
  }
};
</script>







<style scoped lang="scss">
.swipslider {
  width: 100%;
  height: r(890);
  .imgs {
    display: block;
    width: 100%;
    height: r(890);
  }
}
.m_cake_title {
  width: r(436);
  height: r(122);
  margin: 0 auto;
  .information-zw {
    line-height: r(32);
    font-size: r(32);
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: r(30);
    margin-top: r(15);
    height: r(32);
  }
}
.bgw {
  background: white;
  height: r(556);
}
.mt4 {
  margin-top: r(30);
}
.cake-info-datum-list {
  clear: both;
  .cake-info-left {
    font-size: 3.73vw;
    float: left;
    width: r(120);
    margin-left: r(30);
  }
  .cake-info-right {
    font-size: 3.73vw;
    float: left;
    width: r(540);
    margin-left: r(30);
    margin-right: r(30);
    img {
      vertical-align: top;
      width: r(168);
      margin-top: r(5);
    }
  }
}
.cake-info-datum-a {
  height: r(44);
  margin-top: r(68);
  margin-bottom: r(22);
}
.cake-info-datum-b {
  height: r(44);
  margin-bottom: r(30);
}
.cake-info-datum-c {
  height: r(88);
  margin-bottom: r(30);
}
.cake-info-datum-d {
  height: r(44);
  margin-bottom: r(30);
}
.cake-info-datum-e {
  height: r(88);
  margin-bottom: r(30);
}
.qfc {
  color: #9a9a9a;
}
.hfc {
  color: #252525;
}
.p4 {
  padding: r(30) 0;
  height: r(44);
}
.evaluate-a {
  padding-left: r(30);
  width: r(344);
  height: r(44);
  float: left;
  .left {
    float: left;
    margin-top: r(9);
    margin-right: r(20);
    width: 12%;
    font-size: 3.73vw;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  .right {
    float: left;
    font-size: 3.73vw;
  }
}
.evaluate-b {
  width: r(344);
  padding-right: r(30);
  height: r(44);
  float: right;
  .left {
    float: right;
    font-size: 3.73vw;
  }
}
// ----商品磅数
.spbs {
  height: r(390);
}
.cake-size-a {
  margin-top: r(60);
  height: r(60);
  .liselected {
    background: #02d3d6;
    border-radius: 2px;
    color: #fff;
    border: 1px solid #02d3d6;
  }
  .li-select {
    float: left;
    font-size: 3.73vw;
    text-align: center;
    line-height: 8vw;
    padding: 0 3.5875vw;
    height: 8vw;
    margin-left: 4vw;
    border-radius: 2px;
    color: #333;
    border: 1px solid #ddd;
  }
}
.cake-size-b {
  margin-top: r(84);
  height: r(186);
  float: right;
}
.doc-icon-custom-1 {
  margin-bottom: r(30);
  height: r(48);
  float: left;
  .left {
    float: left;
    width: 12%;
    margin-right: 2.66vw;
    margin-left: 4vw;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  .right {
    float: left;
    line-height: 6.5vw;
    font-size: 3.73vw;
  }
}
.doc-icon-custom-2 {
  float: right;
  margin-bottom: r(30);
  height: r(48);
  .left {
    float: left;
    width: 12%;
    margin-right: 2.66vw;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  .right {
    float: left;
    line-height: 6.5vw;
    font-size: 3.73vw;
  }
}
.doc-icon-custom-3 {
  float: left;
  margin-bottom: r(60);
  height: r(48);
  .left {
    float: left;
    width: 12%;
    margin-right: 2.66vw;
    margin-left: 4vw;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  .right {
    float: left;
    line-height: 6.5vw;
    font-size: 3.73vw;
  }
}
.doc-icon-custom-4 {
  float: right;
  margin-bottom: r(60);
  height: r(48);
  .left {
    float: left;
    width: 12%;
    margin-right: 2.66vw;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  .right {
    float: left;
    line-height: 6.5vw;
    font-size: 3.73vw;
  }
}
// ----购买数量
.amount-a {
  width: r(344);
  float: left;
  padding-left: 4vw;
}
.amount-b {
  float: right;
  width: r(344);
  padding-right: 4vw;
  height: r(40);
  span {
    float: right;
    line-height: r(40);
  }
}

// ----底部
.jg-gonggao {
  padding: 2vw 0;
  height: r(368);
  margin-bottom: r(86);
}
.jg-gonggao1 {
  margin: 0 4vw;
  font-size: 3.734vw;
  margin-bottom: 4vw;
  height: r(132);
}
.jg-text-z {
  float: left;
  width: 27vw;
  color: #181818;
}
.jg-text-y {
  float: left;
  width: 65vw;
  color: #a2a2a2;
}
.clear {
  clear: both;
}
// ------
#app {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  height: r(110);
  margin-top: r(30);
  background: #fff;
}
.purchase-c {
  float: left;
  margin-left: 4vw;
  margin-top: 1.4492vw;
  margin-bottom: 2.4vw;
  width: 36vw;
  overflow: hidden;
  height: r(92);
}
.purchase-c-1 {
  font-size: 4.53vw;
  color: #f2495e;
  font-weight: bolder;
  width: 36vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: r(40);
  text-align: left;
}
.purchase-c-2-left {
  float: left;
  font-size: 2.4vw;
  color: #333;
}
.purchase-c-2-right {
  float: left;
  font-size: 2.4vw;
  color: #333;
  font-weight: bolder;
}
.purchase-a {
  float: right;
  width: 30.667vw;
  height: r(50);
  text-align: center;
  padding: 4.3478vw 0;
  background: #02d4d7;
  color: white;
  font-weight: bolder;
}
.purchase-b {
  float: right;
  width: r(220);
  height: r(50);
  text-align: center;
  padding: 4.3478vw 0;
}
.purchase-2 {
  text-align: center;
  font-size: r(32);
}
</style>
