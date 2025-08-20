document.addEventListener('DOMContentLoaded', function() {
    // --- 1. 配置中心 ---
    // 在这里定义不同域名在深色模式下的特殊处理策略
    const THEME_CONFIG = {
        // 'invert' 策略：如果白色背景不行，尝试反色
        'github.com': 'invert',
        'atom.io': 'invert',
        'openai.com': 'invert',
        "chatgpt.com": 'invert',
        'default': 'bg' 
    };

    // --- 2. 样式管理 ---
    
    /**
     * 动态注入CSS样式到<head>，实现逻辑与表现分离
     */
    function injectCssStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .link-favicon {
                width: 16px;
                height: 16px;
                vertical-align: middle;
                margin-right: 0.3em;
                transition: all 0.2s ease-in-out;
                box-sizing: border-box;
                border-radius: 3px;
            }
            /* 深色模式下的背景策略 */
            .favicon-dark-bg {
                background-color: rgba(250, 250, 250, 1);
                padding: 1px; /* 细微的内边距让效果更好 */
            }
            
            /* GitHub备用反色策略：如果白色背景失效 */
            .favicon-dark-invert {
                filter: invert(1) brightness(1.5) contrast(1.5) !important;
                background-color: transparent !important;
            }
        `;
        document.head.appendChild(style);
    }

    // --- 3. 核心函数 ---

    function getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }

    /**
     * 为单个favicon应用主题样式
     * @param {HTMLImageElement} favicon - 要应用样式的favicon图片元素
     * @param {string} domain - favicon对应的域名
     */
    function applyThemeToFavicon(favicon, domain) {
        const theme = getCurrentTheme();
        const strategy = THEME_CONFIG[domain] || THEME_CONFIG['default'];

        // 先移除所有可能的深色模式类
        favicon.classList.remove('favicon-dark-bg', 'favicon-dark-invert');

        if (theme === 'dark') {
            if (strategy === 'bg') {
                favicon.classList.add('favicon-dark-bg');
            } else if (strategy === 'invert') {
                favicon.classList.add('favicon-dark-invert');
            }
            // 如果策略是 'none'，则什么也不做
        }
    }

    /**
     * 更新页面上所有favicon的主题
     */
    function updateAllFaviconsTheme() {
        document.querySelectorAll('.link-favicon').forEach(favicon => {
            // 从 data-* 属性中恢复域名信息，比alt文本更可靠
            const domain = favicon.dataset.domain;
            if (domain) {
                applyThemeToFavicon(favicon, domain);
            }
        });
    }

    // --- 4. 创建并管理favicon的函数 ---

    function createFaviconForLink(link) {
        // 如果链接已被处理，则跳过
        if (link.dataset.faviconProcessed) {
            return;
        }

        try {
            const url = new URL(link.href);
            const domain = url.hostname;
            
            console.log(`Processing favicon for domain: ${domain}`);

            const favicon = document.createElement('img');
            favicon.className = 'link-favicon';
            favicon.alt = `${domain} icon`;
            favicon.dataset.domain = domain; // 使用data-*属性存储域名
            favicon.loading = 'lazy';
            
            const fallbackSources = [
                `https://www.google.com/s2/favicons?domain=${domain}&sz=32`,
                `https://icons.duckduckgo.com/ip3/${domain}.ico`,
                `https://favicon.io/${domain}`, // 添加额外的favicon源
            ];
            let sourceIndex = 0;

            const tryNextSource = () => {
                if (sourceIndex < fallbackSources.length) {
                    console.log(`Trying favicon source ${sourceIndex + 1} for ${domain}: ${fallbackSources[sourceIndex]}`);
                    favicon.src = fallbackSources[sourceIndex++];
                } else {
                    console.warn(`All favicon sources failed for ${domain}`);
                    favicon.style.display = 'none'; // 所有源都失败，隐藏图标
                }
            };
            
            favicon.onload = function() {
                console.log(`Successfully loaded favicon for ${domain} from source ${sourceIndex}`);
                applyThemeToFavicon(this, domain);
            };

            favicon.onerror = function() {
                console.warn(`Failed to load favicon for ${domain} from source ${sourceIndex}: ${fallbackSources[sourceIndex - 1]}`);
                tryNextSource();
            };
            
            // 标记此链接已处理
            link.dataset.faviconProcessed = 'true';
            link.insertBefore(favicon, link.firstChild);
            tryNextSource(); // 开始尝试加载第一个源
            
        } catch (error) {
            console.error('Error creating favicon for:', link.href, error);
            // 同样标记，以防出错后被重复处理
            link.dataset.faviconProcessed = 'true';
        }
    }

    // --- 5. 初始化和监听 ---

    function processInitialLinks() {
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            // 排除条件：内部有图、特定类名、或在特定容器内
            if (link.querySelector('img, svg') || link.closest('.no-favicon')) {
                return;
            }
            createFaviconForLink(link);
        });
    }
    
    function setupGlobalThemeWatchers() {
        // 监听 data-theme 属性变化
        const observer = new MutationObserver(updateAllFaviconsTheme);
        observer.observe(document.documentElement, { 
            attributes: true, 
            attributeFilter: ['data-theme'] 
        });
        // 监听系统颜色方案变化
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateAllFaviconsTheme);
    }

    // --- 6. 执行 ---
    injectCssStyles();
    processInitialLinks();
    setupGlobalThemeWatchers();
    window.addFaviconToLink = createFaviconForLink; // 暴露API
});
