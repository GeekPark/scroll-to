'use strict';

var $ = require('jquery');

var scroll = ({selector, offset, callback, posY, duration, easing, element}) => {
  $((element || 'html,body')).animate({
    scrollTop: parseInt(
      typeof posY !== 'undefined' ? posY : $(selector).offset().top
      - (offset || 0)
    ) + 'px'
  }, duration || 800, easing || 'swing')
  .promise().done(() => {
    if(typeof callback === 'function') callback();
  });
}

module.exports = scroll
