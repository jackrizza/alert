(function($) {
	$.fn.alert = function() {
		return this.each(function(){
			var self = $(this);

			self.on('click', '.close', function() {
				self.remove();
			});

		});
	};
}(jQuery))