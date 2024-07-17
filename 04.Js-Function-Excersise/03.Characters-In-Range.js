function allCharsInRange(firstChar,secondChar){
    const firstN=firstChar.charCodeAt(0);
    const secondN = secondChar.charCodeAt(0);
    let result=new Array();
    if (secondN>firstN) {
        for (let i = firstN+1; i <secondN; i++) {
            result.push(String.fromCharCode(i));
        }
       
    } else{
        for (let i = secondN+1; i <firstN; i++) {
            result.push(String.fromCharCode(i));
        }
    }
    console.log(result.join(" "));
}

allCharsInRange('C','#');
