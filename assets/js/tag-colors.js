// 标签颜色功能
(function() {
  'use strict';
  
  console.log('Tag colors script loaded');
  
  // 标签颜色分配
  const colorClasses = [
    'tag-red', 'tag-green', 'tag-blue', 'tag-yellow', 'tag-purple', 
    'tag-orange', 'tag-teal', 'tag-pink', 'tag-indigo', 'tag-cyan'
  ];

  let colorMap = {};

  // 获取一个标签的颜色类
  function getColorClass(tagText) {
    if (!colorMap[tagText]) {
      const hash = hashCode(tagText);
      const colorIndex = Math.abs(hash) % colorClasses.length;
      colorMap[tagText] = colorClasses[colorIndex];
    }
    return colorMap[tagText];
  }

  // 简单的字符串哈希函数
  function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash;
  }

  // 处理标签颜色
  function processTagColors() {
    console.log('Processing tag colors...');
    
    // 处理所有类型的关键词标签
    const keywordSelectors = [
      '.tag-keyword',
      '.tag-keyword.tag-level-1',
      '.tag-keyword.tag-level-2', 
      '.tag-keyword.tag-level-3',
      '.tag-keyword.sidebar-tag'
    ];
    
    keywordSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      console.log(`Found ${elements.length} elements for selector: ${selector}`);
      elements.forEach(element => {
        const text = element.textContent.trim();
        const colorClass = getColorClass(text);
        // 移除可能已存在的颜色类
        colorClasses.forEach(cls => element.classList.remove(cls));
        element.classList.add(colorClass);
        console.log('Added color class', colorClass, 'to keyword:', text);
      });
    });
    
    // 处理venue标签
    const venueSelectors = [
      '.tag-venue',
      '.tag-venue.sidebar-tag'
    ];
    
    venueSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      console.log(`Found ${elements.length} venue elements for selector: ${selector}`);
      elements.forEach(element => {
        const text = element.textContent.trim();
        const colorClass = getColorClass(text);
        // 移除可能已存在的颜色类
        colorClasses.forEach(cls => element.classList.remove(cls));
        element.classList.add(colorClass);
        console.log('Added color class', colorClass, 'to venue:', text);
      });
    });
    
    console.log('Tag colors processing completed');
  }
  
  // 多种初始化方式确保函数被执行
  function initializeTagColors() {
    // 立即尝试执行
    if (document.readyState === 'loading') {
      // DOM还在加载中，等待DOMContentLoaded
      document.addEventListener('DOMContentLoaded', processTagColors);
    } else {
      // DOM已经加载完成，立即执行
      processTagColors();
    }
    
    // 延迟执行，确保所有动态内容都已加载
    setTimeout(processTagColors, 100);
    setTimeout(processTagColors, 500);
    setTimeout(processTagColors, 1000);
    
    // 监听窗口加载完成事件
    if (document.readyState !== 'complete') {
      window.addEventListener('load', processTagColors);
    }
  }
  
  // 暴露全局函数
  window.processTagColors = processTagColors;
  window.getColorClass = getColorClass;
  
  // 初始化
  initializeTagColors();
  
})();
