var app = getApp();
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	again() {
		wx.showActionSheet({
			itemList: ['玻璃制品', '罐头与瓶子', '旧包类', '金属制品', '纸质制品', '部分塑料制品'],
			success(res) {
				console.log(res)
			},
			fail(res) {
				console.log(res.errMsg)
			}
		})
	},
	danger() {
		wx.showActionSheet({
			itemList: ['油漆桶', '电磁', '过期药片与胶囊', '含汞温度计', '荧光灯','杀虫剂与农药'],
			success(res) {
				console.log(res)
			},
			fail(res) {
				console.log(res.errMsg)
			}
		})
	},
	wet(){
		wx.showActionSheet({
			itemList: ['各种厨余垃圾', '盆栽树叶', '巧克力', '含壳物质垃圾'],
			success(res) {
				console.log(res)
			},
			fail(res) {
				console.log(res.errMsg)
			}
		})
	},
	dry(){
		wx.showActionSheet({
			itemList: ['一次性筷子与卫生纸', '脏衣服与过期化妆品', '水彩笔与打火机', '各种医疗垃圾'],
			success(res) {
				console.log(res)
			},
			fail(res) {
				console.log(res.errMsg)
			}
		})
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
