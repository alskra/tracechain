const SelectLang = function () {
  const b = 'select-lang';
  let s;
  return {
    settings: {
      $b: $(bemS(b))
    },
    init: function () {
      s = this.settings;
      this.bindUIActions();

      s.$b.on('loaded.bs.select', function () {
        let $filterOption = $(this)
          .nextAll('.dropdown-menu').addClass(bemC(b, 'menu')).end()
          .nextAll('.dropdown-toggle').removeClass('dropdown-toggle btn')
          .find('.filter-option').clone(true);
        $(this).nextAll('.dropdown-toggle').empty()
          .append($filterOption)
          .append('<svg class="isvg-angle-d" role="img">\n' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#isvg-angle-d"></use>\n' +
            '</svg>');
      }).selectpicker({style: bemC(b, 'toggle'), width: 'fit', container: 'body'});
    },
    bindUIActions: function () {

    }
  }
}();
