const bg = document.querySelector(".bg");
const loading = document.querySelector(".loading-text")

let blurry = 0; 
let stopp = setInterval(blurryimg , 30)

function blurryimg(){
  blurry++
  if ( blurry > 99){
    clearInterval(stopp)
  }
   loading.innerHTML= `${blurry}%`
   loading.style.opacity = scale(blurry , 0 , 100,1,0)
  bg.style.filter = `blur(${scale(blurry, 0, 100, 30, 0)}px)`
}

// i used stack overflow to map the number out 

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const  scale =  (number, inMin, inMax, outMin, outMax) => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}