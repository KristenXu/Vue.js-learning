var data = { a: 1 }
//constructor
var vm = new Vue({
    el: '#app',
    data: data,
    //life circle
    created: function () {
        console.log('instance created: ' + this.a)
    },
    compiled: function () {
        console.log('instance compiled: ' + this.a)
    },
    ready: function () {
        console.log('instance ready: ' + this.a)
    },
    destroyed: function () {
        console.log('instance destroyed: ' + this.a)
    },
})
vm.a === data.a // -> true
// 设置属性也会影响到原始数据
vm.a = 2
data.a // -> 2
// ... 反之亦然
data.a = 3
vm.a // -> 3

//Properties and Methods
vm.$data === data // -> true
vm.$el === document.getElementById('app') // -> true
// $watch 是一个实例方法
vm.$watch('a', function (newVal, oldVal) {
    console.log('a changed', newVal, oldVal)
    // 这个回调将在 `vm.a`  改变后调用
});

//Instance life circle