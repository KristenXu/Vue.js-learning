Vue.component('dynamic-component', {
    template: '<div>{{item}}</div>',
    //但是，不能传递数据给组件，因为组件的作用域是孤立的。为了传递数据给组件，应当使用 props：
    props: ['item'],
    activate: function (done) {
        var self = this;
        loadDataAsync(self.$parent.$data, function (data) {
            self.show = data.show;
            console.log('self', self.show);
            done()
        })
    }
});

function loadDataAsync(data, cb) {
    cb(data)
}
var vm = new Vue({
    el: '#dynamicExample',
    data: {
        show: true,
        items: ['动态一','动态二','动态三']
    },
    methods: {
        clickHandle: function () {
            this.show = !this.show;
        }
    }
});