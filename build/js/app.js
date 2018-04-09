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
      s.$b.on('loaded.bs.select', function() {
        var $filterOption = $(this).nextAll('.dropdown-menu').addClass(bemC(b, 'menu')).end().nextAll('.dropdown-toggle').removeClass('dropdown-toggle btn').find('.filter-option').clone(true);
        $(this).nextAll('.dropdown-toggle').empty().append($filterOption).append('<svg class="isvg-angle-d" role="img">\n' + '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#isvg-angle-d"></use>\n' + '</svg>');
      }).selectpicker({
        style: bemC(b, 'toggle'),
        width: 'fit',
        container: 'body'
      });
    },
    bindUIActions: function bindUIActions() {}
  };
}();

$(function() {
  SelectLang.init();
});
//# sourceMappingURL=app.js.map
