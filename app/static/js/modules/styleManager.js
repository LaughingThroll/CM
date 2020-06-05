// Code Review

let styleManager = (function() {

  let style = document.createElement("style")
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  
  function getStyleRuleIndexBySelector(selector, prop){
    let result = [], i,
        value = (prop ? selector + "{" + prop + "}" : selector).replace(/\s/g, ''),
        s = prop ? "cssText" : "selectorText"

    for( i=0; i < style.sheet.cssRules.length; i++ )
      if( style.sheet.cssRules[i][s].replace(/\s/g, '') == value)
        result.push(i)

    return result;
  }

  return {
    style : style,
    
    getStyleRuleIndexBySelector : getStyleRuleIndexBySelector,
    
    add(selector, value){
      return style.sheet.insertRule(`${selector}{${value}}`, style.sheet.cssRules.length)
    },
    
    remove(selector, prop){
      let indexes = getStyleRuleIndexBySelector(selector, prop), i = indexes.length;
      for( ; i-- ; )
        style.sheet.deleteRule( indexes[i] )
    }
  }
})()

export {styleManager}