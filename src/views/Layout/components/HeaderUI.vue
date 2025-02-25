<template>
    <ul class="app-header-nav">
        <li class="home">
            <RouterLink to="/">首页</RouterLink>
        </li>
        <li>
            <RouterLink to="/">居家</RouterLink>
        </li>
        <li>
            <RouterLink to="/">美食</RouterLink>
        </li>
        <li>
            <RouterLink to="/">服饰</RouterLink>
        </li>
    </ul>
</template>

<script setup name="HeaderUI">

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
        margin-right: 40px;
        width: 38px;
        text-align: center;

        a {
            font-size: 1.6rem;
            line-height: 32px;
            height: 32px;
            display: inline-block;

            &:hover {
                color: $xtxColor;
                border-bottom: 1px solid $xtxColor;
            }
        }

        .active {
            color: $xtxColor;
            border-bottom: 1px solid $xtxColor;
        }
    }
}
</style>