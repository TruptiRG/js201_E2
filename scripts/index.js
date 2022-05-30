// Add the coffee to local storage with key "coffee"

// https://masai-mock-api.herokuapp.com/coffee/menu



async function showC(){
    let url="https://masai-mock-api.herokuapp.com/coffee/menu";

    try{
        let res=await fetch(url);
        let data=await res.json();
        let d=data.menu.data;
        console.log(d);
        appendC(d);
        return d;
    }catch(err){
        console.log(err);
    }

    // let arr=JSON.parse(localStorage.getItem("coffee")) || []
    // arr.push(d);
    // console.log(d);
    // localStorage.setItem("coffee",JSON.stringify(arr));
}

showC();

let bucketdata=JSON.parse(localStorage.getItem("coffee"))||[]
let menudiv=document.getElementById("menu");
function appendC(coffee){
    coffee.forEach(function(el){
        let div=document.createElement("div");
        div.setAttribute("class","div");

        let image=document.createElement("img");
        image.src=el.image;
        let title=document.createElement("p");
        title.innerText=el.title;
        let price=document.createElement("h4");
        price.innerText=el.price;
        let bt=document.createElement("button");
        bt.innerText="Add to Bucket";
        bt.setAttribute("id","add_to_bucket");
        bt.addEventListener("click",function(){
            addtoBucket(el);
        })

        div.append(image,title,price,bt);
        menudiv.append(div);
    })
}

function addtoBucket(el){
    bucketdata.push(el);
    localStorage.setItem("coffee",JSON.stringify(bucketdata));
    console.log("added");
}

let length1=bucketdata.length;
document.querySelector("#coffee_count").innerText=length1;