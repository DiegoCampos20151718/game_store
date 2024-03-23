import DefaultLayout from './DefaultLayout.vue'

export default {
    name: 'DefaultLayoutDynamic',
    created() {
        this.$parent.$emit('update:layout', DefaultLayout);
    },
    render() {
        return this.$slots.default[0];
    },
}