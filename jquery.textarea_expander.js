(function($) {

	$.fn.textarea_expander = function(params) {

		// traverse all nodes
	    return this.each(function() {

	        var $this = $(this);
			
	        $this.bind('focus', function() {
				$this.before('<div id="textarea_expander"><textarea>' + $this.val() + '</textarea><a href="#">Save</a></div>');
				
				$('#textarea_expander textarea').focus();
				
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