// =========================| Demo scripts |========================= //



//--------------------------| DOM Ready

jQuery(document).ready(function($) {

  'use strict';

  $.ajax({
    url: 'assets/demo/demo.html',
    dataType: 'html'
  }).done(function(response) {
    $('.demo-holder .content').html(response).promise().done(function(){
      // Initialization demo
      (function() {
        $.baseheight();

        setTimeout(function() {
          $('.demo-init').baseheight();
        }, 10);
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
  });

});