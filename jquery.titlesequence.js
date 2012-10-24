/*
 * jQuery titleSequence Plugin
 *
 * Copyright (c) 2012 Grant McLean <grant@mclean.net.nz>
 * Dual licensed under the MIT or GPL Version 2 licenses or later.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */

(function($) {

    $.fn.titleSequence = function(sequence, options) {
        $(this).each(function(x) {
            var title_sequence = $.extend({
                el: $(this),
                sequence: sequence,
                next_cue: $.fn.titleSequence.next_cue,
                time_factor: 1
            }, options);
            title_sequence.next_cue();
        });
        return this;
    };

    $.fn.titleSequence.next_cue = function() {
        var seq = this;
        var next_cue = function(){ seq.next_cue(); };
        if(this.sequence.length == 0) {
            return;
        }
        var cue = this.sequence.shift();
        if(typeof(cue) === 'function') {
            return cue(this);
        }
        var target;
        if(cue.delete) {
            $(cue.delete).remove();
        }
        if(cue.content !== undefined) {
            var div = $('<div />').html( cue.content );
            if(cue.id) {
                div.attr('id', cue.id);
            }
            if(cue.class) {
                div.addClass(cue.class);
            }
            if(cue.css) {
                div.css(cue.css);
            }
            var parent = cue.container ? this.el.find(cue.container) : this.el;
            parent.append(div);
            target = div;
        }
        else if(cue.selector) {
            target = $(cue.selector);
            if(target.length !== 1) {
                alert('Error: Selector "' + cue.selector + '" matched ' + target.length + ' elements');
                return;
            }
            if(cue.css) {
                target.css(cue.css);
            }
        }
        if(cue.duration) {
            if(cue.pause) {
                this.sequence.unshift({pause: cue.pause});
            }
            return target.animate(
                cue.animate,
                cue.duration * this.time_factor,
                cue.easing || 'swing',
                next_cue
            );
        }
        else if(cue.pause) {
            return setTimeout(next_cue, cue.pause * this.time_factor);
        }
        else {
            return this.next_cue();
        }
    };

})(jQuery);

