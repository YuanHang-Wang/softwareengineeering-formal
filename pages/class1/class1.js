// pages/class1/class1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    n1:0,
    n2:0,
    n3:30,
    in:0,
    a1:' ',
    a2:' ',
    a3:' ',
    b1:' ',
    b2:' ',
    result:0,
    tishi:' ',
    isshow:false,
    isshow1:false,
    wancheng:false
  },
shuru:function (e) {
  console.log(e.detail.value);
  this.setData({
    in:e.detail.value
  })
} ,
chuti:function (e) {
  this.setData({
    isshow:false
  })
  var that = this;
  var i = true;
  var fn1, fn2, fn3;
  var fs1, fs2;
  var result1, result2, result3, result4, result5;
  while (i == true) {

    fn1 = Math.floor(Math.random() * 9 + 1);
    fn2 = Math.floor(Math.random() * 9 + 1);
    fn3 = Math.floor(Math.random() * 9 + 1);
    fs1 = Math.floor(Math.random() * 2 + 1) == 1 ? '+' : '-';

    if (fs1 == '+') {
      result1 = fn1 + fn2 + fn3;
      if (result1 < 10) {
        i = false;
      }
    }
    else if (fs1 == '-') {
      result1 = fn1 - fn2 - fn3;
      if (result1 < 10 && result1 >= 0) {
        i = false;
      }
    }
  };
  that.setData({
    result:result1,
    a1: fn1,
    a2: fn2,
    a3: fn3,
    b1: fs1,
    b2: fs1
  })
  console.log(e);
},
jianyan:function (e) {
  var that = this;
  var i = that.data.n1;
  var j = that.data.n2;
    if(this.data.in == this.data.result){
        this.setData({
          tishi:'恭喜你答对了！',
          n1:i+1,
          n2:j+1,
          n3:29-i,
          isshow:true
        })
    }
    else{
        this.setData({
          tishi:'答错了，别灰心！',
         n1:i+1,
         n3:29-i,
         isshow:true
        });
    if(i==29)  
    {
         this.setData({
            isshow1:true,
            wancheng:true
         })
    }  
}
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     this.chuti();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})