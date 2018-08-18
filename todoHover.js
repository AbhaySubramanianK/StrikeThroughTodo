var links = document.querySelectorAll("li");


for(var i = 0;i<links.length;i++){
	links[i].addEventListener("mouseover",function(){
		this.classList.add("selected");
	});

	links[i].addEventListener("mouseout",function(){
		this.classList.remove("selected");

	});
	links[i].addEventListener("click",function(){
 	this.classList.toggle("done");
 });
}
