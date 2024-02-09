# UswdsRepo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Installing the design system
There are two ways to install the design system on a project:
- Installing it as a project dependency using Node and npm
- Installing the package directly from GitHub

**We recommend using npm to make it as straightforward as possible to install the design system and update it as we release new versions.**

### Install using Node and npm
npm is a package manager for Node-based projects. USWDS maintains the [`@uswds/uswds` package](https://www.npmjs.com/package/uswds) that includes both the pre-compiled and compiled files. npm packages make it easy to update and install the design system from the command line.

1. Install `Node/npm`. Below is a link to find the install method that coincides with your operating system:

   - Node v12.13.2 (current LTS), [Installation guides](https://nodejs.org/en/download/)

   **Note for Windows users:** If you are using Windows and are unfamiliar with Node or npm, we recommend following [Team Treehouse's tutorial](http://blog.teamtreehouse.com/install-node-js-npm-windows) for more information.

2. Make sure you have installed it correctly:

   ```shell
   npm -v
   6.13.0 # This line may vary depending on what version of Node you've installed.
   ```

3. Create a `package.json` file. You can do this manually, but an easier method is to use the `npm init` command. This command will prompt you with a few questions to create your `package.json` file.

4. Add `@uswds/uswds` to your project’s `package.json`:

   ```shell
   npm install --save @uswds/uswds@latest
   ```

The `@uswds/uswds` module is now installed as a dependency. You can use the compiled files found in the `node_modules/@uswds/uswds/dist/` directory or the source files in the `node_modules/@uswds/uswds/packages/` directory.

**Note:** We do _not_ recommend directly editing the design system files in `node_modules`. One of the benefits of using a package manager is its ease of upgrade and installation. If you make customizations to the files in the package, any upgrade or re-installation will wipe them out.

### Install the package directly from GitHub
If you’re using a framework or package manager that doesn’t support npm, you can find the source files in this repository and use them in your project. Otherwise, we recommend that you follow the steps outlined in this section.

1. Download the [USWDS package](https://github.com/uswds/uswds/releases/download/v3.7.1/uswds-uswds-3.7.1.tgz) directly from the latest USWDS release and uncompress that file.

2. Copy these files and folders into a relevant place in your project's code base. Here is an example structure for how this might look:

   ```
   example-project/
   ├── assets/
   │   ├── uswds/
   │   │   ├── dist/
   │   │   ├── packages/
   │   │   └── src/
   │   ├── stylesheets/
   │   ├── images/
   │   └── javascript/
   └── index.html
   ```

   You'll notice in our example above that we also outline a `stylesheets`, `images` and `javascript` folder in your `assets` folder. These folders are to help organize any assets that are unique to your project and separate from the design system assets.


## Using USWDS CSS and JavaScript in your project

The three files critical to any USWDS project are the **stylesheet**, the **JavaScript**, and the **initializer**. Most projects require all of these to function properly.

- **Stylesheet:** This is the compiled CSS stylesheet that describes how design system components look. To start, reference either `uswds.css` or `uswds.min.css` in the `<head>` of your document. Find this file in `/dist/css`. Most projects will want to compile their own CSS from USWDS source Sass instead of using the precompiled version. For more about this, see [Compiling USWDS Sass into CSS](#compiling-uswds-sass-into-css), below.
- **Library:** This is the compiled JavaScript that controls component interactivity. Reference either `uswds.js` or `uswds.min.js` at the end of the `<body>` of your document. Find this file in `/dist/js`.
- **Initializer:** This small JavaScript file (less than 1 KB minified) helps the browser know if the USWDS JavaScript library is loading properly. This prevents component content from "flashing" or "shifting" while the page loads. Reference `uswds-init.min.js` in the `<head>` of your page, or inline its contents directly into the `<script>` tag. Find this file in `/dist/js`.

Reference the stylesheet, library, and initializer in each HTML page or dynamic template in your project.

Here is an example of how to reference these assets in your `index.html` file:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Example Project</title>
    <script src="assets/uswds/dist/js/uswds-init.min.js"></script>
    <link rel="stylesheet" href="assets/uswds/dist/css/uswds.min.css" />
  </head>
  <body>
    <script src="assets/uswds/dist/js/uswds.min.js"></script>
  </body>
</html>
```

And that’s it — you should now be able to copy our code samples into your `index.html` and start using the design system.
