Vue.component('child', {
    // camelCase in JavaScript
    props: ['msg'],
    template: '<span>{{ msg }}</span>'
});

Vue.component('child-kebab', {
    // camelCase in JavaScript
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
})

var dynamicProps = Vue.extend({
    template: '<div><input v-model="parentMsg"><br><child v-bind:my-message="parentMsg"></child></div>',
    components: {
        // <child-component> 只能用在父组件模板内
        'child': {
            props: {
                myMessage: {
                    type: String,
                    default: 'wwww'
                }
            },
            template: '<div>{{myMessage}}</div>'
        }
    }
});

Vue.component('dynamic-props', dynamicProps);

var vm = new Vue({
    el: '#propsExample',
    data: {
    }
});