function Color(){
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.rand = function(seed){
        var s = seed || {};
        console.log(s);
    }

    return "rgba("+this.r+","+this.g+","+this.b+")";
}

