
// 使用全局变量
const app = getApp();

Page({
  data: {
    theAddress: app.globalData.address,
    theNo: '',
    theKind: app.globalData.kind,
    theType: '请选择企业类型',
    showList: 'none'
  },

  onShow() {
    console.log('-globalData:',app.globalData)
    this.setData({
      theAddress: app.globalData.address,
      theKind: app.globalData.kind
    })
    
  },
  
  selectaddress() {
    console.log('selectaddress')
    wx.navigateTo({
      url: "/pages/selectaddress/index"
    })
  }, 
  selectkind() {
    console.log('selectkind')
    wx.navigateTo({
      url: "/pages/selectkind/index"
    })
  },
  selectsure(e) {
    var value = e.target.dataset.text
    console.log('ss-tap:', value);
    // this.data.theType = value;
    this.setData({
      theType: value,
      showList: 'none'
    })
    // app.globalData.address = value;
    //console.log('global', app)
    //this.goback()
  },
  selectshow(e) {
    console.log('selectshow', this.data)
    // this.data.showList = 'block'
    this.setData({
      showList: 'block'
    })
  },
  sureFun(){
    console.log('sure')
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 2000
    })

  }

  
})