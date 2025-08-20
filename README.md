# Scholar Lite Hugo Theme

<a href="https://www.buymeacoffee.com/yiming.ma" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

A modern Hugo theme designed specifically for scholars to showcase their publications, featuring a clean and minimalistic interface. Built with a completely flat design, removing unnecessary pages like `about`, with each publication displayed in a collapsible manner on the homepage.

![Light Mode](https://github.com/Yiming-M/Scholar-Lite/blob/main/images/light.png)

## ✨ Features

### 🎓 Academic Features
- **Publication Display** - Support for papers, conferences, journals, and other academic content
- **Multimedia Links** - PDF, code, presentation, and other resource links
- **Classification Tags** - Multi-dimensional classification by conference/journal, keywords, year, etc.

### 🎨 Modern Interface
- **Responsive Design** - Perfect adaptation for desktop, tablet, and mobile
- **Animation Effects** - Smooth interactive animations
- **Elegant Typography** - Professional academic content presentation
- **Profile Photo** - Support for various avatar formats
- **Auto Dark Mode** - Support for automatic light/dark theme switching

![Dark Mode](https://github.com/Yiming-M/Scholar-Lite/blob/main/images/dark.png)

### 🔧 Technical Features
- **Mathematical Formulas** - KaTeX support, perfect LaTeX formula rendering
- **Code Highlighting** - Chroma syntax highlighting, supporting GitHub and Dracula themes
- **Code Copying** - One-click code block copying functionality
- **Search and Filter** - Real-time search and multi-condition filtering

## 🚀 Quick Start

### Prerequisites
- [Hugo](https://gohugo.io/installation/) (Extended version 0.100.0+)
- [Git](https://git-scm.com/)

### Installation

1. **Create a new Hugo site**
```bash
hugo new site my-academic-site
cd my-academic-site
```

2. **Add the theme as a Git submodule**
```bash
git submodule add https://github.com/yiming-m/scholar-lite.git themes/scholar-lite
```

1. **Configure the site**
```bash
cp themes/scholar-lite/exampleSite/hugo.toml .
```

1. **Start the development server**
```bash
hugo server -D
```

Visit `http://localhost:1313` to view your website.

### Alternative Installation Methods

#### Method 1: Git Clone (for development)
```bash
git clone https://github.com/yiming-m/scholar-lite.git themes/scholar-lite
```

#### Method 2: Download ZIP
1. Download the ZIP file from GitHub
2. Extract it to `themes/scholar-lite/`
3. Configure your site as above

#### Method 3: Hugo Modules (advanced)
```bash
# In your site's hugo.toml
[module]
  [[module.imports]]
    path = "github.com/yourusername/scholar-lite"
```

## ⚙️ Configuration

### Basic Configuration

Edit the `hugo.toml` file, remove unnecessary social media:

```toml
baseURL = "https://yourdomain.com"
languageCode = "en-us"
title = "Your Name - Academic Portfolio"
theme = "scholar-lite"

[params]
  bio = """
  Your bio here. You can use **markdown** formatting. No need to write an about page.
  """
  profilePhoto = "/images/profile.jpg"

  # Social Media Links. Remove any you don't need. Adjust the order as desired.
  [[params.social]]
    name = "Google Scholar"
    url = "https://scholar.google.com/citations?user=YOUR_ID"

  [[params.social]]
    name = "GitHub"
    url = "https://github.com/yourusername"
```

### Creating Academic Content

Create a new publication:

```bash
hugo new posts/your-paper-title/index.md
```

Edit the article front matter:

```yaml
---
title: "Your Paper Title"
date: 2024-01-15
venue: "Conference/Journal Name"
keywords: ["keyword1", "keyword2", "keyword3"]
---
```

## 🎨 Customization

### Custom Fonts

The theme supports custom fonts. Place your font files in `static/fonts/`:

1. **CJK Fonts** - Place `LXGWBrightGB-*.ttf` files for Chinese/Japanese/Korean text
2. **Code Fonts** - Place `CaskaydiaCoveNerdFont-*.ttf` files for code blocks

### Custom Colors

Modify CSS variables in `assets/css/main.css`:

```css
:root {
  --bg-color: #f8f9fa;
  --card-bg: #ffffff;
  --text-color: #333333;
  --accent-color: #007bff;
  /* Other variables... */
}
```

## 📁 Project Structure

```
themes/scholar-lite/
├── assets/                 # CSS, JS, and other assets
│   ├── css/               # Stylesheets
│   └── js/                # JavaScript files
├── layouts/               # Hugo templates
│   ├── _default/          # Default templates
│   ├── _partials/         # Partial templates
│   └── shortcodes/        # Custom shortcodes
├── static/                # Static files
│   ├── fonts/             # Custom fonts
│   └── images/            # Images
├── archetypes/            # Content archetypes
├── data/                  # Data files
├── i18n/                  # Internationalization
└── README.md             # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Hugo](https://gohugo.io/)
- Icons from [Feather Icons](https://feathericons.com/)
- Syntax highlighting with [Chroma](https://github.com/alecthomas/chroma)
- Math rendering with [KaTeX](https://katex.org/)

---

**Made with ❤️ for the academic community**
