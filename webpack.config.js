var externals = {
  app: {
    'firebase/app': {
      root: 'firebase/app',
      commonjs2: 'firebase/app',
      commonjs: 'firebase/app',
      amd: 'firebase/app'
    }
  },
  auth: {
    'firebase/auth': {
      root: 'firebase/auth',
      commonjs2: 'firebase/auth',
      commonjs: 'firebase/auth',
      amd: 'firebase/auth'
    }
  },
  messaging: {
    'firebase/messaging': {
      root: 'firebase/messaging',
      commonjs2: 'firebase/messaging',
      commonjs: 'firebase/messaging',
      amd: 'firebase/messaging'
    }
  },
  storage: {
    'firebase/storage': {
      root: 'firebase/storage',
      commonjs2: 'firebase/storage',
      commonjs: 'firebase/storage',
      amd: 'firebase/storage'
    }
  },
  database: {
    'firebase/database': {
      root: 'firebase/database',
      commonjs2: 'firebase/database',
      commonjs: 'firebase/database',
      amd: 'firebase/database'
    }
  },
  firebase: {
    'firebase': {
      root: 'firebase',
      commonjs2: 'firebase',
      commonjs: 'firebase',
      amd: 'firebase'
    }
  }
}

var loaders = [
  {
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
      presets: ['es2015']
    }
  }
];

module.exports = [{
  entry: ['./src/rebase.js'],
  output: {
    filename: "dist/bundle.js",
    libraryTarget: 'umd'
  },
  externals: [
    externals.app, externals.auth, externals.database,
    externals.messaging, externals.storage, externals.firebase
  ],
  module: {
    loaders: loaders
  }
}];
