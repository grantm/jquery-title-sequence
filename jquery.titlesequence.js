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

    $.fn.titleSequence = function(frames, options) {
        $(this).each(function(x) {
            var sequence = $.extend({
                el: $(this),
                frames: frames,
                next_frame: $.fn.titleSequence.next_frame,
                time_factor: 1
            }, options);
            sequence.next_frame();
        });
        return this;
    };

    $.fn.titleSequence.next_frame = function() {
        var seq = this;
        var next_frame = function(){ seq.next_frame(); };
        if(this.frames.length == 0) {
            return;
        }
        var frame = this.frames.shift();
        if(typeof(frame) === 'function') {
            return frame(this);
        }
        var target;
        if(frame.delete) {
            $(frame.delete).remove();
        }
        if(frame.content !== undefined) {
            var div = $('<div />').html( frame.content );
            if(frame.id) {
                div.attr('id', frame.id);
            }
            if(frame.class) {
                div.addClass(frame.class);
            }
            if(frame.css) {
                div.css(frame.css);
            }
            var parent = frame.container ? this.el.find(frame.container) : this.el;
            parent.append(div);
            target = div;
        }
        else if(frame.selector) {
            target = $(frame.selector);
            if(target.length !== 1) {
                alert('Error: Selector "' + frame.selector + '" matched ' + target.length + ' elements');
                return;
            }
        }
        if(frame.duration) {
            if(frame.pause) {
                this.frames.unshift({pause: frame.pause});
            }
            return target.animate(frame.animate, frame.duration * this.time_factor, next_frame);
        }
        else if(frame.pause) {
            return setTimeout(next_frame, frame.pause * this.time_factor);
        }
        else {
            return this.next_frame();
        }
    };

})(jQuery);

