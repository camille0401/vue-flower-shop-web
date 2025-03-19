<template>
  <div class="app-header-sticky" :class="{ show: y > 98 }">
    <div class="container header-sticky-box">
      <FSLogo />
      <!-- 导航区域 -->
      <div class="right-box">
        <LayoutHeaderUI />
      </div>
    </div>
  </div>
</template>

<script setup name="LayoutHeaderFixed">
import FSLogo from "@/components/FSLogo.vue";
import LayoutHeaderUI from './LayoutHeaderUI.vue';
import { useScroll } from '@vueuse/core';

const { y } = useScroll(window);

</script>
<style scoped lang='scss'>
.app-header-sticky {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100px;
  background-color: $fs-base-color-light;
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

  .header-sticky-box {
    display: flex;
    align-items: center;

    .right-box {
      display: flex;
      align-items: center;
      width: calc(100% - 250px);
      padding-left: 40px;

      a {
        &:hover {
          color: $fs-base-color-dark;
          border-bottom: 1px solid $fs-base-color-dark;
        }
      }

      .active {
        color: $fs-base-color-dark;
        border-bottom: 1px solid $fs-base-color-dark;
      }
    }
  }

}
</style>
