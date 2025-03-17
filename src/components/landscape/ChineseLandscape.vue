/* 组件功能：中国山水画风格背景主容器
--------------------------------------------------
特性：
- 集成各子组件形成完整山水画
- 负责布局和组合各元素
--------------------------------------------------
Props：无
--------------------------------------------------
Emits：无
-------------------------------------------------- */

<template>
  <div class="ink-landscape">
    <div class="gradient-bg"></div>
    <Mountains />
    <Mist />
    <!-- <Water :ripplesRef="ripplesContainer" /> -->
    <Rain />
    <Boat />
    <Crane />
    <Willow />
    <FallingLeaves />
    <Plum />
    <Birds />
    <Bamboo />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 使用类型断言导入组件
import Mountains from './Mountains.vue';
import Mist from './Mist.vue';
import Water from './Water.vue';
import Rain from './Rain.vue';
import Boat from './Boat.vue';
import Crane from './Crane.vue';
import Willow from './Willow.vue';
import FallingLeaves from './FallingLeaves.vue';
import Plum from './Plum.vue';
import Birds from './Birds.vue';
import Bamboo from './Bamboo.vue';
// 导入共享动画样式
import './animations.css';

// == 响应式状态 ==
// DOM引用 - 波纹容器
const ripplesContainer = ref<HTMLElement | null>(null)

// == 生命周期钩子 ==
/* 组件挂载完成后初始化背景效果 */
onMounted(() => {
  console.log('中国山水画背景初始化成功')
  console.log('波纹容器引用:', ripplesContainer.value)
})
</script>

<style scoped>
/* == 主容器样式 ==
-----------------------------
布局：固定定位全屏
层级：最底层背景
特性：溢出隐藏 */
.ink-landscape {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  background-color: #f8f8f0;
}

/* == 背景渐变 ==
-----------------------------
效果：多重径向渐变叠加
颜色：暖色调顶光 + 冷色调底部 */
.gradient-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 70% 20%,
    rgba(255, 243, 210, 0.8) 0%,
    rgba(255, 243, 210, 0) 50%
  ), radial-gradient(
    circle at 20% 80%,
    rgba(226, 240, 245, 0.7) 0%,
    rgba(226, 240, 245, 0) 60%
  ), linear-gradient(
    to bottom,
    rgba(245, 245, 235, 1) 0%,
    rgba(230, 240, 245, 0.8) 100%
  );
  z-index: 1;
}
</style> 