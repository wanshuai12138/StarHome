/* 组件功能：仙鹤元素效果
--------------------------------------------------
特性：
- 站立的仙鹤静态造型
- 远处飞行的仙鹤动态效果
--------------------------------------------------
Props：无
--------------------------------------------------
Emits：无
-------------------------------------------------- */

<template>
  <!-- 仙鹤元素 -->
  <div class="crane-container">
    <div class="crane crane-standing">
      <div class="crane-body"></div>
      <div class="crane-neck"></div>
      <div class="crane-head"></div>
      <div class="crane-leg-1"></div>
      <div class="crane-leg-2"></div>
    </div>
    
    <div class="crane crane-flying"
      :style="{
        '--y': `${20 + Math.random() * 15}%`, 
        '--delay': `${Math.random() * 3}s`,
        '--duration': `${15 + Math.random() * 10}s`,
      }">
      <div class="crane-body-flying"></div>
      <div class="crane-wings"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 无需额外逻辑
</script>

<style scoped>
/* == 仙鹤效果 ==
-----------------------------
结构：站立鹤 + 飞行鹤
动画：飞行轨迹 + 振翅
特点：白色优雅姿态 */
.crane-container {
  position: absolute;
  bottom: 15%;
  right: 25%;
  width: 100%;
  height: 60%;
  z-index: 7;
  pointer-events: none;
}

/* 站立的仙鹤 */
.crane-standing {
  position: absolute;
  bottom: 0;
  right: 15%;
  width: 40px;
  height: 80px;
  opacity: 0.9;
}

.crane-body {
  position: absolute;
  bottom: 20px;
  left: 15px;
  width: 20px;
  height: 30px;
  background-color: white;
  border-radius: 50% 50% 30% 30%;
  transform: rotate(-5deg);
}

.crane-neck {
  position: absolute;
  bottom: 45px;
  left: 19px;
  width: 5px;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  transform: rotate(-20deg);
}

.crane-head {
  position: absolute;
  bottom: 72px;
  left: 12px;
  width: 12px;
  height: 8px;
  background-color: white;
  border-radius: 50% 50% 20% 20%;
  transform: rotate(-10deg);
}

.crane-leg-1, .crane-leg-2 {
  position: absolute;
  bottom: 0;
  width: 2px;
  height: 20px;
  background-color: #333;
}

.crane-leg-1 {
  left: 22px;
}

.crane-leg-2 {
  left: 28px;
}

/* 飞行的仙鹤 */
.crane-flying {
  position: absolute;
  top: var(--y);
  right: -10%;
  width: 60px;
  height: 30px;
  animation: craneFly var(--duration) linear infinite;
  animation-delay: var(--delay);
  opacity: 0.8;
}

.crane-body-flying {
  position: absolute;
  width: 25px;
  height: 10px;
  background-color: white;
  border-radius: 50% 50% 30% 30%;
}

.crane-wings {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Cpath fill='white' d='M25,10 Q40,0 60,5 Q40,10 25,10 Q10,10 0,5 Q20,0 25,10'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
  animation: wingsFlap 1s ease-in-out infinite;
}

/* 翅膀扇动动画 */
@keyframes wingsFlap {
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.7);
  }
}

/* 仙鹤飞行动画 */
@keyframes craneFly {
  0% {
    right: -10%;
    transform: translateY(0);
  }
  25% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(10px);
  }
  100% {
    right: 110%;
    transform: translateY(0);
  }
}
</style> 