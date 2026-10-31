let api = "https://fakestoreapi.com/products";

fetch(api).then((success)=>{
    console.log(success);
    return success.json();
})

.then((jsData)=>{
    console.log(jsData);

    let products = document.querySelector("#products");

    jsData.forEach((product)=>{

        let card = document.createElement("div");

        card.innerHTML = `
            <div class="card">

                <h3>Product ID: ${product.id}</h3>

                <h4>${product.title.slice(0,50)}</h4>

                <p>Price: $${product.price}</p>

                <p>${product.description.slice(0,100)}</p>

                <img src="${product.image}" alt="Product Image">

            </div>
        `;

        products.innerHTML += card.innerHTML;

    });

})

.catch((error)=>{
    document.querySelector(".api").innerHTML =
    `<p style="color:red;">API Error: ${error.message}</p>`;
})

.finally(()=>{
    document.querySelector(".api").innerHTML +=
    "<p>API request completed</p>";
});

