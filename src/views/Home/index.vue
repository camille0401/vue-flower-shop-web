<template>
    <div class="home-page">
        <div class='container'>
            <HomeCategory />
            <HomeBanner />
        </div>

    </div>
</template>

<script setup name='Home'>
import HomeBanner from './components/Banner.vue'
import HomeCategory from './components/Category.vue'

</script>

<style scoped lang="scss"></style>