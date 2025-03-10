<template>
    <header class='app-header'>
        <div class="container">
            <h1 class="logo">
                <RouterLink to="/">FLOWER SHOP</RouterLink>
            </h1>
            <LayoutHeaderUI />
            <div class="app-header-member">
                <div class="search">
                    <i class="iconfont icon-search"></i>
                    <input type="text" placeholder="キーワードで検索する">
                    <el-button type="primary">検索</el-button>
                </div>
                <!-- 头部购物车 -->
                <HeaderCart />
            </div>

        </div>
    </header>
</template>

<script setup name="LayoutHeader">
import LayoutHeaderUI from "./LayoutHeaderUI.vue";
import HeaderCart from "./HeaderCart.vue";
</script>

<style scoped lang='scss'>
.app-header {
    // background: #FFFFFF;

    .container {
        display: flex;
        align-items: center;
        column-gap: 20px;
    }

    .logo {
        width: 200px;

        a {
            display: block;
            height: 100px;
            width: 100%;
            text-indent: -9999px;
            background: url('@/assets/images/logo.png') no-repeat center / contain;
        }
    }

    .app-header-member {
        display: flex;
        align-items: center;
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
            font-size: 1.8rem;
            margin-left: 5px;
        }

        input {
            // width: 260px;
            // height: 48px;
            // padding-left: 5px;
            // background: transparent;
            // color: #666;
            // font-size: 1.8rem;
            height: 100%;
            background: transparent;
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
                font-size: 2.2rem;
            }

            em {
              position: absolute;
              right: 0;
              top: 0;
              padding: 1px 6px;
              background: $helpColor;
              line-height: 1;
              font-style: normal;
                color: #fff;
                font-size: 1.2rem;
                border-radius: 10px;
                font-family: Arial;
            }
        }
    }
}
</style>
