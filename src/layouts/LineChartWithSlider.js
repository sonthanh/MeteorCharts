(function() {
  MeteorChart.Layouts.LineChartWithSlider = function(chart) {
    return {
      components: [ 
        {
          id: 'slider',
          type: 'Slider',
          x: function() {
            // bind axis x position to line x position
            return this.chart.components.lineSeries.x();
          },
          y: function() {
            var components = this.chart.components,
                line = components.lineSeries;

            return line.y() + line.height() + (this.chart.padding() * 2) + components.xAxis.height();
          },
          width: function() {
            // bind axis width to line width
            return this.chart.components.lineSeries.width();
          },
          style: function() {
            return {
              orientation: 'horizontal',
              handleWidth: 60,
              handleHeight: 15
            };
          }
        }, 
        {
          id: 'lineSeries',
          type: 'LineSeries',
          x: function() {
            var chart = this.chart;
            return chart.components.yAxis.width() + (chart.padding() * 2);
          },
          y: function() {
            return this.chart.padding();
          },
          width: function() {
            var chart = this.chart;
            return chart.width() - chart.components.yAxis.width() - (chart.padding() * 3);
          },
          height: function() {
            var chart = this.chart,
                components = chart.components;

            return chart.height() - components.slider.height() - (chart.padding() * 4) - components.xAxis.height();
          }
        },
        {
          id: 'yAxis',
          type: 'Axis',
          x: function() {
            return this.chart.padding();
          },
          y: function() {
            return this.chart.padding();
          },
          height: function() {
            // bind axis height to line height
            return this.chart.components.lineSeries.height();
          },
          data: function() {
            // bind axis data to line min and max values
            var data = this.chart.components.lineSeries.data(),
                viewport = MeteorChart.Util.getSeriesMinMax(data.series);
            return {
              min: viewport.minY,
              max: viewport.maxY
            }
          },
          style: function() {
            return {
              orientation: 'vertical'
            };
          }
        },
        {
          id: 'xAxis',
          type: 'Axis',
          x: function() {
            // bind axis x position to line x position
            return this.chart.components.lineSeries.x();
          },
          y: function() {
            var line = this.chart.components.lineSeries;

            return line.y() + line.height() +   this.chart.padding();
          },
          width: function() {
            // bind axis width to line width
            return this.chart.components.lineSeries.width();
          },
          data: function() {
            // bind axis data to line min and max values
            var data = this.chart.components.lineSeries.data(),
                viewport = MeteorChart.Util.getSeriesMinMax(data.series);
            return {
              min: viewport.minX,
              max: viewport.maxX
            }
          },
          style: function() {
            return {
              maxIncrements: 5
            };
          }
        }
      ]
    };
  };
})();