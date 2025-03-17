/* 组件功能：远山层叠效果
--------------------------------------------------
特性：
- 三层山峦叠加效果
- 由远及近渐变层次
--------------------------------------------------
Props：无
--------------------------------------------------
Emits：无
-------------------------------------------------- */

<template>
  <!-- 远山层叠 -->
  <div class="mountain-layers">
    <div class="mountain mountain-far"></div>
    <div class="mountain mountain-mid"></div>
    <div class="mountain mountain-near"></div>
  </div>
</template>

<script setup lang="ts">
// 无需额外逻辑
</script>

<style scoped>
/* == 远山层叠 ==
-----------------------------
结构：三层山峦SVG
特点：由远及近渐变
动画：无，静态层叠 */
.mountain-layers {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}

/* 远景、中景、近景山峦
   使用SVG路径实现山峦轮廓
   通过透明度区分远近层次 */
.mountain {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
}

/* 远景山峦 - 最浅色调，低透明度 */
.mountain-far {
  height: 30%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 300'%3E%3Cpath fill='%23728190' fill-opacity='0.2' d='M0,300 L0,230 Q50,220 100,180 Q150,140 200,150 Q250,160 300,140 Q350,120 400,170 Q450,220 500,210 Q550,200 600,180 Q650,160 700,190 Q750,220 800,190 Q850,160 900,140 Q950,120 1000,150 Q1050,180 1100,200 Q1150,220 1200,210 L1200,300 Z'/%3E%3C/svg%3E");
  opacity: 0.5;
}

/* 中景山峦 - 中等色调，中等透明度 */
.mountain-mid {
  height: 35%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 300'%3E%3Cpath fill='%235e7180' fill-opacity='0.4' d='M0,300 L0,200 Q50,180 100,190 Q150,200 200,170 Q250,140 300,170 Q350,200 400,190 Q450,180 500,150 Q550,120 600,150 Q650,180 700,200 Q750,220 800,210 Q850,200 900,180 Q950,160 1000,170 Q1050,180 1100,160 Q1150,140 1200,160 L1200,300 Z'/%3E%3C/svg%3E");
  opacity: 0.7;
}

/* 近景山峦 - 深色调，高透明度 */
.mountain-near {
  height: 40%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 300'%3E%3Cpath fill='%233c4751' fill-opacity='0.6' d='M0,300 L0,180 Q50,200 100,170 Q150,140 200,160 Q250,180 300,150 Q350,120 400,140 Q450,160 500,140 Q550,120 600,130 Q650,140 700,120 Q750,100 800,120 Q850,140 900,130 Q950,120 1000,140 Q1050,160 1100,150 Q1150,140 1200,160 L1200,300 Z'/%3E%3C/svg%3E");
  opacity: 0.8;
}
</style> 