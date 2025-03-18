<template>
  <div class="fs-settlement-page">
    <div class="container">
      <div class="wrapper">
        <!-- 收货地址 -->
        <h3 class="box-title">收货人信息</h3>
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

  .wrapper {
    background: #fff;

    .box-title {
      font-size: 16px;
      font-weight: normal;
      padding: 0 40px;
      line-height: 70px;
      border-bottom: 1px solid #f0f0f0;
    }

    .box-address {
      // border: 1px solid red;
      padding: 20px 40px;
    }
  }
}
</style>
