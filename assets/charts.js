(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  var chartSales = echarts.init(document.getElementById('chart-sales'), null, { renderer: 'svg' });
  chartSales.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      appendToBody: true,
      formatter: function(params) {
        var p = params[0];
        return p.name + '<br/>1-6月累计: ' + p.value + ' 万辆';
      }
    },
    grid: {
      left: '3%',
      right: '10%',
      bottom: '8%',
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
      data: [
        '智己汽车', '蔚来汽车', '上汽乘用车', '长安启源', '广汽埃安',
        '深蓝汽车', '小米汽车', '长城新能源', '赛力斯', '上汽通用五菱',
        '小鹏汽车', '理想汽车', '特斯拉中国', '零跑汽车', '鸿蒙智行',
        '极氪科技', '奇瑞新能源', '吉利银河', '比亚迪'
      ],
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: ink, fontSize: 11, fontWeight: 600 },
      axisTick: { show: false }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 2.08, itemStyle: { color: accent2 } },
        { value: 11.42, itemStyle: { color: accent2 } },
        { value: 12.00, itemStyle: { color: accent2 } },
        { value: 12.00, itemStyle: { color: accent2 } },
        { value: 12.51, itemStyle: { color: accent } },
        { value: 14.32, itemStyle: { color: accent } },
        { value: 15.00, itemStyle: { color: accent } },
        { value: 17.10, itemStyle: { color: accent } },
        { value: 17.80, itemStyle: { color: accent } },
        { value: 19.10, itemStyle: { color: accent } },
        { value: 19.72, itemStyle: { color: accent } },
        { value: 20.39, itemStyle: { color: accent } },
        { value: 22.00, itemStyle: { color: accent } },
        { value: 22.17, itemStyle: { color: accent } },
        { value: 23.00, itemStyle: { color: accent } },
        { value: 24.49, itemStyle: { color: accent } },
        { value: 36.00, itemStyle: { color: accent } },
        { value: 45.00, itemStyle: { color: accent } },
        { value: 214.60, itemStyle: { color: accent } }
      ],
      barWidth: '60%',
      label: {
        show: true,
        position: 'right',
        color: ink,
        fontSize: 10,
        fontFamily: 'IBMPlexMono, monospace',
        formatter: '{c}'
      },
      itemStyle: { borderRadius: [0, 4, 4, 0] }
    }]
  });
  window.addEventListener('resize', function() { chartSales.resize(); });
})();
