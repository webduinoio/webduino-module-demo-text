+(function (window, $) {

  'use strict';

  var blocklyText = function (text) {
    if ($('.text-wrapper').length < 1) {
      this.wrapper = $('<div/>').addClass('text-wrapper')
      $('body').append(this.wrapper);
    }
    this.paragraph = $('<p/>').appendTo('.text-wrapper');
    if (text) {
      this.paragraph.text(text);
    }
  }

  blocklyText.prototype.setText = function (text) {
    this.paragraph.text(text);
    return this;
  };

  blocklyText.prototype.setColor = function (hex) {
    this.paragraph.css('color', hex);
    return this;
  };

  blocklyText.prototype.setSize = function (size) {
    this.paragraph.css('font-size', size + 'px');
    return this;
  };

  blocklyText.prototype.setLineHeight = function (height) {
    this.paragraph.css('line-height', height + 'px');
    return this;
  };

  blocklyText.prototype.addLineBreak = function () {
    this.wrapper.append('</br>');
    return this;
  };

  window.blocklyText = blocklyText;

}(window, window.jQuery));