<template>
    <div class="home-category">
        <ul class="menu">
            <li v-for="item in 9" :key="item">
                <p class="main-menu">
                    <RouterLink to="/">居家</RouterLink>
                </p>
                <div class="sub-menu">
                    <RouterLink v-for="i in 7" :key="i" to="/">南北干货</RouterLink>
                </div>
                <!-- 弹层layer位置 -->
                <div class="layer">
                    <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
                    <ul>
                        <li v-for="i in 5" :key="i">
                            <RouterLink to="/">
                                <img alt="" />
                                <div class="info">
                                    <p class="name ellipsis-2">
                                        男士外套
                                    </p>
                                    <p class="desc ellipsis">男士外套，冬季必选</p>
                                    <p class="price"><i>¥</i>200.00</p>
                                </div>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup name="HomeCategory">

</script>

<style scoped lang='scss'>
.home-category {
    width: 250px;
    height: 500px;
    background: rgba(0, 0, 0, 0.7);
    position: relative;
    z-index: 99;

    .menu {
        height: 500px;
        overflow-y: auto;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            width: 0;
            height: 0;
        }

        li {
            // padding-left: 40px;
            // height: 55px;
            // line-height: 55px;
            padding: 10px 20px;
            border-bottom: 1px dashed rgba(255, 255, 255, 0.2);

            a {
                margin-right: 4px;
                color: #fff;

                // &:first-child {
                //     font-size: 1.6rem;
                // }
            }

            &:hover {
                background: $fs-base-color-light;
                transition: all .2s linear;

                a {
                    color: #fff;
                }
            }

            .main-menu {
                a {
                    font-size: 1.6rem;
                    line-height: 5rem;
                }
            }

            .sub-menu {
                display: flex;
                flex-wrap: wrap;

                a {
                    padding: 0 5px;
                    padding-left: 0;
                    line-height: 2.4rem;
                }

            }



            .layer {
                width: 990px;
                height: 500px;
                background: rgba(255, 255, 255, 0.8);
                position: absolute;
                left: 250px;
                top: 0;
                display: none;
                padding: 0 15px;

                h4 {
                    font-size: 2rem;
                    font-weight: normal;
                    line-height: 8rem;

                    small {
                        font-size: 1.6rem;
                        color: #666;
                    }
                }

                ul {
                    display: flex;
                    flex-wrap: wrap;

                    li {
                        width: 310px;
                        height: 120px;
                        margin-right: 15px;
                        margin-bottom: 15px;
                        border: 1px solid #eee;
                        border-radius: 4px;
                        background: #fff;

                        &:nth-child(3n) {
                            margin-right: 0;
                        }

                        a {
                            display: flex;
                            width: 100%;
                            height: 100%;
                            align-items: center;
                            padding: 10px;

                            &:hover {
                                background: #e3f9f4;
                            }

                            img {
                                width: 95px;
                                height: 95px;
                            }

                            .info {
                                padding-left: 10px;
                                line-height: 2.4rem;
                                overflow: hidden;

                                .name {
                                    font-size: 1.6rem;
                                    color: #666;
                                }

                                .desc {
                                    color: #999;
                                }

                                .price {
                                    font-size: 2.2rem;
                                    color: $priceColor;

                                    i {
                                        font-size: 1.6rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // 关键样式  hover状态下的layer盒子变成block
            &:hover {
                .layer {
                    display: block;
                }
            }
        }
    }
}
</style>
