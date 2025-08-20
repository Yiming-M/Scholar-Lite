// 代码块复制功能
document.addEventListener('DOMContentLoaded', function() {
    // 为所有代码块添加复制按钮
    const codeBlocks = document.querySelectorAll('.highlight');
    
    codeBlocks.forEach(function(codeBlock) {
        // 创建复制按钮
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Copy';
        copyButton.setAttribute('aria-label', 'Copy code');
        
        // 添加点击事件
        copyButton.addEventListener('click', function() {
            copyCodeToClipboard(codeBlock, copyButton);
        });
        
        // 将按钮添加到代码块
        codeBlock.appendChild(copyButton);
    });
});

// 复制代码到剪贴板
function copyCodeToClipboard(codeBlock, button) {
    // 获取代码文本
    const codeElement = codeBlock.querySelector('code');
    if (!codeElement) return;
    
    // 获取纯文本内容（排除行号）
    let codeText = '';
    const lntdElements = codeBlock.querySelectorAll('.lntd:last-child');
    
    if (lntdElements.length > 0) {
        // 有行号的情况
        lntdElements.forEach(function(element) {
            const codeLines = element.textContent || element.innerText;
            codeText += codeLines;
        });
    } else {
        // 没有行号的情况
        codeText = codeElement.textContent || codeElement.innerText;
    }
    
    // 清理文本（移除多余的空行）
    codeText = codeText.trim();
    
    // 使用现代剪贴板API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codeText).then(function() {
            showCopySuccess(button);
        }).catch(function(err) {
            console.error('Copy failed:', err);
            fallbackCopyTextToClipboard(codeText, button);
        });
    } else {
        // 降级方案
        fallbackCopyTextToClipboard(codeText, button);
    }
}

// 降级复制方案
function fallbackCopyTextToClipboard(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // 避免滚动到底部
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopySuccess(button);
        } else {
            showCopyError(button);
        }
    } catch (err) {
        console.error('Fallback copy failed:', err);
        showCopyError(button);
    }
    
    document.body.removeChild(textArea);
}

// 显示复制成功状态
function showCopySuccess(button) {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.classList.add('copied');
    
    setTimeout(function() {
        button.textContent = originalText;
        button.classList.remove('copied');
    }, 2000);
}

// 显示复制错误状态
function showCopyError(button) {
    const originalText = button.textContent;
    button.textContent = 'Failed';
    
    setTimeout(function() {
        button.textContent = originalText;
    }, 2000);
}

// 主题切换时重新应用代码高亮样式
function updateCodeHighlightTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const codeBlocks = document.querySelectorAll('.highlight');
    
    codeBlocks.forEach(function(block) {
        if (isDark) {
            block.classList.add('dark-theme');
        } else {
            block.classList.remove('dark-theme');
        }
    });
}

// 监听主题变化
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
            updateCodeHighlightTheme();
        }
    });
});

observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
});

// 初始化时设置主题
updateCodeHighlightTheme();
