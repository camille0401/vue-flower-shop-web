<template>
    <LayoutHeaderFixed />
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
</template>
<script setup name="Layout">
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutHeaderFixed from './components/LayoutHeaderFixed.vue'
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())
</script>
<style scoped lang="scss"></style>