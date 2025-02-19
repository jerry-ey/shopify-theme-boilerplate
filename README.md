# Shopify Theme Boilerplate

A modern Shopify theme boilerplate powered by **Vite**, **TypeScript**, and **Tailwind CSS** for fast development, maintainability, and performance.

## Features

- **Vite** for lightning-fast development and build tooling.
- **TypeScript** for type-safe, scalable JavaScript development.
- **Tailwind CSS** for efficient, utility-first styling.
- Shopify theme structure with clear separation of **layouts**, **templates**, **sections**, **snippets**, and **assets**.
- Ready-to-deploy setup for Shopify.

## How to use

To use this repository for making Shopify themes, use the following command of Shopify CLI.

```sh
shopify theme init [ NAME OF YOUR THEME ] --clone-url https://github.com/jerry-ey/shopify-theme-boilerplate
```

```sh
npm run dev
```

If you don't have Shopify CLI installed to your computer, navigate to the [installation page of Shopify CLI](https://shopify.dev/themes/tools/cli/installation).

## Project Structure

```plaintext
shopify-theme-boilerplate/
├── assets/ # Compiled JS, CSS, and other assets
├── config/ # Shopify theme settings
├── layout/ # Theme-wide layout files
├── locales/ # Language files
├── sections/ # Reusable section blocks
├── snippets/ # Small reusable code pieces
├── templates/ # Page templates
├── src/
│ ├── index.css # Tailwind CSS and other styles
│ ├── index.ts # TypeScript code
│ └── global.d.ts # delcare type
├── vite.config.mts # Vite configuration file
├── tailwind.config.mts # Tailwind CSS configuration file
├── tsconfig.json # TypeScript configuration file
├── package.json # Node.js dependencies and scripts
└── README.md # Project documentation
```

## Resource
- [vite-shopify-plugin](https://shopify-vite.barrelny.com/)

## Contributions

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.

Enjoy building with this modern Shopify theme boilerplate!
