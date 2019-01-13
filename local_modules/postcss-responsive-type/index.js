'use strict';

const postcss = require('postcss');

// Assign default root size
let rootSize = '16px';


let size_types = {
  // min modular scale minor second
  // max >=40 modular scale minor second
  // max > 40 modular scale minor third
  outset: {
    10: {min: '3.38rem', max: '6rem'},
    20: {min: '2.66rem', max: '4.5rem'},
    30: {min: '2.25rem', max: '4rem'},
    40: {min: '1.7rem', max: '2rem'},
    50: {min: '1.5rem', max: '1.7rem'},
    60: {min: '1.3rem', max: '1.5rem'},
  },
  // min modular scale minor second
  // max >=40 modular scale minor second
  // max > 40 modular scale minor third
  inset: {
    10: {min: '1.618rem', max: '3.24rem'},
    20: {min: '1.46rem', max: '2.592rem'},
    30: {min: '1.32rem', max: '2.074rem'},
    40: {min: '1.138rem', max: '1.383rem'},
    50: {min: '1.067rem', max: '1.296rem'},
    60: {min: '1rem', max: '1.215rem'},
    
  },
  content: {
    10: {min: '1rem', max: '6rem'}
  }
}



/**
 * Extract the unit from a string
 * @param  {String} value value to extract unit from
 * @return {String}       unit
 */
function getUnit(value) {
  var match = value.match(/px|rem|em/);

  if (match) {
    return match.toString();
  }
  return null;
}

/**
 * Px -> Rem converter
 * @param  {String} px pixel value
 * @return {String}    rem value
 */
function pxToRem(px) {
  return parseFloat(px) / parseFloat(rootSize) + 'rem';
}

/**
 * Build new responsive type rules
 * @param  {object} rule     old CSS rule
 * @return {object}          object of new CSS rules
 */
function buildRules(rule, propName, params, result) {
  let rules = {},
      minSize = params.minSize,
      maxSize = params.maxSize,
      minWidth,
      maxWidth,
      sizeUnit = getUnit(params.minSize),
      maxSizeUnit = getUnit(params.maxSize),
      widthUnit = getUnit(params.minWidth),
      maxWidthUnit = getUnit(params.maxWidth),
      sizeDiff,
      rangeDiff;

  if (sizeUnit === null) {
    throw rule.error('sizes with unitless values are not supported');
  }

  if (sizeUnit !== maxSizeUnit && widthUnit !== maxWidthUnit) {
    rule.warn(result, 'min/max unit types must match');
  }

  if (sizeUnit === 'rem' && widthUnit === 'px') {
    minWidth = pxToRem(params.minWidth);
    maxWidth = pxToRem(params.maxWidth);
  } else if (sizeUnit === widthUnit || sizeUnit === 'rem' && widthUnit === 'em') {
    minWidth = params.minWidth;
    maxWidth = params.maxWidth;
  } else {
    rule.warn(result, 'this combination of units is not supported');
  }

  // Build the responsive type decleration
  sizeDiff = parseFloat(maxSize) - parseFloat(minSize);
  rangeDiff = parseFloat(maxWidth) - parseFloat(minWidth);

  rules.responsive = 'calc(' + sizeDiff + ' * ((100vw - ' + minWidth + ') / ' + rangeDiff + ') + ' + minSize + ')';

  // Build the media queries
  rules.minMedia = postcss.atRule({
    name: 'media',
    params: 'screen and (max-width: ' + params.minWidth + ')'
  });

  rules.maxMedia = postcss.atRule({
    name: 'media',
    params: 'screen and (min-width: ' + params.maxWidth + ')'
  });

  // Add the required content to new media queries
  rules.minMedia.append({
    selector: rule.selector
  }).walkRules(selector => {
    selector.append({
      prop: propName,
      value: params.minSize
    });
  });

  rules.maxMedia.append({
    selector: rule.selector
  }).walkRules(selector => {
    selector.append({
      prop: propName,
      value: params.maxSize
    });
  });

  return rules;
}

module.exports = postcss.plugin('postcss-responsive-type', () => {
  return function (css, result) {
    css.walkRules(function(rule){
      let thisRule,
          newRules;

      rule.walkDecls('responsive', decl => {
        const cmds = decl.value.split(' ')
        const property = cmds[0]
        let params = {
          minWidth: cmds[3] || '27rem',
          maxWidth: cmds[4] || '120rem'
        }
        if(size_types[cmds[1]]){
          params.minSize = size_types[cmds[1]][cmds[2]].min
          params.maxSize = size_types[cmds[1]][cmds[2]].max
        }else{
          params.minSize = cmds[1]
          params.maxSize = cmds[2]
        }

        //console.log(`\r\n****( ${decl.value} ) ****\r\n${decl.parent.selector}\r\n*****`)
        //console.log(params)
        //console.log('*********')
        thisRule = decl.parent; 
        newRules = buildRules(thisRule, property, params, result);
        rule.append({
          prop: property,
          value: newRules.responsive
        })
        thisRule.parent.insertAfter(thisRule, newRules.minMedia);
        thisRule.parent.insertAfter(thisRule, newRules.maxMedia);
      });
    });
  };
});
