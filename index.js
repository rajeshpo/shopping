

let products=[
    
{
    name:"American New",
    size:"L",
    price:"$19",
    color:"red",
    description:"A stylish t-shirt for you",
    img:"product1.jpg"

},
{
    name:"Black top",
    size:"M",
    price:"$199",
    color:"Black",
    description:"A good looking black top",
    img:"product2.jpg"


},
{
    name:"Light Pink stylish look",
    size:"S",
    price:"$170",
    color:"pink",
    description:"New generation dress",
    img:"product3.jpg"


},
{
    name:"Amercian New",
    size:"L",
    price:"$194",
    color:"white & black",
    description:"Good looking dress",
    img:"product4.jpg"


},
{
    name:"American New",
    size:"L",
    price:"$19",
    color:"red",
    description:"A hoodie type top for you",
    img:"product5.jpg"


},
{
    name:"American New",
    size:"L",
    price:"$19",
    color:"red",
    description:"Good looking",
    img:"product6.jpg"


},
{
    name:"Australian New",
    size:"L",
    price:"$200",
    color:"blue",
    description:"Good looking dress",
    img:"product7.jpg"


},
{
    name:"England Style",
    size:"L",
    price:"$199",
    color:"white",
    description:"Good looking t-shirt",
    img:"product8.jpg"


},
{
    name:"Romantic New",
    size:"L",
    price:"$144",
    color:"black",
    description:"Good looking shirt",
    img:"product9.jpg"


}

]
 let cart=[];

function displayProducts(searchProducts,who="productWrapper"){

let productRow="";
let totalContent="";
if(who=="productWrapper"){
    searchProducts.forEach(function(product,index)
{
    productRow=`<div class="product">
    <div class="productimg">
          <img src="productImages/${product.img}" alt="cloth-model" width="100%">
      </div>
      <h4>Name : ${product.name}</h3>
      <p>size:${product.size}</p>
      <p>price:${product.price}</p>
      <p>color: ${product.color}</p>
      <p>description:${product.description}
      <button onclick="AddToCart(${index})">Add to cart</button></p>
     
  </div>

   `
     
     totalContent=totalContent+productRow;
      

});

}
else if(who=="cart"){
    searchProducts.forEach(function(product,index)
    {
        productRow=`<div class="product">
        <div class="productimg">
              <img src="productImages/${product.img}" alt="cloth-model" width="100%">
          </div>
          <h4>Name : ${product.name}</h3>
          <p>size:${product.size}</p>
          <p>price:${product.price}</p>
          <p>color: ${product.color}</p>
          <p>description:${product.description}
          <button onclick="removeFromCart(${index})">Remove from cart</button></p>
         
      </div>
       `
       totalContent=totalContent+productRow;
    
    });
}
 
document.getElementById(who).innerHTML=totalContent;
}
displayProducts(products);

function searchbox(values){

     
   let search= products.filter(function(product){
    let searchvalue=product.name+" "+product.size+" "+product.price+" "+product.color;
       return searchvalue.toUpperCase().indexOf(values.toUpperCase())!=-1;
   })
   displayProducts(search);
 
}


 
function AddToCart(index)
{
     cart.push(products[index]);
     displayProducts(cart,"cart");
}


function removeFromCart(index){

    cart.splice(index,1);
    displayProducts(cart,"cart");

}












