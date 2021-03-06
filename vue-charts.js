if(typeof Chart === "undefined")
    throw "ChartJS is undefined";
// 4 kb here
window.vue_charts = require('./vue-chartjs-lib.js');
// 12.4 kb here
window.chartjs_line = require('./components/chartjs-line.vue');
// 23kb here
window.chartjs_bar = require('./components/chartjs-bar.vue');
// 33.1kb here
window.chartjs_radar = require('./components/chartjs-radar.vue');
// 42.5kb here
window.chartjs_polar_area = require('./components/chartjs-polar-area.vue');
window.chartjs_pie = require('./components/chartjs-pie.vue');
window.chartjs_doughnut = require('./components/chartjs-doughnut.vue');
