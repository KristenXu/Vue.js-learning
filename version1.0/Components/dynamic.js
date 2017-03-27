Vue.component('dynamic-component', {
    template: '<div>动态显示</div>',
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
        show: true
    },
    methods: {
        clickHandle: function () {
            this.show = !this.show;
        }
    }
});