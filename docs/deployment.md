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

## Environment Variables

The contact form requires specific environment variables to function correctly:

- `PUBLIC_RECAPTCHA_SITE_KEY`: Your Google reCAPTCHA site key.
- `PUBLIC_CONTACT_API_ENDPOINT`: The URL of your backend API endpoint for handling contact form submissions.

Since the `.env` file containing these variables is not committed to the repository, you must configure them as **GitHub Secrets** for the deployment workflow to access them during the build process.

### Setting up GitHub Secrets

1.  Go to your GitHub repository settings.
2.  Navigate to **Secrets and variables** > **Actions**.
3.  Click **New repository secret**.
4.  Create two secrets:
    *   Name: `PUBLIC_RECAPTCHA_SITE_KEY`, Value: `<your_recaptcha_site_key>`
    *   Name: `PUBLIC_CONTACT_API_ENDPOINT`, Value: `<your_api_endpoint_url>`

The deployment workflow (`.github/workflows/deploy.yml`) is configured to automatically use these secrets during the `npm run build` step.

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
