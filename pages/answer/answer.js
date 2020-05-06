var app = getApp();
var correct = 0;
Page({
	data: {
		items1: [{
				name: '0',
				value: '1类'
			},
			{
				name: '1',
				value: '2类',
			},
			{
				name: '2',
				value: '3类'
			},
			{
				name: '3',
				value: '4类'
			},
		],
		items2: [{
				name: '0',
				value: '厨余垃圾'
			},
			{
				name: '1',
				value: '可回收垃圾',
			},
			{
				name: '2',
				value: '有害垃圾'
			},
			{
				name: '3',
				value: '其他垃圾'
			},
		],
		items3: [{
				name: '0',
				value: '厨余垃圾'
			},
			{
				name: '1',
				value: '可回收垃圾',
			},
			{
				name: '2',
				value: '有害垃圾'
			},
			{
				name: '3',
				value: '其他垃圾'
			},
		],
		items4: [{
				name: '0',
				value: '红色'
			},
			{
				name: '1',
				value: '绿色',
			},
			{
				name: '2',
				value: '黄色'
			},
			{
				name: '3',
				value: '蓝色'
			},
		],
		items5: [{
				name: '0',
				value: '厨余垃圾'
			},
			{
				name: '1',
				value: '可回收垃圾',
			},
			{
				name: '2',
				value: '有害垃圾'
			},
			{
				name: '3',
				value: '其他垃圾'
			},
		],
		score: 0,
		option: false,
		radio1:false,
		radio2:false,
		radio3:false,
		radio4:false,
		radio5:false,
	},
	radioChange1: function(e) {
		var that = this;
		console.log('radio1发生change事件，携带value值为：', e.detail.value)
		this.setData({
			radio1:true
		})
		if (e.detail.value == '3') {
			correct++;
			console.log(correct);
		}
	},
	radioChange2: function(e) {
		var that = this;
		this.setData({
			radio2:true
		})
		console.log('radio2发生change事件，携带value值为：', e.detail.value)
		if (e.detail.value == '3') {
			correct++;
			console.log(correct);
		}
	},
	radioChange3: function(e) {
		var that = this;
		this.setData({
			radio3:true
		})
		console.log('radio3发生change事件，携带value值为：', e.detail.value)
		if (e.detail.value == '2') {
			correct++;
			console.log(correct);
		}
	},
	radioChange4: function(e) {
		var that = this;
		this.setData({
			radio4:true
		})
		console.log('radio4发生change事件，携带value值为：', e.detail.value)
		if (e.detail.value == '1') {
			correct++;
			console.log(correct);
		}
	},
	radioChange5: function(e) {
		var that = this;
		this.setData({
			radio5:true
		})
		console.log('radio5发生change事件，携带value值为：', e.detail.value)
		if (e.detail.value == '3') {
			correct++;
			console.log(correct);
		}
	},
	clickit: function() {
		// console.log(this.data.score);
		var chenji = correct * 20;
		this.setData({
			score: chenji,
			option: true,
		})
		wx.showToast({
			title: '成功，下滑查看',
			icon: 'success',
			duration: 1000
		})
		if (chenji == 20) {
			app.globalData.gerenjifen += 40;
		}
		if (chenji == 40) {
			app.globalData.gerenjifen += 80;
		}
		if (chenji == 60) {
			app.globalData.gerenjifen += 120;
		}
		if (chenji == 80) {
			app.globalData.gerenjifen += 160;
		}
		if (chenji == 100) {
			app.globalData.gerenjifen += 200;
		}
	},
	onLoad: function(options) {
		if (app.globalData.log == false) {
			wx.showModal({
				title: '提示',
				content: '请先进行登录',
				success(res) {
					if (res.confirm) {
						wx.switchTab({
							url: '/pages/login-in/login-in'
						})
					} else {
						wx.switchTab({
							url: '/pages/index/index'
						})
					}
				}
			})
		}
	},
})
