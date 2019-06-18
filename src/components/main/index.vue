<template>
  <div class="hello">
    <!-- ------轮播图 -->
    <div class="swipslider">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img class="imgs" :src="item.ImgUrl">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- ----- -->
    <div class="banner-icon">
      <div v-for="(item,index) in iconList" :key="index">
        <a href="#">
          <div class="icon-img">
            <img :src="item.ImgUrl">
          </div>
        </a>
        <div class="icon-title">{{item.ActName}}</div>
      </div>
    </div>
    <!-- ------ 3张焦点图-->
    <div class="guanggao">
      <div v-for="(item,index) in icoImgList" :key="index" @click="toShow(item)">
        <a href="#">
          <img :src="item.ImgUrl">
        </a>
      </div>
    </div>
    <!-- -----魔法猜心 -->
    <img src="https://res.bestcake.com/m-images-2/mofa.png" class="special">
    <div class="special-title" style="margin-bottom: 4.26667vw;">任选一款，走进你的心</div>
    <!-- ----- -->
    <div class="mofa-tab">
      <div
        v-for="(item,index) in tabClass"
        :key="index"
        @click="setTab(index)"
        :class="{selected:tabActive==index}"
      >{{item}}</div>
    </div>
    <div class="mofa-list">
      <div class="mofa-cake" v-for="(item,index) in activeList" :key="index" @click="toShow(item)">
        <img :src="item.ImgUrl" class="mofa-img">
        <div class="mofa-name">{{item.Name}}</div>
        <div class="mofa-price">
          <span>￥{{item.CurrentPrice}}</span>
          <span>{{item.Size}}</span>
        </div>
      </div>
    </div>
    <!-- ---- -->
    <img src="https://res.bestcake.com/m-images-2/pinzhi.png" class="special">
    <div class="special-title">没尝过这些美味的人生，是不完美的</div>
    <!-- ------品质甄选 -->
    <div class="pinzhi-list" v-for="(item,index) in goodList" :key="index">
      <div class="pinzhi-img"  @click="toShow(item)">
        <img v-lazy="item.ImgUrl">
      </div>
      <div class="pinzhi-detail">
        <div class="pinzhi-name">{{item.Name}}</div>
        <div class="pinzhi-info">{{item.MoreUrl}}</div>
        <div class="pinzhi-tip">
          <img src="https://res.bestcake.com/m-images-2/icon_zy.png">
        </div>
        <div class="pinzhi-price">
          <div>
            <span>￥{{item.CurrentPrice}}.00</span>
            <span>{{item.Size}}</span>
          </div>
        </div>
      </div>
      <div class="pinzhi-cart" @click="tianjia(item,$event)">
        <img src="https://res.bestcake.com/m-images-2/pinzhi-cart.png">
      </div>
    </div>
    <!-- ----- -->
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
    <div class="clear"></div>
    <!-- ------- -->
  </div>
</template>
<script>
import { Indicator } from "mint-ui";
export default {
  data() {
    return {
      //轮播图数据
      bannerList: [],
      //ico数据
      iconList: [],
      //3张焦点图
      icoImgList: [
        {
          name: "宠爱少女",
          key: "宠爱少女",
          ImgUrl: "https://res.bestcake.com/m-images-2/guanggao1.png?v=0419"
        },
        {
          name: "小猪蛋糕-贝利",
          key: "贝丽",
          ImgUrl: "https://res.bestcake.com/m-images-2/guangao22.png?v=0419"
        },
        {
          name: "星光游乐园",
          key: "星光游乐园",
          ImgUrl: "https://res.bestcake.com/m-images-2/guanggao3.png"
        }
      ],
      //魔法猜心所有数据
      tabList: [],
      //魔法猜心tab栏数据
      tabClass: ["送恋人", "送挚友", "送长者", "送亲子"],
      activeList: [],
      tabActive: 0,
      //品质甄选所有数据
      goodList: []
    };
  },
  mounted() {
    Indicator.open();
    this.GetBannerList(res => {
      res.forEach(item => {
        item.ImgUrl = "https://res.bestcake.com/" + item.ImgUrl;
      });
      this.bannerList = res;
      Indicator.close();
    });
    this.GetIndexCakeList(res => {
      //小图标数据
      res.iconList.forEach(icon => {
        if (icon.City.indexOf("上海") != -1) {
          this.iconList.push(icon);
        }
      });
      res.list.forEach(item => {
        if (item.TabType == 4) {
          this.tabList.push(item);
        } else {
          this.goodList.push(item);
        }
      });
      Indicator.close();
      this.setTab(0);
    });
  },
  methods: {
    toShow(item) {
      var data = {
        key: item.Name || item.key,
        c: item.SupplyNo || "NS"
      };
      this.$router.push({
        path: "/show",
        query: { key: data.key, c: data.c }
      });
      console.log(data);
    },
    //魔法猜心tab栏切换
    setTab(index) {
      var activeList = [];
      this.tabList.forEach(item => {
        if (this.tabClass[index] == item.ActiveName) {
          activeList.push(item);
        }
      });
      this.activeList = activeList.slice(0, 3);
      this.tabActive = index;
    },
    test(key) {
      console.log(key);
    },
    //轮播图接口
    GetBannerList(callback) {
      var data = {
        v: "1560239811356",
        c: "Index",
        m: "GetBannerList",
        Type: "2",
        City: "上海"
      };
      this.$apis.GetBannerList(data).then(res => {
        callback(res.data.Tag.List);
      });
    },
    //首页商品数据接口
    GetIndexCakeList(callback) {
      this.$apis.GetIndexCakeList().then(res => {
        callback(res.data.Tag);
      });
    },

    tianjia(item, e) {
      this.flay(e, item.ImgUrl);
      var data = {
        id: item.Pid,
        Name: item.Name,
        eName: "",
        num: 1,
        CurrentPrice: item.CurrentPrice,
        Size: item.Size,
        url: item.ImgUrl,
        SupplyNo:item.SupplyNo,
        to: "/details" + item.Imglink
      };
      console.log(data);
      this.$store.commit("add", data);    
    },

    flay(e, url) {
      var flyer = $(
        `<img class="flyer-img" style="width:80px;height:80px" src="${url}">`
      );
      console.log($);

      console.dir(flyer);

      var top = $(window).scrollTop();
      var dh = event.pageY;
      var newdh = dh - top;
      var oBtn = $(".foot-menu-icon").offset();
      var newh = oBtn.top - top;
      //飞到购物车位置
      flyer.fly({
        start: {
          left: event.pageX - 50, //开始位置（必填）
          top: newdh - 50 //开始位置（必填）
        },
        end: {
          left: oBtn.left+180, //结束位置（必填）
          top: newh, //结束位置（必填）
          width: 0, //结束时宽度
          height: 0 //结束时高度
        },
        onEnd: function() {
          this.destory(); //销毁抛物体
        }
      });
    }
    
  }
};
</script>
<style scoped lang="scss">
.swipslider {
  width: 100%;
  height: r(380);
}
.imgs {
  display: block;
  width: 100%;
  height: r(380);
}
.banner-icon {
  padding: 0 r(23) r(30);
  height: r(352);
  border-bottom: r(20) solid #fafafa;
}
.banner-icon > div {
  width: 23.46666666666667vw;
  float: left;
  text-align: center;
  margin-top: 3.2vw;
  font-size: 0;
}
.icon-img {
  width: 15.2vw;
  height: 15.2vw;
  display: inline-block;
  position: relative;
}
.icon-img img {
  position: absolute;
  left: 50%;
  top: 50%;
  max-width: initial !important;
  transform-origin: left top;
  transform: scale(0.5) translateX(-50%) translateY(-50%);
}
.icon-title {
  text-align: center;
  font-size: 3.2vw;
  color: #333;
}

.special {
  width: r(750);
  margin: 6.667vw 0 2.667vw;
}
.special-title {
  width: r(750);
  text-align: center;
  color: #999;
  font-size: 3.2vw;
  line-height: 4.8vw;
  margin-bottom: 8vw;
}

// -------
.mofa-tab {
  padding: 0 r(30);
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.666666666667vw;
}

.mofa-tab div.selected {
  background-image: url(https://res.bestcake.com/m-images-2/mofa-2.png);
  color: #fff;
}
.mofa-tab div {
  width: 16vw;
  height: 8.8vw;
  text-align: center;
  line-height: 7.466666666666667vw;
  font-size: 3.2vw;
  color: #333;
  background: url(https://res.bestcake.com/m-images-2/mofa-1.png) no-repeat
    center center;
  background-size: 16vw 8.8vw;
}

.mofa-list {
  width: r(680);
  padding-left: 4vw;
  padding-right: 5.333333333333333vw;
  display: flex;
  justify-content: space-between;
  border-bottom: 2.666666666666667vw solid #fafafa;
  padding-bottom: 5.333333333333333vw;
}
.mofa-list .mofa-cake {
  width: 24vw;
  position: relative;
  text-align: center;
}
.mofa-list .mofa-img {
  height: 24vw;
  max-width: initial !important;
}
.mofa-list .mofa-name {
  color: #333;
  font-size: 3.733333333333333vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mofa-price {
  width: r(180);
  height: r(50);
  span:nth-child(1) {
    display: block;
    float: left;
    height: r(42);
    width: r(74);
    color: red;
    z-index: 9999;
    font-size: 4.267vw;
  }
  span:nth-child(2) {
    display: block;
    float: right;
    height: r(42);
    width: r(102);
    color: rgb(212, 212, 212);
    z-index: 9999;
    font-size: 3.2vw;
    line-height: r(42);
  }
}
// -------
.special {
  width: r(750);
  margin: 6.667vw 0 2.667vw;
}
// -----
.pinzhi-list {
  height: 29.333vw;
  margin-bottom: 3.2vw;
  position: relative;
  padding: 0 4vw;
}
.pinzhi-img {
  width: 29.333vw;
  height: 29.333vw;
  float: left;
}
.pinzhi-img img {
  width: 100%;
  height: 100%;
}
.pinzhi-detail {
  float: left;
  margin-left: 4vw;
}
.pinzhi-detail div {
  max-width: 50vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pinzhi-name {
  font-size: 4.267vw;
  color: #333333;
  margin: 1.067vw 0 0;
}
.pinzhi-info {
  font-size: 3.2vw;
  color: #999;
  margin-bottom: 1.067vw;
}
.pinzhi-tip {
  height: 4.8vw;
  font-size: 0;
}
.pinzhi-tip img {
  height: 4.8vw;
  margin-right: 0.4vw;
}
.pinzhi-price {
  position: relative;
  top: 1vw;
  height: r(60);
  span:nth-child(1) {
    display: block;
    float: left;
    height: r(42);
    width: r(74);
    color: red;
    z-index: 9999;
    font-size: 4.267vw;
  }
  span:nth-child(2) {
    display: block;
    float: left;
    height: r(42);
    width: r(74);
    color: rgb(212, 212, 212);
    z-index: 9999;
    font-size: 3.2vw;
    line-height: r(42);
    margin-left: r(74);
  }
}
.pinzhi-cart {
  width: 11.2vw;
  height: 11.2vw;
  position: absolute;
  right: 4vw;
  bottom: 0;
}
.pinzhi-cart img {
  width: 100%;
  height: 100%;
}
// -----
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
//------
.clear {
  clear: both;
}
//-----3张焦点图
.guanggao {
  width: r(690);
  height: r(302);
  padding: 4vw;
  border-bottom: 2.666666666666667vw solid #fafafa;
  overflow: hidden;
  div:nth-child(1) {
    width: r(336);
    float: left;
    height: r(300);
    img {
      width: r(336);
      height: r(300);
    }
  }
  div:nth-child(2) {
    float: right;
    width: r(336);
    height: r(146);
    img {
      width: r(336);
      height: r(146);
    }
  }
  div:nth-child(3) {
    float: right;
    width: r(336);
    height: r(146);
    margin-top: r(7.5);
    img {
      width: r(336);
      height: r(146);
    }
  }
}
</style>
