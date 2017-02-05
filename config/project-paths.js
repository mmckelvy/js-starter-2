const path = require('path')

// directory structure
const rootDir = path.join(__dirname, '..')
const configDir = path.join(rootDir, 'config')
const buildDir = path.join(rootDir, 'build')
const sourceDir = path.join(rootDir, 'src')
const clientDir = path.join(sourceDir, 'client')

// build inputs
const webpackDir = path.join(configDir, 'webpack')
const clientEntry = path.join(clientDir, 'index.js')

// build artifacts
const clientBuild = path.join(buildDir, 'client.js')

module.exports = {
  // directories
  rootDir: rootDir,
  sourceDir: sourceDir,
  buildDir: buildDir,

  // entry points
  clientEntry: clientEntry,

  // built files
  clientBuild: clientBuild,
  serverBuild: serverBuild,

  // globs
  clientBuildGlob: clientBuild,
  serverBuildGlob: serverBuild,

  // configuration files
  eslintConfig: path.join(configDir, 'eslint.js'),
  babelConfig: path.join(configDir, 'babelrc'),
  webpackBaseConfig: path.join(webpackDir, 'base.js'),
  webpackClientConfig: path.join(webpackDir, 'client.js'),
  webpackServerConfig: path.join(webpackDir, 'server.js'),
}
