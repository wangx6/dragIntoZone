var Item = function(){
    this.title = 'crazy';
    this.content = null;
    this.location = {
        group:null,
        order:null
    };
    this.wrap = $('<div>').addClass('item-wrap');
    this.heading = $('<h3>').addClass('item-heading');
    this.main = $('<div>').addClass('item-main');

    this.init();
};
Item.prototype.init = function(){
    this.wrap.append(this.heading).append(this.main);
};

var Grid = function(){
    this.wrap = $('<div>').addClass('grid');
    this.cache = [];
};

var Board = function(){
    this.data = [
        {
            group : 1,
            info:[
                {
                    title : 'title 11',
                    content : 'content 11'
                },
                {
                    title : 'title 12',
                    content : 'content 12'
                }
            ]
        },
        {
            group : 2,
            info:[{
                title : 'title 21',
                content : 'content 21'
            }]
        }
    ];

    this.wrap = $('.wrap');
    this.numberOfGrid = null;
    this.cache = [];

    this.init();
};

Board.prototype.init = function(){
    'use strict';
    
    var 
    self = this,
    grid,
    item;
    
    this.numberOfGrid = this.data.length;
    this.data.map(function( g ){
        grid = new Grid();
        grid.wrap
        .addClass('grid')
        .appendTo(self.wrap)
        .css({
            width:1/self.numberOfGrid * 100 + '%',
        });

        g.map(function(){
            item = new Item();
            item.wrap.appendTo( grid );
        });
        this.cache.push(grid);
       
    });
};

var board = new Board();

(function( $ ){
    'use strict';

})( jQuery );