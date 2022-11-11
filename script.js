

let Numeri = 0;
let list = document.getElementById("list");
let elementi ="";
let n = 0;


for( let i = 0; i < 100 ; i++){
  n ++;
  Numeri = i+ 1;

  if ((Numeri % 3 == 0) && (Numeri % 5 != 0)){

    Numeri = "(Fizz)" + n;
    console.log("Fizz      "+ n);

  } else if ((Numeri % 5 == 0) && (Numeri % 3 != 0)){
   
    Numeri = `(Buzz)${n}`;
    console.log("Buzz      " + n );

    
  } else if ((Numeri % 3 == 0) && (Numeri % 5 == 0)){

    Numeri = `FizzBuzz ${n}`;
    console.log("FizzBuzz " + n);
    
  } else {
    Numeri = "" + n;
    console.log("numeri senza modifiche" + n);
    
  }

  elementi += "<li>" + Numeri + "</li>";
  
}
list.innerHTML= elementi;




