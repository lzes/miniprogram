// pages/order/order.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        category: [
            {
                name:'小黄人限定联名',
                id:'1',
                foods: [{
                    name: '小黄人布丁果冻',
                    price: 7,
                    num: 0,
                  }],
                  
                 src:'http://s5ei984sg.hn-bkt.clouddn.com/a.jpg'
            },
            {
                name:'鸡蛋味布丁',
                id:'2',
                foods: [{
                    name: '鸡蛋布丁',
                    price: 7,
                    num: 0,
                   }],
                   
                src:'http://s5ei984sg.hn-bkt.clouddn.com/b.jpg'
            },
            {
                name:'炒酸奶布丁',
                id:'3',
                foods: [{
                    name: '炒酸奶布丁',
                    price: 7,
                    num: 0,
                  }],
                  
                src:'http://s5ei984sg.hn-bkt.clouddn.com/c.jpg'
            },
            {
                name:'限定套餐',
                id:'4',
                foods: [{
                    name: '鸡蛋布丁+炒酸奶布丁',
                    price: 7,
                    num: 0,
                  }],
                  
                  src:'http://s5ei984sg.hn-bkt.clouddn.com/d.jpg'
            },
        ],
        activeIndex: 0,
        scrollH: 1000,
        toView: 'a0',
        scrollTop: 100,
        cupNumber: 0,
        sumMonney: 0,
        loading: false,
        currentType: 0,
        currentIndex: 0,
        carts:[],
    },
    selectFood: function(e) {
        var foods = e.currentTarget.dataset.foods
        console.log(foods)
      },
    selectMenu: function(e) {
        var index = e.currentTarget.dataset.index
        console.log(index)
        this.setData({
          activeIndex: index,
          toView: 'a' + index,
        })
      },
    scroll: function (e) {
        console.log(e)
        var dis = e.detail.scrollTop
        if (dis > 0 && dis < 388) {
          this.setData({
            activeIndex: 0,
          })
        }
        if (dis > 388 && dis < 848.7999877929688) {
          this.setData({
            activeIndex: 1,
          })
        }
        if (dis > 848.7999877929688 && dis < 1309.5999755859375) {
          this.setData({
            activeIndex: 2,
          })
        }
        if (dis > 1309.5999755859375 && dis < 1770.4000244140625) {
          this.setData({
            activeIndex: 3,
          })
        }
        if (dis > 1770.4000244140625 && dis < 2158.39990234375) {
          this.setData({
            activeIndex: 4,
          })
        }
    },
    selectInfo: function(e) {
        var type = e.currentTarget.dataset.type;
        var index = e.currentTarget.dataset.index;
        this.setData({
            cupNumber: this.data.cupNumber + 1,
        });
        this.setData({
            sumMonney: this.data.cupNumber * 7,
        })
      },
      notice: function() {
        var that = this;
        wx.showModal({
          title: '提示',
          content: '因含有规格，请在购物车内删减',
          showCancel: false,
          success: function(res) {
            if (res.confirm) {
              that.setData({
                showCart: true
              });
            }
          }
        })
      },
      showCartList: function() {
        console.log(this.data.showCart)
        if (this.data.cartList.length != 0) {
          this.setData({
            showCart: !this.data.showCart,
          });
        }
    
      },
      clearCartList: function() {
        this.setData({
          cartList: [],
          showCart: false,
          sumMonney: 0
        });
      },
      goBalance: function() {
        if (this.data.sumMonney != 0) {
          wx.setStorageSync('cartList', this.data.cartList);
          wx.setStorageSync('sumMonney', this.data.sumMonney);
          wx.setStorageSync('cupNumber', this.data.cupNumber);
          wx.navigateTo({
            url: '../order/balance/balance'
          })
        }
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this;
        var sysinfo = wx.getSystemInfoSync().windowHeight;
        console.log(sysinfo)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})