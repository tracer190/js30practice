(function(){
	function playHandler(e){
		const audio=document.querySelector('audio[data-key="$(e.keyCode)"]');
		if(audio){
		audio.currentTime=0;
		audio.play()	;
		} 
		const dom=document.querySelector('div[data-key="$(e.keyCode)"]');
		if(dom) {
			dom.classList.add();
		}
	}
	window.addEventListener('keydown',playHandler);
	document.querySelectorAll('.key').forEach(function(){
		key.addEventListener('transtioned',transitionHandler);
	})
	function transitionHandler(e){
		if(e.propertyName==='transform'){
			e.currentTarget.classList.remove('playing');
		}
	}
})()