/* 组件功能：落叶飘落效果
--------------------------------------------------
特性：
- 多种形状的落叶随风飘落
- 随机大小、速度和旋转
--------------------------------------------------
Props：无
--------------------------------------------------
Emits：无
-------------------------------------------------- */

<template>
  <!-- 落叶效果 -->
  <div class="falling-leaves-container">
    <div v-for="n in 30" :key="`leaf-${n}`" 
         class="falling-leaf"
         :style="{
           '--fall-delay': `${n * 1.5}s`,
           '--fall-duration': `${12 + Math.random() * 18}s`,
           '--leaf-size': `${8 + Math.random() * 18}px`,
           '--start-position': `${Math.random() * 40}%`,
           '--rotation-speed': `${Math.random() < 0.5 ? '' : '-'}${8 + Math.random() * 12}s`,
           '--leaf-color': `rgba(${30 + Math.random() * 20}, ${40 + Math.random() * 30}, ${10 + Math.random() * 20}, ${0.6 + Math.random() * 0.4})`
         }">
    </div>
  </div>
</template>

<script setup lang="ts">
// 无需额外逻辑
</script>

<style scoped>
/* == 落叶效果 ==
-----------------------------
结构：多形状落叶
动画：下落 + 旋转 + 摇摆
特点：随机大小和延迟 */
.falling-leaves-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 15;
  overflow: hidden;
  opacity: 0.85;
}

/* 落叶基础样式 - 随机尺寸和颜色 */
.falling-leaf {
  position: absolute;
  top: -50px;
  left: var(--start-position);
  width: var(--leaf-size);
  height: calc(var(--leaf-size) * 0.8);
  background-color: var(--leaf-color);
  border-radius: 50% 50% 50% 0;
  opacity: 0.7;
  animation: 
    fallDown var(--fall-duration) ease-in infinite var(--fall-delay),
    rotate var(--rotation-speed) linear infinite,
    leafSway 3s ease-in-out infinite;
  filter: blur(1px);
  transform-origin: center center;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

/* 第一种形状落叶 */
.falling-leaf:nth-child(3n+1) {
  border-radius: 50% 20% 50% 20%;
  height: calc(var(--leaf-size) * 0.9);
}

/* 第二种形状落叶 */
.falling-leaf:nth-child(3n+2) {
  border-radius: 20% 50% 20% 50%;
  width: calc(var(--leaf-size) * 0.9);
}

/* 落叶茎部 - 使用伪元素实现 */
.falling-leaf::before {
  content: '';
  position: absolute;
  top: 10%;
  left: 50%;
  width: 1px;
  height: 60%;
  background: rgba(60, 40, 20, 0.6);
  transform: translateX(-50%);
}

/* 叶子从上到下飘落轨迹 */
@keyframes fallDown {
  0% {
    transform: translateY(-50px) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  40% {
    transform: translateY(30vh) translateX(100px);
  }
  60% {
    transform: translateY(50vh) translateX(200px);
  }
  80% {
    transform: translateY(75vh) translateX(280px);
  }
  100% {
    transform: translateY(105vh) translateX(350px);
    opacity: 0;
  }
}

/* 物体旋转动画 */
@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 落叶左右摇摆 */
@keyframes leafSway {
  0%, 100% { margin-left: 0; }
  60% { margin-left: 25px; }
}
</style> 