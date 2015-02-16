function AnimatedCanvas(el){
    var self = this;
    this.width = 800;
    this.height = 300;

    var can = id(el);
        can.height = this.height;
        can.width = this.width;
    this.canvas = can; 
    this.ctx = can.getContext('2d');

    this.tick = 10;
    this.life = 0;
    this.objArr = new Array();
    this.flashCol = "#FFF";

    this.flash = function(){
        self.canvas.style.backgroundColor = self.flashCol;
        setTimeout(function(){
            self.canvas.style.backgroundColor = "#000";
        },100);
    }

    this.update = null;
    this.render = function(){
        self.ctx.clearRect(0,0,can.width, can.height);
        self.draw();
    }

    this.draw = function(){
        if(self.objArr.length){
            for(var i = 0; i<= self.objArr.length-1; i++){
                if(self.objArr[i]){
                    if(!self.objArr[i].stopped){
                        self.ctx.fillStyle = self.objArr[i].color.ret();
                        self.ctx.fillRect(self.objArr[i].x,self.objArr[i].y, self.objArr[i].w,self.objArr[i].h);
                    }else{
                        self.objArr[i] = null;
                    }
                }
            }
        }
    }
    this.stop = function(){
        clearInterval(self.update);
    }

    this.start = function(){
        this.update = setInterval(self.render, self.tick);
    }

    this.start();
}

