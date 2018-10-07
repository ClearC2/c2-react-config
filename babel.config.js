const {NODE_ENV, BABEL_MODULES} = process.env

const useCommonJS = BABEL_MODULES === 'cjs' || NODE_ENV === 'test'

const presets = [
  [
    require.resolve('@babel/preset-env'),
    {
      modules: useCommonJS ? 'commonjs' : false,
      useBuiltIns: 'entry',
      targets: '> 0.25%, not dead'
    }
  ],
  require.resolve('@babel/preset-react')
]

const plugins = [
  require.resolve('@babel/plugin-proposal-class-properties'),
  require.resolve('@babel/plugin-proposal-object-rest-spread'),
  require.resolve('@babel/plugin-syntax-dynamic-import'),
  [
    require.resolve('@babel/plugin-transform-runtime'),
    {
      useESModules: !useCommonJS
    }
  ],
  require.resolve('react-hot-loader/babel')
]

const ignore = []

if (NODE_ENV === 'production') {
  ignore.push('**/*.test.js')
}

module.exports = {
  presets,
  plugins,
  ignore
}