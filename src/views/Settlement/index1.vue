<template>
  <div class="fs-settlement-page">
    <div class="container">
      <div class="wrapper">
        <!-- 收货地址 -->
        <h3 class="box-title with-action">
          <font style="vertical-align: inherit;">收货人信息</font>
          <div class="title-btns">
            <el-button type="primary">新增地址</el-button>
            <el-button type="primary">切换地址</el-button>
          </div>
        </h3>
        <div class="box-address">
          <AddressCU />
        </div>
        <h3 class="box-title">订购人信息</h3>
        <h3 class="box-title">收货地址</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import AddressCU from './components/AddressCU.vue';
</script>

<style lang="scss" scoped>
.fs-settlement-page {
  margin-top: 20px;

  // ::v-deep(.el-form-item__label) {
  //   color: #333 !important;
  // }

  // ::v-deep(.el-input__wrapper) {
  //   box-shadow: 0 0 0 1px $fs-base-color;
  // }

  // ::v-deep(.el-select__wrapper) {
  //   box-shadow: 0 0 0 1px $fs-base-color;
  // }

  // ::v-deep(.el-select__placeholder.is-transparent) {
  //   color: #333 !important;
  // }

  .wrapper {
    background: #fff;

    .box-title {
      font-size: 16px;
      font-weight: normal;
      padding: 0 40px;
      line-height: 70px;
      border-bottom: 1px solid #f0f0f0;

      &.with-action {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    // box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color))
    .box-address {
      // border: 1px solid red;
      padding: 20px 40px;
      border-bottom: 1px solid #f0f0f0;
    }
  }
}
</style>
