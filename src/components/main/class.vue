<template>
  <div class="hello">
    <div class="new-list">
      <div class="list-tabs">
        <div class="list-tabs-a active" @click="active=1">自营</div>
        <div class="list-tabs-b" @click="two">贝式严选</div>
      </div>
      <div class="zy-list" v-show="active==1">
        <div class="list-classify">
          <div
            class="list-classify-a"
            v-for="(item,index) in one"
            :key="index"
            @click="optionData(item.mark)"
          >{{item.name}}</div>
        </div>
        <div class="list-product">
          <div class="list-product-tab" v-for="(item,index) in activeList" :key="index">
            <a href="#">
              <div class="list-product-a">
                <img :src="item.ImgUrl" class="am-img-responsive" @click="toShow(item)">
              </div>
            </a>
            <div class="list-product-b">
              <span>{{item.Name}}</span>
            </div>
            <div class="list-product-c">
              <span>{{item.Means}}</span>
            </div>
            <div class="list-product-d">
              <span style="color: rgb(255, 51, 0); font-size: 3.2vw; padding-left: 2vw;">￥</span>
              <span style="color: rgb(255, 51, 0); font-size: 4.267vw;">{{item.CurrentPrice}}</span>
              <span
                style="color: rgb(188, 188, 188); font-size: 3.2vw; margin-left: 1.067vw;"
              >/{{item.Size}}</span>
            </div>
            <div class="list-product-e" @click="tianjia(item,$event)">
              <img
                src="https://res.bestcake.com\m-images-2\list-cart.png?v=1"
                class="am-img-responsive"
              >
            </div>
          </div>
        </div>
      </div>

      <div class="bs-list" v-show="active==2">
        <div class="list-classify">
          <div class="list-classify-a">乳品</div>
        </div>
        <div class="list-product">
          <div class="list-product-tab" v-for="(item,index) in activeList" :key="index">
            <a href="#">
              <div class="list-product-a">
                <img :src="item.ImgUrl" class="am-img-responsive" @click="toShow(item)">
              </div>
            </a>
            <div class="list-product-b">
              <span>{{item.Name}}</span>
            </div>
            <div class="list-product-c">
              <span>{{item.Means}}</span>
            </div>
            <div class="list-product-d">
              <span style="color: rgb(255, 51, 0); font-size: 3.2vw; padding-left: 2vw;">￥</span>
              <span style="color: rgb(255, 51, 0); font-size: 4.267vw;">{{item.CurrentPrice}}</span>
              <span
                style="color: rgb(188, 188, 188); font-size: 3.2vw; margin-left: 1.067vw;"
              >/{{item.Size}}</span>
            </div>
            <div class="list-product-e" @click="tianjia(item,$event)">
              <img
                src="https://res.bestcake.com\m-images-2\list-cart.png?v=1"
                class="am-img-responsive"
              >
            </div>
          </div>
        </div>
      </div>
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
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      active: 1,
      goodsList: [],
      activeList: [],
      one: [
        { name: "经典", mark: "KSK" },
        { name: "女神", mark: "NS" },
        { name: "伴手礼", mark: "JZ" }
      ]
    };
  },
  mounted() {
    this.pageInit();
  },
  methods: {
    pageInit() {
      this.GetJdListNew(res => {
        var goodsList = res.data.Tag.cakelist;
        var url = `https://res.bestcake.com/m-images/ww/`;
        goodsList.forEach(item => {
          if (item.SupplyNo.indexOf("KSK") != -1) {
            item.ImgUrl = `${url}jd/${item.Name}.png`;
          } else if (item.SupplyNo.indexOf("NS") != -1) {
            item.ImgUrl = `${url}ns/${item.Name}.png`;
          } else if (item.SupplyNo.indexOf("JZ") != -1) {
            item.ImgUrl = `${url}jz/${item.Name}.png`;
          } else {
            item.ImgUrl = `${url}rp/${item.Name}.png`;
          }
        });
        this.goodsList = goodsList;
        this.optionData(this.one[0].mark);
      });
    },
    optionData(mark) {
      var activeList = [];
      this.goodsList.forEach(item => {
        if (item.SupplyNo.indexOf(mark) != -1) {
          activeList.push(item);
        }
      });
      this.activeList = activeList;
    },
    two() {
      this.active = 2;
      this.optionData("RP");
    },
    toShow(item) {
      //图片焦点图跳转详情页

      var data = {
        key: item.Name,
        c: item.SupplyNo
      };
      this.$router.push({
        path: "/show",
        query: { key: data.key, c: data.c }
      });
    },
    GetJdListNew(callback) {
      this.$apis.GetJdListNew().then(res => {
        callback(res);
      });
    },
    tianjia(item, e) {
      this.flay(e, item.ImgUrl);
      var data = {
        id: item.Pid||item.ID,
        Name: item.Name,
        eName: "",
        num: 1,
        CurrentPrice: item.CurrentPrice,
        Size: item.Size,
        url: item.ImgUrl,
        SupplyNo: item.SupplyNo,
        to: "/details" + item.Imglink
      };
      console.log(data);

      this.$store.commit("add", data);
      console.log(this.$store.state.shopCart["N"]);
      console.log(this.$store.state.shopCart);
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
          left: oBtn.left + 180, //结束位置（必填）
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.new-list {
  margin-bottom: r(100);
}
.list-tabs {
  position: relative;
  border-bottom: 1px solid #d9d9d9;
  height: r(88);
  .list-tabs-a {
    width: 50%;
    float: left;
    font-size: 4.266vw;
    text-align: center;
    height: 13vw;
    line-height: 12vw;
  }
  .list-tabs-b {
    width: 50%;
    float: left;
    font-size: 4.266vw;
    text-align: center;
    height: 13vw;
    line-height: 12vw;
  }
  .active {
    color: #1db0b8;
  }
}
// ------
.list-classify {
  margin-top: r(54);
  height: r(44);
  display: flex;
  .list-classify-a {
    flex: 1;
    left: 20vw;
    text-align: center;
    font-size: 3.733vw;
    z-index: 2;
    bottom: 0;
  }
}
.list-product {
  width: r(726);
  padding: 0 r(12);
  .list-product-tab {
    width: r(330);
    float: left;
    position: relative;
    margin-bottom: 5.334vw;
  }
}
.list-product-tab:nth-child(2n + 1) {
  margin-right: r(66);
}
.list-product-a {
  width: r(330);
  height: r(330);
}
.am-img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}
.list-product-b {
  margin-top: 1.867vw;
  line-height: 3.734vw;
  span {
    font-size: 3.734vw;
    color: #333;
    padding-left: 2vw;
  }
}
.list-product-c {
  width: r(300);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 5vw;
  span {
    font-size: 3.2vw;
    color: #999;
    padding-left: 2vw;
  }
}
.list-product-e {
  width: r(40);
  height: r(40);
  position: absolute;
  right: 0vw;
  bottom: 1vw;
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
</style>


