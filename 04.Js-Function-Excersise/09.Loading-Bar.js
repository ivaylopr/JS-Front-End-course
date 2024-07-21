function loadingBar(progress){
    const renderProgressBar = (progress)=> `[${`%`.repeat(progress/10)}${`.`.repeat(10-(progress/10))}]`;
    const renderProgress = (progress)=>`${progress}% ${renderProgressBar(progress)}`;
    if (progress===100) {
        console.log(`${progress}% Complete! ${renderProgressBar(progress)}`);
    } else{
        console.log(renderProgress(progress));
        console.log(`Still loading...`);
    }
}

loadingBar(30);
loadingBar(100);
