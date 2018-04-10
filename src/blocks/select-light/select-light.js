const SelectLight = function () {
  const b = 'select-light';
  let s;
  return {
    settings: {
      $b: $(bemS(b))
    },
    init: function () {
      s = this.settings;
      this.bindUIActions();

      s.$b.not(bemS(b, '', 'loaded')).on('loaded.bs.select', function () {
        let $filterOption = $(this).next('.dropdown-toggle').children('.filter-option');

        $(this).addClass(bemC(b, '', 'loaded')).next('.dropdown-toggle').removeClass('dropdown-toggle btn').empty()
          .append($filterOption)
          .append('<svg class="isvg-angle-d" role="img">\n' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#isvg-angle-d"></use>\n' +
            '</svg>')
          .next('.dropdown-menu').addClass(bemC(b, 'menu'));
      }).selectpicker({style: bemC(b, 'toggle'), width: 'fit', container: 'body', selectOnTab: true});
    },
    bindUIActions: function () {

    }
  }
}();
