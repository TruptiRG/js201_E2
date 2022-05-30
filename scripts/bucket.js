// On clicking remove button the item should be removed from DOM as well as localstorage.

let bucketd=JSON.parse(localStorage.getItem("coffee"))||[]
console.log(bucketd);

let box=document.getElementById("bucket");
bucketd.map(function(el,index){
    let div=document.createElement("div");
    div.setAttribute("class","div");

        let image=document.createElement("img");
        image.src=el.image;
        let title=document.createElement("p");
        title.innerText=el.title;
        let price=document.createElement("h4");
        price.innerText=el.price;
        let bt=document.createElement("button");
        bt.innerText="Remove";
        bt.setAttribute("id","remove_coffee");
        bt.addEventListener("click",function(){
            remove(el,index);
        })

        div.append(image,title,price,bt);
        box.append(div);
})

function remove(el,index){
    bucketd.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(bucketd));
    window.location.reload();
}


let total=bucketd.reduce(function(sum,el,index,arr){
    return sum+Number(el.price);
},0);
document.querySelector("#total_amount").innerText=total;
