function create(words) {
   const contentDivElement= document.getElementById('content');


   function createWordStructure(word){
      const pEl=document.createElement('p');
      const divEl = document.createElement('div');

      pEl.textContent=word;
      pEl.style.display='none';

      divEl.appendChild(pEl);

      return divEl
   }

   words.forEach((word)=>{
      const divElement = createWordStructure(word);

      divElement.addEventListener('click', ()=>{
         divElement.children[0].style.display='block';
      });

      contentDivElement.appendChild(divElement);
   })
}
