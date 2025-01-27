# Deployment Guide

## Overview

This project is automatically deployed to GitHub Pages using GitHub Actions. The deployment process is triggered on pushes to the main branch and can also be manually triggered.

## GitHub Actions Workflow

### Trigger Events

- Push to `main` branch
- Manual trigger via `workflow_dispatch`

### Build Job

1. **Checkout**: Clones the repository
2. **Setup Node**: Configures Node.js environment
   - Uses Node.js 18
   - Configures npm cache
3. **Install Dependencies**: Runs `npm ci`
4. **Build**: Runs `npm run build`
   - Generates static files in `dist` directory
5. **Upload Artifact**: Saves build output for deployment

### Deploy Job

1. Requires successful build job completion
2. Configures GitHub Pages environment
3. Deploys content to GitHub Pages
4. Provides deployment URL in job output

## Configuration Files

## Configuration Files


### astro.config.mjs Configuration Fields

#### site

The `site` field defines your final production URL. This is used for:

- Generating the sitemap
- Creating absolute URLs in your production build
- SEO-related meta tags


#### base

The `base` field defines the base path where your site will be deployed. This is important when:

- Deploying to a subdirectory (like GitHub Pages project sites)
- Running the site in a non-root path
- Don't need to set this field if you are deploying to the root of your domain
