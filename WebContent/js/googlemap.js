var map;
var marker;
var infoWindow;


var center = {
   lat: 35.626748, // 緯度
  lng: 139.633986 // 経度
};
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), { // #mapに地図を埋め込む
     center: center, // 地図の中心を指定
     zoom: 16 // 地図のズームを指定
   });

 marker = new google.maps.Marker({ // マーカーの追加
        position: center, // マーカーを立てる位置を指定
      map: map // マーカーを立てる地図を指定
   });

 infoWindow = new google.maps.InfoWindow({ // 吹き出しの追加
        content: '<div class="map">ここです！！！</div>' // 吹き出しに表示する内容
  });
 marker.addListener('click', function() { // マーカーをクリックしたとき
     infoWindow.open(map, marker); // 吹き出しの表示
    });
}
