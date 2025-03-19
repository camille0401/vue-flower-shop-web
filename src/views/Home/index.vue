<template>
  <div class="home-page">
    <HomeNav />
    <div class='container'>
      <HomeCategory />
      <HomeBanner distributionSite="1" />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
  </div>
</template>

<script setup name='Home'>
import HomeNav from './components/HomeNav.vue';
import HomeBanner from '@/components/FSBanner.vue'
import HomeCategory from './components/HomeCategory.vue';
import HomeNew from './components/HomeNew.vue';
import HomeHot from './components/HomeHot.vue';
import HomeProduct from './components/HomeProduct.vue';
</script>

<style scoped lang="scss"></style>
