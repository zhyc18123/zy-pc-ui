
import Button from './Button.vue' // 导入组件
import Header from './Header.vue'
import ZyTable from './Table.vue'

const components = [
    Button,
    Header,
    ZyTable
]

const install = function (Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
components.map(component => {
    component.install = function (Vue) {
        Vue.component(component.name, component);
    };
});
export default {
    install,
    Button,
    Header,
    ZyTable
}
export {
    Button,
    Header,
    ZyTable
}