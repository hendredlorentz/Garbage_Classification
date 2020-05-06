var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
   data: {

   },
   formSubmit: function(e) {
    var that = this;
    // console.log(e);
    // console.log(e.detail.value);
    var formData = e.detail.value;
    if(e.detail.value.username.length != 11){
      wx.showModal({
       content:'请输入正确的手机号码',

     })
    }else{
      wx.request({
        url: 'https://api.apiopen.top/getWangYiNews',
        data: formData,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        success: function(res) {
          console.log(res.data)
          wx.showToast({
            title: '成功,快去登录',
            icon: 'success',
          duration: 2000 //持续的时间
        })
        }
      })
    }
    // that.onShow();
  },

  formReset: function(res) {
    // console.log('form发生了reset事件')
  },
  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function(options) {

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