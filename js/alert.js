(function($) {
  $.fn.alert = function() {

    return this.each(function() {
        var self = $(this);

        self.on('click', '.close', function() {
          self.addClass("close");
        });

        self.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
          console.log("done");
          self.remove();
        });
    });

  };
}(jQuery))
