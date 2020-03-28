
   var play = "x"

   // var box = document.getElementById("r"+2).innerText
   // document.getElementById("r"+2).innerText = "x"
       // console.log(box.innerText)


   function printVal(number){
       var box = document.getElementById("r"+number)
       console.log(box)
       

       if(box.innerText ==""){
           box.innerText = play;
           win()
           if(play=="x"){
               play = "o";
           }else{
               play='x';
           }

           // win()
           var turn = document.getElementById("player")
           turn.innerText = play+" player turn"

           // win()
       }
   } 

   function moveVal(n){
       var move = document.getElementById("r"+n)
           return move.innerText
       
   }

   function playMove(a,b,c,player){
       
       if(moveVal(a)==player && moveVal(b)==player && moveVal(c)==player){
           return true
       }else{
           false
       }
   }

   function win(){
       if(playMove(1,2,3,play) || playMove(4,5,6,play) || playMove(7,8,9,play)||
       playMove(1,4,7,play) || playMove(2,5,8,play) || playMove(3,6,9,play)||
       playMove(1,5,9,play) || playMove(3,5,7,play)){

       document.getElementById("player").innerText = play +" won"
       alert(play+" won");

       for(var i=1; i<=9; i++){
               document.getElementById("r"+i).innerText=""
           }

       }
   }
   function reset(){
       for(var i=1; i<=9; i++){
           document.getElementById("r"+i).innerText=""
       }
   }

   // function win(){
   //     if(playMove(1,2,3,"x") || playMove(4,5,6,"x") || playMove(7,8,9,"x")||
   //     playMove(1,4,7,"x") || playMove(2,5,8,"x") || playMove(3,6,9,"x")||
   //     playMove(1,5,9,"x") || playMove(3,5,7,"x")){

   //         document.getElementById("player").innerText = play +" won"
   //     }else{
   //         if(playMove(1,2,3,"o") || playMove(4,5,6,"o") || playMove(7,8,9,"o")||
   //     playMove(1,4,7,"o") || playMove(2,5,8,"o") || playMove(3,6,9,"o")||
   //     playMove(1,5,9,"o") || playMove(3,5,7,"0")){
   //         document.getElementById("player").innerText = play +" won"
   //     }
   //     }
   // }
