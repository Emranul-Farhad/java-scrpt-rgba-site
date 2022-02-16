
// window.onload = () => {
//     main ()  ;
// }

// function main(){

//     const root = document.getElementById('root');
//     const btn = document.getElementById("btn");

//     btn.addEventListener ("click", function () {
//         let colors = colorGenerate ();
//         root.style.background = colors;
//     })
// }


// function colorGenerate () {
//     const red = Math.floor( Math.random () * 255 );
//     const blue = Math.floor( Math.random () * 255 );
//     const green = Math.floor( Math.random () * 255 );
   

//     return  `rgba ( ${red}, ${blue}, ${green} )` ;
// }


// method  1 end here // 



 document.getElementById("btn").addEventListener ('click', function () {
    
     const colors = generateRandomColor () ;
    document.body.style.background = colors ;
 })



  function generateRandomColor ()  {  

  const red = Math.floor ( Math.random () * 255 );
  const green = Math.floor ( Math.random () * 255 );
  const blue = Math.floor ( Math.random () * 255 );

  return  `rgba(${red},${blue},${green})`

}

// methods 2 end here // 






// function generateRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }