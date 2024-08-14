function attachGradientEvents() {
    //Get element references
    const resulElement = document.getElementById('result');
    const gradientElement = document.getElementById('gradient');

    //Attach mouse event
    gradientElement.addEventListener('mousemove', (e)=>{
        const currentPosition = e.offsetX;
        const elementWidth = e.currentTarget.clientWidth;

        const percentige = Math.floor((currentPosition/elementWidth)*100);
        resulElement.textContent=`${percentige}%`
    })
}
