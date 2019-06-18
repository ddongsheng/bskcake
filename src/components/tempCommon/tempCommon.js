import { Button } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';



export default (Vue)=>{
	// console.log(Vue);
	// 定义全局组件
	Vue.component(Button.name, Button);

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);

	Vue.component("test",{
		template:"<h1>hello Vue</h1>"
	})
}