<template>
    <div class="home-panel">
        <div class="container">
            <div class="head">
                <!-- 主标题和副标题 -->
                <h3>
                    {{ title }}<small>{{ subTitle }}</small>
                </h3>
            </div>
            <!-- 主体内容区域 -->
            <slot name="main"></slot>
        </div>
    </div>
</template>

<script setup name="HomePanel">
import { defineProps } from "vue"

defineProps({
    title: {
        type: String,
    },
    subTitle: {
        type: String
    }
})

</script>

<style scoped lang='scss'>
.home-panel {
    .head {
        padding: 40px 0;
        display: flex;
        align-items: flex-end;

        h3 {
            flex: 1;
            font-size: 3.2rem;
            font-weight: normal;
            margin-left: 6px;
            height: 35px;
            line-height: 35px;

            small {
                font-size: 1.6rem;
                color: #999;
                margin-left: 20px;
            }
        }
    }
}
</style>
