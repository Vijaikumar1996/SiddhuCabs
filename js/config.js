

(function (window, $) {
    'use strict';

    function loadConfig() {
        return $.ajax({
            url: 'config.json',
            dataType: 'json',
            cache: false
        });
    }

    function assignConfigValues(config) {
        $('title').text(config.appName);
        $(".app-name").html(config.appName);
        $(".mobile-no").html(config.mobileNo);
        $(".rights-reserved").html(config.rightsReserved);//.attr("href", config.rightsReservedLink);

    }

    // Expose to global for easy use
    window.loadConfig = loadConfig;
    window.assignConfigValues = assignConfigValues;
})(window, window.jQuery);