window.onload=function(){

    let words=["book","chair","money","bag","mobile","laptop","computer","fan","table","bulb"];
    let randomWord="";
    let scrambleWord="";

    const randomWordArr=()=>{
        let ranWord= words [Math.floor(Math.random()*words.length)];
        return ranWord;
    }
    const shuffle=(arr)=>{
        for(let i=arr.length-1; i>0; i--){
            let randomIndex=Math.floor(Math.random()*arr.length);

            //swapping
            temp=arr[i];
            arr[i]=arr[randomIndex];
            arr[randomIndex]=temp;
        }
        return arr;
    }
    
    let msg= document.querySelector("#msg");
    let hide= document.querySelector(".hide");
    let btn= document.querySelector("#btn");
    
    let playing=false;
    
    btn.addEventListener('click',()=>{
        if(!playing){
            playing=true;
            btn.innerHTML="Guess";
            hide.classList.toggle("hide");
            randomWord=randomWordArr();
            scrambleWordArr= shuffle(randomWord.split(""));
            scrambleWord=scrambleWordArr.join("");
            msg.innerHTML=scrambleWord;
        }
        else{
            if(randomWord===hide.value){
                playing=false;
                msg.innerHTML=`correct, it is ${randomWord}`;
                btn.innerHTML="Start Again";
                hide.classList.toggle("hide");
                hide.value="";

            }
            else{
                msg.innerHTML=`sorry it's incorrect, try again ${scrambleWord}`;
                hide.classList.toggle("hide");
                btn.innerHTML="try again";
                hide.value="";                
            }
        }
    })
            

}