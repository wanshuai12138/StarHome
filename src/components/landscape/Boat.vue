/* 组件功能：孤舟渔舟效果
--------------------------------------------------
特性：
- 小船上下浮动
- 船上人影轮廓
--------------------------------------------------
Props：无
--------------------------------------------------
Emits：无
-------------------------------------------------- */

<template>
  <!-- 孤舟元素 -->
  <div class="boat-container">
    <div class="boat">
      <div class="boat-body"></div>
      <div class="boat-person"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 无需额外逻辑
</script>

<style scoped>
/* == 孤舟效果 ==
-----------------------------
结构：小船 + 船上人影
动画：轻微上下浮动
特点：水上漂移 */
.boat-container {
  position: absolute;
  bottom: 20%;
  left: 70%;
  width: 60px;
  height: 30px;
  animation: boatFloat 8s ease-in-out infinite;
  z-index: 8;
  pointer-events: none;
  opacity: 0.85;
  transform: scale(0.8);
}

.boat {
  position: relative;
  width: 100%;
  height: 100%;
}

.boat-body {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 15'%3E%3Cpath fill='%23483428' d='M5,15 C5,10 15,5 30,5 C45,5 55,10 55,15 L5,15 Z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
}

.boat-person {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 15px;
  height: 12px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15 12'%3E%3Cellipse cx='7.5' cy='3' rx='3' ry='3' fill='%23333333'/%3E%3Crect x='6' y='3' width='3' height='9' fill='%23333333'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
}

/* 小船漂浮动画 */
@keyframes boatFloat {
  0%, 100% {
    transform: translateY(0) scale(0.8);
  }
  50% {
    transform: translateY(-8px) scale(0.8);
  }
}
</style> 