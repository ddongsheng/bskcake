import request from "./http"
import mock from "@/mock/mock"


var url1 = "json1811.ashx";
class Apls {
	//首页轮播图
	GetBannerList(data) {
		return request({
			method: "get",
			url: url1,
			params: data
		})
	}
	//首页商品数据
	GetIndexCakeList() {
		return request({
			method: "get",
			url: url1,
			params: {
				v: Number(new Date()),
				c: 'Index',
				m: 'GetIndexCakeList',
			}
		})
	}
	// NS 焦点图详情接口
	GetNSCakeByName(data) {
		console.log(data);

		return request({
			method: "get",
			url: url1,
			params: {
				Name: data.Name,
				c: "NsCakeCenter",
				m: "GetNSCakeByName",
				v: Number(new Date())
			}
		})
	}

	// KSK 商品详情接口
	GetCakeByName(data) {

		return request({
			method: "get",
			url: url1,
			params: {
				City: "上海",
				ProName: data.ProName,
				c: "Product",
				m: "GetCakeByName",
				v: Number(new Date()),
			}
		})
	}
	// JD 分类数据接口
	GetJdListNew() {
		return request({
			method: "get",
			url: url1,
			params: {
				c: "NsCakeCenter",
				m: "GetJdListNew",
				v: Number(new Date())
			}
		})
	}
	// RP 分类数据接口
	GetRuPCakeByName(data) {
		return request({
			method: "get",
			url: url1,
			params: {
				Name: data.Name,
				c: "NsCakeCenter",
				m: "GetRuPCakeByName",
				v: Number(new Date())
			}
		})
	}
	// JZ 分类数据接口
	GetjzCakeInfo(data) {
		return request({
			method: "get",
			url: url1,
			params: {
				City: "上海",
				ProName: data.ProName,
				c: "IndexCenter",
				m: "GetjzCakeInfo",
				v: Number(new Date())
			}
		})
	}
	login(data) {
		return mock.post("/login", { data })
	}
	edit(data){
		return mock.post("/test", { data })
	}
}


export default new Apls();