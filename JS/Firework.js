function Firework(){
    this.position = Math.floor(Math.random()*3);
    var self = this;
        this.p = new Particle();
        this.p.w = 15;
        this.p.h = 15;
        this.p.color.rand();
        this.p.dampMod = .1;
        if(this.position == 1){
            this.p.x = Math.floor(Math.random()*ACan.width-30)+10;
            this.p.y = ACan.height-15;
            this.p.forceY = -7;
            this.p.forceX = Math.floor(Math.random()*4)-2;
        }else if(this.position == 2){
            this.p.x = 0;
            this.p.y = Math.floor(Math.random()*ACan.height)+10;
            this.p.forceY = Math.floor(Math.random()*8)-2;
            this.p.forceX = 7;
        }else{
            this.p.x = ACan.width;
            this.p.y = Math.floor(Math.random()*ACan.height)+10;
            this.p.forceY = Math.floor(Math.random()*8)-2;
            this.p.forceX = -7;
        }

        //this.p.end = Math.floor(Math.random()*500)+500;
        this.p.end = 2400;
        this.p.trailEnd = 0;

        this.bitArr = new Array();

    this.randCount = 0;
    this.randCountY = 0;
    this.el = ACan.canvas;

    ACan.objArr.push(this.p); 

    this.move = function(){
        if(self.p.y >= ACan.height-self.p.h ||  self.p.x >= ACan.width+self.p.w || self.p.x <= 0 - self.p.w){
            self.explode();
            clearInterval(s);
            s = null;
        }
    }
    var s = setInterval(this.move, 10);

    this.explode = function(){

        self.el.style.left = Math.floor(Math.random()*10)+20+"px";
        self.el.style.top = Math.floor(Math.random()*10)+20+"px";
        
        setTimeout(function(){
        
            self.el.style.left = "20px";
            self.el.style.top = "20px";
        }, 200);

        self.p.stop();
        self.p.color.r = self.p.color.r;
        self.p.color.g = self.p.color.g;
        self.p.color.b = self.p.color.b;
        //ACan.flashCol = self.p.color.a = .2;
        ACan.flashCol = self.p.color.ret();
        ACan.flashColNum+=2;
        ACan.flash();
        self.randCount = Math.floor(Math.random()*-10); 
        self.randCountY = Math.floor(Math.random()*-20); 
        
        for(var piX = self.randCount; piX <= Math.abs(self.randCount); piX++){
            for(var piY = self.randCountY; piY <= Math.abs(10); piY++){
                var size = Math.floor(Math.random()*5);
                var p = new Particle();
                    p.color = self.p.color;
                    p.w = size;
                    p.h = size;
                    p.y = self.p.y;
                    p.x = self.p.x;
                    //p.trailEnd = Math.floor(Math.random()*10);
                    p.trailEnd = 0;
                    p.dampMod = .2;
                    p.forceX = Math.random()*piX*3;
                    p.end = 1+Math.floor(Math.random()*50);
                    p.forceY = Math.random()*piY*2;
                ACan.objArr.push(p);
            }
        }

    }
    //setTimeout(this.explode, this.p.end);
}
