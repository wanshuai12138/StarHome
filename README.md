# 山水流转 - 中国风个人网站

一个以中国传统山水画为灵感的个人网站模板，融合了现代前端技术与传统艺术美学，呈现"太白写意，山水流转，柳暗花明"的意境。

> [!NOTE]
> 请添加项目预览图到 `./public/preview.png` 路径下，或修改此处图片引用为您的实际预览图路径。

## ✨ 特色功能

- **山水画风背景**: 远山层叠、云雾缭绕、流水潺潺，营造立体深远的空间感
- **柳暗花明**: 动态柳树摇曳与落叶飘零，展现自然灵动之美
- **梅竹点缀**: 梅花与竹林装饰元素，表达文人志趣
- **水墨交互**: 鼠标互动产生水墨晕染效果，增强沉浸感
- **响应式设计**: 完美适配桌面与移动设备
- **前端技术栈**: Vue 3 + Vite + TypeScript

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 🎨 自定义指南

本项目设计为易于自定义，即使对前端不太熟悉的用户也能进行个性化调整。

### 修改颜色和风格

主要颜色和风格可以在 `src/components/StarField.vue` 文件中修改：

```vue
/* 背景渐变色 */
.gradient-bg {
  background: radial-gradient(
    circle at 70% 20%,
    rgba(255, 243, 210, 0.8) 0%,  /* 修改这里的暖色调 */
    rgba(255, 243, 210, 0) 50%
  ), /* 其他渐变... */;
}

/* 山峦颜色 */
.mountain-far {
  background-image: url("data:image/svg+xml,...fill='%23728190'..."); /* SVG中的颜色代码 */
}
```

### 调整元素数量与位置

可以调整各元素的数量和位置：

```vue
<!-- 增减元素数量 -->
<div v-for="n in 6" :key="`bird-${n}`" class="bird"> <!-- 改为 n in 10 增加数量 -->

<!-- 调整位置 -->
.willow-container {
  top: 10%;  /* 垂直位置 */
  left: 10%;  /* 水平位置 */
}
```

### 自定义交互效果

修改鼠标交互效果：

```vue
/* 水墨效果配置 */
const MAX_INK_SPOTS = 15; // 增加水墨点数量
const createInkSpot = (x, y, size = random(50, 150), opacity = random(0.1, 0.5)) => {
  // 调整水墨大小和透明度
}
```

## 📁 目录结构

```
src/
├── assets/       # 静态资源
├── components/   # 组件
│   ├── StarField.vue   # 山水画背景组件
│   └── ...
├── App.vue       # 主应用组件
└── main.ts       # 入口文件
```

## 📌 二次开发建议

### 添加新元素

```vue
<!-- 在 template 中添加 -->
<div class="moon"></div>

<!-- 在 style 中添加 -->
.moon {
  position: absolute;
  top: 10%;
  right: 15%;
  width: 60px;
  height: 60px;
  background-color: #fff8e0;
  border-radius: 50%;
  box-shadow: 0 0 20px 5px rgba(255, 248, 224, 0.7);
  z-index: 4;
}
```

### 调试技巧

1. 使用浏览器开发者工具 (F12) 查看元素
2. 临时添加边框查看元素位置: `.element { border: 2px solid red; }`
3. 修改后刷新页面查看效果

## 📄 许可证

MIT

---

💖 希望这个模板能为你的个人网站增添一抹中国传统文化的韵味！
