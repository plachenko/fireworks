function Particle(){
    var self = this;
    this.x = 0;
    this.y = 0;
    this.w = 1;
    this.h = 1;
    this.update = null;
    this.tickTime = 10;
    this.forceY = 0;
    this.forceX = 0;
    this.duration = 0;
    this.end = 0;
    this.damp=0;
    this.dampMod=0;
    this.stopped = false;
    this.coord = new Array();
    this.color = {
        'r': 255,
        'g': 255,
        'b': 255,
        'a': 1,
        'rand': function(){
            this.r = Math.floor(Math.random()*255);
            this.g = Math.floor(Math.random()*255);
            this.b = Math.floor(Math.random()*255);
        },
        'ret': function(){
            return "rgba("+this.r+","+this.g+","+this.b+","+this.a+")";
        }
    }
    this.trailEnd = 0;

    this.stop = function(){
        this.stopped = true;
        clearInterval(self.update);
    }

    this.totalArr = new Array();
    this.slow = 1;

    this.move = function(){
        if(self.duration <= self.end-1){
            self.damp+=self.dampMod;
            self.duration += 1;
            self.y += ((self.forceY-1)+self.damp)/self.slow; 
            self.x += self.forceX/self.slow; 
            if(self.coord.length < self.trailEnd){
                self.coord.push([self.x, self.y]);
            }
        }else{
            self.stop();
        }
    }

    this.update = setInterval(this.move, this.tickTime);
}

/*
function Particle(){
    var self = this;
    this.tick = 10;
    this.coordArray = new Array();
    this.prop = {
        x: 0,
        fx: 0,
        y: 0,
        fy: 0,
        w: 0,
        h: 0,
        color: new Color(),
        dur: 0 
    }

    this.stop = function(){

    }

    this.move = function(){
        self.prop.x += self.prop.fx;
        self.prop.y += self.prop.fy;
    }

    this.update = setInterval(this.move, this.tick);
}
*/
