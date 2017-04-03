// =========================| Demo scripts |========================= //



//--------------------------| DOM Ready

jQuery(document).ready(function($) {

  'use strict';

  // Initialization demo
  (function() {
    $.baseheight();

    $('.demo-init').baseheight();
  }());

  // Methods demo
  (function() {
    var baseheight,
      methodDemo = {
        init: function() {
          baseheight = $('.demo-methods').baseheight();

          this.setActions();

          return this;
        },

        setActions: function() {
          var demo = $('.demo-methods'),
            turnBtn = $('.btn-turn'),
            powerBtn = $('.btn-power');

          turnBtn.on('click', function() {
            var currentState = turnBtn.attr('rel'),
              newState = currentState === 'Off' ? 'On' : 'Off';

            baseheight['baseheight' + currentState]();

            turnBtn.attr('rel', newState).text('baseheight' + newState + '()');
          });

          powerBtn.on('click', function() {
            var state = powerBtn.attr('rel'),
              newState = null,
              label = null;

            switch(state) {
              case 'Off':
                baseheight.destroy();
                turnBtn.hide().attr('rel', 'Off').text('baseheightOff()');
                label = 'Initialize again';
                newState = 'On';
                break;
              case 'On':
                baseheight = demo.baseheight();
                turnBtn.show();
                label = 'destroy()';
                newState = 'Off';
                break;
            }

            powerBtn.attr('rel', newState).text(label);
          });

          return this;
        }
      };

    methodDemo.init();
  }());

});