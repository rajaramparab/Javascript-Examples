        const canvas=document.getElementById("myCanvas");
        const context=canvas.getContext("2d");
        
        let blobs=new Array();
        const blobCount=100;
        
        class Blob{
            constructor(color,size){
                this.color = color;
                this.size = size;
                this.x = Math.random()*(canvas.width-this.size);
                this.y = Math.random()*(canvas.height-this.size);                
                this.xChange = Math.random();
                this.yChange = Math.random();
            }

            move(){
                if(this.x>=canvas.width-this.size || this.x<=this.size){
                this.xChange *= -1;
                }
                
                if(this.y>=canvas.height-this.size || this.y<=this.size){
                this.yChange *= -1;
                }

                this.x += this.xChange;
                this.y += this.yChange;
            }

            draw(){
                context.beginPath();
                context.arc(this.x,this.y,this.size,0, 2*Math.PI);
                context.fillStyle=this.color;
                /*
                var gradient = context.createLinearGradient(0, 0, canvas.width,canvas.height);
                    gradient.addColorStop("0", "magenta");
                    gradient.addColorStop("0.5", "blue");
                    gradient.addColorStop("1", "red");                    
                */

                context.strokeStyle= "lightblue";
                context.lineWidth=5;
                context.stroke();
                context.fill();
            }            
        }

        function getRandomColor() {
                     var letters = '0123456789ABCDEF';
                     var color = '#';
                    for (var i = 0; i < 6; i++) {
                     color += letters[Math.floor(Math.random() * 16)];
                    }
                         return color;
                                }
        
        function canvasDraw(){
            context.clearRect(0,0,canvas.width,canvas.height);

            blobs.forEach(function(obj){
                obj.draw();
                obj.move();
            })      
            }



        
        for(let i=0;i<blobCount;i++){            
            blobs.push(new Blob(getRandomColor(),Math.random()*50));

        }  
        
        setInterval(canvasDraw,10)

