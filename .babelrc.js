module.exports = {
  presets: [
    require('@babel/preset-env')
  ],
  plugins: [
    require('@babel/plugin-transform-runtime'),
    require('@babel/plugin-proposal-class-properties')
  ]
}
