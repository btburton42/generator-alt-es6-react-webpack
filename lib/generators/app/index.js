'use strict';

var fs = require('fs');
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

var MochaGenerator = module.exports = function MochaGenerator(args, options) {

  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../../', 'templates'));
  this.appName = this._.trim(this.appname);
  this.className = this._.capitalize(this.appName)

  this.on('end', function () {
    this.installDependencies({
      npm: true,
      skipInstall: options['skip-install']
    });
  });
};

util.inherits(MochaGenerator, yeoman.generators.Base);

MochaGenerator.prototype.setupEnv = function setupEnv() {
  // config files
  this.copy('_bower.json', 'bower.json');
  this.copy('_package.json', 'package.json');
  this.copy('.babelrc', '.babelrc');
  this.copy('.bowerrc', '.bowerrc');
  this.copy('.eslintrc', '.eslintrc');
  this.copy('.jscrcc', '.jscrc');
  // webpack configs
  this.copy('dev-server.js', 'webpack/dev-server.js');
  this.copy('dev.config.js', 'webpack/dev.config.js');
  this.copy('prod.config.js', 'webpack/prod.config.js');
  this.copy('clean-dist.js', 'webpack/utils/clean-dist.js');
  this.copy('copy-to-dist.js', 'webpack/utils/copy-to-dist.js');
  this.copy('prod.config.js', 'webpack/prod.config.js');

  // react components
  this.copy('index.js', 'app/index.js');
  this.copy('routes.js', 'app/routes.js');
  this.copy('appActions.js', 'app/actions/appActions.js');
  this.copy('index_template.html', 'app/assets/index_template.html');
  this.copy('app.js', 'app/components/app.js');
  this.copy('item.js', 'app/components/item.js');
  this.copy('notFound.js', 'app/components/notFound.js');
  this.copy('appStore.js', 'app/store/appStore.js');
  this.copy('alt.js', 'app/utils/alt.js');


  fs.appendFileSync('.gitignore',
    (fs.existsSync('.gitignore') ? '\n' : '') +
    'vendor_bower_components\n' +
    'node_modules\n' +
    'npm-debug.log\n'
  );
};

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
