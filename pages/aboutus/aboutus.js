var app = getApp();
Page({
	data: {
		spacedata: {},
		spaceimgs: [],
		currentIndex: 1
	},
	onLoad: function() {
		if (app.globalData.log == false) {
			wx.showModal({
				title: '提示',
				content: '请先进行登录，才可进行查看',
				success(res){
					if(res.confirm){
						console.log('点击确定');
						wx.switchTab({
							url:'/pages/login-in/login-in'
						})
					}
					else{
						console.log('点击取消');
					}
				}
			})
		} else {
			this.setData({
				spacedata: {
					"ParkCode": "ZCKJ20160831200444",
					"ParkName": "垃分项目团队",
					"FeeScale": 0,
					"FeeScaleUnit": "元/月",
					"FeeScaleUnitValue": 2,
					"FeeScaleRoom": 0,
					"FeeScaleRoomUnit": "元/㎡/天",
					"peopleNumber": 15,
					"Address": "湖南省长沙市长沙理工大学",
					"TagIDs": ["大学生团队", "拼搏精神", "谦虚态度"],
					"latitude": 28.063248,
					"longitude": 113.006281,
					"TotalBulidingArea": 120,
					"Policy": "自动识别、智能称重、自动臭氧消毒、人脸识别开箱、满载预警、定位功能、语音播报、摄像监控、自动投口防夹手、夜间照明、温度预警、户外防水、防火防爆防腐蚀、智能洗手。",
					"RoomRate": 85,
					"Summary": "物联网+垃圾回收：公司致力于依靠互联网，通过信息化手段，建立起一整套综合性、高智能的垃圾分类管理体系，由运营服务+智能垃圾桶+云端服务平台+移动平台组成。"
				},
				spaceimgs: [
					"/iconall/topicphoto1.jpg",
					"/iconall/topicphoto2.jpg",
					"/iconall/topicphoto3.jpg",
				]
			})
		}

	},
	setCurrent: function(e) { //当前图片索引
		this.setData({
			currentIndex: e.detail.current + 1
		})
	},
	imgPreview: function() { //图片预览
		const imgs = this.data.spaceimgs;
		wx.previewImage({
			current: imgs[this.data.currentIndex - 1], // 当前显示图片的http链接
			urls: imgs // 需要预览的图片http链接列表
		})
	},
	getAddress: function(e) {
		const d = e.currentTarget.dataset;
		const address = d.address;
		const latitude = d.latitude;
		const longitude = d.longitude;
		wx.openLocation({
			latitude: latitude,
			longitude: longitude,
			scale: 18,
			// name: address,
			address: address,
			success: function(res) {
				console.log(res);
			},
			fail: function(res) {
				console.log(res);
			},
			success: function(res) {
				console.log(res);
			}
		})
	},
	reserveHandle: function() {
		wx.navigateTo({
			url: '../spacereserve/spacereserve'
		})
	},
	goApply: function() {
		wx.navigateTo({
			url: '../apply/apply'
		})
	}
	// formateNumber:function(n){
	//   return n>9?n:'0'+n
	// }
})
