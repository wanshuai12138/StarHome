/* 组件功能：重定向到新的中国山水画背景组件
--------------------------------------------------
特性：
- 向后兼容的重定向组件
- 确保现有引用不会因重构而出错
--------------------------------------------------
Props：无
--------------------------------------------------
Emits：无
-------------------------------------------------- */

<template>
  <ChineseLandscape />
</template>

<script setup lang="ts">
import ChineseLandscape from './landscape/ChineseLandscape.vue'

// 重定向到新的组件实现
</script>

<style scoped>
/* 无样式，由新组件提供 */
</style>