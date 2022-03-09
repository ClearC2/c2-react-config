## [5.0.1](https://github.com/ClearC2/c2-react-config/compare/v5.0.0...v5.0.1) (2022-03-09)


### Bug Fixes

* **postcss:** add postcss config ([bfbe53c](https://github.com/ClearC2/c2-react-config/commit/bfbe53c5c947e74e34930b464e69c8b92b05e0ac))

# [5.0.0](https://github.com/ClearC2/c2-react-config/compare/v4.0.1...v5.0.0) (2022-03-01)


### Features

* **packages:** upgrade packages to be node v16 compatible ([#56](https://github.com/ClearC2/c2-react-config/issues/56)) ([4ac4849](https://github.com/ClearC2/c2-react-config/commit/4ac4849f91e4619ce66066ee12514fe34c6e7efc))


### BREAKING CHANGES

* **packages:** Upgraded webpack, plugins, and compatible node version

## [4.0.1](https://github.com/ClearC2/c2-react-config/compare/v4.0.0...v4.0.1) (2022-02-08)


### Bug Fixes

* **devServer:** update dev-server and pass in mode ([8a5e3ae](https://github.com/ClearC2/c2-react-config/commit/8a5e3ae))

# [4.0.0](https://github.com/ClearC2/c2-react-config/compare/v3.1.0...v4.0.0) (2022-01-24)


### Features

* **webpack:** upgrade to webpack5 ([0013d03](https://github.com/ClearC2/c2-react-config/commit/0013d03))


### BREAKING CHANGES

* **webpack:** upgrade to webpack 5

# [3.1.0](https://github.com/ClearC2/c2-react-config/compare/v3.0.7...v3.1.0) (2020-09-09)


### Features

* **webpack:** allow presets to be async ([d0b5726](https://github.com/ClearC2/c2-react-config/commit/d0b5726))

## [3.0.7](https://github.com/ClearC2/c2-react-config/compare/v3.0.6...v3.0.7) (2020-02-10)


### Bug Fixes

* **eslint:** make exhaustive deps error ([1e717aa](https://github.com/ClearC2/c2-react-config/commit/1e717aa))

## [3.0.6](https://github.com/ClearC2/c2-react-config/compare/v3.0.5...v3.0.6) (2019-08-06)


### Bug Fixes

* upgrade deps ([b0e42e3](https://github.com/ClearC2/c2-react-config/commit/b0e42e3))

## [3.0.5](https://github.com/ClearC2/c2-react-config/compare/v3.0.4...v3.0.5) (2019-07-09)


### Bug Fixes

* upgrade eslint config ([7d31c8c](https://github.com/ClearC2/c2-react-config/commit/7d31c8c))

## [3.0.4](https://github.com/ClearC2/c2-react-config/compare/v3.0.3...v3.0.4) (2019-06-27)


### Bug Fixes

* move hot preset from common to development preset ([2a9d6f5](https://github.com/ClearC2/c2-react-config/commit/2a9d6f5))

## [3.0.3](https://github.com/ClearC2/c2-react-config/compare/v3.0.2...v3.0.3) (2019-06-24)


### Bug Fixes

* upgrade eslint package ([01a253a](https://github.com/ClearC2/c2-react-config/commit/01a253a))

## [3.0.2](https://github.com/ClearC2/c2-react-config/compare/v3.0.1...v3.0.2) (2019-06-24)


### Bug Fixes

* upgrade deps ([#12](https://github.com/ClearC2/c2-react-config/issues/12)) ([db3c0d4](https://github.com/ClearC2/c2-react-config/commit/db3c0d4))

## [3.0.1](https://github.com/ClearC2/c2-react-config/compare/v3.0.0...v3.0.1) (2019-05-16)


### Bug Fixes

* **babel:** set preset-env range higher for corejs error ([69f5fca](https://github.com/ClearC2/c2-react-config/commit/69f5fca))

# [3.0.0](https://github.com/ClearC2/c2-react-config/compare/v2.0.4...v3.0.0) (2019-05-09)


### Performance Improvements

* **hot-loader:** add hot loader alias for better hot reloading ([#11](https://github.com/ClearC2/c2-react-config/issues/11)) ([ca5b635](https://github.com/ClearC2/c2-react-config/commit/ca5b635))


### BREAKING CHANGES

* **hot-loader:** requires project to `yarn add @hot-loader/react-dom`. requires `hot` to be imported from `import {hot} from 'react-hot-loader/root'`.
requires change from `export default hot(module)(App)` to `export default hot(App)`

## [2.0.4](https://github.com/ClearC2/c2-react-config/compare/v2.0.3...v2.0.4) (2019-05-06)


### Bug Fixes

* **eslint:** upgrade linter ([#10](https://github.com/ClearC2/c2-react-config/issues/10)) ([f2db60f](https://github.com/ClearC2/c2-react-config/commit/f2db60f))

## [2.0.3](https://github.com/ClearC2/c2-react-config/compare/v2.0.2...v2.0.3) (2019-05-03)


### Bug Fixes

* **eslint:** upgrade lint package ([93c641a](https://github.com/ClearC2/c2-react-config/commit/93c641a))

## [2.0.2](https://github.com/ClearC2/c2-react-config/compare/v2.0.1...v2.0.2) (2019-05-02)


### Bug Fixes

* **corejs:** downgrade to corejs2 ([#8](https://github.com/ClearC2/c2-react-config/issues/8)) ([2b5cca5](https://github.com/ClearC2/c2-react-config/commit/2b5cca5))

## [2.0.1](https://github.com/ClearC2/c2-react-config/compare/v2.0.0...v2.0.1) (2019-04-24)


### Bug Fixes

* **babel:** add corejs3 ([#7](https://github.com/ClearC2/c2-react-config/issues/7)) ([2fa71f5](https://github.com/ClearC2/c2-react-config/commit/2fa71f5))

# [2.0.0](https://github.com/ClearC2/c2-react-config/compare/v1.0.4...v2.0.0) (2019-04-08)


### Bug Fixes

* update package name ([#6](https://github.com/ClearC2/c2-react-config/issues/6)) ([40a2941](https://github.com/ClearC2/c2-react-config/commit/40a2941))


### Features

* **eslint:** add hooks eslint rules ([#5](https://github.com/ClearC2/c2-react-config/issues/5)) ([27dfee6](https://github.com/ClearC2/c2-react-config/commit/27dfee6))


### BREAKING CHANGES

* update package name. `require`'s must be updated to use new package name.
* **eslint:** change eslint to inherit from scoped @clearc2/eslint-config-c2-react package. See new ESLint section in readme.

## [1.0.4](https://github.com/ClearC2/c2-react-config/compare/v1.0.3...v1.0.4) (2018-10-24)


### Performance Improvements

* **babel:** use cache directory option ([424b5ea](https://github.com/ClearC2/c2-react-config/commit/424b5ea))
* **source-map:** make source maps opt-in ([6b5114d](https://github.com/ClearC2/c2-react-config/commit/6b5114d))

## [1.0.3](https://github.com/ClearC2/c2-react-config/compare/v1.0.2...v1.0.3) (2018-10-19)


### Performance Improvements

* **babel:** update dev source map. change babel from exclude to include ([4bce8ca](https://github.com/ClearC2/c2-react-config/commit/4bce8ca))

## [1.0.2](https://github.com/ClearC2/c2-react-config/compare/v1.0.1...v1.0.2) (2018-10-17)


### Bug Fixes

* **exports:** update index exports ([3868e9a](https://github.com/ClearC2/c2-react-config/commit/3868e9a))
* **webpack:** change from uglifyjs to terser ([ae86ba0](https://github.com/ClearC2/c2-react-config/commit/ae86ba0))

## [1.0.1](https://github.com/ClearC2/c2-react-config/compare/v1.0.0...v1.0.1) (2018-10-17)


### Bug Fixes

* add missing index file ([727f4a3](https://github.com/ClearC2/c2-react-config/commit/727f4a3))

# 1.0.0 (2018-10-15)


### Bug Fixes

* **optimize:** split all chunks ([ea9a4a2](https://github.com/ClearC2/c2-react-config/commit/ea9a4a2))
