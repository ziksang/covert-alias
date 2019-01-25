const babel = require('rollup-plugin-babel')
const { uglify } = require('rollup-plugin-uglify')

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'cAlias'
  },
  plugins: [
    babel({
      include: 'src/**',
    }),
    uglify()
  ]
}