# 字体文件目录

请将以下字体文件放置在此目录中：

## 中文字体文件（支持多种字重和样式）

1. `LXGWBrightGB-Regular.ttf` - 中文字体常规样式
2. `LXGWBrightGB-Italic.ttf` - 中文字体斜体样式
3. `LXGWBrightGB-Light.ttf` - 中文字体细体样式
4. `LXGWBrightGB-LightItalic.ttf` - 中文字体细体斜体样式
5. `LXGWBrightGB-Medium.ttf` - 中文字体中等粗细样式
6. `LXGWBrightGB-MediumItalic.ttf` - 中文字体中等粗细斜体样式

## 代码字体文件

1. `CaskaydiaCoveNerdFont-Regular.ttf` - 代码字体文件，用于显示等宽代码文本
2. `CaskaydiaCoveNerdFont-Bold.ttf` - 代码字体粗体样式
3. `CaskaydiaCoveNerdFont-Italic.ttf` - 代码字体斜体样式
4. `CaskaydiaCoveNerdFont-Light.ttf` - 代码字体细体样式
5. `CaskaydiaCoveNerdFont-SemiBold.ttf` - 代码字体半粗体样式
6. `CaskaydiaCoveNerdFont-SemiLight.ttf` - 代码字体半细体样式
7. `CaskaydiaCoveNerdFont-ExtraLight.ttf` - 代码字体超细体样式
8. `CaskaydiaCoveNerdFont-BoldItalic.ttf` - 代码字体粗体斜体样式
9. `CaskaydiaCoveNerdFont-SemiBoldItalic.ttf` - 代码字体半粗体斜体样式
10. `CaskaydiaCoveNerdFont-LightItalic.ttf` - 代码字体细体斜体样式
11. `CaskaydiaCoveNerdFont-SemiLightItalic.ttf` - 代码字体半细体斜体样式
12. `CaskaydiaCoveNerdFont-ExtraLightItalic.ttf` - 代码字体超细体斜体样式

## 字体文件说明

### 中文字体
- **Regular**: 常规样式，用于正文内容
- **Italic**: 斜体样式，用于强调或引用
- **Light**: 细体样式，用于标题或轻量级内容
- **LightItalic**: 细体斜体样式
- **Medium**: 中等粗细样式，用于重要标题
- **MediumItalic**: 中等粗细斜体样式

### 代码字体
- `CaskaydiaCoveNerdFont-Regular.tff`: 等宽字体，专门为代码显示优化，将优先用于显示monospace文本

## 使用方法

字体文件放置在此目录后，系统会自动：
1. 对LXGWBrightGB内容优先使用 `LXGWBrightGB` 字体家族（根据CSS的font-weight和font-style自动选择对应变体）
2. 对代码内容优先使用 `CaskaydiaCoveNerdFont-Regular.tff` 字体
3. 如果字体文件不存在，会回退到系统默认字体

## CSS中的字体使用

系统会自动根据CSS属性选择对应的字体变体：

```css
/* 常规样式 */
body {
  font-family: "LXGWBrightGB", sans-serif;
  font-weight: normal; /* 使用 Regular */
  font-style: normal;
}

/* 斜体样式 */
em, i {
  font-family: "LXGWBrightGB", sans-serif;
  font-weight: normal;
  font-style: italic; /* 使用 Italic */
}

/* 细体样式 */
.light-text {
  font-family: "LXGWBrightGB", sans-serif;
  font-weight: 300; /* 使用 Light */
  font-style: normal;
}

/* 中等粗细样式 */
.medium-text {
  font-family: "LXGWBrightGB", sans-serif;
  font-weight: 500; /* 使用 Medium */
  font-style: normal;
}
```
