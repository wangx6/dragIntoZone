// CLASS
var Grid = function(){
	'use strict';

    this.wrap = $('<div>').addClass('grid');
    this.css = {
    	left : 0
    };    
    this.cache = [];
};


// HANDLER
Grid.prototype.setCss = function( left ){
	'use strict';

	this.css.left = left;

	return this;
};


//HANDLER
Grid.prototype.cssItem = function(){
	'use strict';

    var self = this;
    this.cache.map(function( i ){
        i.wrap.css({
            top: i.css.top,
            left: i.css.left
        })
    });
    return this;
};


// HANDLER
Grid.prototype.draw = function(){
	'use strict';

	var 
	self = this,
	i, item;

	for( i in this.cache ){
		item = this.cache[i];
		item.wrap.css({
			top  : item.css.top,
			left : item.css.left
		}).removeClass('tilt');
	}
};
