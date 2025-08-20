// 图片控制脚本 - 解析markdown扩展语法并应用样式
document.addEventListener('DOMContentLoaded', function() {
  console.log('Image controls script loaded');
  
  // 处理所有图片元素，但排除favicon
  function processImages() {
    const images = document.querySelectorAll('.post-full-content img, .post-content img');
    console.log('Found images:', images.length);
    
    images.forEach(img => {
      // 排除favicon和已处理的图片
      if (img.classList.contains('link-favicon') || 
          img.parentElement.classList.contains('image-container')) {
        return;
      }
      
      // 获取图片的alt文本
      const altText = img.getAttribute('alt') || '';
      const src = img.getAttribute('src') || '';
      
      console.log('Processing image:', src, 'alt:', altText);
      
      // 解析扩展语法: ![alt text](image_path)[width, position]
      // 在图片后面查找控制参数
      let width = 100; // 默认宽度 100%
      let position = 'center'; // 默认位置 center
      
      // 查找图片后面的文本节点或下一个元素，寻找 [width, position] 模式
      let nextNode = img.nextSibling;
      let controlText = '';
      
      // 检查紧跟图片的文本节点
      while (nextNode && nextNode.nodeType === Node.TEXT_NODE) {
        controlText += nextNode.textContent;
        nextNode = nextNode.nextSibling;
      }
      
      console.log('Control text found:', controlText);
      
      // 解析控制参数 [width, position] 或 [width] 或 [position]
      const controlMatch = controlText.match(/\[([^\]]+)\]/);
      if (controlMatch) {
        const params = controlMatch[1].split(',').map(p => p.trim());
        console.log('Parsed params:', params);
        
        // 第一个参数可能是宽度或位置
        if (params.length >= 1) {
          const firstParam = params[0].toLowerCase();
          
          // 检查是否是位置参数
          if (['left', 'center', 'right'].includes(firstParam)) {
            position = firstParam;
          } else {
            // 尝试解析为宽度
            const widthMatch = firstParam.match(/(\d+)%?/);
            if (widthMatch) {
              width = parseInt(widthMatch[1]);
              if (width > 100) width = 100;
              if (width < 10) width = 10;
            }
          }
        }
        
        // 第二个参数（如果存在）
        if (params.length >= 2) {
          const secondParam = params[1].toLowerCase();
          if (['left', 'center', 'right'].includes(secondParam)) {
            position = secondParam;
          }
        }
        
        // 移除控制文本
        let textNode = img.nextSibling;
        while (textNode && textNode.nodeType === Node.TEXT_NODE) {
          const newText = textNode.textContent.replace(/\[([^\]]+)\]/, '');
          if (newText.trim() === '') {
            const nodeToRemove = textNode;
            textNode = textNode.nextSibling;
            nodeToRemove.parentNode.removeChild(nodeToRemove);
          } else {
            textNode.textContent = newText;
            break;
          }
        }
      }
      
      console.log('Final settings - width:', width, 'position:', position);
      
      // 创建容器并应用样式
      const container = document.createElement('div');
      container.className = 'image-container';
      
      // 添加宽度类
      container.classList.add(`image-width-${width}`);
      
      // 添加位置类
      container.classList.add(`image-position-${position}`);
      
      // 将图片包装在容器中
      img.parentNode.insertBefore(container, img);
      container.appendChild(img);
      
      console.log('Applied classes:', container.className);
      // 添加图片 Caption（alt 文本），居中显示，且不包含控制参数
      if (altText.trim()) {
        const captionDiv = document.createElement('div');
        captionDiv.className = 'image-caption';
        captionDiv.textContent = altText.trim();
        container.appendChild(captionDiv);
      }
    });
  }
  
  // 处理图片
  processImages();
  
  // 监听动态内容变化（如果有AJAX加载的内容）
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // 检查是否有新添加的图片
        const hasNewImages = Array.from(mutation.addedNodes).some(node => {
          return node.nodeType === Node.ELEMENT_NODE && 
                 (node.tagName === 'IMG' || node.querySelector('img'));
        });
        
        if (hasNewImages) {
          setTimeout(processImages, 100); // 延迟处理以确保DOM完全更新
        }
      }
    });
  });
  
  // 开始观察
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  console.log('Image controls initialized');
});
