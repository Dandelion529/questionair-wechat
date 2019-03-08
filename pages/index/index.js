//index.js
//获取应用实例
const app = getApp()

Page({
    data:{
        showMask: false,
        fix:false,
        items: [
            { name: 'USA', value: '娃娃菜',num:'A', checked: false },
            { name: 'CHN', value: '西红柿', num: 'B',checked: false },
            { name: 'BRA', value: '卷心菜', num: 'C', checked: false },
            { name: 'BRA', value: '土豆', num: 'D',checked: false }

        ],
        itemsHobby: [
            { name: 'JPN', value: '日本', num: 'A',checked: false },
            { name: 'ENG', value: '英国', num: 'B', checked: false },
            { name: 'TUR', value: '法国', num: 'C', checked: false},
            { name: 'USA', value: '美国', num: 'D', },
            { name: 'CHN', value: '中国', num: 'E', checked: false},
            { name: 'BRA', value: '巴西', num: 'F',},
        ],
        npsLists:[
            { value: '0', num: '0',  },
            { value: '1', num: '1',  },
            { value: '2', num: '2',  },
            { value: '3', num: '3',  },
            { value: '4', num: '4',  },
            { value: '5', num: '5',  },
            { value: '6', num: '6',  },
            { value: '7', num: '7',  },
            { value: '8', num: '8',  },
            { value: '9', num: '9',  },
            { value: '10', num: '10' },
        ],
        radioStr: '中国',  
        bg: 'npsBorder'
    },
    radioChange: function (e) {
        console.log(e, 24)
        var str = null;
        for (var value of this.data.items) {
            if (value.name === e.detail.value) {
                str = value.value;
                break;
            }
        }
    },
    changeNum(e){
        console.log(e)
        let { value } = e.currentTarget.dataset;
        let npsLists = this.data.npsLists;
        for(var i = 0; i < npsLists.length; i++) {
            if(value == npsLists[i].value) {
                npsLists[i].checked = true;
            } else {
                npsLists[i].checked = false;
            }
        }

        this.setData({
            npsLists: npsLists
        })
    },

    submitBtn(e){
        this.setData({
            showMask: true
        })
    },

    receiveBtn(e){
        this.setData({
            showMask: false
        })
    },
})