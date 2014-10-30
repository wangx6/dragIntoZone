
// CLASS
var Item = function(){
    'use strict';

    this.location = {
        group:null,
        order:null
    };

    this.wrap = $('<div>').addClass('item-wrap');
    this.heading = $('<h3>').addClass('item-heading');
    this.main = $('<div>').addClass('item-main');
    this.height = 0;
    this.width = 0;
    this.css = {
        top : 0,
        left : 0
    };
    this.grid = null;
    this.board = null;
    this.init();
};


// INIT
Item.prototype.init = function(){
    'use strict';

    var self = this , i, item;

    this.wrap
    .append(this.heading)
    .append(this.main)
    .on('mousemove',function( event ){
        if(event.which === 1){
            $(this)
            .addClass('tilt')
            .css({
                top:( event.pageY - 40 ) + 'px', 
                left:( event.pageX - 160 ) + 'px' 
            });
            console.log(event.pageX, event.pageY);
        }
        
    })
    .on('mouseup',function(){
        'use strict';

        var 
        co = self.getCenterCo($(this)),
        v = Math.floor( co.x / 900 / ( 1/ 3 ) );

        for ( i in self.grid.cache ){
            if(self === self.grid.cache[i] ){
                self.grid.cache.splice(i,1);
                break;
            }
        }
        self.board.cache[ v ].cache.push( self );
        self.setGrid( self.board.cache[ v ] );

        if( self.grid.cache.length === 1 ){
            self.css.top = 0;
            self.css.left = self.grid.css.left;
        }else{
            item = self.grid.cache[self.grid.cache.length-2];
            self.css.top = item.css.top + item.height;
            self.css.left = item.css.left;
        }
        

        self.grid.draw();
    });
};


// HANDLER
Item.prototype.setHeight = function(){
    this.height = this.wrap.outerHeight();
    return this;
};


// HANDLER
Item.prototype.setWidth = function(){
    this.width = this.wrap.outerWidth();
    return this;
};


// HANDLER
Item.prototype.getCenterCo = function( obj ){
    var pos = obj.offset();     
    return{ x: pos.left + obj.width() / 2, y:pos.top + obj.height() / 2 };
};


// HANDLER
Item.prototype.getWidth = function(){ 
    return $('body').width(); 
};


// HANDLER
Item.prototype.setBoard = function( board ){
    this.board = board;
    return this;
};


// HANDLER
Item.prototype.setGrid = function( grid ){
    this.grid = grid;
    return this;
};




























