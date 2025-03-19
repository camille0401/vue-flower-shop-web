<template>
  <ul class="app-header-nav">
    <li class="home" v-for="category in categoryStore.categoryList" :key="category.id">
      <RouterLink active-class="active" :to="`/category/${category.id}`">{{ category.name }}</RouterLink>
    </li>
  </ul>
</template>

<script setup name="LayoutHeaderUI">
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()
</script>

<style lang="scss" scoped>
.app-header-nav {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  z-index: 998;
  flex-shrink: 0;

  li {
    margin-right: 20px;
    width: 38px;
    text-align: center;

    a {
      font-size: 1.6rem;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: #fff;
        border-bottom: 1px solid #fff;
      }
    }

    .active {
      color: #fff;
      border-bottom: 1px solid #fff;
    }
  }
}
</style>
