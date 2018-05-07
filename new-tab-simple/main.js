(function () {
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
    }
    function quote() {
        ctx.fillStyle = '#000';
        ctx.font = '60px sans-serif';
        let random = quotes[Math.floor(Math.random() * quotes.length)];
        var quoteText = `${random.quote}.`;
        printAtWordWrap(ctx, quoteText, 25, window.innerHeight / 2, 80, window.innerWidth - 25);
    }
    
    function resizeCanvas() {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        refresh();
        quote();
    }

    function printAtWordWrap(context, text, x, y, lineHeight, fitWidth) {
        fitWidth = fitWidth || 0;

        if (fitWidth <= 0) {
            context.fillText(text, x, y);
            return;
        }
        var words = text.split(' ');
        var currentLine = 0;
        var idx = 1;
        while (words.length > 0 && idx <= words.length) {
            var str = words.slice(0, idx).join(' ');
            var w = context.measureText(str).width;
            if (w > fitWidth) {
                if (idx == 1) {
                    idx = 2;
                }
                context.fillText(words.slice(0, idx - 1).join(' '), x, y + (lineHeight * currentLine));
                currentLine++;
                words = words.splice(idx - 1);
                idx = 1;
            }
            else {
                idx++;
            }
        }
        if (idx > 0)
            context.fillText(words.join(' '), x, y + (lineHeight * currentLine));
    }


})();

