# Astro & Tailwind CSS Starter Kit

by https://lexingtonthemes.com


## License

This template is open-source software licensed under the [GPL-3.0 license](https://opensource.org/licenses/GPL-3.0). Feel free to fork, modify, and use it in your projects.

## Need an attribution-free version?

Checkout [Lexington Themes](https://lexingtonthemes.com/) for free and premium multipage themes & UI Kits
For freelancers, developers, businesses, and personal use.
Beautifully crafted with Astro.js, and Tailwind CSS — Simple & easy to customise.

## Before using this template publicly, please ensure you remove my name and any links associated with me from the website.

## This template is using Tailwind CSS V4

Now we are using only a CSS file. It's called `global.css` and it's located in the src/styles folder. Now we are importing Tailwind CSS on the same file instead of using the `tailwind.config.cjs` file. Like this:

```css
@import "tailwindcss";
@import "./colors.css";
@import "./fonts.css";
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/forms";
```

Then to add your styles you will use the @theme directive. Like this:

```css
@theme {
  /* Your CSS goes here, see how styles are written on the global.css file */
}
```

Remember this is just in Alpha version, so you can use it as you want. Just keep an eye on the changes that Tailwind CSS is going to make.

## Template Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── assets/          # Logo and shared assets
│   │   ├── auth/            # Auth layout shell and helpers
│   │   ├── fundations/      # Text, Button, Wrapper, icons, head
│   │   ├── global/          # Navigation, Footer, CTA, Testimonial
│   │   └── landing/         # Hero, features, pricing, FAQ
│   ├── images/
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── login.astro
│   │   ├── signup.astro
│   │   └── terms.astro
│   └── styles/
│       ├── global.css       # Tailwind entry + base styles
│       ├── colors.css       # Semantic color tokens
│       └── fonts.css        # Font theme variables
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Want to learn more?

Feel free to check Astro's [documentation](https://docs.astro.build)

---
Updated on 14th Aug 2026

## Updates
- Visual refresh across the site
- New color system, Geist + Noto Serif fonts, updated Button and Wrapper components
- Restyled landing page (Hero, features, pricing, FAQ, CTA) and navigation/footer
- New split-panel login page with Google sign-in
- Removed SectionTwo; homepage is Hero → Features → Testimonial → Pricing → FAQ → CTA
- Astro SEO, reusable Text/Button/Wrapper components, vanilla JS (no Alpine)
---

## Components

- Reusable components
  This template now includes reusable components, such as the `Text` component:

- Text Component  
  A versatile and reusable component for handling text across your project, ensuring consistency and easy customization.

- **HTML Tags:** Easily change the HTML element (like `p`, `h1`, `span`, `a`) using the `tag` prop, with `p` being the default.
- **Variants:** Pick from preset text styles (such as `displayXL` or `textBase`) for a consistent look.
- **Custom Classes:** Add or adjust styles with the `class` prop.
- **Accessibility:** Customize with additional props like `id`, `href`, `title`, and `style`.
- **Content Slot:** Add any content inside the component, including optional left and right icons.
  Example usage:

```astro
<Text tag="h1" variant="displayXL" class="text-center">
  Welcome to the new version!
</Text>
```

- Button Component  
  A customizable button component with options to fit your design needs:

- **Variants:** `default`, `accent`, `muted`, and `none`
- **Sizes:** `default`, `xs`, `sm`, `lg`, `xl`, and `2xl`, plus icon-only sizes
- **Custom Classes:** Apply additional styles using the `class` prop.
- **Slots:** Include icons or extra content with optional `left-icon` and `right-icon` slots.  
  Example usage:

```astro
<!-- Default button -->
<Button size="sm" variant="default">Get started</Button>
<!-- Button with icon -->
<Button iconOnly size="icon-sm" variant="default">·</Button>
<!-- Button as link -->
<Button isLink href="/signup" size="default" variant="accent">Sign up</Button>
```

- Wrapper Component  
  A flexible layout component that helps with consistent spacing and alignment.

- **Variants:** `default`, `nav`, `narrow`, `wide`, and `prose` for responsive widths and typography
- **Custom Classes:** Add or change styles with the `class` prop.
- **Content Slot:** Easily add any child components or content inside.

```astro
<Wrapper variant="default">
  Your content goes here
</Wrapper>
```
