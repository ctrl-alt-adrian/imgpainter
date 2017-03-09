const newControls = function(canvas){


    function drawShape(){
      canvas.drawPolygon({
        layer: true,
        draggable: true,
        bringToFront: true,
        fillStyle: '#c33',
        x: 100, y: 100,
        radius: 50,
        sides: 5,
        concavity: 0.5,
        click: function (layer){
          // Spin star
          $(this).animateLayer(layer, {
            rotate: '+=144'
          });
        }
      });

      canvas.drawPolygon({
        layer: true,
        draggable: true,
        bringToFront: true,
        fillStyle: '#fff',
        strokeStyle: '#333',
        strokeWidth: 2,
        x: 160, y: 150,
        radius: 100,
        sides: 3,
        mouseover: function(layer) {
          $(this).animateLayer(layer, {
            fillStyle: '#c33',
          }, 500);
        },
        mouseout: function(layer) {
          $(this).animateLayer(layer, {
            fillStyle: '#fff',
          }, 500);
        }
      });

      canvas.drawArc({
        draggable: true,
        bringToFront: true,
        fillStyle: '#58d',
        shadowColor: '#000',
        shadowBlur: 40,
        shadowX: -15, shadowY: 5,
        x: 50, y: 50,
        radius: 30
      });

    }

    function loadImg(){
      let selectedFile;
      const input = $('input');
      const fileSelect = $('.fileSelect');

      $('canvas').drawImage({
        source: './resources/images/bears1.jpg',
        draggable: true,
        bringToFront: true,
        x: 150, y: 150,
        width: 280,
        height: 300,
        fromCenter: false

      });
      // loads file and prevent page refresh
      fileSelect.on('click', (ev) => {
        ev.preventDefault();
        input.click();
      });





    }


    return {
      drawShape: drawShape,
      loadImg: loadImg,
    };
};
