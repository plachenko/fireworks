function Firework(){
    var self = this;
        this.p = new Particle();
        this.p.color.rand();
        this.p.color.r = this.p.color.r+100;
        this.p.color.g = this.p.color.g+100;
        this.p.w = 3;
        this.p.h = 3;
        this.p.dampMod = .1;
        this.p.x = Math.floor(Math.random()*ACan.width-30)+10;
        this.p.y = ACan.height;
        this.p.forceY = -7;
        this.p.forceX = Math.floor(Math.random()*4)-2;
        this.p.end = Math.floor(Math.random()*500)+500;

        this.bitArr = new Array();
    this.randCount = 0;
    this.randCountY = 0;

    ACan.objArr.push(this.p); 

    this.explode = function(){
        self.p.stop();
        self.p.color.r = self.p.color.r-100;
        self.p.color.g = self.p.color.g-100;
        self.p.color.b = self.p.color.b-100;
        //ACan.flashCol = self.p.color.a = .2;
        ACan.flashCol = self.p.color.ret();
        //ACan.flash();
        self.randCount = Math.floor(Math.random()*20)*-1; 
        self.randCountY = Math.floor(Math.random()*20)*-1; 
        for(var piX = self.randCount; piX <= Math.abs(self.randCount); piX++){
            for(var piY = self.randCountY; piY <= Math.abs(self.randCountY); piY++){
                var size = Math.floor(Math.random()*3);
                var p = new Particle();
                    p.color = self.p.color;
                    p.w = size;
                    p.h = size;
                    p.y = self.p.y;
                    p.x = self.p.x;
                    p.dampMod = .2;
                    p.forceX = Math.random()*piX*2;
                    p.end = 1+Math.floor(Math.random()*50);
                    p.forceY = Math.random()*piY;
                ACan.objArr.push(p);
            }
        }
    }
    setTimeout(this.explode, this.p.end);
}



