module.exports = {
  plugins: [
    require('postcss-easy-import')({prefix: '_'}), // keep this first
    require('autoprefixer')({url: "inline"}) // so imports are auto-prefixed too
  ]
};