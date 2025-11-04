// definiranje funkcije

function mojafukncija(){

    console.log("pozdrav iz funkcije");
}


//pozivanje funkcije

mojafukncija();

mojafukncija();

mojafukncija();


//funkcije s argumentima

function zbroj(a, b){

    return a + b;
}

console.log(zbroj(2,3));

console.log(zbroj(22,13));

console.log(zbroj(256,143));


function pozdrav(ime){

    console.log("dobar dan " + ime + "!");
}

pozdrav("ivo");

pozdrav("laura");

pozdrav("ana");


// iz farenhajta u celzuis
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);

console.log(value);