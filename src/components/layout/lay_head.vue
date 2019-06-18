<template>
  <div class="hello">
    <div class="clear"></div>
    <div id="app">
      <ul>
        <li
          v-for="(item,index) in routePath"
          :id="item.key"
          :key="index"
          @click.native="tab(index)"
        >
          <router-link :to="item.path">
            <a href="#" @click="selImg(index)">
              <img
                :src="item.ImgUrl"
                :class="{imgselected:selnumImg==index}"
                class="am-img-responsive foot-menu-icon footer-index"
              >
            </a>
          </router-link>
        </li>
        <li>
          <div class="xiaohond">{{this.$store.state.shopCart["N"]}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routePath: [
        {
          name: "首页",
          path: "/index",
          key: "index",
          ImgUrl:
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-a-1.png?v=119"
        },
        {
          name: "分类",
          path: "/class",
          key: "class",
          ImgUrl:
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-b-1.png?v=119"
        },
        {
          name: "购物车",
          path: "/cart",
          key: "cart",
          ImgUrl:
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-c-1.png?v=119"
        },
        {
          name: "我的",
          path: "/user",
          key: "user",
          ImgUrl:
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-d-1.png?v=119"
        }
      ],
      selnumImg: 0
    };
  },
  mounted(){
  
  },
  methods: {
    tab(index) {
      this.$router.push({
        path: this.routePath[index].path
      });
    },
    selImg(index) {
      this.selnumImg = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang= 'scss'>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  z-index: 1001;
  position: relative;
}
.imgselected {
  background: #02d3d6;
}
ul {
  width: 100%;
  height: r(86);
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #eee;
  background: #fff;
  z-index: 99999;
}
li {
  display: inline-block;
  text-align: center;
  background: #fff;
}
a {
  color: #333;
  background: #fff;
}
img {
  width: 40%;
  z-index: 9999;
}
.clear {
  clear: both;
}
.xiaohond {
  position: absolute;
  right: 36.3vw;
  bottom: 8vw;
  background: #f2495e;
  border-radius: 50px;
  width: 3.73vw;
  height: 3.73vw;
  text-align: center;
  line-height: 3.73vw;
  font-size: 3vw;
  color: #fff;
}
</style>



