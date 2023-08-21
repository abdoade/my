h_one=document.getElementById("h_one");
console.log(window.localStorage.getItem("User name"))
h_one.innerText="HELLOW"+"  "+window.localStorage.getItem("User name");
// let mee=document.createElement("a");
// mee.innerText="mee";


(async function(){
    try {
        let response = await fetch("https://dummyjson.com/products") 
        let res_json = await response.json() 
        console.log(res_json)

        console.log(res_json.products[0].id)
       let   divpar=document.createElement("div")
        divpar.setAttribute("class", "parent");


        let   h1=document.createElement("h1")
        h1.innerText="The Description Of All Product"
        document.body.appendChild(h1)
        //
        //  divse=document.createElement("div")
        // divse.setAttribute("class", "se");
        // tr=document.createElement("tr")
        console.log(res_json.products[0].images.length)
     
           
         for (let i = 0; i < res_json.products.length; i++) {
            let imgas=document.createElement("img")
            imgas.setAttribute("id","im")
           
            let btn_left=document.createElement("button")
            btn_left.innerText="<--"
            btn_left.setAttribute("id","left")
            let btn_rigth=document.createElement("button")
            btn_rigth.innerText="-->"
            btn_rigth.setAttribute("id","rigth")


           




            let h51=document.createElement("h5")
          h51.innerText=res_json.products[i].brand

          let h44=document.createElement("h4")
          h44.innerText="Brand"
          
          let category=document.createElement("h5")
          category.innerText=res_json.products[i].category

          let h45=document.createElement("h4")
          h45.innerText="category"

          let discount=document.createElement("h5")
          discount.innerText=res_json.products[i].discountPercentage

          let h46=document.createElement("h4")
          h46.innerText="discount"

          let price=document.createElement("h5")
          price.innerText=res_json.products[i].price

          let h47=document.createElement("h4")
          h47.innerText="price"



         let  div=document.createElement("div")
         div.innerText=res_json.products[i].id
         div.setAttribute("id","ID")
        //  console.log(div)

         let  div1=document.createElement("div")
           div1.innerText=res_json.products[i].title

         let  pre=document.createElement("p")
          pre.innerText=res_json.products[i].description

          let h3=document.createElement("h3")
          h3.innerText="the description of product"

          let h41=document.createElement("h4")
          h41.innerText="ID"
          let h42=document.createElement("h4")
          h42.innerText="Title"

          let h43=document.createElement("h4")
          h43.innerText=" description "
        
          divsec=document.createElement("div")
          divsec.setAttribute("class", "sec");

         divse=document.createElement("div")
         divse.setAttribute("class", "se");

         divse.appendChild(imgas)
         divse.appendChild(btn_left)
         divse.appendChild(btn_rigth)
        
       
         
         divsec.appendChild(h41)
         divsec.appendChild(div)

         divsec.appendChild(h44)
         divsec.appendChild(h51)

         divsec.appendChild(h45)
         divsec.appendChild(category)

        

         divsec.appendChild(h42)
         divsec.appendChild(div1)
         
         divsec.appendChild(h43)
         divsec.appendChild(pre)

         divsec.appendChild(h46)
         divsec.appendChild(discount)

         divsec.appendChild(h47)
         divsec.appendChild(price)

         divse.appendChild(divsec)
         divpar.appendChild(divse)
      

         
         
         let count=0
         imgas.src=res_json.products[i].images[count]
          btn_left.onclick=()=>{
           if(count<=0){count=res_json.products[i].images.length}
            //   if(count==1){btn_right.disabled=true}
              imgas.src=res_json.products[i].images[--count]
           }
         
         btn_rigth.onclick=()=>{
           if(count>=res_json.products[i].images.length-1){count=-1}
                 imgas.src=res_json.products[i].images[++count]
         }
       }
              



        let but=document.createElement("a")
        but.innerText="First"
        but.onclick =()=>{
            window.open("http://127.0.0.1:5500/my%20project/my%20product.html")
            

        }
       
        divpar.appendChild(but)
        document.body.appendChild(divpar)
    }catch(e){
        console.log("something went wrong");
    }
})();


   