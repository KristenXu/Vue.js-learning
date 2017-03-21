var vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        newTodo: '',
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue.js' },
            { text: 'Build Something Awesome' }
        ],
        disableMessage: false
    },
    methods: {
        reverseMesssage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        addTodo: function () {
            this.todos.push({
                text: this.newTodo
            })
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1)
        }
    }
});