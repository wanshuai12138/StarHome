/* 组件功能：飞鸟点缀效果
--------------------------------------------------
特性：
- 远处多只飞鸟飞行
- 翅膀扇动动态效果
--------------------------------------------------
Props：无
--------------------------------------------------
Emits：无
-------------------------------------------------- */

<template>
  <!-- 飞鸟点缀 -->
  <div class="birds-container">
    <div v-for="n in 6" :key="`bird-${n}`" 
         class="bird"
         :style="{
           '--delay': `${n * 4}s`,
           '--duration': `${15 + Math.random() * 10}s`,
           '--y': `${10 + Math.random() * 30}%`,
           '--size': `${5 + Math.random() * 5}px`
         }">
      <div class="bird-wings"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 无需额外逻辑
</script>

<style scoped>
/* == 飞鸟效果 ==
-----------------------------
结构：鸟形SVG
动画：飞行路径 + 翅膀扇动
特点：随机高度和时间 */
.birds-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  z-index: 5;
  pointer-events: none;
}

/* 飞鸟基础样式 - 随机高度和动画延迟 */
.bird {
  position: absolute;
  top: var(--y);
  left: -5%;
  width: var(--size);
  height: calc(var(--size) * 0.6);
  animation: birdFly var(--duration) linear infinite;
  animation-delay: var(--delay);
}

/* 鸟翅膀 - SVG实现形状，添加扇动动画 */
.bird-wings {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 12'%3E%3Cpath fill='%23000000' d='M10,0 Q15,3 20,0 Q15,6 10,5 Q5,6 0,0 Q5,3 10,0'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.7;
  animation: wingFlap 0.5s ease-in-out infinite;
}

/* 飞鸟从左到右飞行轨迹 */
@keyframes birdFly {
  0% {
    left: -5%;
    transform: translateY(0);
  }
  25% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(15px);
  }
  100% {
    left: 110%;
    transform: translateY(0);
  }
}

/* 鸟翅膀上下扇动 */
@keyframes wingFlap {
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.7);
  }
}
</style> 