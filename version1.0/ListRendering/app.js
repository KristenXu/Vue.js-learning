var example1 = new Vue({
    el: '#example-1',
    data: {
        parent: 'List',
        items: [
            { message: 'Foo' },
            { message: 'Bar' },
            { message: 'Circle' }
        ],
        object: {
            FirstName: 'John',
            LastName: 'Doe',
            Age: 30
        }
    }
});
//filter
// example1.items = example1.items.filter(function (item) {
//     return item.message.match(/Foo/)
// })
/**
因为 JavaScript 的限制，Vue.js 不能检测到下面数组变化：

直接用索引设置元素，如 vm.items[0] = {}；
修改数据的长度，如 vm.items.length = 0。
**/
example1.$data.items.$set(0, {message: 'Chart'});
var item1 = example1.$data.items[1];
example1.$data.items.$remove(item1);