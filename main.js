
var board =[
    ["","",""],
    ["","",""],
    ["","",""]
    
]
var turn,sqid,user,computer,row,col;
const ARR_LENGT=3;

  
$(document).ready(function(){
    // checkbox event listner
  $(".checkBox").click(function(){
    if($(this).is(":checked")){
      user =$(this).val();
       
      turn=user;
      console.log(turn);
      
      computer=(user==='X')?'O':'X';
    }
  })
  //$turn ='@';
    // square event listner
  $(".square").click(function(){
    sqid=$(this).attr('id');
    console.log("value inside the onclick "+turn);
    var n =turn;
    if ($("#"+sqid).text()==="") {
      $('#'+sqid).text(n);
      row =getrow();
      col =getcol();
      board[row][col] =turn;
      console.log(board);
      
    //$('#'+player).text("Player "+n+" playing: ")
    turn=(turn==user)? computer :user;
    }
    else{
      alert("the square is already used");
    }
    
    if (checkwinner()) {
      var res =(turn=='O')?'X':'O';
      alert('winner is '+res);
      
    }
    if (isdraw()) {
      alert('Its a Draw');
    }
    var counter_move =getmove();
    $('#'+counter_move).text(computer);

    
  })
  $(".reset").click(function(){
    console.log("reseting");
    resetboard();
  })
});  
//getting row number
function getrow(){
  return Math.floor(sqid/ARR_LENGT); 
}
//getting col number 
function getcol(params) {
  return sqid%ARR_LENGT;
}
//check draw
function isdraw(){
  var flag;
  if(!checkwinner){
    for (let i = 0; i < ARR_LENGT; i++) {
      for (let j = 0; j < ARR_LENGT; j++) {
       
        if ( board[i][j]=="" ) {
          flag=true;
          
        }
        
      }
      
    }
  }
  if(!flag){
    return false;
  }
}
//check winner
function checkwinner(){
  for (let i = 0; i < ARR_LENGT; i++) {
    if (board[i][0]!="" && board[i][0]==board[i][1] && board[i][1]==board[i][2]) {
      return true;
    }
    
  }
  for (let i = 0; i < ARR_LENGT; i++) {
    if (board[0][i]!="" && board[0][i]==board[1][i] && board[1][i]==board[2][i]) {
      return true;
    }
    
  }
  if (board[0][0] !="" && board[2][2] !="" && board[0][0]==board[1][1] && board[1][1]==board[2][2]) {
    return true;
  }
  if (board[0][2]!="" && board[2][0]!="" && board[0][2]==board[1][1] && board[1][1]==board[2][0]) {
    return true;
  }

}

function getmove(){
  var oponent =(computer=='O'?'X':'O');
  for (let i = 0; i < ARR_LENGT; i++) {
    if (board[i][0]==board[i][2]==oponent) {
      if (board[i][1]=="") {
        return (i)*3+1;
        break;
      }
      
    }
    else if (board[i][0]==board[i][1]==oponent) {
      if (board[i][2]=="") {
        return i*3;
        break;
      }
      
    }
    else if (board[i][1]==board[i][2]==oponent) {
      if (board[i][0]) {
        return (i)*3;
        break;
      }
    }
    
  }
  for (let i = 0; i < ARR_LENGT; i++) {
    if (board[0][1]==board[2][i]==oponent) {
      if (board[1][i]=="") {
        return 3+i;
        break;
      }
      
    }
    else if (board[0][i]==board[1][i]==oponent) {
      if (board[2][i]=="") {
        return 6+i;
        break;
      }
      
    }
    else if (board[1][i]==board[2][i]==oponent) {
      if (board[0][i]) {
        return i;
        break;
      }
    }
    
  }
  if (board[0][0]==board[1][1]==oponent && board[2][2]=="") {
    return 9;
  }
  else if (board[0][0]==board[2][2]==oponent && board[1][1]=="") {
    return 6;
  }
  else if (board[2][2]==board[1][1]==oponent && board[2][2]=="") {
    return 1;
  }
  else if (board[0][2]==board[1][1]==oponent && board[2][0]=="") {
    return 7;
  }
  else if (board[0][2]==board[2][1]==oponent && board[1][1]=="") {
    return 5;
  }
  else if (board[2][0]==board[1][1]==oponent && board[0][2]=="") {
    return 3;
  }
  else{
    for (let i = 0; i < ARR_LENGT; i++) {
      for (let j = 0; j < ARR_LENGT; j++) {
        if (board[i][j]=="") {
          return 3*(i) +j;
        }
        
      }
      
    }
  }



}

//reset board
  
function resetboard(){
  
    
    $(".square").text("");
    $(".checkBox").prop("checked",false);

} 

