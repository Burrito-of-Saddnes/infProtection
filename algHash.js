let str = 'long + string'
String.prototype.hash = function() {
    let self = this, 
    range = Array(this.length);
    for(let i = 0; i < this.length; i++) {
      range[i] = i;
    }
    console.log( 
        Array.prototype.map.call(range, function(i) {
            return self.charCodeAt(i).toString(16);
        }).join('')
    );
}

str.hash()