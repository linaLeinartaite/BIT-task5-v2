function saskes(x, y){
    let saskes = "";
    let total = 0;
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
    document.getElementById('saskes').innerHTML +=  saskes; 
}


saskes(12, 12);