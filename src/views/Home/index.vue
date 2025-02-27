<template>
    <div class="home-page">
        <div class='container'>
            <HomeCategory />
            <HomeBanner />
        </div>
        <HomeNew />
        <HomeHot />
        <HomeProduct />
    </div>
</template>

<script setup name='Home'>
import HomeBanner from './components/HomeBanner.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeNew from './components/HomeNew.vue';
import HomeHot from './components/HomeHot.vue';
import HomeProduct from './components/HomeProduct.vue';
</script>

<style scoped lang="scss"></style>