<template>
  <div class="fs-home-page">
    <HomeNav />
    <div class='container home-content'>
      <HomeCategory />
      <FSBanner distributionSite="1" />
      <HomeNew />
      <HomeHot />
      <HomeProduct />
    </div>
  </div>
</template>

<script setup name='Home'>
import HomeNav from './components/HomeNav.vue';
import FSBanner from '@/components/FSBanner.vue'
import HomeCategory from './components/HomeCategory.vue';
import HomeNew from './components/HomeNew.vue';
import HomeHot from './components/HomeHot.vue';
import HomeProduct from './components/HomeProduct.vue';
</script>

<style scoped lang="scss">
.fs-home-page {
  .home-content {}
}
</style>
