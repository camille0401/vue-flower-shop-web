<template>
  <div class="app-header-sticky" :class="{ show: y > 98 }">
    <div class="container">
      <FSLogo />
      <!-- 导航区域 -->
      <LayoutHeaderUI />
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup name="LayoutHeaderFixed">
import FSLogo from "@/components/FSLogo.vue";
import LayoutHeaderUI from './LayoutHeaderUI.vue';
import { useScroll } from '@vueuse/core';

const { y } = useScroll(window);

console.log(y)
</script>
<style scoped lang='scss'>
.app-header-sticky {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  // border-bottom: 1px solid #e4e4e4;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $fs-base-color;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 1.6rem;
      line-height: 1;

      &:hover {
        color: $fs-base-color;
      }
    }
  }
}
</style>
