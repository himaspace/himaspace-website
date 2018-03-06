exports.files = {
  javascripts: {
    joinTo: {
      'js/app.js': /^(app)/,
      'js/vendor.js': /^node_modules/,
    },
  },
  stylesheets: { joinTo: 'css/app.css' },
};

exports.plugins = {
  babel: { presets: ['latest', 'stage-0'] },
  pleeease: {
    sass: true,
    autoprefixer: {
      browsers: ['> 1%'],
    },
  },
  copycat: {
    fonts: [
      'node_modules/bootstrap-sass/assets/fonts',
      'node_modules/font-awesome/fonts'
    ],
    onlyChanged: true,
  },
  sass: {
    options: {
      includePaths: [
        'node_modules/bootstrap-sass/assets/stylesheets/',
        'node_modules/bootstrap-social/'
      ]
    }
  }
};

exports.modules = {
  autoRequire: {
    'js/app.js': ['js/initialize'],
  },
};

exports.npm = {
  globals: {
    jQuery: 'jquery',
    $: 'jquery',
    bootstrap: 'bootstrap-social',
  },
  styles: {
    'font-awesome': ['css/font-awesome.css']
  },
};
