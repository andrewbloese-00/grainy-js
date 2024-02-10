
const pickOne = (items) => items[Math.floor(Math.random()*items.length)];

/**
 * @param {HTMLElement} rootElement
 */
function createNoisyCanvas(rootElement,opacity,xGranularity=2,yGranularity=3,colors=["#333","#fff","#000","#171717","#eee"]){
	console.log("rootElement", rootElement);
	const canvas = document.createElement("canvas");
	canvas.style.opacity = opacity;
	canvas.style.position = "absolute";
	canvas.style.left = "0"
	canvas.style.top = "0";

	canvas.classList.add("noisy-canvas");
	const ctx = canvas.getContext("2d");

	let xMax , yMax; 
	function sizeCanvas(){
		xMax = rootElement.getBoundingClientRect().width
		yMax = rootElement.getBoundingClientRect().height;
		console.log('xMax',xMax);
		console.log('yMax',yMax);
		canvas.width = xMax; 
		canvas.height = yMax;
	}
	sizeCanvas(); 
	window.addEventListener("resize",sizeCanvas);
	rootElement.appendChild(canvas);

	let running = true;
	function animate(){
		const w = ctx.canvas.width, h = ctx.canvas.height; 
		ctx.clearRect(0,0,w,h);
		for(let i = 0; i < w; i += xGranularity){
			for(let j = 0; j < h; j += yGranularity){
				if(Math.random() > 0.5){
					ctx.fillStyle = pickOne(colors)
					ctx.fillRect(i,j,xGranularity,yGranularity);
				}
			}
		}
		if(running){ 
			setTimeout(()=>{
				requestAnimationFrame(animate)
			},50)
		}
	}
	animate()
	

	function pause(){
		running = false; 
	}
	function play(){
		if(!running){
			running = true; 
			animate();
		}
	}
	function destroy(){
		pause(); 
		canvas.remove();
	}
	
	return { pause, play, destroy } 

}



