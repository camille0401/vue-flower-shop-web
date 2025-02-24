<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
  <div>
    <span @click.stop="toggleDark()">暗黑模式</span>
    <el-switch size="small" v-model="isDark" />
  </div>
  <RouterView />
</template>

<style scoped></style>
