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

    var next_cue;

    $.fn.titleSequence = function(sequence, options) {
        $(this).each(function(x) {
            var title_sequence = $.extend({
                el: $(this),
                sequence: sequence,
                next_cue: next_cue,
                time_factor: 1
            }, options);
            title_sequence.next_cue();
        });
        return this;
    };

    next_cue = function() {
        var seq = this;
        var next_cue = function(){ seq.next_cue(); };
        if(this.sequence.length == 0) {
            return;
        }
        var cue = this.sequence.shift();
        if(typeof(cue) === 'function') {
            return cue(this);
        }
        if(cue.delete) {
            $(cue.delete).remove();
        }
        var target;
        if(cue.selector) {
            target = $(cue.selector);
            if(target.length !== 1) {
                alert('Error: Selector "' + cue.selector + '" matched ' + target.length + ' elements');
                return;
            }
        }
        if(cue.content !== undefined) {
            if(!target) {
                target = $('<div />').html( cue.content );
            }
        }
        if(cue.id) {
            target.attr('id', cue.id);
        }
        if(cue.class) {
            target.addClass(cue.class);
        }
        if(cue.css) {
            target.css(cue.css);
        }
        if(cue.content !== undefined) {
            var parent = cue.container ? this.el.find(cue.container) : this.el;
            parent.append(target);
        }
        if(cue.duration) {
            if(cue.pause) {
                this.sequence.unshift({pause: cue.pause});
            }
            if(cue.no_wait) {
                target.animate(
                    cue.animate,
                    cue.duration * this.time_factor,
                    cue.easing || 'swing'
                );
                return this.next_cue();
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

