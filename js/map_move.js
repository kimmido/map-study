map.mapMove = function (center, zoom, animate) {
    if (animate == null) {
     animate = true; //false로 설정할경우 애니메이트 효과 끔
    }
 
    if (center != null) {
        this.center = map.center; // map.center = undefined 나오는데 왜 쓰는걸까ㅏ
    
        if (zoom != null) {
            this.zoom = zoom;
            this.setView(sop.utmk(center[0], center[1]), zoom, {
            animate : animate
            });
        }
        else {
            this.setView(sop.utmk(center[0], center[1]), {
            animate : animate
            });
        }
    }
}
 
   map.setView(sop.utmk(953820, 1953437), 9); // 경복궁
   map.mapMove([950000,1950000],5); // 섬?
   console.log('로드: ' + map.getCenter()); 
   setTimeout(function() {
       console.log('2초 후: ' + map.getCenter()); // 제대로 나옴
   }, 2000)
   
   function mapMove(direction){
       var center = map.getCenter();
       var x = center.x;
       var y = center.y;
       
       switch(direction){
           case  "top" :
               y = y+2000;
               break;
           case  "bottom" :
               y = y-2000;
               break;
           case  "right" :
               x = x+2000;
               break;
           case  "left" :
               x = x-2000;
               break;
       }
       map.mapMove([x,y],7,true);
    console.log('버튼 클릭, 이동 후: ' + map.getCenter()); //mapMove()보다 먼저 출력되는 듯
}