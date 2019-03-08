// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },


    bindGetUserInfo(e) {
        console.log(e, 57)
        wx.navigateTo({
            url: '../index/index',
        })
    },
})