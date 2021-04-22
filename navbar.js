const items   = [ "BRAND", "Illo", "Ex", "Voluptate", "Quae", "Odit", "Atque", "Pariatur", "Quam"]
const TOTAL   = 9
const BTN     = 50 
let eWidth    = 0
let dropOpen  = false
let remaining = 0



function adapt(){
    for ( let n = TOTAL ; n >= 1; n --){
         estimateWidth(n)
         if( eWidth <= innerWidth){
             showItems(n)
             break }
    } 
}

function estimateWidth(n){
    let text = ``
    let pad = 0
    for( let i = 0 ; i < n ; i++ ){
        text += items[i] 
        pad += 2 * 10
    }
    eWidth = 11.5 * text.length + pad + BTN  
}

function showItems( n){
     navbar.innerHTML = ``
    for( let i = 0 ; i < n  && n <= items.length; i++ ){
    navbar.innerHTML  += `<a href="">${items [i] } </a>`
    }
     remaining = TOTAL - n
    if( remaining > 0){
        navbar.innerHTML += 
        `<button class="more" onclick="showRemItems(${remaining})"> 
        <span class="rem"> ${remaining}</span><i class="fas fa-bars"></i>
        </button>` 
    }
}


function showRemItems( n ){
if(dropOpen){
    navDrop.innerHTML = ``
    dropOpen = false
    
}else{
    for( let i = TOTAL-n ; i < TOTAL ; i++ ){
        navDrop.innerHTML  += `<a href="">${items [i] } </a>`
        
}
    dropOpen = true 
     }
     
}

function showRemItemsResize(n){
    navDrop.innerHTML =` `
    if(dropOpen){
        for(let i = TOTAL -n; i<TOTAL; i++){
            navDrop.innerHTML += `<a href="">${items [i] } </a>`
        }
    }
    if(n<1){
        dropOpen = false
    }
}
