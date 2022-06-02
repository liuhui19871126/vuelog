<template>
  <div id="container">
    <h3 class="title">AmapDemo</h3>
    <el-button type="primary" @click="clearOverlay">clear overlays</el-button>
    <el-button type="primary" @click="setSateLittle">set sateLittle</el-button>
    <el-button type="primary" @click="setRoadNet">set roadNet</el-button>
    <el-button type="primary" @click="getCurrentCity"
      >get currentCity</el-button
    >
    <!-- <div class="amap-wrapper">
      <el-amap
        :zoom="14"
        :rotateEnable="true"
        :showLabel="true"
        :center="[121.207601, 36.767159]"
      ></el-amap>
    </div> -->
    <div class="amap-wrapper">
      <div id="containerOne" style="width: auto; height: 500px"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      threeMap: null,
      polyline: null,
    };
  },
  mounted() {
    this.threeMap = new AMap.Map("containerOne", {
      zoom: 6,
      pitch: 60,
      viewMode: "3D",
    });

    var position = new AMap.LngLat(116.397482, 39.909033);
    this.threeMap.setCenter(position);
    this.threeMap.setMapStyle("amap://styles/8b77fa92df076352db78ebacbe19598d");

    console.log(this.threeMap.getCenter());

    var path = [
      new AMap.LngLat("116.368904", "39.913423"),
      new AMap.LngLat("116.382122", "39.901176"),
      new AMap.LngLat("116.387271", "39.912501"),
      new AMap.LngLat("116.398258", "39.904600"),
      new AMap.LngLat("116.368904", "39.913423"),
    ];
    this.polyline = new AMap.Polyline({
      path: path,
      borderWeight: 2, // 线条宽度，默认为 1
      strokeColor: "red", // 线条颜色
      lineJoin: "round", // 折线拐点连接处样式
    });

    this.threeMap.add(this.polyline);
    // 创建两个点标记
    var marker1 = new AMap.Marker({
      position: new AMap.LngLat(116.397482, 39.909033), // 经纬度对象，如 new AMap.LngLat(116.39, 39.9); 也可以是经纬度构成的一维数组[116.39, 39.9]
      title: "北京",
      icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
    });
    var marker2 = new AMap.Marker({
      position: new AMap.LngLat(118.39, 39.9), // 经纬度对象，如 new AMap.LngLat(116.39, 39.9); 也可以是经纬度构成的一维数组[116.39, 39.9]
      title: "北京",
    });
    this.threeMap.add(marker1);
    // threeMap.add(marker2);

    // 构造矢量圆形
    var circle = new AMap.Circle({
      center: new AMap.LngLat(116.397482, 39.909033), // 圆心位置
      radius: 1000, //半径
      strokeColor: "#F33", //线颜色
      strokeOpacity: 5, //线透明度
      strokeWeight: 1, //线粗细度
      fillColor: "#ee2200", //填充颜色
      fillOpacity: 0.35, //填充透明度
    });
    this.threeMap.add(circle);
    // 自动适配到合适视野范围
    // 无参数，默认包括所有覆盖物的情况
    this.threeMap.setFitView();
    // 传入覆盖物数组，仅包括polyline和marker1的情况
    //this.threeMap.setFitView([marker1]);

    var clickHandler = function (e) {
      alert(
        "您在[ " +
          e.lnglat.getLng() +
          "," +
          e.lnglat.getLat() +
          " ]的位置点击了地图！"
      );
    };

    // 绑定事件
    this.threeMap.on("click", clickHandler);
    // 解绑事件
    // threeMap.off("click", clickHandler);

    // 构造官方卫星、路网图层
    // var layers = [new AMap.TileLayer.RoadNet()];
    // 地图上设置图层
    // this.threeMap.setLayers(layers);
  },
  methods: {
    getCurrentCity() {
      this.threeMap.getCity(function (info) {
        alert(info);
      });
    },
    clearOverlay() {
      // 使用clearMap方法删除所有覆盖物
      // this.threeMap.clearMap();
      // 单独移除点标记
      this.threeMap.remove(this.polyline);
    },
    setSateLittle() {
      var layer1 = new AMap.TileLayer.Satellite();
      this.threeMap.setLayers([layer1]);
    },
    setRoadNet() {
      this.threeMap.setLayers([new AMap.TileLayer.RoadNet()]);
    },
  },
};
</script>
<style  scoped>
.amap-wrapper {
  width: auto;
  height: 200px;
}
</style>