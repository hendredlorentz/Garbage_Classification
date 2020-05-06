var app = getApp();
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		tempFilePaths: '',
		motto: '分享给朋友',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo')
	},
	//分享按钮函数
	onShareAppMessage: function(ops) {
		if (ops.from === 'button') {
			// 来自页面内转发按钮
			console.log(ops.target)
		}
		return {
			title: '垃分小程序',
			path: 'pages/index/index',
			success: function(res) {
				// 转发成功
				console.log("转发成功:" + JSON.stringify(res));
			},
			fail: function(res) {
				// 转发失败
				console.log("转发失败:" + JSON.stringify(res));
			}
		}

	},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			if(app.globalData.log == false){
				wx.showModal({
					title:'提示',
					content:'请先进行登录',
					success(res){
						if(res.confirm){
							wx.switchTab({
								url:'/pages/login-in/login-in'
							})
						}else{
							wx.switchTab({
								url:'/pages/index/index'
							})
						}
					}
				})
			}
		},

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
