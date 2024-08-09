function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      const tableRowElements = document.querySelectorAll('table.container tbody tr')
      
      function backToStartState() {
         [...tableRowElements].forEach((row) => {
            row.classList.remove('select');
         })
      }
      
      backToStartState();
      
      function getMatchElements(input) {
         return [...tableRowElements]
            .filter((rowEl) =>
               rowEl.textContent.toLowerCase().includes(input.toLowerCase()));
      }
      
      const searchFieldEl = document.getElementById('searchField');
      
      const matchRows = getMatchElements(searchFieldEl.value);

      matchRows.forEach((matchRow) => {
         matchRow.classList.add('select');
      })
      
      searchFieldEl.value='';
   }
}
