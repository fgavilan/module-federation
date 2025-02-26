# Angular Module Federation Example

This repository demonstrates how to use **Module Federation** in Angular to split a large application into multiple smaller, independent projects. The application is structured with a **shell** project that hosts two other projects: **users** and **items**.

## Table of Contents

- [Introduction](#introduction)
- [Architecture](#architecture)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Development Workflow](#development-workflow)
- [Additional Information](#additional-information)

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

/workspace /projects /shell /users /items


## Setup

### Prerequisites:
- Node.js (version 14.x or higher)
- npm (or yarn)

### Install Dependencies:
To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-repository/angular-module-federation.git
cd angular-module-federation
npm install
