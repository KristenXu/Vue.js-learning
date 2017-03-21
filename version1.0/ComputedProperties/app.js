var vm = new Vue({
    el: '#example',
    data: {
        a: 1,
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        // 一个计算属性的 getter
        b: function () {
            // `this` 指向 vm 实例
            //计算属性默认提供getter
            return this.a + 1
        },
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})

console.log(vm.b) // -> 2
vm.a = 2
console.log(vm.b) // -> 3

//vm.b值始终取决于vm.a
vm.b = 4
console.log(vm.b) // -> 3
console.log(vm.a) // -> 2