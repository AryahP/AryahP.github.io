# Arya Paliwal - Tech Profile Website

A professional tech profile website showcasing my embedded systems projects, skills, and experience.

## 🚀 Live Site

Visit: [https://aryahp.github.io](https://aryahp.github.io)

## 📋 Features

- **Home Page**: Introduction with name highlight and tech profile overview
- **Projects Page**: Showcase of embedded systems and hardware projects
- **Resume Page**: Detailed education, experience, and skills
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Theme**: Modern dark color scheme optimized for readability
- **Fast & Lightweight**: Minimal dependencies, pure HTML/CSS/JS

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom variables, Grid, Flexbox)
- Vanilla JavaScript
- GitHub Pages for hosting

## 📁 Project Structure

```
AryahP.github.io/
├── index.html          # Home page
├── projects.html       # Projects showcase
├── resume.html         # Resume/CV page
├── README.md          # This file
└── assets/
    └── css/
        └── style.css   # Main stylesheet
```

## 🚀 Deployment to GitHub Pages

### Initial Setup

1. **Create a GitHub repository** named `AryahP.github.io` (already done!)

2. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - tech profile website"
   git branch -M main
   git remote add origin https://github.com/AryahP/AryahP.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings" > "Pages"
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main` and folder: `/ (root)`
   - Click "Save"

4. **Wait a few minutes** and your site will be live at `https://aryahp.github.io`

### Updating Your Site

To update your website after making changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

GitHub Pages will automatically rebuild and deploy your site within a few minutes.

## 🎨 Customization

### Update Personal Information

1. **Edit contact links** in all HTML files:
   - GitHub: Update `href="https://github.com/AryahP"`
   - LinkedIn: Update `href="https://www.linkedin.com/in/aryah-paliwal/"`
   - Email: Update `mailto:ap9029@princeton.edu`

2. **Customize content**:
   - Edit `index.html` for home page content
   - Edit `projects.html` to add/update projects
   - Edit `resume.html` to update experience and skills

3. **Modify colors** in `assets/css/style.css`:
   ```css
   :root {
     --bg: #0b0d10;        /* Background color */
     --card: #12161c;       /* Card background */
     --text: #e9eef5;       /* Text color */
     --muted: #a8b3c2;      /* Muted text */
     --accent: #7dd3fc;     /* Accent color */
   }
   ```

## 📝 Adding New Projects

Edit `projects.html` and add a new project card:

```html
<div class="project-card">
  <h3>🎯 Your Project Title</h3>
  <p class="meta">Technology Stack</p>
  <p>
    Project description here...
  </p>
  <div class="links-row">
    <a href="your-github-link" target="_blank">View Code →</a>
  </div>
</div>
```

## 📱 Testing Locally

To test your website locally before deploying:

1. Simply open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then visit http://localhost:8000
   ```

## 📄 License

This project is open source and available for personal use.

## 🤝 Contact

- **Email**: ap9029@princeton.edu
- **LinkedIn**: [linkedin.com/in/aryah-paliwal](https://www.linkedin.com/in/aryah-paliwal/)
- **GitHub**: [github.com/AryahP](https://github.com/AryahP)

---

Built with ❤️ by Arya Paliwal
