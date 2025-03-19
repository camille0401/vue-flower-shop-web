<template>
  <div class="fs-home-nav">
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
import LayoutHeaderUI from "@/views/Layout/components/LayoutHeaderUI.vue";

</script>

<style lang="scss" scoped>
.fs-home-nav {
  .category-box {
    display: flex;
    background: $fs-base-color-dark;

    .left-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 250px;
      border-radius: var(--el-border-radius-base) var(--el-border-radius-base) 0 0;
      background: $fs-base-color-dark;
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
      padding-left: 20px;
    }
  }
}
</style>
