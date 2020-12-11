var drawGrid = function(w, h, id) {
   
    var data = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"> \
        <defs> \
            <pattern id="smallGrid" width="40" height="8" patternUnits="userSpaceOnUse"> \
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="black" stroke-width="0.5" /> \
            </pattern> \
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"> \
                <rect width="80" height="80" fill="url(#grid)" /> \
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="black" stroke-width="1" /> \
            </pattern> \
        </defs> \
        <rect width="100%" height="100%" fill="url(#grid)" /> \
    </svg>';

    var DOMURL = window.URL || window.webkitURL || window;
    
    var img = new Image();
    var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    var url = DOMURL.createObjectURL(svg);
    
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      DOMURL.revokeObjectURL(url);
    }
    img.src = url;
}

let gridBtn = document.querySelector("#gridInput");
gridBtn.addEventListener("click",function(){
    if(gridBtn.checked == true){
        socket.emit("addGrid", true);
        drawGrid(800,400,"canvas");
        drawPoints();
    }
    else{
        ctx.clearRect(0,0,canvas.width , canvas.height);
        drawPoints();
        socket.emit("addGrid", false);
    }
})
