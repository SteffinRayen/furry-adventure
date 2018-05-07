(function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    initialize();
    function initialize() {
        window.addEventListener('resize', resizeCanvas, false);
        resizeCanvas();
    }
    
    function refresh() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (i = 0; i < 300; i++) {
        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);
        var radius = Math.floor(Math.random() * (window.innerWidth * 0.1));

        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var a = Math.floor(Math.random() * 9) / 10;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, Math.PI * 2, 0, false);
        ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
        ctx.fill();
        ctx.closePath();
      }
    };
    function resizeCanvas() {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        refresh();
    }
    
})();