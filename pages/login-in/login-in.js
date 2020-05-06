
var app = getApp();

Page({
	
	/**
	 * 页面的初始数据
	 */
	data: {
		userInfo: {
			"avatarUrl": "/iconall/kong.png",
			"nickName": "未知",
			"city": "未知",
		},
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		
		console.log(app.globalData.log)
		console.log("onLoad:页面加载");
		var that = this;
		wx.getSetting({
			success(res) {
				if (res.authSetting['scope.userInfo']) {
					console.log("授权");
				} else {
					console.log("未授权");
				}
			}
		})
	},


	bindGetUserInfo(res) {
		if (res.detail.userInfo) {
			var that = this;
			// console.log("!!!"+res);
			wx.getUserInfo({
				success: (data) => {
					//console.log(data.userInfo);
					console.log(data.userInfo.city);
					if (!data.userInfo.city) {
						data.userInfo.city = "未知";
					}
					//更新data中的userInfo的数据
					this.setData({
						userInfo: data.userInfo,
						// App.globalData.log:true
					});
					app.globalData.log = true;
					console.log(app.globalData.log);
					
				},
				fail: () => {
					console.log('获取用户数据失败');
				},
				// var option = app.globalData.log;
				// console.log("????"+option);
			})
		} else {
			wx.showModal({
				title: '警告',
				content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
				showCancel: false,
				confirmText: '返回授权',
			})
		}
	},
	//获取用户登录信息


	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
