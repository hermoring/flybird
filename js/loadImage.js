// window.onload(){

	// imgUrl:object 以键值对形式存储需要加载的图像地址
	// fn:function  图片加载完毕的回调函数（监听每一个图片的onload函数，如果所有都触发了，则加载完毕）
	function loadImage(imgUrl,fn){


		var imgObj={};
		var tempImg;
		var loaded=0;
		var imgLength=0;

		
		for(var key in imgUrl){
			imgLength++;
			tempImg = new Image();
			tempImg.onload = function(){
				loaded++;
				if(loaded>=imgLength)
				fn(imgObj);
			}
			tempImg.src=imgUrl[key];
			imgObj[key]=tempImg;
		}
	}


// }