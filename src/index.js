'use strict';

var $ = require('jquery');

var scroll = ({selector, offset, callback, posY, duration, easing, element}) => {
  (typeof element === 'object' ? element : $('html,body')).animate({
    scrollTop: parseInt(
      typeof posY !== 'undefined' ? posY : $(selector).offset().top
      - (offset || 0)
    ) + 'px'
  }, typeof duration === 'undefined' ? 800 : duration, easing || 'swing')
  .promise().done(() => {
    if(typeof callback === 'function') callback();
  });
}

module.exports = scroll
