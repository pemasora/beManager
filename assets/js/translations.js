window.localization = window.localization || {},
function(n) {
    localization.translate = {

      menu: function() {
        $('#welcome-menu').text(i18n.__('Welcome'));
        $('#dataManage-menu').text(i18n.__('Data Management'));
        $('#classManage-menu').text(i18n.__('Class Management'));
        $('#contact-menu').text(i18n.__('Contacts'));

      },

      welcome: function() {
        $('#welcome .inner p').text(i18n.__('The perfect tool to manage your data.'));
        $('#login-button').text(i18n.__('Login'));
      },

      init: function() {
        this.welcome();
        this.menu();
      }
    };

    n(function() {
        localization.translate.init();
    })

}(jQuery);
