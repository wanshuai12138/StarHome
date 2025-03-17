/* 组件功能：竹林点缀效果
--------------------------------------------------
特性：
- 竹竿和竹叶结构
- 轻微摆动动画
--------------------------------------------------
Props：无
--------------------------------------------------
Emits：无
-------------------------------------------------- */

<template>
  <!-- 竹林点缀 -->
  <div class="bamboo-container">
    <div v-for="n in 8" :key="`bamboo-${n}`" 
         class="bamboo"
         :style="{
           '--x': `${70 + Math.random() * 20}%`,
           '--height': `${100 + Math.random() * 100}px`,
           '--width': `${2 + Math.random() * 2}px`,
           '--rotation': `${Math.random() * 10 - 5}deg`
         }">
      <div v-for="m in 5" :key="`leaf-${m}`" 
           class="bamboo-leaf"
           :style="{
             '--leaf-angle': `${-60 + m * 30}deg`,
             '--leaf-y': `${m * 20}%`
           }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 无需额外逻辑
</script>

<style scoped>
/* == 竹林效果 ==
-----------------------------
结构：竹竿 + 竹叶
动画：轻微摆动
特点：渐变节点效果 */
.bamboo-container {
  position: absolute;
  bottom: 0;
  right: 10%;
  width: 150px;
  height: 50%;
  z-index: 5;
}

/* 竹竿样式 - 渐变节点效果 */
.bamboo {
  position: absolute;
  bottom: 0;
  left: var(--x);
  width: var(--width);
  height: var(--height);
  background-color: #0b4619;
  transform: rotate(var(--rotation));
  transform-origin: bottom center;
  animation: bambooSway 8s ease-in-out infinite;
  animation-delay: calc(var(--x) * 0.01s);
}

/* 竹节效果 - 使用伪元素实现 */
.bamboo::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, transparent 10%, rgba(0, 0, 0, 0.1) 10%, transparent 12%, transparent 25%, rgba(0, 0, 0, 0.1) 25%, transparent 27%, transparent 40%, rgba(0, 0, 0, 0.1) 40%, transparent 42%, transparent 55%, rgba(0, 0, 0, 0.1) 55%, transparent 57%, transparent 70%, rgba(0, 0, 0, 0.1) 70%, transparent 72%, transparent 85%, rgba(0, 0, 0, 0.1) 85%, transparent 87%);
}

/* 竹叶样式 - 椭圆形状 */
.bamboo-leaf {
  position: absolute;
  width: 20px;
  height: 5px;
  background: linear-gradient(to right, rgba(60, 120, 80, 0.8), rgba(50, 100, 60, 0.6));
  border-radius: 50%;
  left: 100%;
  top: var(--leaf-y);
  transform-origin: left center;
  transform: rotate(var(--leaf-angle));
  animation: bambooLeafSway 8s ease-in-out infinite;
  animation-delay: calc(var(--leaf-y) * 0.01s);
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
}

/* 竹竿轻微摇摆 */
@keyframes bambooSway {
  0%, 100% {
    transform: rotate(var(--rotation));
  }
  50% {
    transform: rotate(calc(var(--rotation) + 2deg));
  }
}

/* 竹叶摆动 */
@keyframes bambooLeafSway {
  0%, 100% {
    transform: rotate(var(--leaf-angle));
  }
  50% {
    transform: rotate(calc(var(--leaf-angle) + 10deg));
  }
}
</style> 