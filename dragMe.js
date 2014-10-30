(function( $ ){
    'use strict';
    
    var
    config = {
        transitionSpeed: 100
    },
    grid = null,
    blk = null,
    numberOfGrid = 0,
    // testInfo = [
    //     {
    //         group : 1;
    //         title : 'title 11',
    //         content : 'content 11'
    //     }
    //     {
    //         group : 1;
    //         title : 'title 12',
    //         content : 'content 12'
    //     }
    //     {
    //         group : 2;
    //         title : 'title 21',
    //         content : 'content 21'
    //     }
    //     {
    //         group : 2;
    //         title : 'title 22',
    //         content : 'content 22'
    //     }
    //     {
    //         group : 2;
    //         title : 'title 23',
    //         content : 'content 23'
    //     }
    //     {
    //         group : 2;
    //         title : 'title 24',
    //         content : 'content 24'
    //     }
    //     {
    //         group : 2;
    //         title : 'title 25',
    //         content : 'content 25'
    //     }
    //     {
    //         group : 3;
    //         title : 'title 31',
    //         content : 'content 31'
    //     }
    //     {
    //         group : 3;
    //         title : 'title 32',
    //         content : 'content 32'
    //     }
    //     {
    //         group : 3;
    //         title : 'title 33',
    //         content : 'content 33'
    //     }
    // ],


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
                blk.addClass('tilt').css({
                    left : e.pageX - w/2 - 10,
                    top  : e.pageY - 40
                });
            }
        }).mouseup(function(){
            var
            co = getCenterCo( blk ),
            v = Math.floor( co.x / getWidth() / ( 1/ numberOfGrid ) ) * 1/numberOfGrid * 100;
            blk.removeClass('tilt').css({ top: 0, left: v+'%' });
        });
    });

})( jQuery );