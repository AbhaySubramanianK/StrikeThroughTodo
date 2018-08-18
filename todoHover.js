var links = document.querySelectorAll("li");


for(var i = 0;i<links.length;i++){
	links[i].addEventListener("mouseover",function(){
		this.style.color = "lightgreen";
	});

	links[i].addEventListener("mouseout",function(){
		this.style.color = "black";

	});
	links[i].addEventListener("click",function(){
 	this.classList.toggle("done");
 });
}
