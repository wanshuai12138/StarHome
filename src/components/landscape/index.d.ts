/* 中国山水画背景组件类型声明
--------------------------------------------------
为模块系统提供Vue组件类型支持
-------------------------------------------------- */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
} 