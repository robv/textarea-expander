(function($) {

	$.fn.textarea_expander = function(params) {
		
		// merge default and user parameters
		params = $.extend({padding_offset:10}, params);
		
		// traverse all nodes
	    return this.each(function() {

	        var $this = $(this);
			
	        $this.bind('focus', function() {
		
				// Calculate the top margin, height of the textarea plus padding offset which would match #textarea_expander padding in css
				var margin_top = $this.height() + params.padding_offset;
		
				$this.after('<div id="textarea_expander" style="margin-top:-' + margin_top + 'px !important;"><textarea>' + $this.val() + '</textarea><a href="#">Save</a></div>');

				$('#textarea_expander textarea').focus().bind('blur', function() {
					$this.val($('#textarea_expander textarea').val());
					$('#textarea_expander').remove();
				});
				
				$('#textarea_expander a').bind('click', function(e) {
					e.preventDefault();
					$this_expander = $(this);
					$this.val($('#textarea_expander textarea').val());
					$('#textarea_expander').remove();
				});
	        });

	    });

		// allow jQuery chaining
		return this;
	};

})(jQuery);