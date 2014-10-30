(function( $ ){
    'use strict';
    
    var
    config = {
        transitionSpeed: 100
    },
    grid = null,
    blk = null,
    numberOfGrid = 0,
    getWidth = function(){ return $('body').width(); },
    getCenterCo = function( obj ){
        var pos = obj.offset();
        return{ x : pos.left + obj.width() / 2, y : pos.top + obj.height() / 2 };
    };
    
    $(function () {
        grid = $('.grid');
        blk = $('.blk');
        numberOfGrid = grid.length,
        
        grid.css({ width: 1/numberOfGrid * 100 + '%' });
        blk.css({ width: 1/numberOfGrid * 100 + '%' });

        blk.mousemove(function( e ){
            var w = blk.width();
            if( e.which === 1 || e.buttons === 1 ){
                $(this).addClass('tilt').css({
                    left : e.pageX - w/2 - 10,
                    top  : e.pageY - 40
                });
            }
        }).mouseup(function(){
            var
            co = getCenterCo($(this)),
            v = Math.floor( co.x / getWidth() / ( 1/ numberOfGrid ) ) * 1/numberOfGrid * 100;
            $(this).removeClass('tilt').css({ top: 0, left: v+'%' });
        });
    });

})( jQuery );