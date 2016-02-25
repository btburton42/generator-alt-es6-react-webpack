'use strict';

var fs = require('fs');
var path = require('path');
var util = require('util');
var _ = require('Lodash');
var generators = require('yeoman-generator');


module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
    this.sourceRoot(path.join(__dirname, '../../', 'templates'));
    this.appName = this.appname.toLowerCase().replace(/\ /g, '-')
    this.className = _.capitalize(this.appName)

    this.on('end', function () {
      this.installDependencies({
        npm: true,
        skipInstall: false
      });
    });
  },

  prompting: {
    method1: function() {
      var done = this.async();
      this.prompt({
        type    : 'input',
        name    : 'name',
        message : 'Your project name',
        default : this.appname // Default to current folder name
      }, function (answers) {
        this.log(answers.name);
        done();
      }.bind(this));
    }
  },

  writing: {
    setupEnv: function() {
      this.copy('_bower.json', 'bower.json');
      this.copy('_package.json', 'package.json');
      this.copy('.babelrc', '.babelrc');
      this.copy('.bowerrc', '.bowerrc');
      this.copy('.eslintrc', '.eslintrc');
      this.copy('.editorconfig', '.editorconfig');
      this.copy('.jscsrc', '.jscsrc');
      this.copy('.gitignore', '.gitignore');

      // webpack configs
      this.copy('dev-server.js', 'webpack/dev-server.js');
      this.copy('dev.config.js', 'webpack/dev.config.js');
      this.copy('prod.config.js', 'webpack/prod.config.js');
      this.copy('clean-dist.js', 'webpack/utils/clean-dist.js');
      this.copy('copy-to-dist.js', 'webpack/utils/copy-to-dist.js');

      // utility scripts
      this.copy('alt.js', 'app/utils/alt.js');

      // redux components
      this.copy('appActions.js', 'app/actions/appActions.js');
      this.copy('appStore.js', 'app/store/appStore.js');

      // react components
      this.copy('index.js', 'app/index.js');
      this.copy('routes.js', 'app/routes.js');
      this.copy('app.js', 'app/components/app.js');

      // assets
      this.copy('index_template.html', 'app/assets/index_template.html');
      this.copy('app.scss', 'app/styles/app.scss');


      fs.appendFileSync('.gitignore',
        (fs.existsSync('.gitignore') ? '\n' : '') +
        'vendor_bower_components\n' +
        'node_modules\n' +
        'npm-debug.log\n'
      );

    }
  }

});

// MochaGenerator.prototype.setupEnv = function setupEnv() {
//   // config files

// };

// ** #TODO: research this **
// ** setupEnv() above is running before this prompt. how to prevent that? **
// MochaGenerator.prototype.askForName = function askForName(){
//   var done = this.async();
//   this.prompt({
//     type: 'input',
//     name: 'name',
//     message: 'Your project name',
//     default: this.appname
//   }, function(answers){
//     this.appname = answers.name.replace(/\"/g, '\\"');
//   done();
//   }.bind(this));
// };
