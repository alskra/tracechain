'use strict';

var bemS = function bemS(b) {
  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var m = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return '.' + b + (e ? '__' + e : '') + (m ? '--' + m : '');
}; // return BEM class selector


var bemC = function bemC(b) {
  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var m = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return b + (e ? '__' + e : '') + (m ? '--' + m : '');
}; // return BEM class


var SelectLang = function() {
  var b = 'select-lang';
  var s;
  return {
    settings: {
      $b: $(bemS(b))
    },
    init: function init() {
      s = this.settings;
      this.bindUIActions();
      s.$b.not(bemS(b, '', 'loaded')).on('loaded.bs.select', function() {
        var $filterOption = $(this).next('.dropdown-toggle').children('.filter-option');
        $(this).addClass(bemC(b, '', 'loaded')).next('.dropdown-toggle').removeClass('dropdown-toggle btn').empty().append($filterOption).append('<svg class="isvg-angle-d" role="img">\n' + '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#isvg-angle-d"></use>\n' + '</svg>').next('.dropdown-menu').addClass(bemC(b, 'menu'));
      }).selectpicker({
        style: bemC(b, 'toggle'),
        width: 'fit',
        container: 'body',
        selectOnTab: true
      });
    },
    bindUIActions: function bindUIActions() {}
  };
}();

var SelectLight = function() {
  var b = 'select-light';
  var s;
  return {
    settings: {
      $b: $(bemS(b))
    },
    init: function init() {
      s = this.settings;
      this.bindUIActions();
      s.$b.not(bemS(b, '', 'loaded')).on('loaded.bs.select', function() {
        var $filterOption = $(this).next('.dropdown-toggle').children('.filter-option');
        $(this).addClass(bemC(b, '', 'loaded')).next('.dropdown-toggle').removeClass('dropdown-toggle btn').empty().append($filterOption).append('<svg class="isvg-angle-d" role="img">\n' + '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#isvg-angle-d"></use>\n' + '</svg>').next('.dropdown-menu').addClass(bemC(b, 'menu'));
      }).selectpicker({
        style: bemC(b, 'toggle'),
        width: 'fit',
        container: 'body',
        selectOnTab: true
      });
    },
    bindUIActions: function bindUIActions() {}
  };
}();

var SelectOutline = function() {
  var b = 'select-outline';
  var s;
  return {
    settings: {
      $b: $(bemS(b))
    },
    init: function init() {
      s = this.settings;
      this.bindUIActions();
      s.$b.not(bemS(b, '', 'loaded')).on('loaded.bs.select', function() {
        var $filterOption = $(this).next('.dropdown-toggle').children('.filter-option');
        $(this).addClass(bemC(b, '', 'loaded')).next('.dropdown-toggle').removeClass('dropdown-toggle btn').empty().append($filterOption).append('<svg class="isvg-angle-d" role="img">\n' + '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#isvg-angle-d"></use>\n' + '</svg>').next('.dropdown-menu').addClass(bemC(b, 'menu'));
      }).selectpicker({
        style: bemC(b, 'toggle'),
        width: 'fit',
        container: 'body',
        selectOnTab: true
      });
    },
    bindUIActions: function bindUIActions() {}
  };
}();

$(function() {
  SelectLang.init();
  SelectOutline.init();
  SelectLight.init();
});
//# sourceMappingURL=app.js.map
