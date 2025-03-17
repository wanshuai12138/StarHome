/* 组件功能：云雾飘渺效果
--------------------------------------------------
特性：
- 三层云雾渐变效果
- 错开漂浮动画
--------------------------------------------------
Props：无
--------------------------------------------------
Emits：无
-------------------------------------------------- */

<template>
  <!-- 云雾飘渺 -->
  <div class="mist-container">
    <div class="mist mist-1"></div>
    <div class="mist mist-2"></div>
    <div class="mist mist-3"></div>
  </div>
</template>

<script setup lang="ts">
// 无需额外逻辑
</script>

<style scoped>
/* == 云雾效果 ==
-----------------------------
结构：三层云雾SVG
动画：水平漂浮
特点：错开动画延迟 */
.mist-container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
}

/* 云雾基础样式 - 配置动画和初始透明度 */
.mist {
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  animation: mistFloat 25s ease-in-out infinite;
}

/* 上层云雾 - 左侧高位置 */
.mist-1 {
  top: 15%;
  left: -20%;
  width: 70%;
  height: 40%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 300'%3E%3Cpath fill='%23ffffff' fill-opacity='0.7' d='M50,250 Q100,200 150,230 Q200,260 250,230 Q300,200 350,220 Q400,240 450,220 Q500,200 550,230 Q600,260 650,240 Q700,220 750,250 L750,300 L50,300 Z'/%3E%3C/svg%3E");
  animation-delay: 0s;
}

/* 中层云雾 - 右侧中位置 */
.mist-2 {
  top: 30%;
  right: -20%;
  width: 80%;
  height: 30%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 300'%3E%3Cpath fill='%23ffffff' fill-opacity='0.6' d='M50,200 Q100,220 150,200 Q200,180 250,190 Q300,200 350,180 Q400,160 450,170 Q500,180 550,170 Q600,160 650,180 Q700,200 750,190 L750,300 L50,300 Z'/%3E%3C/svg%3E");
  animation-delay: -8s;
  animation-duration: 30s;
}

/* 下层云雾 - 中央低位置 */
.mist-3 {
  top: 45%;
  left: 10%;
  width: 60%;
  height: 35%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 300'%3E%3Cpath fill='%23ffffff' fill-opacity='0.5' d='M50,220 Q100,240 150,220 Q200,200 250,220 Q300,240 350,230 Q400,220 450,240 Q500,260 550,250 Q600,240 650,250 Q700,260 750,240 L750,300 L50,300 Z'/%3E%3C/svg%3E");
  animation-delay: -15s;
  animation-duration: 35s;
}

/* 云雾飘动动画 */
@keyframes mistFloat {
  0%, 100% {
    opacity: 0;
    transform: translateX(0%);
  }
  25%, 75% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.5;
    transform: translateX(30%);
  }
}
</style> 