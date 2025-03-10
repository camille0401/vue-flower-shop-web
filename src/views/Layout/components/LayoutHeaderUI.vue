<template>
    <ul class="app-header-nav">
        <li class="home">
            <RouterLink to="/">首页</RouterLink>
        </li>
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
    // width: 820px;
    padding-left: 40px;
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
                color: $fs-base-color;
                border-bottom: 1px solid $fs-base-color;
            }
        }

        .active {
            color: $fs-base-color;
            border-bottom: 1px solid $fs-base-color;
        }
    }
}
</style>
