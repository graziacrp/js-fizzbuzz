

let Numeri = 0;
let list = document.getElementById("list");
let elementi ="";
let n = 0;


for( let i = 0; i < 100 ; i++){
  n ++;
  Numeri = i+ 1;

  if ((Numeri % 3 == 0) && (Numeri % 5 != 0)){

    risultato = "(Fizz)" ;
    console.log("Fizz      "+ n);

  } else if ((Numeri % 5 == 0) && (Numeri % 3 != 0)){
   
    risultato = `(Buzz)`;
    console.log("Buzz      " + n );

    
  } else if ((Numeri % 3 == 0) && (Numeri % 5 == 0)){

    risultato = `(FizzBuzz) `;
    console.log("FizzBuzz " + n);
    
  } else {
    risultato = "" + n;
    console.log("numeri senza modifiche" + n);
    
  }

  elementi += "<li>" + risultato + "</li>" ;
  
}
list.innerHTML= elementi;




