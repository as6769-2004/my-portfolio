# Image Setup Guide

## Adding Your Profile Images

### 1. Profile Images
Add your profile images to the `public` folder:

- **Profile Image**: `public/profile-image.jpg` (400x400px recommended)
- **Hero Image**: `public/hero-image.jpg` (500x500px recommended)

### 2. Favicon
Add your favicon to the `public` folder:

- **Favicon**: `public/favicon.ico` (16x16, 32x32, or 48x48px)

## Image Requirements

### Profile Images
- **Format**: JPG, PNG, or WebP
- **Size**: Square images work best (1:1 aspect ratio)
- **Resolution**: At least 400x400px for good quality
- **Background**: Professional headshot with clean background

### Favicon
- **Format**: .ico file
- **Size**: 16x16, 32x32, or 48x48 pixels
- **Design**: Simple, recognizable icon or your initials

## Current Configuration

The images are configured in `src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  // ... other data
  profileImage: "/profile-image.jpg", // Your profile image
  heroImage: "/hero-image.jpg", // Your hero image
  favicon: "/favicon.ico", // Your favicon
};

export const siteConfig = {
  title: "Aditya Sagar Sharma - Full Stack Developer",
  // ... other config
  favicon: "/favicon.ico",
  profileImage: "/profile-image.jpg",
  heroImage: "/hero-image.jpg"
};
```

## Steps to Add Your Images

1. **Prepare your images**:
   - Crop your profile photo to square format
   - Create a favicon from your logo or initials

2. **Add to public folder**:
   - Place `profile-image.jpg` in `public/`
   - Place `hero-image.jpg` in `public/`
   - Place `favicon.ico` in `public/`

3. **Test the changes**:
   - Run `npm start` to see your images
   - Check the browser tab for your favicon

## Fallback System

If images fail to load, the portfolio will show:
- Your initials (AS) in a gradient background
- Default favicon

## Image Optimization Tips

- **Compress images** for faster loading
- **Use WebP format** for better compression
- **Keep file sizes under 200KB** for profile images
- **Use 32x32px favicon** for best compatibility 