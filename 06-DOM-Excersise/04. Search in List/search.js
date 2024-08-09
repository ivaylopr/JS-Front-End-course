function search() {
   const townsEls = document.querySelectorAll('#towns li');

   function getMatchedElements(input) {
      const townsEls = document.querySelectorAll('#towns li');
      return [...townsEls].filter((el) => el.textContent
         .toLowerCase()
         .includes(input.toLowerCase()));

   }

   function backTheFirstState() {
      townsEls.forEach((x) => {
         x.style.fontWeight = 'normal';
         x.style.textDecoration = 'none';
      }
      )
   }

   backTheFirstState();
   const [inputEl] = document.getElementsByTagName('input');

   const matchElements = getMatchedElements(inputEl.value);

   matchElements.forEach((matchEl) => {
      matchEl.style.fontWeight = 'bold';
      matchEl.style.textDecoration = 'underline';
   }
   )

   document.querySelector('div#result').textContent = `${matchElements.length} matches found`;

}
