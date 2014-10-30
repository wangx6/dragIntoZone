var Board = function( requestedData ){
    'use strict';

    this.data= requestedData;

    this.wrap = $('.wrap');
    this.numberOfGrid = null;
    this.cache = [];
    this.body = $('body');

    this.init();
};

Board.prototype.init = function(){
    'use strict';
    
    var 
    self = this,
    grid,
    item,
    i,
    topVal = 0,
    leftVal = 0;
    
    this.numberOfGrid = this.data.length;
    this.data.map(function( g ){
        topVal = 0;
        grid = new Grid();
        grid.wrap.appendTo(self.wrap);
        
        for( i in g ){
            item = new Item();
            item.heading.html(g[i].title);
            item.main.html(g[i].content);
            item.wrap.appendTo(self.body);
            item.setHeight();
            grid.cache.push( item );
            item.setBoard( self );
            item.setGrid( grid );
        }

        for( i in grid.cache ){
            item = grid.cache[i];
            item.css.top = topVal;
            item.css.left = leftVal;
            topVal += item.height;
        }

        grid.cssItem().setCss( leftVal );
        console.log(grid);
        leftVal += 300;
        self.cache.push(grid);
    });
};