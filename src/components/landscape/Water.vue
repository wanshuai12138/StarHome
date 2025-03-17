/* 组件功能：流水与波纹效果
--------------------------------------------------
特性：
- 底部水流动画
- 动态生成波纹涟漪
--------------------------------------------------
Props：
- ripplesRef: Ref(HTMLElement | null) 波纹容器引用
--------------------------------------------------
Emits：无
-------------------------------------------------- */

<template>
  <!-- 流水效果 -->
  <div class="water-container">
    <div class="water-flow"></div>
    <div ref="ripplesContainer" class="ripples"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

// == 属性定义 ==
const props = defineProps<{
  ripplesRef?: { value: HTMLElement | null } 
}>()

// == 响应式状态 ==
const ripplesContainer = ref<HTMLElement | null>(null)

// == 工具函数 ==
/* 生成指定范围内的随机数
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {number} - 随机数结果
 */
const random = (min: number, max: number): number => Math.random() * (max - min) + min

/* 创建水波纹效果
 * @param {number} x - 波纹中心x坐标
 * @param {number} y - 波纹中心y坐标
 * @description 在指定位置创建扩散波纹，并在动画结束后自动移除
 */
const createRipple = (x: number, y: number): void => {
  if (!ripplesContainer.value) return
  
  const ripple = document.createElement('div')
  ripple.classList.add('ripple')
  
  const size = random(30, 100)
  const duration = random(2, 4)
  
  // 设置样式
  Object.assign(ripple.style, {
    left: `${x}px`,
    top: `${y}px`,
    width: `${size}px`,
    height: `${size}px`,
    animationDuration: `${duration}s`,
    border: '1.5px solid rgba(255, 255, 255, 0.4)' // 更加明显的波纹边框
  })
  
  ripplesContainer.value.appendChild(ripple)
  
  // 动画结束后移除
  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple)
    }
  }, duration * 1000)
}

/* 创建雨滴波纹效果
 * @description 随机在水面区域创建雨滴波纹
 */
const createRainRipples = (): void => {
  setInterval(() => {
    if (!ripplesContainer.value) return
    
    // 随机在水面区域创建波纹
    const waterContainerHeight = window.innerHeight * 0.25
    const waterContainerTop = window.innerHeight - waterContainerHeight
    
    // 使用固定计算而不是DOM查询，避免查询失败
    const x = random(0, window.innerWidth)
    const y = random(waterContainerTop + waterContainerHeight * 0.1, window.innerHeight * 0.95)
    
    createRipple(x, y)
  }, 200) // 每200ms创建一个雨滴波纹，频率提高
}

/* 生成随机波纹效果
 * @description 定时在水面区域生成随机位置的波纹，增强动态感
 */
const createRandomRipples = (): void => {
  if (!ripplesContainer.value) return
  
  setInterval(() => {
    const x = random(0, window.innerWidth)
    const y = random(window.innerHeight * 0.6, window.innerHeight * 0.9)
    
    createRipple(x, y)
  }, 3000)
}

// == 生命周期钩子 ==
/* 组件挂载完成后初始化波纹效果 */
onMounted(() => {
  // 延迟初始化以确保DOM已渲染
  setTimeout(() => {
    createRandomRipples()
    createRainRipples()
  }, 500)
})

// 当父组件引用更新时，更新本地引用
watch(() => props.ripplesRef, (newRef) => {
  if (newRef && props.ripplesRef && ripplesContainer.value) {
    props.ripplesRef.value = ripplesContainer.value
  }
})
</script>

<style scoped>
/* == 流水效果 ==
-----------------------------
结构：底部水流 + 波纹
动画：水流循环 + 波纹扩散
特点：多层次水波交错 */
.water-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;
  z-index: 4;
  overflow: hidden;
}

/* 流水基础层 - 水平循环动画 */
.water-flow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Cpath fill='%23384d5c' fill-opacity='0.15' d='M0,200 L0,150 Q50,130 100,140 Q150,150 200,140 Q250,130 300,140 Q350,150 400,140 Q450,130 500,140 Q550,150 600,140 Q650,130 700,140 Q750,150 800,140 Q850,130 900,140 Q950,150 1000,140 Q1050,130 1100,140 Q1150,150 1200,140 L1200,200 Z'/%3E%3C/svg%3E");
  animation: waterFlow 20s linear infinite;
}

/* 波纹容器 - 动态添加波纹元素 */
.ripples {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* 波纹元素样式 - 圆形扩散动画 */
.ripple {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transform: translate(-50%, -50%) scale(0);
  animation: rippleEffect 3s ease-out forwards;
}

/* 水流水平循环移动 */
@keyframes waterFlow {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* 波纹从中心向外扩散渐隐 */
@keyframes rippleEffect {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
    border-width: 1px;
  }
  100% {
    transform: translate(-50%, -50%) scale(10);
    opacity: 0;
    border-width: 0.1px;
  }
}
</style> 