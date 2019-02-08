module.exports = function (api) {
  const babelEnv = api.env()
  // api.cache.using(() => process.env.NODE_ENV)
  api.cache(true)

  console.log('babelEnv=', babelEnv)

  const presets = setupPresets(babelEnv)
  const plugins = setupPlugins(babelEnv)
  const ignore = setupIgnoredFiles(babelEnv)

  return {
    presets,
    plugins,
    ignore
  }
}

function setupPresets (babelEnv) {
  let presetEnv = '@babel/preset-env'

  if (babelEnv === 'es') {
    presetEnv = [
      '@babel/preset-env',
      {
        modules: false
      }
    ]
  }

  return [
    presetEnv,
    '@babel/preset-react'
  ]
}

function setupPlugins (babelEnv) {
  if (babelEnv === 'test') {
    return [
      [
        'emotion',
        { sourceMap: true, autoLabel: true }
      ],
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-runtime'
    ]
  } else {
    return [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-runtime'
    ]
  }
}

function setupIgnoredFiles (babelEnv) {
  let ignore

  if (babelEnv !== 'test') {
    ignore = [
      '**/*.test.js',
      '**/__mocks__/**'
    ]
  }

  return ignore
}
