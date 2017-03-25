/**
 *组建标准创建方式
 */

//构造组件容器
var standComponent = Vue.extend({
    template: '<div>standard component</div>'
});

//注册组件,注册之后成为全局组件
Vue.component('stand-component', standComponent);


/**
 * 局部组件创建方式
 */

var Child = Vue.extend({
    template: '<div>child component</div>'
});
var Parent = Vue.extend({
    template: '<div><child-component></child-component></div>',
    components: {
        // <child-component> 只能用在父组件模板内
        'child-component': Child
    }
});
Vue.component('parent-component', Parent);



/**
 *组件注册语法糖,直接传入对象
 */
//全局
// 在一个步骤中扩展与注册
Vue.component('sugar-component', {
    template: '<div>A sugar component!</div>'
});
// 局部注册也可以这么做
var ParentSugar = Vue.extend({
    template: '<div><child-component></child-component></div>',
    components: {
        // <child-component> 只能用在父组件模板内
        'child-component': {
            template: '<div>A local sugar component!</div>'
        }
    }
});
Vue.component('parent-sugar', ParentSugar);

//挂载组件
var vm = new Vue({
    el: '#standard',
    data: {

    }
});