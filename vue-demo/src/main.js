import Vue from 'vue'
import App from './App.vue'
import VueAMap from 'vue-amap'
import { lazyAMapApiLoaderInstance } from 'vue-amap';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from '@/router/router'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.use(VueAMap);
// window._AMapSecurityConfig = {
//   securityJsCode: '60195f8f9d20b8ab884571049e2f150d'
// }
VueAMap.initAMapApiLoader({
  //key: '8fec907d1e30e7798b2d7f22a5a6ceaf',
  //plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.MarkerClusterer', 'AMap.Geocoder'],
  //v: '1.4.4'
});
// lazyAMapApiLoaderInstance.load().then(() => {
//   // your code ...
//   // this.map = new AMap.Map('amapContainer', {
//   //   center: new AMap.LngLat(121.59996, 31.197646)
//   // });
// });
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
