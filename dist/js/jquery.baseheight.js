/*! 
 jQuery BaseHeight Plugin v1.3.0
 https://baseheight.metodiev.dev

 Copyright (c) 2020 Martin Metodiev
 Licensed under the MIT license.
*/

;(function($) {

  'use strict';

// Define all plugin components
  var plugin = {
    target: function(params) {
      return params && params.hasOwnProperty('target') ?
        params.target : $('.baseheight');
    },

    setHeight: function(height) {
      height = height ? height : 'auto';

      return this.height( height );
    },

    methods: {
      baseheightOn: function() {
        // Don't continue with the height alignment if baseheight was turned off
        if (arguments[0] === 'resize' && !this.is('.baseheight-on')) { return; }

        var height = 0;

        this.baseheightOff()
          .each(function() {
            height = $(this).height() > height ? $(this).height() : height;
          });

        return plugin.setHeight.call(this, height).addClass('baseheight-target' +
          ' baseheight-on');
      },

      baseheightOff: function() {
        return plugin.setHeight.call(this, 'auto').removeClass('baseheight-on');
      },

      destroy: function() {
        this.baseheightOff().removeClass('baseheight-target');

        // Delete object from the targets' list
        for (var i = 0; i < $.baseheight.targets.length; i++) {
          if (this === $.baseheight.targets[i]) {
            $.baseheight.targets.splice(i, 1);
            break;
          }
        }

        // Delete populated baseheight methods
        for (var method in plugin.methods) {
          if (plugin.methods.hasOwnProperty(method) && this.hasOwnProperty(method)) {
            delete this[method];
          }
        }

        return this;
      }
    }
  };

// Define plugin as a jQuery function
  $.baseheight = function(params) {
    // Define target
    var baseheight = $.extend(plugin.target(params), plugin.methods);

    // Initialize first height alignment
    baseheight.baseheightOn();

    // Put the target in the storage
    $.baseheight.targets.push(baseheight);

    // Return target
    return baseheight;
  };

// Define plugin as a method function
  $.fn.baseheight = function(params) {
    params = $.extend({}, params, {target: $(this)});

    return $.baseheight(params);
  };

// Create public storage array with all DOM elements that are active targets of the plugin
  $.baseheight.targets = [];

// Attach resize event on window to update the heights
  $(window).on('resize', function() {
    for (var target in $.baseheight.targets) {
      if ($.baseheight.targets.hasOwnProperty(target)) {
        var baseheight = $.baseheight.targets[target];

        if (baseheight.baseheightOn) { baseheight.baseheightOn('resize'); }
      }
    }
  });

}(jQuery));