(function(win, $) {
  var $win, appearedItemIndexes, chechOptionsType, defaults, scrollTop, winHeight, windowDidScroll;
  defaults = {
    className: '',
    delay: 0,
    callBack: function($item) {}
  };
  $win = $(win);
  appearedItemIndexes = [];
  winHeight = $win.height();
  scrollTop = $win.scrollTop();
  chechOptionsType = function(options) {
    var result;
    result = {
      className: typeof options.className === 'string' ? options.className : defaults.className,
      delay: typeof options.delay * 1 === 'number' ? options.delay : defaults.delay,
      callBack: typeof options.callBack === 'function' ? options.callBack : defaults.callBack
    };
    return result;
  };
  windowDidScroll = function($this, opts) {
    scrollTop = $win.scrollTop();
    $this.each(function(index) {
      var $self;
      if ($.inArray(index, appearedItemIndexes) >= 0) {
        return;
      }
      $self = $(this);
      if (scrollTop + winHeight > $self.offset().top) {
        setTimeout(function() {
          $self.addClass(opts.className);
        }, opts.delay);
        opts.callBack($self);
        appearedItemIndexes[appearedItemIndexes.length] = index;
      }
    });
  };
  $.fn.addClassOnAppear = function(className, delay, callBack) {
    var $this, options, opts;
    options = {
      className: className,
      delay: delay,
      callBack: callBack
    };
    opts = chechOptionsType($.extend(defaults, options));
    $this = $(this);
    windowDidScroll($this, opts);
    $win.scroll(function(e) {
      windowDidScroll($this, opts);
    });
    $win.resize(function(e) {
      winHeight = $win.height();
    });
  };
})(window, jQuery);

//# sourceMappingURL=maps/jquery.addClassOnAppear.js.map
