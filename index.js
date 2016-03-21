var handlebars = require('express-handlebars');
var assign = require('object-assign');

// Borrowed from https://github.com/defunctzombie/handlebars-extend-block
// http://stackoverflow.com/questions/21737057/handlebars-with-express-different-html-head-for-different-pages
var hbsHelers = {
  extend: function(name, context) {
    if(!this._sections) this._sections = {};
    var block = this._sections[name];
    if(!block) block = this._sections[name] = [];
    this._sections[name].push(context.fn(this));
  },

  block: function(name) {
    var val = (this._sections[name] || []).join('\n');
   // clear the block
   this._sections[name] = [];
   return val;
  }
};

module.exports = function(hbs) {
  assign(hbs.handlebars.helpers, hbsHelers);
  return hbs;
};