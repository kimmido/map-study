var map = sop.map('map'); //지도 출력할 엘리먼트 id
map.setView(sop.utmk(953820, 1953437), 9); // 센터좌표(위도, 경도), 줌레벨 -utmk: 좌표계git


// 클릭한 좌표 정보
map.on("click",function(e) {
    setTimeout(function() {  
        var x_coor = e.utmk.x;
        var y_coor = e.utmk.y;
        var html = "<p> 지도클릭 좌표 x :"+x_coor+" , y :"+y_coor+"</p>";
        document.querySelector("#infoBox").innerHTML = html;
    }, 200);
});

map.on("contextmenu",function(e) { // 마우스 오른쪽 클릭 이벤트
    setTimeout(function() {  
        var x_coor = e.utmk.x;
        var y_coor = e.utmk.y;
        let setMarker = sop.marker([x_coor, y_coor]);
        setMarker.addTo(map);
        var html = "<p> 지도클릭 좌표 x :"+x_coor+" , y :"+y_coor+"</p>";
        document.querySelector("#infoBox").innerHTML = html;
    }, 200);
    
}); 


// map 정보
var center = map.getCenter();
var level = map.getZoom();
var bounds = map.getBounds();
var swLatLng = bounds.getSouthWest(); 
var neLatLng = bounds.getNorthEast();

var html = "<p>센터 : "+center.x+","+center.y+"</p>";
    html +="<p>줌레벨 : "+level+"</p>";
    html +="<p>swLatLng : "+swLatLng+"</p>";
    html +="<p>neLatLng : "+neLatLng+"</p>";
    
document.querySelector('#divCon').innerHTML = html;

// **추측**
//  map = {
//      center: utmk~,
//      zoom:  ,
//      setView: function() {},
//      getCenter: function() {
//          return this.center? // 메소드의 this는 해당 메소드를 호출한 객체(map)
//      },
// }