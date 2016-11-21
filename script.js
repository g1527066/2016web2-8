onload = function(){
  // canvasエレメントを取得
  var c = document.getElementById('canvas');
  c.width = 500;
  c.height = 300;
	
var gl=canvas.getContext('webgl')||canvas.getContext('experimental-webgl');
	gl.clearColor(0.0,0.0,0.0,1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
};
