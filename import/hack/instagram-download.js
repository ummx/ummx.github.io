  var s=0;
  function robbery(){
      function loading(){
        s++;
        if(s == 100){
          clearInterval(interval)
          console.clear()   
  var img=document.querySelectorAll('img')
    for(let i=0; i<img.length; i++){
      console.log(img[i].alt +' ' + img[i].src)
    }
        }
        console.log(s+'%')
       
      } 
     var interval = setInterval(()=>{
        loading()
      },100)
  }robbery()
