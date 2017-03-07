     // A $( document ).ready() block.
$( document ).ready(function() {
    

    console.log("ready!");


      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawFood);

      function drawFood() {
        var data = new google.visualization.arrayToDataTable([
          ['Food', 'NY, NY', 'Bronx, NY'],
          ['Milk (1 G)', '$4.02', '$3.18'],
          ['Bread (1 Loaf)', '$3.30', '$2.00'],
          ['White Rice (1LB)', '$2.72', '$2.00'],
          ['Eggs', '$3.46', '$2.12'],
          ['Chicken Breast (1LB)', '$5.14', '$3.00'],
          ['Beef (1LB)', '$6.16', '$5.17'],
          ['Apples (1LB)', '$2.65', '$1.50'],
          ['Potatos (1LB)', '$1.53', '$.63'],
          ['Lettuce', '$2.08', '$2.00'],
        ]);

        var options = {
          width: 1000,
          chart: {
            title: 'Costs of Living Prices in Manhattan, NY vs. Bronx, NY',
            subtitle: 'Source: 2009-2017 Numbeo'
          },
          series: {
            0: { axis: 'NY, NY' }, // Bind series 0 to an axis named 'NY, NY'.
            1: { axis: 'Bronx, NY' } // Bind series 1 to an axis named 'Bronx, NY'.
          },
          axes: {
            y: {
              distance: {label: 'Price ($)'}, // Left y-axis.
              brightness: {side: 'right', label: 'Price ($)'} // Right y-axis.
            }
          }
        };

      var chart = new google.charts.Bar(document.getElementById('FoodChart'));
      chart.draw(data, options);
    };


    google.charts.setOnLoadCallback(drawOtherStuff);

     function drawOtherStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Country','Crop Water Requirement', 'Crop water consumed (mm)'],
          ['Argentina', 877, 877],
          ['Australia', 901, 843],
          ['Brazil', 606, 551],
          ['China', 718, 638],
          ['Egypt', 1009, 1009],
          ['Greece', 707, 707],
          ['India', 810, 538],
          ['Mali', 993, 538],
          ['Mexico', 771, 746],
          ['Pakistan', 850, 850],
          ['Syria', 1309, 1309],
          ['Turkey', 963, 963],
          ['Turkmenistan', 1025, 1025],
          ['USA', 516, 419],
          ['Uzbekistan', 999, 999],
        ]);

        var options = {
          width: 900,
          chart: {
            title: ' Consumptive water use at field level for cotton production in the major cotton producing countries. ',
            subtitle: ' Sources: Gillham et al. (1995); FAO (1999); Cotton Australia (2005); CCI (2005); WWF (1999). '
          },
          series: {
            1: { axis: 'water' } 
          },
          axes: {
            y: {

              water: {side: 'left', label: 'Water Consumed (mm)'} // Right y-axis.
            }
          }
      };

        var chartTwo = new google.charts.Bar(document.getElementById('secondChart'));
      chartTwo.draw(data, options);
  };
  });
