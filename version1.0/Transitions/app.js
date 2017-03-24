var vm = new Vue({
    el: '#example',
    data: {
        show: false,
        transitionName: 'fade',
        list: ['Bruce Lee',
            'Jackie Chan',
            'Chuck Norris',
            'Jet Li',
            'Kung Fury']
    },
    methods: {
        handleClick: function () {
            this.show = !this.show
        }
    }
});
/**
 * CSS动画
 */

Vue.transition('expand', {
    beforeEnter: function (el) {
        el.textContent = 'beforeEnter'
    },
    enter: function (el) {
        el.textContent = 'enter'
    },
    afterEnter: function (el) {
        el.textContent = 'afterEnter'
    },
    enterCancelled: function (el) {
        // handle cancellation
    },
    beforeLeave: function (el) {
        el.textContent = 'beforeLeave'
    },
    leave: function (el) {
        el.textContent = 'leave'
    },
    afterLeave: function (el) {
        el.textContent = 'afterLeave'
    },
    leaveCancelled: function (el) {
        // handle cancellation
    }
})
/**
 * JS动画
 */
Vue.transition('fade', {
    css: false,
    enter: function (el, done) {
        // 元素已被插入 DOM
        // 在动画结束后调用 done
        console.log(done)
        // $(el)
        //     .css('opacity', 0)
        //     .animate({ opacity: 1 }, 1000, done)
    },
    enterCancelled: function (el) {
        // $(el).stop()
    },
    leave: function (el, done) {
        // 与 enter 相同
        // $(el).animate({ opacity: 0 }, 1000, done)
    },
    leaveCancelled: function (el) {
        // $(el).stop()
    }
})

Vue.transition('stagger', {
    stagger: function (index) {
        // 每个过渡项目增加 50ms 延时
        // 但是最大延时限制为 300ms
        return Math.min(300, index * 50)
    }
})