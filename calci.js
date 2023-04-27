const m = (opt) => {
    let a= document.getElementById("first").value;
    let b= document.getElementById("second").value;
    let out = 0;
    /*if(opt =='add'){
           out= `sum of number is ${Number(a)+Number(b)}`
           rslt= out;
    }else{
           out= `sum of number is ${Number(a)-Number(b)}`

    }*/
    switch(opt){
       case 'add':
          out= Number(a)+Number(b)
         break;
       case 'percen':
          out= Number(a)/100
              break;
       case 'sub':  
           out= Number(a)-Number(b)
              break;
       case 'mul': 
          out= Number(a)*Number(b)
              break;
       case 'div': 
         out= Number(a)/Number(b)
              break;
       case 'neg':
              out= -1 * Number(a)
              break;
       case 'clr':
              break;
       
       default:
              out=0
    }
    document.getElementsByClassName('output')[0].innerText=out
}