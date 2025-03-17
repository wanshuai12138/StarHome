/* 组件功能：梅花点缀效果
--------------------------------------------------
特性：
- 枝干和花朵布局
- 随机分布位置
--------------------------------------------------
Props：无
--------------------------------------------------
Emits：无
-------------------------------------------------- */

<template>
  <!-- 梅花点缀 -->
  <div class="plum-container">
    <div v-for="n in 12" :key="`plum-${n}`" 
         class="plum-branch"
         :style="{
           '--x': `${10 + Math.random() * 15}%`,
           '--y': `${10 + Math.random() * 40}%`,
           '--size': `${0.7 + Math.random() * 0.5}`,
           '--rotation': `${Math.random() * 60 - 30}deg`
         }">
      <div v-for="m in 5" :key="`flower-${m}`" class="plum-flower"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 无需额外逻辑
</script>

<style scoped>
/* == 梅花点缀 ==
-----------------------------
结构：枝干 + 花朵
动画：轻微摇摆
特点：随机分布位置 */
.plum-container {
  position: absolute;
  top: 0;
  right: 5%;
  width: 250px;
  height: 60%;
  z-index: 5;
}

/* 梅花枝干 - SVG实现弯曲效果 */
.plum-branch {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 100px;
  height: 80px;
  transform: scale(var(--size)) rotate(var(--rotation));
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 80'%3E%3Cpath fill='none' stroke='%233e291d' stroke-width='2' d='M10,60 Q30,40 60,30 Q80,25 90,10'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
}

/* 梅花花朵 - SVG实现双层效果 */
.plum-flower {
  position: absolute;
  width: 12px;
  height: 12px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='5' fill='%23fae0e4'/%3E%3Ccircle cx='10' cy='10' r='3' fill='%23fec5d9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
}

/* 每个位置花朵的差异化动画 */
.plum-branch .plum-flower:nth-child(1) {
  top: 10%;
  left: 85%;
  animation: flowerSway 4s ease-in-out infinite;
}

.plum-branch .plum-flower:nth-child(2) {
  top: 30%;
  left: 60%;
  animation: flowerSway 4.2s ease-in-out infinite 0.5s;
}

.plum-branch .plum-flower:nth-child(3) {
  top: 45%;
  left: 40%;
  animation: flowerSway 3.8s ease-in-out infinite 1s;
}

.plum-branch .plum-flower:nth-child(4) {
  top: 55%;
  left: 25%;
  animation: flowerSway 4.4s ease-in-out infinite 0.3s;
}

.plum-branch .plum-flower:nth-child(5) {
  top: 70%;
  left: 10%;
  animation: flowerSway 4s ease-in-out infinite 0.8s;
}

/* 梅花小幅度摆动 */
@keyframes flowerSway {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(15deg);
  }
}
</style> 