new Vue({
    el: '#example',
    methods: {
        sayMsg: function (msg) {
            alert(msg)
        },
        clickEvent: function (event) {
            // alert(event.target.tagName)
            console.log('event', event)
        },
        click$event: function ($event) {
            console.log('$event', $event)
        }
    }
})

