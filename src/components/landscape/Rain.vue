/* 组件功能：雨滴效果
--------------------------------------------------
特性：
- 多个细长雨滴随机下落
- 随机速度和位置
--------------------------------------------------
Props：无
--------------------------------------------------
Emits：无
-------------------------------------------------- */

<template>
  <!-- 雨滴效果 -->
  <div class="rain-container">
    <div v-for="n in 150" :key="`raindrop-${n}`" class="raindrop"
      :style="{
        '--delay': `${Math.random() * 5}s`,
        '--duration': `${0.5 + Math.random() * 1}s`,
        '--x-pos': `${Math.random() * 100}%`,
      }">
    </div>
  </div>
</template>

<script setup lang="ts">
// 无需额外逻辑
</script>

<style scoped>
/* == 雨滴效果 ==
-----------------------------
结构：多个细长雨滴
动画：从上到下落下
特点：随机速度和位置 */
.rain-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.raindrop {
  position: absolute;
  top: -20px;
  left: var(--x-pos);
  width: 1.5px;
  height: 20px;
  background: linear-gradient(to bottom, rgba(220, 240, 255, 0), rgba(220, 240, 255, 0.8));
  animation: rainFall var(--duration) linear infinite;
  animation-delay: var(--delay);
  opacity: 0.8;
  filter: blur(0.5px);
  z-index: 10;
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.3);
}

/* 雨滴下落动画 */
@keyframes rainFall {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  5% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(100vh) translateX(15px);
    opacity: 0;
  }
}
</style> 