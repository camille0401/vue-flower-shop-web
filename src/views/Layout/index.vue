<template>
    <LayoutHeaderFixed/>
    <LayoutNav/>
    <LayoutHeader/>
    <RouterView/>
</template>
<script setup name="Layout">
    import LayoutNav from './components/Nav.vue';
    import LayoutHeader from './components/Header.vue';
    import LayoutHeaderFixed from './components/HeaderFixed.vue';

</script>
<style scoped lang="scss">
    
</style>