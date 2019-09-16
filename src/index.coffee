'use strict'

evalInContext = (str, context) ->
  try
    (new Function("with(this) {return #{str}}"))
    .call context

fillTemplate = (template, data) ->
  template.replace /\{\{(.+?)\}\}/g, (all, expression) ->
    evalInContext(expression, data) or ''

module.exports =
  fill: fillTemplate