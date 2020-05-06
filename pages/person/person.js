Page({
  data: {
    phone: '',
    password: '',
    success: false,
    text: ''

  },

  // 获取输入账号 
  phoneInput: function(e) {
    // console.log("==!"+e);
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function(e) {
    console.log(e);
    this.setData({
      password: e.detail.value
    })
  },

  // 登录 
  login: function() {
    let phone = this.data.phone
    let password = this.data.password
    var that = this;
    // console.log(phone.length);
    var warn = null; //warn为当手机号为空或格式不正确时提示用户的文字，默认为空
    if (that.data.phone.length == 0) {
      wx.showToast({
        title: '用户名不能为空',
        icon: 'loading',
        duration: 1000
      })
    }
    if (phone.length != 11 && phone.length != 0) {
      wx.showModal({
        content: '请输入正确的手机号码',
        success: function(res) {
          if (res.confirm) {
            //成功函数
          } else {
            //这里写未完成的函数
          }
        }
      })
    } else if (that.data.password.length == 0) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'loading',
        duration: 1000
      })
    } else {
      // console.log(that.password);
      // console.log(that.phone);
      wx.request({
        url: 'https://api.apiopen.top/getWangYiNews',
        method: "POST",
        data: {
          phone: this.data.phone,
          password: this.data.password
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          wx.showToast({
              title: '登录成功',
              icon: 'success_no_circle',
              duration: 1000
            }),
            wx.navigateTo({
              url: '/pages/login-in/login-in',
            })
        }
      })
    }
  },
  // 注册 
  register: function() {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },

})