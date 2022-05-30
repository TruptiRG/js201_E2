
let done;
function done0(){
    done=setTimeout(func0,0);
}
function func0(){
    alert("Your order is accepted");
}

function done3(){
    done=setTimeout(func3,3000);
}
function func3(){
    alert("Your order is being Prepared");
}

function done8(){
    done=setTimeout(func8,8000);
}
function func8(){
    alert("Your order is being packed");
}

function done10(){
    done=setTimeout(func10,10000);
}
function func10(){
    alert("Your order is out for delivery");
}

function done12(){
    done=setTimeout(func12,12000);
}
function func12(){
    alert("Order delivered");
}

// function d(){
    done0();
    done3();
    done8();
    done10();
    done12();
// }