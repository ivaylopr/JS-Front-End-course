function solve() {
   //get element references
   const resultEl = document.querySelector('textarea[disabled]');
   const checkoutButton = document.querySelector('button.checkout');
   const productCatalogEl= document.querySelector('.shopping-cart');

   let products = [];

   //attach event for add product
   productCatalogEl.addEventListener('click',(e)=>{
      if (e.target.tagName !== 'BUTTON' && e.target.textContent.trim()!=='Add') {
         return;
      }

      //get name and price
         const productEl = e.target.closest('.product');

         const name = productEl.querySelector('.product-title').textContent;
         const price = Number(productEl.querySelector('.product-line-price').textContent);
      //print in text area
      resultEl.value+= `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      //add product to the array
      products.push({
         name,
         price
      })
   })
   //attach checkout event
   checkoutButton.addEventListener('click',(e)=>{
      //get unique products comma separated
      const totalPrice = products.reduce((price,product)=> price + product.price,0);
      const productList = [...new Set(products.map(product=>product.name))].join(', ');
      //print result in text area
      resultEl.value+=`You bought ${productList} for ${totalPrice.toFixed(2)}.`;
      //disable all button after checkout
      document.querySelectorAll('button')
      .forEach(el=>el.setAttribute('disabled','disabled'));
   })

}
