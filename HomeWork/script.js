document.addEventListener("DOMContentLoaded", function(){
	//alert(projects());
	document.getElementById('projects').innerHTML=projects();
});

	data = [
	{
		"img" : "https://avatars.mds.yandex.net/i?id=dbb81b04e1d250be6980126499a09afd3793068d-4554236-images-thumbs&n=13",
		"name" : "Задание 1",
		"description" : "Создать консольное приложение (Java ООП), удовлетворяющее следующим требованиям: использовать классы, наследование, полиморфизм, инкапсуляция, абстракцию.",
		"url" : "https://github.com/olya1071111/NewYearGift"
	}
	,
	{
		"img" : "https://avatars.mds.yandex.net/i?id=4081b6c60d64ead33ffd881e93a5f508145463f3-10780278-images-thumbs&n=13",
		"name" : "Задание 2",
		"description" : "Создать сайт-визитку используя связку HTML + CSS + JS",
		"url" : "https://github.com/olya1071111/Website"
	}
	,
	{
		"img" : "https://avatars.mds.yandex.net/i?id=38385f60d21ad0e4f9e831c9d6746400ef39b690-9106782-images-thumbs&n=13",
		"name" : "Задание 3",
		"description" : "Создать",
		"url" : "https://github.com/olya1071111/Servlets"
	}
	,
	
	]


	function projects(){
		var res = "";
	
		for(var i in data){
			res += `	
				<div class="project-card">
					<div style="background-image: url('${data[i]["img"]}')" class="project-card-header">
						<h3>${data[i]["name"]}</h3>
					</div>
					<div class="project-card-body">
						<p>${data[i]["description"]}</p>
					</div>
					<div class="project-card-footer">
						<a class="btn" href="${data[i]["url"]}">Подробнее</a>
					</div>			
				</div>
			`;
		}
		return res;
	}
