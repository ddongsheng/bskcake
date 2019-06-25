import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import { userList } from './data/userList';
import Store from "storejs";

let mock = new MockAdapter(axios, { delayResponse: 500 });

mock.onPost('/login').reply(config => {
	// console.log(config)
	// 做一个数据效验
	var reqdata = JSON.parse(config.data).data;
	console.log(reqdata);
	if (Store.get("userList")) {
		let userList1 = Store.get("userList");
		for (var i = 0; i < userList1.length; i++) {
			if (userList1[i].username == reqdata.uname) {
				if (userList1[i].password == reqdata.upwd) {
					return [200, { code: 1, data: userList1[i], msg: "success" }]
				} else {
					return [200, { code: 2, msg: "账号或密码错误" }];
				}
			}
		}
	} else {
		for (var i = 0; i < userList.length; i++) {
			if (userList[i].username == reqdata.uname) {
				if (userList[i].password == reqdata.upwd) {
					return [200, { code: 1, data: userList[i], msg: "success" }]
				} else {
					return [200, { code: 2, msg: "账号或密码错误" }];
				}
			}
		}
	}

	return [200, { code: 0, msg: "账号不存在" }];
});

mock.onPost('/test').reply(config => {
	var reqdata = JSON.parse(config.data).data;
	console.log(reqdata);
	if (reqdata.username == "" && reqdata.password == "") {
		return [200, { code: 0, msg: "请输入账户名和密码" }]
	} else {
		userList.push(reqdata);
		Store.set("userList", userList);
		return [200, { code: 1, msg: "注册成功" }]
	}

})

export default axios;




