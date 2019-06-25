import Vue from "vue";
import Vuex from "vuex";
import apis from "@/core/api/index"
import Store from "storejs"
// console.log("OK");
Vue.use(Vuex);

//定义属性值  data
const state = {
	cartList:[],
	shopCart: { "N": 0 }
}
//定义同步方法
const mutations = {
	vuexInit(state){
		state.cartList=Store.get("cartList")||[];
	},
	add(state, data) {
		state.cartList=Store.get("cartList")||[];
		if (state.cartList.length !=0) {			
			var bool=true;
			state.cartList.forEach((item)=>{
				if(data.id==item.id){
					item.num++;
					bool=false;
					return;
				}
			})
			if (bool) {
				data.num=data.num||1;
				state.cartList.push(data);
			}
			state.shopCart.N++;
		} else {
			data.num=1;
			state.cartList.push(data);
			state.shopCart.N++;
		}
		Store.set("cartList",state.cartList);
	},
}
//定义 computed(属性计算)
const getters = {
	count(state) {
		
	}
}

//定义异步方法,可以在这个里面做一些异步操作,比如调用通用数据接口
const actions = {
	syFn(context) {
		// context.state  可以取 state 属性
		// context.commit  可以调用 mutations 同步方法 属性
		// context.dispatch可以调用 actions 异步方法 属性
		// 在组件里面调用 也是一样,同上面的方法一直 
	},
	test(context, data) {
		console.log(data)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
