(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart: Sales Comparison Bar ---
  var chartSales = echarts.init(document.getElementById('chart-sales'), null, { renderer: 'svg' });
  chartSales.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      appendToBody: true,
      formatter: function(params) {
        var p = params[0];
        return p.name + '<br/>累计销量: ' + p.value + ' 万辆';
      }
    },
    grid: {
      left: '3%',
      right: '6%',
      bottom: '3%',
      top: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 11 },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    yAxis: {
      type: 'category',
      data: ['蔚来汽车', '小米汽车', '上汽通用五菱', '理想汽车', '特斯拉中国', '零跑汽车', '鸿蒙智行', '长安汽车', '吉利汽车', '比亚迪'],
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: ink, fontSize: 12, fontWeight: 600 },
      axisTick: { show: false }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 15.01, itemStyle: { color: accent2 } },
        { value: 15.03, itemStyle: { color: accent2 } },
        { value: 15.93, itemStyle: { color: accent2 } },
        { value: 16.26, itemStyle: { color: accent } },
        { value: 18.60, itemStyle: { color: accent } },
        { value: 18.78, itemStyle: { color: accent } },
        { value: 19.16, itemStyle: { color: accent } },
        { value: 25.48, itemStyle: { color: accent } },
        { value: 47.04, itemStyle: { color: accent } },
        { value: 76.64, itemStyle: { color: accent } }
      ],
      barWidth: '60%',
      label: {
        show: true,
        position: 'right',
        color: ink,
        fontSize: 12,
        fontFamily: 'IBMPlexMono, monospace',
        formatter: '{c} 万辆'
      },
      itemStyle: { borderRadius: [0, 4, 4, 0] }
    }]
  });
  window.addEventListener('resize', function() { chartSales.resize(); });
})();
