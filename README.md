# Angular Module Federation Example

This repository demonstrates how to use **Module Federation** in Angular to split a large application into multiple smaller, independent projects. The application is structured with a **shell** project that hosts two other projects: **users** and **items**.

## Table of Contents

- [Introduction](#introduction)
- [Architecture](#architecture)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Building and Deploying](#building-and-deploying)

## Introduction

This project uses **Angular Module Federation** to enable the sharing of Angular modules and components across multiple applications. The **shell** project serves as the main container, dynamically loading the **users** and **items** modules at runtime.

### Key Concepts:
- **Shell Project**: The entry point of the application that hosts the other projects via **Module Federation**.
- **Users Project**: A micro front-end that contains user-related features and is dynamically loaded by the shell.
- **Items Project**: Another micro front-end that contains item-related features, also dynamically loaded by the shell.

## Architecture

The architecture follows the **Micro Front-End** (MFE) pattern, where each project is developed and deployed independently, yet they are seamlessly integrated at runtime:

- The **shell** project is the container that loads remote modules.
- The **users** and **items** projects are configured as **remote** applications and exposed to the shell through **Module Federation**.

### Project Structure:

```
📦 
├─ .editorconfig
├─ .gitignore
├─ .vscode
│  ├─ extensions.json
│  ├─ launch.json
│  └─ tasks.json
├─ README.bak.md
├─ README.md
├─ angular.json
├─ eslint.config.mjs
├─ package-lock.json
├─ package.json
├─ projects
│  ├─ items
│  │  ├─ public
│  │  │  └─ favicon.ico
│  │  ├─ src
│  │  │  ├─ app
│  │  │  │  ├─ app.component.html
│  │  │  │  ├─ app.component.scss
│  │  │  │  ├─ app.component.ts
│  │  │  │  ├─ app.config.ts
│  │  │  │  ├─ app.routes.ts
│  │  │  │  ├─ items.types.ts
│  │  │  │  ├─ items
│  │  │  │  │  ├─ items-one
│  │  │  │  │  │  ├─ items-one.component.html
│  │  │  │  │  │  ├─ items-one.component.scss
│  │  │  │  │  │  └─ items-one.component.ts
│  │  │  │  │  ├─ items.component.html
│  │  │  │  │  ├─ items.component.scss
│  │  │  │  │  ├─ items.component.ts
│  │  │  │  │  ├─ items.module.ts
│  │  │  │  │  └─ page-two
│  │  │  │  │     ├─ items-two.component.html
│  │  │  │  │     ├─ items-two.component.scss
│  │  │  │  │     └─ items-two.component.ts
│  │  │  │  └─ services
│  │  │  │     └─ inventory.service.ts
│  │  │  ├─ assets
│  │  │  │  └─ data
│  │  │  │     └─ inventory.json
│  │  │  ├─ bootstrap.ts
│  │  │  ├─ environments
│  │  │  │  └─ environment.ts
│  │  │  ├─ index.html
│  │  │  ├─ main.ts
│  │  │  └─ styles.scss
│  │  ├─ tsconfig.app.json
│  │  ├─ tsconfig.spec.json
│  │  ├─ webpack.config.js
│  │  └─ webpack.prod.config.js
│  ├─ shell
│  │  ├─ public
│  │  │  └─ favicon.ico
│  │  ├─ src
│  │  │  ├─ app
│  │  │  │  ├─ +about
│  │  │  │  │  ├─ about.component.html
│  │  │  │  │  ├─ about.component.scss
│  │  │  │  │  └─ about.component.ts
│  │  │  │  ├─ +landing
│  │  │  │  │  ├─ landing.component.html
│  │  │  │  │  ├─ landing.component.scss
│  │  │  │  │  └─ landing.component.ts
│  │  │  │  ├─ +login
│  │  │  │  │  ├─ login.component.html
│  │  │  │  │  ├─ login.component.scss
│  │  │  │  │  └─ login.component.ts
│  │  │  │  ├─ app.component.html
│  │  │  │  ├─ app.component.scss
│  │  │  │  ├─ app.component.ts
│  │  │  │  ├─ app.config.ts
│  │  │  │  ├─ app.routes.ts
│  │  │  │  ├─ common.types.ts
│  │  │  │  └─ shared
│  │  │  │     ├─ components
│  │  │  │     │  └─ menu
│  │  │  │     │     ├─ menu.component.html
│  │  │  │     │     ├─ menu.component.scss
│  │  │  │     │     └─ menu.component.ts
│  │  │  │     ├─ guards
│  │  │  │     │  ├─ auth.guard.ts
│  │  │  │     │  └─ no-auth.guard.ts
│  │  │  │     └─ services
│  │  │  │        ├─ auth.service.ts
│  │  │  │        └─ menu.service.ts
│  │  │  ├─ assets
│  │  │  │  └─ data
│  │  │  │     ├─ menu.json
│  │  │  │     └─ users.json
│  │  │  ├─ bootstrap.ts
│  │  │  ├─ decl.d.ts
│  │  │  ├─ environments
│  │  │  │  └─ environment.ts
│  │  │  ├─ index.html
│  │  │  ├─ main.ts
│  │  │  └─ styles.scss
│  │  ├─ tsconfig.app.json
│  │  ├─ tsconfig.spec.json
│  │  ├─ webpack.config.js
│  │  └─ webpack.prod.config.js
│  └─ users
│     ├─ public
│     │  └─ favicon.ico
│     ├─ src
│     │  ├─ app
│     │  │  ├─ app.component.html
│     │  │  ├─ app.component.scss
│     │  │  ├─ app.component.ts
│     │  │  ├─ app.config.ts
│     │  │  ├─ app.routes.ts
│     │  │  ├─ items
│     │  │  │  ├─ page-one
│     │  │  │  │  ├─ users-one.component.html
│     │  │  │  │  ├─ users-one.component.scss
│     │  │  │  │  └─ users-one.component.ts
│     │  │  │  └─ page-two
│     │  │  │     ├─ users-two.component.html
│     │  │  │     ├─ users-two.component.scss
│     │  │  │     └─ users-two.component.ts
│     │  │  └─ users
│     │  │     ├─ users.component.html
│     │  │     ├─ users.component.scss
│     │  │     ├─ users.component.ts
│     │  │     └─ users.module.ts
│     │  ├─ bootstrap.ts
│     │  ├─ environments
│     │  │  └─ environment.ts
│     │  ├─ index.html
│     │  ├─ main.ts
│     │  └─ styles.scss
│     ├─ tsconfig.app.json
│     ├─ tsconfig.spec.json
│     ├─ webpack.config.js
│     └─ webpack.prod.config.js
├─ tsconfig.json
└─ tslint.json
```

## Setup

### Prerequisites:
- Node.js (version 14.x or higher)
- npm (or yarn)

### Install Dependencies:
To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/fgavilan/module-federation.git
cd module-federation
npm install
```

### Running the application:

```
npm run run:all
```

This will launch all projects and open browser windows for each. Ensure all of them are running
After that, App is ready at http://localhost:4200

### Building and Deploying
```
npm run build
```
We get a folder for each project in dist. Deploy each in your server of choice
(Deployment instructions may vary depending on server setup)
