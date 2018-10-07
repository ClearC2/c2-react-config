# c2-react-config

Centralized project configuration for react projects.

## Install

```
yarn add ClearC2/c2-react-config#^1.0.0
```

## Babel

Create a `babel.config.js` file in the root of your project with the following contents:

```js
// <project-dir>/babel.config.js
module.exports = require('c2-react-config/babel.config')
```

## Webpack

Create a `webpack.config.js` file in the root of your project with the following contents:


```js
// <project-dir>/webpack.config.js
const path = require('path')
const webpackConfig = require('c2-react-config/webpack/webpack.config')

module.exports = (env) => {
  env.presetDir = path.join(__dirname, 'webpack')
  env.projectDir = __dirname
  return webpackConfig(env)
}

```

### Presets
This project contains several partial webpack configurations called "presets". These presets are merged together with the [webpack-merge](https://github.com/survivejs/webpack-merge) utility.

Presets can have both `development` and `production` versions. This is specified by the `--env.mode <mode>` command line
argument when using webpack or webpack-dev-server. Example:

```
npx webpack --env.mode development
```

`common` presets apply to both `development` and `production` modes.

### Included presets

#### `input`
Provides the entry points of the project. `common` preset enabled by default.

#### `output`
Configures the output. `common` preset enabled by default.

#### `babel`
Runs the `babel-loader` on `.js` files. `common` preset enabled by default.

#### `assets`
Handles font, images, audio files. `common` preset enabled by default.

#### `css`
Converts css to js in development. Extracts/optimizes css in production. `common` preset enabled by default.

#### `sass`
Converts sass to css. **Not** enabled by default.

#### `css-modules`
Enables css modules. Use `<name>.module.css` file naming. `common` preset enabled by default.

#### `dev-server`
Configures webpack-dev-server. `development` preset enabled by default.

#### `html`
Uses the `html-webpack-plugin` and uses `<project-root>/src/index.html` as the template. `common` preset enabled by default.

#### `source-map`
Configures the appropriate source map for development/production. `common` preset enabled by default.

#### `progress`
Outputs the build progress in the cli. `common` preset enabled by default.

#### `clean`
Cleans the dist folder before builds using [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin). `common` preset enabled by default.

#### `optimize`
Minify/uglify output. `production` preset enabled by default.

#### `analyzer`
Inspect bundle output with the [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer). **Not** enabled by default.

### Summary

Common presets:
- `input`
- `output`
- `assets`
- `babel`
- `css`
- `css-modules`
- `html`
- `progress`
- `souce-map`
- `clean`
- `analyzer` - Not enabled by default
- `sass` - Not enabled by default

Development presets:
- `dev-server`

Production presets:
- `optimize`

### Customizing default presets
When you created your project's `webpack.config.js`, you provided a `presetDir`. This is where you can hold your project specific configurations.

For example, if you want to change the webpack-dev-server port:

```js
// <project-dir>/webpack/dev-server.development.js
const utils = require('c2-react-config/webpack/utils')

module.exports = (env) => utils.extendPreset(env, 'dev-server.development',
  {
    devServer: {
      port: 8089
    }
  }
)

// you could choose not to `extendPreset` and return a completely new configuration.
```

Presets are functions that accept the `env` object and return configuration.

### Adding configuration
If you have project specific configuration that applies to both development and production, add a `<preset-name>.production.js` file. Example:

```js
// <project-dir>/webpack/provide.production.js
const webpack = require('webpack')

module.exports = (env) => ({
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    })
  ]
})
```

And then modify your `webpack.config.js` to customize the presets:

```js
// <project-dir>/webpack.config.js
const path = require('path')
const webpackConfig = require('c2-react-config/webpack/webpack.config')
const {presets} = webpackConfig

// add "provide" preset to common presets
// also add sass support for fun
presets.common = presets.common.concat(['provide', 'sass'])

// add analyzer to inspect bundle on production output
presets.production = presets.production.concat(['analyzer'])

module.exports = (env) => {
  env.presetDir = path.join(__dirname, 'webpack')
  env.projectDir = __dirname
  return webpackConfig(env)
}

```

Presets will fall back to the production version if a development version is not found in development mode.

## Example
There is an example in the `example` directory which shows off css modules, a custom preset(`provide`), sass, and illustrates how to install bootstrap.