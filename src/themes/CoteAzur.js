(function() {
  var RED = '#eb5233',
      GREEN = '#419091',
      LIGHT_YELLOW = '#fffefb',
      DARK_BLUE = '#31353d';

  MeteorChart.Themes.CoteAzur = {
    background: {
      primary: LIGHT_YELLOW,
      fonts: {
        small: {
          fontFamily: 'Arial',
          fontSize: 12,
          fill: DARK_BLUE
        },
        medium: {
          fontFamily: 'Arial',
          fontSize: 15,
          fill: DARK_BLUE
        },
        large: {
          fontFamily: 'Arial',
          fontSize: 30,
          fill: DARK_BLUE
        }
      }
    },
    foreground: {
      primary: 'rgba(49, 53, 61, 0.8)',
      secondary: 'black',
      fonts: {
        small: {
          fontFamily: 'Arial',
          fontSize: 12,
          fill: LIGHT_YELLOW
        },
        medium: {
          fontFamily: 'Arial',
          fontSize: 15,
          fill: LIGHT_YELLOW
        },
        large: {
          fontFamily: 'Arial',
          fontSize: 30,
          fill: LIGHT_YELLOW
        }
      }
    },
    data: [RED, GREEN]
  };
})();