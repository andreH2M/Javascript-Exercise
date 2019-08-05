//Object = Initial position


var roverP0 = {
  direction: "N",
  posX: 0,
  posY: 0,
  travelLog: []
};

//Direction Left
 function turnLeft(rover){
 switch(rover.direction){

   case 'N': rover.direction='W'; break;
   case 'S': rover.direction='E'; break;
   case 'W': rover.direction='S'; break;
   case 'E': rover.direction='N'; break;
 }
     console.log("turnLeft was called!");
}


//Direction Right
 function turnRight(rover){
 switch(rover.direction){

   case 'N': rover.direction='E'; break;
   case 'S': rover.direction='W'; break;
   case 'E': rover.direction='S'; break;
   case 'W': rover.direction='N'; break;
 }
   console.log("turnRight was called!");
}


//Direction Forward
 function moveForward(rover){
  switch(rover.direction){
   case 'N': 
       if(rover.posY <= 0 || rover.posY > 10){
         console.log("Rover is out of limits");
       }else{
         rover.posY-=1;
       }
      break;

    case 'S':
        if(rover.posY < 0 || rover.posY > 10){
           console.log("Rover is out of limits");
        }else {
           rover.posY+=1;
        }
       break;
   
   case 'E':
      if(rover.posX < 0 || rover.posX > 10){
         console.log("Rover is out of limits");
       }else{   
         rover.posX+=1;
       }
       break;
   
  
     
   case 'W':
      if(rover.posX < 0 || rover.posX > 10){
         console.log("Rover is out of limits");
      }else {
           rover.posX-=1;
      }
     break;
  }
  
  console.log("moveForward was called");
  
 }

//List of Commands 
 function commands(rover){
  var path = prompt("Press only this commands to start your journey: forward(f), left (l), right (r)");

// Loop / Path / Current Position 

  if(path.indexOf("f") >=0 || path.indexOf("r") || path.indexOf("l")) { 
    var Path2 = path.split("");
  console.log("Rover's path: " + path);
  for(var i = 0;  i < Path2.length; i++){
    
     switch(path[i]){
     case 'f': moveForward(rover); break;
     case 'l': turnLeft(rover); break;
     case 'r': turnRight(rover); break;
     
    }
    
     var position = [roverP0.posX, roverP0.posY];
     roverP0.travelLog.push(position);
     console.log("Rover's current position: " + position);
 
   }
  
  }else {
    alert("Wrong command, try again!!");
    commands(roverP0);
  }
}
commands(roverP0);