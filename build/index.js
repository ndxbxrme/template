(function() {
  'use strict';
  var evalInContext, fillTemplate;

  evalInContext = function(str, context) {
    try {
      return (new Function(`with(this) {return ${str}}`)).call(context);
    } catch (error) {}
  };

  fillTemplate = function(template, data) {
    return template.replace(/\{\{(.+?)\}\}/g, function(all, expression) {
      return evalInContext(expression, data) || '';
    });
  };

  module.exports = {
    fill: fillTemplate
  };

}).call(this);

//# sourceMappingURL=index.js.map
