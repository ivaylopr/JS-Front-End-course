function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const inputTextArea = document.querySelector('#inputs textarea');
   const outputEl = document.querySelector('#outputs p');
   const workersEe = document.querySelector('#workers p');

   function onClick() {

      const restaurants = JSON.parse(inputTextArea.value)
         .reduce((acc,data) => {
            const[restaurantName, workersData]=data.split(' - ');
            const workers=workersData.split(', ').map((workerData)=>{
               const [name,salary]=workerData.split(' ');
               
               return {
                  name,
                  salary:Number(salary)
               };
            })
            if (!acc.hasOwnProperty(restaurantName)) {
               acc[restaurantName]={
                  workers:[]
               };
            }
            acc[restaurantName].workerData.push([...workers])
            return acc;
         }, {})


   }
} 
 