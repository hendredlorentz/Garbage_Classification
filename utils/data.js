/**
 * banner数据
 */
function getBannerData() {
	var arr = ['../../images/banner_01.png', '../../images/banner_02.png', '../../images/banner_03.png',
		'../../images/banner_04.png'
	]
	return arr
}
/*
 * 首页 navnav 数据
 */
function getIndexNavData() {
	var arr = [{
			id: 1,
			icon: "../../images/nav_icon_01.png",
			title: "推荐"
		},
		{
			id: 2,
			icon: "../../images/nav_icon_02.png",
			title: "美甲"
		},
		{
			id: 3,
			icon: "../../images/nav_icon_03.png",
			title: "美容"
		},
		{
			id: 4,
			icon: "../../images/nav_icon_04.png",
			title: "美发"
		},
		{
			id: 5,
			icon: "../../images/nav_icon_05.png",
			title: "美睫"
		}
	]
	return arr
}
/*
 * 首页 对应 标签 数据项
 */
function getIndexNavSectionData() {
	var arr = [
		[{

				subject: "秋季自然特价美甲",
				coverpath: "../../images/recommend_img_01.png",
				price: '¥198',
				message: '我们追求的是没有最长只有更长！'
			},
			{

				subject: "睫毛稀疏 种睫毛来帮忙",
				coverpath: "../../images/recommend_img_02.png",
				price: '¥1888',
				message: '我们追求的是没有最长只有更长！'
			},
			{

				subject: "爱丽克EircParisSalon",
				coverpath: "../../images/recommend_img_03.png",
				price: '¥1588',
				message: '我们追求的是没有最长只有更长！'
			},
			{

				subject: "伊本造型",
				coverpath: "../../images/recommend_img_05.png",
				price: '¥198',
				message: '伊本造型是由著名形象设计师杨进先生创办。'
			},
			{

				subject: " 画对了妆，微微一笑颜值倍儿高！",
				coverpath: "../../images/recommend_img_06.png",
				price: '¥198',
				message: '《微微一笑很倾城》的剧照简直美腻到不要不要的'
			}
		],
		[{
			artype: 'nails',
			subject: "秋季自然特价美甲",
			coverpath: "../../images/recommend_img_01.png",
			price: '¥198',
			message: '我们追求的是没有最长只有更长！'
		}],
		[{
				artype: 'beauty',
				subject: "爱丽克EircParisSalon",
				coverpath: "../../images/recommend_img_03.png",
				price: '¥1588',
				message: '我们追求的是没有最长只有更长！'
			},
			{
				artype: 'beauty',
				subject: " 画对了妆，微微一笑颜值倍儿高！",
				coverpath: "../../images/recommend_img_06.png",
				price: '¥198',
				message: '《微微一笑很倾城》的剧照简直美腻到不要不要的'
			}
		],
		[

			{
				artype: 'hair',
				subject: "伊本造型",
				coverpath: "../../images/recommend_img_05.png",
				price: '¥1588',
				message: '伊本造型是由著名形象设计师杨进先生创办。'
			}
		],
		[{
			artype: 'eyelash',
			subject: "睫毛稀疏 种睫毛来帮忙",
			coverpath: "../../images/recommend_img_02.png",
			price: '¥1888',
			message: '我们追求的是没有最长只有更长！'
		}]
	]
	return arr
}
/**
 * 技师 数据
 * */
function getSkilledData() {
	var arr = [{
			company: "小垃圾有限公司",
			avatar: "../../iconall/topicphoto1.jpg",
			nickname: '回收垃圾',
			price: '¥5',
			message: '主攻垃圾',
			distance: '100m'
		},
		{
			company: "小玻璃",
			avatar: "../../iconall/topicphoto2.jpg",
			nickname: '回收玻璃',
			price: '¥8',
			message: '玻璃最爱',
			distance: '200m'
		},
		{
			company: "小电池",
			avatar: "../../iconall/topicphoto3.jpg",
			nickname: '回收电池',
			price: '¥10',
			message: '电池回收',
			distance: '100m'
		},
		{
			company: "小纸壳",
			avatar: "../../iconall/topicphoto1.jpg",
			nickname: '回收纸壳',
			price: '¥1',
			message: '纸壳回收',
			distance: '400m'
		},
		{
			company: "小玩具",
			avatar: "../../iconall/topicphoto2.jpg",
			nickname: '回收玩具',
			price: '¥10',
			message: '玩具回收',
			distance: '300m'
		}
	]
	return arr
}

/**
 * 选择器 数据
 */
function getPickerData() {
	var arr = [{
			name: '崔文轩',
			phone: '17608430056',
			province: '湖南',
			city: '长沙',
			addr: '长沙理工大学'
		},
		{
			name: '李四',
			phone: '13812314563',
			province: '北京市',
			city: '北京市',
			addr: '朝阳区望京悠乐汇A座4020'
		}
	]
	return arr
}
/**
 * 查询 地址
 * */
var user_data = userData()

function searchAddrFromAddrs(addrid) {
	var result
	for (let i = 0; i < user_data.addrs.length; i++) {
		var addr = user_data.addrs[i]
		console.log(addr)
		if (addr.addrid == addrid) {
			result = addr
		}
	}
	return result || {}
}
/**
 * 用户数据
 * */
function userData() {
	var arr = {
		uid: '1',
		nickname: '山炮',
		name: '崔文轩',
		phone: '13833337998',
		avatar: '../../images/avatar.png',
		addrs: [{
				addrid: '1',
				name: '崔文轩',
				phone: '13812314563',
				province: '湖南',
				city: '长沙',
				addr: '长沙理工大学'
			},
			{
				addrid: '2',
				name: '李四',
				phone: '13812314563',
				province: '北京',
				city: '直辖市',
				addr: '朝阳区望京悠乐汇A座4020'
			}
		]
	}
	return arr
}
/**
 * 省
 * */
function provinceData() {
	var arr = [
		// {pid:1,pzip:'110000',pname:'北京市'},
		// {pid:2,pzip:'120000',pname:'天津市'}
		'请选择省份', '福建省'
	]
	return arr
}
/**
 * 市
 * */
function cityData() {
	var arr = [
		// {cid:1,czip:'110100',cname:'市辖区',pzip:'110000'},
		// {cid:2,czip:'120100',cname:'市辖区',pzip:'120000'}
		'请选择城市', '福州市', '厦门市', '宁德市'
	]
	return arr
}
/*
 * 对外暴露接口
 */
module.exports = {
	getBannerData: getBannerData,
	getIndexNavData: getIndexNavData,
	getIndexNavSectionData: getIndexNavSectionData,
	getPickerData: getPickerData,
	getSkilledData: getSkilledData,
	userData: userData,
	provinceData: provinceData,
	cityData: cityData,
	searchAddrFromAddrs: searchAddrFromAddrs

}
