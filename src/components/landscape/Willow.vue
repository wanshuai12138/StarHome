/* 组件功能：柳树摇曳效果
--------------------------------------------------
特性：
- 柳树树干和柳条随风摇曳
- 自然随机摆动效果
--------------------------------------------------
Props：无
--------------------------------------------------
Emits：无
-------------------------------------------------- */

<template>
  <!-- 柳树摇曳 -->
  <div class="willow-container">
    <div class="willow-tree">
      <div class="willow-trunk"></div>
      <div class="willow-branches">
        <div v-for="n in 40" :key="`branch-${n}`" 
             class="willow-branch"
             :style="{
               '--delay': `${(n * 0.15) % 3}s`,
               '--length': `${120 + Math.random() * 160}px`,
               '--angle': `${15 + n * 4}deg`,
               '--sway-amount': `${5 + Math.random() * 10}deg`
             }"></div>
      </div>
    </div>
    
    <!-- 第二棵柳树 -->
    <div class="willow-tree second-tree">
      <div class="willow-trunk"></div>
      <div class="willow-branches">
        <div v-for="n in 35" :key="`branch2-${n}`" 
             class="willow-branch"
             :style="{
               '--delay': `${(n * 0.12) % 3 + 0.5}s`,
               '--length': `${100 + Math.random() * 140}px`,
               '--angle': `${25 + n * 3.8}deg`,
               '--sway-amount': `${6 + Math.random() * 9}deg`
             }"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 无需额外逻辑
</script>

<style scoped>
/* == 柳树效果 ==
-----------------------------
结构：树干 + 柳条 + 叶片
动画：摇曳 + 飘动
特点：自然随机摆动 */
.willow-container {
  position: absolute;
  top: 5%;
  left: 5%;
  width: 45%;
  height: 50%;
  z-index: 20;
  pointer-events: none;
}

/* 柳树基础样式 - 位置和比例 */
.willow-tree {
  position: absolute;
  top: 0;
  left: 10%;
  width: 40px;
  transform-origin: top center;
}

/* 第二棵柳树 - 错开位置和缩小比例 */
.second-tree {
  left: 30%;
  top: 10%;
  transform: scale(0.85);
  opacity: 0.9;
}

/* 柳树树干 - 垂直渐变和摇摆动画 */
.willow-trunk {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 120px;
  background: linear-gradient(to bottom, #3a2c23, #5a4535);
  border-radius: 2px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  transform-origin: top center;
  animation: trunkSway 10s ease-in-out infinite;
}

/* 柳树分支容器 */
.willow-branches {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
}

/* 柳条样式 - 随机角度和长度 */
.willow-branch {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: var(--length);
  background: linear-gradient(to bottom, #5a4535, transparent);
  transform-origin: top center;
  transform: rotate(var(--angle));
  animation: sway 8s ease-in-out infinite;
  animation-delay: var(--delay);
  opacity: 0.8;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

/* 柳叶效果 - 使用伪元素实现 */
.willow-branch::after {
  content: '';
  position: absolute;
  top: 15px;
  left: 0;
  width: 100%;
  height: calc(100% - 15px);
  background: linear-gradient(to right, transparent, rgba(90, 120, 70, 0.5) 5%, rgba(90, 120, 70, 0.5) 95%, transparent);
  transform-origin: top center;
  transform: scaleX(25) skewX(5deg);
  border-radius: 50%;
  filter: blur(1px);
  animation: willowLeafSway 6s ease-in-out infinite;
  animation-delay: calc(var(--delay) + 0.5s);
}

/* 柳条左右摇摆 */
@keyframes sway {
  0%, 100% { transform: rotate(calc(var(--angle) - var(--sway-amount) * 0.5)); }
  50% { transform: rotate(calc(var(--angle) + var(--sway-amount))); }
}

/* 树干轻微摇摆 */
@keyframes trunkSway {
  0%, 100% { transform: translateX(-50%) rotate(-1deg); }
  50% { transform: translateX(-50%) rotate(2deg); }
}

/* 柳叶水平伸展摇摆 */
@keyframes willowLeafSway {
  0% { transform: scaleX(20) skewX(-2deg); }
  50% { transform: scaleX(22) skewX(3deg); }
  100% { transform: scaleX(20) skewX(-2deg); }
}
</style> 