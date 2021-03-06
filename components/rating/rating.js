// components/rating/rating.js
Component({
    /**
     * 组件的属性列表
     */
    // 声明组件属性及默认值
    properties: {
        rating: {
            type: Number,  // 必需 指定属性类型 [String, Number, Boolean, Object, Array, null(任意类型)]
            value: 10
        },
        max: {
            type: Number,
            value: 5
        },
        disabled: {
            type: Boolean,
            value: false
        }
    },

    // 组件私有和公开的方法，组件所使用的方法需在此声明
    methods: {
        _handleTap: function (e) {
            if (this.data.disabled) return;
            const { max } = this.data;
            const { num } = e.currentTarget.dataset;
            console.log(max,num,888)
            this.setData({
                rating: max / 5 * num
            })
            // 自定义组件事件
            this.triggerEvent('change', { value: max / 5 * num }, e);
        }
    }
})
