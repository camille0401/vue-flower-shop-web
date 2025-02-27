<template>
    <header class='app-header'>
        <div class="container">
            <h1 class="logo">
                <RouterLink to="/">小兔鲜</RouterLink>
            </h1>
            <LayoutHeaderUI />
            <div class="app-header-member">
                <div class="search">
                    <i class="iconfont icon-search"></i>
                    <input type="text" placeholder="キーワードで検索する">
                    <el-button type="danger" plain>検索</el-button>
                </div>
                <!-- 头部购物车 -->

            </div>

        </div>
    </header>
</template>

<script setup name="LayoutHeader">
import LayoutHeaderUI from './LayoutHeaderUI.vue';
</script>

<style scoped lang='scss'>
.app-header {
    background: $bodyBgColor;

    .container {
        display: flex;
        align-items: center;
        column-gap: 40px;
    }

    .logo {
        width: 200px;

        a {
            display: block;
            height: 80px;
            width: 100%;
            text-indent: -9999px;
            background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
        }
    }

    .app-header-member {
        margin-left: auto;
    }

    .search {
        position: relative;
        display: flex;
        align-items: center;
        column-gap: 10px;
        height: 48px;
        border-bottom: 1px solid #e7e7e7;
        line-height: 48px;

        .icon-search {
            font-size: 18px;
            margin-left: 5px;
        }

        input {
            // width: 260px;
            // height: 48px;
            // padding-left: 5px;
            // background: transparent;
            // color: #666;
            // font-size: 1.8rem;

            flex-grow: 1;
            font-size: 1.6rem;
            font-weight: 500;
            letter-spacing: 0.05em;
            padding: 0 10px;
            border: 0;
        }

        .el-button {
            height: 100%;
        }

    }

    .cart {
        width: 50px;

        .curr {
            height: 32px;
            line-height: 32px;
            text-align: center;
            position: relative;
            display: block;

            .icon-cart {
                font-size: 22px;
            }

            em {
                font-style: normal;
                position: absolute;
                right: 0;
                top: 0;
                padding: 1px 6px;
                line-height: 1;
                background: $helpColor;
                color: #fff;
                font-size: 12px;
                border-radius: 10px;
                font-family: Arial;
            }
        }
    }
}
</style>