let names1 = document.getElementById("name1");  
let names2 = document.getElementById("name2");  
let names3 = document.getElementById("name3");
names1.style.display='none';  
names2.style.display='none';
names3.style.display='none';  

let i=1;
 

 setInterval(()=>
    { 
   
    
    if(names2.style.display=='block')
    {
        names3.style.display='block'
    }
 if(names1.style.display=='block')
    {
        names2.style.display='block'
        
    } 

    names1.style.display='block';

},1000);




// setTimeout(()=>{

// },1000);
// setTimeout(()=>{
//     names2.style.display='block';  
// },3000);

