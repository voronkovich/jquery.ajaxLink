(function($){
    $.fn.ajaxLink = function(options) {
        this.click(function(e) {
            e.preventDefault();
            
            var $this = $(this);
            var action = $this.attr('href');
            
            var ajaxConfig = {
                context: $this
            };

            ajaxConfig = $.extend({}, ajaxConfig, options);
            
            $.ajax(action, ajaxConfig); 
        });
    }
})(window.jQuery);
