<!-- 所有商品分类导航 -->

<template>
  <div class="fs-category-nav-box">
    <div class="container category-box">
      <h2 class="left-box">
        <span>所有分类</span>
      </h2>
      <div class="right-box">
        <LayoutHeaderUI />
      </div>
    </div>
  </div>
</template>

<script setup>
import LayoutHeaderUI from '@/views/Layout/components/LayoutHeaderUI.vue';
</script>

<style lang="scss" scoped>
.fs-category-nav-box {
  width: 100%;
  background: $fs-base-color-dark;

  .category-box {
    display: flex;

    .left-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 250px;
      background: #cd1076;
      font-size: 18px;
      line-height: 52px;
      font-weight: bold;
      text-align: center;
      color: #fff;
    }

    .right-box {
      width: calc(100% - 250px);
      display: flex;
      align-items: center;
      color: #ffffff;
    }
  }

}
</style>
