# == 主应用组件 ==
<template>
  <div class="app-container">
    <!-- 动态背景 -->
    <ChineseLandscape />
    
    <!-- 主要内容区域 -->
    <main class="main-content">
      <!-- 导航栏 -->
      <nav class="nav-bar">
        <div class="logo ink-text">墨境</div>
        <div class="nav-links">
          <a href="#projects" class="ink-text">作品</a>
          <a href="#about" class="ink-text">关于</a>
          <a href="#blog" class="ink-text">随笔</a>
          <a href="#gallery" class="ink-text">意境</a>
          <a href="#contact" class="ink-text">留言</a>
        </div>
        <div class="mobile-menu-btn">
          <span></span>
          <span></span>
        </div>
      </nav>

      <!-- 首页区域 -->
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="main-title">
            <span class="title-line">山水为境</span>
            <span class="title-line">代码为笔</span>
          </h1>
          <div class="hero-desc">
            <p>以技术为笔，绘数字山水 / 以创意为墨，写前端诗篇</p>
          </div>
          <div class="scroll-indicator ink-text">向下探索</div>
        </div>
        <div class="hero-image">
          <div class="circle-container">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
            <div class="circle circle-3"></div>
          </div>
        </div>
      </section>

      <!-- 项目展示区域 -->
      <section id="projects" class="projects-section">
        <div class="section-header">
          <h2 class="ink-text">匠心之作</h2>
          <p>融汇技艺，成就非凡</p>
        </div>
        <div class="projects-container">
          <div v-for="(project, index) in projects" 
               :key="index" 
               class="project-item"
               :style="{ '--index': index }">
            <div class="project-image">
              <img :src="project.image" :alt="project.title">
            </div>
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
              </div>
              <a href="#" class="project-link">查看详情</a>
            </div>
          </div>
        </div>
      </section>

      <!-- 关于我区域 -->
      <section id="about" class="about-section">
        <div class="section-header">
          <h2 class="ink-text">心之所向</h2>
          <p>初心不改，砥砺前行</p>
        </div>
        <div class="about-container ink-effect">
          <div class="about-image">
            <img src="https://picsum.photos/600/800?random=20" alt="个人照片">
            <div class="about-shape"></div>
          </div>
          <div class="about-content">
            <h3 class="ink-text">万通学</h3>
            <p class="about-title">全栈开发工程师</p>
            <div class="about-text">
              <p>怀着对技术的热忱，以创新为笔，绘制数字世界的诗篇。五年磨一剑，专注于打造卓越的用户体验与高效的技术方案。</p>
              <p>深信技术应如山水画般，简约而不失其韵，优雅而见其力。每个项目都是一幅新的画卷，等待着我们共同描绘。</p>
            </div>
            <div class="skills-container">
              <div class="skill-category">
                <h4>前端开发</h4>
                <div class="skills">
                  <span>Vue</span>
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Three.js</span>
                </div>
              </div>
              <div class="skill-category">
                <h4>后端开发</h4>
                <div class="skills">
                  <span>Node.js</span>
                  <span>Python</span>
                  <span>GraphQL</span>
                  <span>MongoDB</span>
                </div>
              </div>
              <div class="skill-category">
                <h4>工具 & 平台</h4>
                <div class="skills">
                  <span>Docker</span>
                  <span>AWS</span>
                  <span>CI/CD</span>
                  <span>Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 博客区域 -->
      <section id="blog" class="blog-section">
        <div class="section-header">
          <h2 class="ink-text">技术随笔</h2>
          <p>观察思考，心得分享</p>
        </div>
        <div class="blog-container">
          <article v-for="(post, index) in blogPosts" 
                   :key="index" 
                   class="blog-item"
                   :style="{ '--index': index }">
            <div class="blog-image">
              <img :src="post.image" :alt="post.title">
            </div>
            <div class="blog-content">
              <span class="blog-date">{{ post.date }}</span>
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt }}</p>
              <a href="#" class="blog-link">阅读全文</a>
            </div>
          </article>
        </div>
      </section>

      <!-- 相册区域 -->
      <section id="gallery" class="gallery-section">
        <div class="section-header">
          <h2 class="ink-text">意境掠影</h2>
          <p>定格光影，诉说故事</p>
        </div>
        <div class="gallery-container">
          <div v-for="(photo, index) in galleryPhotos" 
               :key="index" 
               class="gallery-item"
               :style="{ '--index': index }">
            <img :src="photo.url" :alt="photo.title">
            <div class="gallery-caption">
              <h3>{{ photo.title }}</h3>
              <p>{{ photo.location }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 联系区域 -->
      <section id="contact" class="contact-section">
        <div class="section-header">
          <h2 class="ink-text">留墨之处</h2>
          <p>愿与君共话</p>
        </div>
        <div class="contact-container paper-texture">
          <div class="contact-info">
            <div class="contact-item">
              <h3>墨韵传信</h3>
              <a href="mailto:contact@example.com">contact@example.com</a>
            </div>
            <div class="contact-item">
              <h3>数字足迹</h3>
              <div class="social-links">
                <a href="https://github.com/wantong" target="_blank" class="ink-text">GitHub</a>
                <a href="https://linkedin.com/in/wantong" target="_blank" class="ink-text">LinkedIn</a>
                <a href="#" target="_blank" class="ink-text">微博</a>
              </div>
            </div>
            <div class="contact-item">
              <h3>居所</h3>
              <p>山水之间 · 上海</p>
            </div>
          </div>
          <div class="contact-form">
            <h3>挥毫留墨</h3>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">雅号</label>
                <input type="text" id="name" placeholder="请留下您的称呼" required>
              </div>
              <div class="form-group">
                <label for="email">邮信</label>
                <input type="email" id="email" placeholder="您的邮箱地址" required>
              </div>
              <div class="form-group">
                <label for="message">心语</label>
                <textarea id="message" placeholder="请书写您的想法..." required></textarea>
              </div>
              <button type="submit" class="submit-btn ink-drop">落纸为笺</button>
            </form>
          </div>
        </div>
      </section>

      <!-- 页脚 -->
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-logo ink-text">墨境</div>
          <div class="footer-links">
            <a href="#projects" class="ink-text">作品</a>
            <a href="#about" class="ink-text">关于</a>
            <a href="#blog" class="ink-text">随笔</a>
            <a href="#gallery" class="ink-text">意境</a>
            <a href="#contact" class="ink-text">留言</a>
          </div>
          <div class="footer-copy">
            &copy; 2024 墨境 · 万通学
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ChineseLandscape from './components/landscape/ChineseLandscape.vue'

// 注册 GSAP 插件
gsap.registerPlugin(ScrollTrigger)

// 项目数据
const projects = ref([
  {
    title: '水墨风电子商务平台',
    description: '基于传统美学设计的电子商务平台，集成了水墨动态效果和传统风格界面，为用户提供沉浸式的购物体验和文化鉴赏服务。',
    image: 'https://picsum.photos/800/600?random=1',
    technologies: ['Vue', 'TypeScript', 'Canvas', 'Node.js']
  },
  {
    title: '汉风智能助手',
    description: '融合传统文化元素的智能助手应用，支持古诗词推荐、文化知识问答和智能创作，帮助用户体验传统文化的魅力。',
    image: 'https://picsum.photos/800/600?random=2',
    technologies: ['React', 'AI', 'NLP', 'MongoDB']
  },
  {
    title: '山水画生成器',
    description: '基于深度学习的智能创作工具，能根据文字描述自动生成中国传统山水画风格的图像，支持风格调整和细节优化。',
    image: 'https://picsum.photos/800/600?random=3',
    technologies: ['Python', 'TensorFlow', 'WebGL', 'Flask']
  }
])

// 博客数据
const blogPosts = ref([
  {
    title: '数字时代的传统美学',
    excerpt: '探讨如何在现代网页设计中融入传统美学元素，创造既符合当代审美又富有文化底蕴的数字体验。',
    date: '2024-03-15',
    image: 'https://picsum.photos/800/450?random=4'
  },
  {
    title: '从《兰亭集序》看字体设计',
    excerpt: '分析王羲之书法的美学原理，以及如何将这些原理应用到现代数字字体设计和网页排版中。',
    date: '2024-03-10',
    image: 'https://picsum.photos/800/450?random=5'
  },
  {
    title: '动态水墨效果实现指南',
    excerpt: '详解如何使用Canvas和WebGL技术在网页中实现富有表现力的水墨动态效果，包括墨晕、水流和笔触模拟。',
    date: '2024-03-05',
    image: 'https://picsum.photos/800/450?random=6'
  }
])

// 相册数据
const galleryPhotos = ref([
  {
    title: '晨雾山林',
    location: '安徽黄山',
    url: 'https://picsum.photos/500/500?random=7'
  },
  {
    title: '江南水乡',
    location: '浙江乌镇',
    url: 'https://picsum.photos/500/500?random=8'
  },
  {
    title: '竹林深处',
    location: '四川成都',
    url: 'https://picsum.photos/500/500?random=9'
  },
  {
    title: '雨后青山',
    location: '湖南张家界',
    url: 'https://picsum.photos/500/500?random=10'
  },
  {
    title: '古寺钟声',
    location: '北京香山',
    url: 'https://picsum.photos/500/500?random=11'
  },
  {
    title: '渔舟唱晚',
    location: '杭州西湖',
    url: 'https://picsum.photos/500/500?random=12'
  }
])

// 页面加载动画
onMounted(() => {
  // 导航栏动画
  gsap.from('.nav-bar', {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  // 标题动画
  gsap.from('.title-line', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power3.out'
  })

  // 英雄区域描述动画
  gsap.from('.hero-desc', {
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: 'power2.out'
  })

  // 圆形动画
  gsap.from('.circle', {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    delay: 0.5,
    ease: 'elastic.out(1, 0.5)'
  })

  // 滚动触发动画
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header.children, {
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    })
  })

  // 项目卡片动画
  gsap.utils.toArray('.project-item').forEach(item => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: item.style.getPropertyValue('--index') * 0.1
    })
  })

  // 博客卡片动画
  gsap.utils.toArray('.blog-item').forEach(item => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: item.style.getPropertyValue('--index') * 0.1
    })
  })

  // 相册项目动画
  gsap.utils.toArray('.gallery-item').forEach(item => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      delay: item.style.getPropertyValue('--index') * 0.05
    })
  })
})

// 表单提交处理
const handleSubmit = () => {
  // 处理表单提交逻辑
  alert('消息已发送！我会尽快回复您。')
}
</script>

<style>
/* == 全局样式 == */
:root {
  --primary-color: #2c3e50;
  --secondary-color: #34495e;
  --accent-color: #95a5a6;
  --text-color: #2c3e50;
  --background-color: transparent;
  --surface-color: rgba(255, 255, 255, 0.8);
  --border-color: rgba(44, 62, 80, 0.2);
  
  /* 水墨效果色彩变量 */
  --ink-dark: #292d33;
  --ink-medium: #465165;
  --ink-light: #8ca0b3; 
  --paper-color: #f5f4f0;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
  overflow-x: hidden;
  font-size: 16px;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
}

/* == 内容区域样式 == */
.app-container {
  min-height: 100vh;
  position: relative;
}

.main-content {
  position: relative;
  z-index: 10; /* 确保内容在背景上方 */
  min-height: 100vh;
}

/* == 导航栏样式 == */
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background-color 0.3s, padding 0.3s;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(44, 62, 80, 0.1);
}

.logo {
  /* 墨迹效果 */
  position: relative;
  display: inline-block;
  color: var(--ink-dark);
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  font-family: "STKaiti", "楷体", serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 2px;
}

.logo::after {
  content: '';
  position: absolute;
  left: -5px;
  right: -5px;
  bottom: -3px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--ink-dark), transparent);
  opacity: 0.6;
}

.nav-links {
  display: flex;
  gap: 3rem;
}

.nav-links a {
  position: relative;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  opacity: 0.8;
  transition: opacity 0.3s;
  font-family: "STKaiti", "楷体", serif;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--ink-dark);
  transition: width 0.3s;
}

.nav-links a:hover {
  opacity: 1;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
}

.mobile-menu-btn span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--text-color);
  transition: transform 0.3s;
}

/* == 英雄区域样式 == */
.hero-section {
  position: relative;
  overflow: hidden;
  padding-top: 6rem;
}

.hero-content {
  flex: 1;
  max-width: 700px;
}

.main-title {
  font-size: 4.5rem;
  letter-spacing: 0.1em;
  color: var(--ink-dark);
  position: relative;
  font-family: "STKaiti", "楷体", serif;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.title-line {
  display: block;
  position: relative;
  overflow: hidden;
}

.title-line::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, transparent, var(--paper-color), transparent);
  transform: translateX(-100%);
  animation: brush-stroke 1.5s ease forwards;
}

.title-line:nth-child(2)::after {
  animation-delay: 0.5s;
}

@keyframes brush-stroke {
  to { transform: translateX(100%); }
}

.hero-desc {
  position: relative;
  padding-left: 1rem;
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 3rem;
  max-width: 80%;
  font-family: "STXihei", "华文细黑", sans-serif;
  color: var(--secondary-color);
}

.hero-desc::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--ink-dark), transparent);
}

.hero-image {
  flex: 1;
  position: relative;
}

.circle-container {
  position: relative;
  width: 100%;
  height: 500px;
}

.circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(1px);
  opacity: 0.1;
  mix-blend-mode: multiply;
  transition: all 0.5s ease;
}

.circle-1 {
  width: 300px;
  height: 300px;
  background: var(--ink-dark);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float 15s ease-in-out infinite alternate;
}

.circle-2 {
  width: 200px;
  height: 200px;
  background: var(--ink-medium);
  top: 30%;
  left: 30%;
  animation: float 12s ease-in-out infinite 1s alternate-reverse;
}

.circle-3 {
  width: 150px;
  height: 150px;
  background: var(--ink-light);
  bottom: 30%;
  right: 30%;
  animation: float 18s ease-in-out infinite 2s alternate;
}

@keyframes float {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-10px, 20px) rotate(5deg); }
  100% { transform: translate(10px, -15px) rotate(-5deg); }
}

/* == 章节通用样式 == */
section {
  padding: 8rem 5%;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-header h2 {
  position: relative;
  display: inline-block;
  padding-bottom: 1rem;
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--ink-dark);
  font-family: "STKaiti", "楷体", serif;
}

.section-header h2::after {
  content: '';
  position: absolute;
  left: 30%;
  right: 30%;
  bottom: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--ink-dark), transparent);
}

.section-header p {
  font-size: 1.2rem;
  opacity: 0.7;
  font-family: "STXihei", "华文细黑", sans-serif;
  color: var(--secondary-color);
}

/* == 项目区域样式 == */
.projects-container {
  display: flex;
  flex-direction: column;
  gap: 8rem;
}

.project-item {
  display: flex;
  align-items: center;
  gap: 5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.project-item::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  z-index: -1;
  opacity: 0;
  transition: all 0.5s ease;
}

.project-item:hover {
  transform: translateY(-10px);
}

.project-item:hover::before {
  opacity: 1;
  transform: translate(5px, 5px);
}

.project-item:nth-child(even) {
  flex-direction: row-reverse;
}

.project-image {
  flex: 1;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  position: relative;
}

.project-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.1), transparent);
  z-index: 1;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.project-image:hover img {
  transform: scale(1.05);
}

.project-info {
  flex: 1;
}

.project-info h3 {
  font-size: 2rem;
  font-family: "STKaiti", "楷体", serif;
  color: var(--ink-dark);
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.project-info h3::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
  height: 1px;
  background: linear-gradient(90deg, var(--ink-dark), transparent);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.project-tech span {
  padding: 0.4rem 1rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 30px;
  font-size: 0.9rem;
  color: var(--secondary-color);
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-tech span:hover {
  transform: translateY(-3px);
}

.project-link {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: var(--ink-dark);
  border-radius: 30px;
  font-weight: 500;
  transition: transform 0.3s, box-shadow 0.3s;
  font-family: "STXihei", "华文细黑", sans-serif;
  color: var(--paper-color);
}

.project-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* == 关于区域样式 == */
.about-container {
  display: flex;
  gap: 5rem;
  align-items: center;
}

.about-image {
  flex: 0.8;
  position: relative;
}

.about-image img {
  border-radius: 10px;
  position: relative;
  z-index: 2;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  filter: saturate(0.8) contrast(1.1);
  transition: all 0.5s ease;
}

.about-image:hover img {
  filter: saturate(1) contrast(1.2);
}

.about-shape {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 30px;
  left: 30px;
  background: var(--ink-light);
  border-radius: 10px;
  z-index: 1;
  opacity: 0.3;
  transition: all 0.5s ease;
}

.about-image:hover .about-shape {
  transform: translate(5px, 5px);
}

.about-content {
  flex: 1;
}

.about-content h3 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;
  font-family: "STKaiti", "楷体", serif;
}

.about-content h3::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -5px;
  height: 1px;
  background: linear-gradient(90deg, var(--ink-dark), transparent);
}

.about-title {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
}

.about-text {
  margin-bottom: 3rem;
}

.about-text p {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 1.5rem;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.skill-category h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--ink-dark);
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
  font-family: "STXihei", "华文细黑", sans-serif;
}

.skill-category h4::before {
  content: '•';
  position: absolute;
  left: -1.2rem;
  color: var(--ink-dark);
  opacity: 0.7;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skills span {
  padding: 0.4rem 1rem;
  background: var(--surface-color);
  border-radius: 30px;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.skills span:hover {
  transform: translateY(-3px);
}

/* == 博客区域样式 == */
.blog-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
}

.blog-item {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  overflow: visible;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
}

.blog-item::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: -10px;
  bottom: -10px;
  background: var(--ink-light);
  opacity: 0.1;
  z-index: -1;
  transition: all 0.5s ease;
}

.blog-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.blog-item:hover::before {
  transform: translate(-5px, -5px);
}

.blog-image {
  height: 220px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.blog-item:hover .blog-image img {
  transform: scale(1.1);
}

.blog-content {
  padding: 2rem;
}

.blog-date {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.blog-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: "STKaiti", "楷体", serif;
  color: var(--ink-dark);
  position: relative;
  display: inline-block;
}

.blog-content h3::after {
  content: '';
  position: absolute;
  left: 0;
  right: 100%;
  bottom: -5px;
  height: 1px;
  background: var(--ink-dark);
  transition: right 0.5s ease;
}

.blog-item:hover .blog-content h3::after {
  right: 0;
}

.blog-content p {
  opacity: 0.8;
  margin-bottom: 1.5rem;
}

.blog-link {
  color: var(--ink-dark);
  font-weight: 500;
  position: relative;
}

.blog-link::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--ink-dark);
  transition: width 0.3s;
}

.blog-link:hover::after {
  width: 100%;
}

/* == 相册区域样式 == */
.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  perspective: 1000px;
}

.gallery-item {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.gallery-item:hover {
  transform: rotateY(5deg) rotateX(5deg);
  z-index: 2;
}

.gallery-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.gallery-item:hover::before {
  opacity: 1;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.3s, transform 0.3s;
  color: var(--ink-dark);
  z-index: 2;
}

.gallery-item:hover .gallery-caption {
  opacity: 1;
  transform: translateY(0);
}

.gallery-caption h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-family: "STKaiti", "楷体", serif;
}

.gallery-caption p {
  opacity: 0.8;
  font-size: 0.9rem;
}

/* == 联系区域样式 == */
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.contact-container::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%);
  opacity: 0.1;
  pointer-events: none;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.contact-item h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--ink-dark);
  font-family: "STKaiti", "楷体", serif;
  position: relative;
  display: inline-block;
}

.contact-item h3::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 50%;
  width: 10px;
  height: 2px;
  background: var(--ink-dark);
  opacity: 0.5;
}

.contact-item a {
  opacity: 0.8;
  transition: opacity 0.3s;
}

.contact-item a:hover {
  opacity: 1;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.contact-form h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--ink-dark);
  font-family: "STKaiti", "楷体", serif;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  color: var(--text-color);
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--ink-dark);
  outline: none;
}

.form-group textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-btn {
  padding: 1rem 2rem;
  background: var(--ink-dark);
  border: none;
  border-radius: 5px;
  color: var(--paper-color);
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  font-family: "STXihei", "华文细黑", sans-serif;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* == 页脚样式 == */
.footer {
  padding: 5rem 5%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--ink-dark), transparent);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.footer-logo {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 3px;
  font-family: "STKaiti", "楷体", serif;
  color: var(--ink-dark);
  position: relative;
}

.footer-logo::after {
  content: '';
  position: absolute;
  left: 30%;
  right: 30%;
  bottom: -5px;
  height: 1px;
  background: var(--ink-dark);
  opacity: 0.3;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  opacity: 0.7;
  transition: opacity 0.3s;
}

.footer-links a:hover {
  opacity: 1;
}

.footer-copy {
  opacity: 0.5;
  font-size: 0.9rem;
  /* 印章效果 */
  position: relative;
  display: inline-block;
  padding: 0.5rem 1rem;
}

.footer-copy::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid var(--ink-dark);
  opacity: 0.1;
  transform: rotate(-2deg);
}

/* == 高级水墨效果 == */
.ink-text {
  color: var(--ink-dark);
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  display: inline-block;
}

.ink-text::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  height: 1px;
  background: linear-gradient(90deg, var(--ink-dark), transparent);
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.ink-text:hover::after {
  transform: scaleX(1);
}

.ink-splash {
  position: relative;
}

.ink-splash::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  width: 20px;
  height: 20px;
  background: var(--ink-dark);
  border-radius: 50%;
  opacity: 0.1;
  transform: scale(0);
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.ink-splash:hover::before {
  transform: scale(1);
}

.paper-texture {
  position: relative;
}

.paper-texture::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('data:image/png;base64,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');
  opacity: 0.03;
  pointer-events: none;
}

/* == 动画优化 == */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.fade-in {
  animation: fadeIn 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}

/* == 水墨效果 == */
.ink-effect {
  position: relative;
  overflow: hidden;
}

.ink-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.15));
  backdrop-filter: blur(10px);
  border-radius: inherit;
  z-index: -1;
  transition: all 0.5s ease;
}

.ink-effect:hover::before {
  backdrop-filter: blur(15px);
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2));
}

/* 水滴效果 */
.ink-drop {
  position: relative;
  overflow: hidden;
}

.ink-drop::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: var(--ink-dark);
  border-radius: 50%;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
  z-index: -1;
  transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease;
}

.ink-drop:hover::before {
  transform: translate(-50%, -50%) scale(30);
  opacity: 0.03;
}
</style>
