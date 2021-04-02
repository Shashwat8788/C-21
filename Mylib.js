function isTouching(obj1,obj2){
    if(obj2.x-obj1.x <= obj2.width/2+obj1.width/2&&obj1.x-obj2.x <= obj2.width/2+obj1.width/2&&
      obj2.y-obj1.y <= obj2.height/2+obj1.height/2&&obj1.y-obj2.y <= obj2.height/2+obj1.height/2){
      return true;
    } else {
      return false;
    }
  }
  
  function bounceOff(){
    if(car.x-tower.x <= car.width/2+tower.width/2&&tower.x-car.x <= car.width/2+tower.width/2){
      car.velocityX = car.velocityX*-1;
    }
  }
  
  function collide(obj1,obj2){
    if(obj2.x-obj1.x <= obj2.width/2+obj1.width/2&&obj1.x-obj2.x <= obj2.width/2+obj1.width/2){
      obj2.velocityX = 0;
    }
  }