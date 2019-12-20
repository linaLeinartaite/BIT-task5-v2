function chessBoard(x, y){
    //(500*500)px is default size of board (set in main.css);
    let boarWidth =(500/y*x)+"px";
    let boardHeight= (500/x*y)+"px";
    let saskes = "";
    let total = 0;
    
    //if number of squares in a row is odd:
    if(x%2!==0) {
        for (let i=0; i<y; i++){
            saskes+=  `<div class="row">`         
            for(let j=0; j<x; j++){
                total ++;
                if(total%2===0) {                       
                    saskes += `<div class="langelisW"></div>`
                } else{
                    saskes += `<div class="langelisB"></div>`
                }                               
            }
            saskes+= `</div>`    
        }
        
        //if number of squares in a row is even even:
    }else {
        for (let i=0; i<y; i++){
            saskes+=  `<div class="row">` 
            total++;
            for(let j=0; j<x/2; j++){                               
                if(total%2===0) {       
                    saskes += `<div class="langelisW"></div>`
                    saskes += `<div class="langelisB"></div>`
                } else{
                    saskes += `<div class="langelisB"></div>`
                    saskes += `<div class="langelisW"></div>`
                }
            }
            saskes+=  `</div>`
        }        
    }
    
    // either x-axis  or y-axis of board (the one that is bigger) stays 500px another axis is recalculated accordingly:
    if(x>y){
        let boardHeight= (500/x*y)+"px";
        document.getElementById('saskes').style.height=boardHeight;    
    }
    if(y>x){
        document.getElementById('saskes').style.width=boarWidth;
    }
    
    // inserting into html file
    document.getElementById('saskes').innerHTML +=  saskes; 
}


chessBoard(15, 20);