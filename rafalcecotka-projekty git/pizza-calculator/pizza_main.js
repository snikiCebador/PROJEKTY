function calc() {
	
pizza_qty = document.getElementById("pizza_qty").value;
pizza_g = document.getElementById("pizza_g").value;
hydration = document.getElementById("hydration").value;

portion_err_obj = document.getElementById("portion_err");
weight_err_obj = document.getElementById("weight_err");
hydration_err_obj = document.getElementById("hydration_err");

portion_err_obj.innerHTML = "";
weight_err_obj.innerHTML = "";
hydration_err_obj.innerHTML = "";

portion_err_obj.style.opacity = "0";
weight_err_obj.style.opacity = "0";
hydration_err_obj.style.opacity = "0";

portion_err_msg = "Liczba porcji musi być większa od 0!"
weight_err_msg = "Waga być większa od 0!"
hydration_err_msg = " Hydracja musi być w przedziale 0-100%!"

if (pizza_qty  <= 0) {
	//window.alert("Wartość nie może być zerowa, ujemna lub pusta")
	portion_err_obj.innerHTML = portion_err_msg;
	portion_err_obj.style.opacity = "1";
    //throw "exit";
}
if (pizza_g  <= 0) {
	weight_err_obj.innerHTML = weight_err_msg;
	weight_err_obj.style.opacity = "1";
    //throw "exit";
}

if (hydration  <= 0 || hydration > 100) {
	hydration_err_obj.innerHTML = hydration_err_msg;
	hydration_err_obj.style.opacity = "1";
    //throw "exit";
}

if ((pizza_qty  <= 0)||(pizza_g  <= 0)||(hydration  <= 0 || hydration > 100)) {
	throw "exit";
}
	



hydration_pr = hydration / 100

dough_g = pizza_qty * pizza_g

water_flour = dough_g * 0.962264

water = Math.round(((water_flour * hydration_pr) / (hydration_pr + 1)))

flour = Math.round(water_flour / (hydration_pr + 1))

oil = Math.round((dough_g * 0.018867))

yeast = Math.round((dough_g * 0.0018868)*100)/100

salt = Math.round(dough_g * 0.0150943)

sugar = Math.round((dough_g * 0.0018868)*100)/100

water_flour = water_flour

water_poolish = Math.round(water * 0.30000)

flour_poolish = Math.round(flour * 0.19355)

oil_poolish = 0

yeast_poolish = yeast

salt_poolish = 0

sugar_poolish = sugar




water_base = Math.round(water - water_poolish)

flour_base = Math.round(flour - flour_poolish)

oil_base = Math.round(oil - oil_poolish)

yeast_base = Math.round(yeast - yeast_poolish)

salt_base = Math.round(salt - salt_poolish)

sugar_base = Math.round(sugar - sugar_poolish)


if (pizza_qty  == "" || pizza_g  == "" || hydration  == "") {
	
    throw "exit";
	
}


pizza_of_day()
document.getElementById("recipe_steps").innerHTML ='<p>PRZEPIS 1 / 4</p>Składniki zaczynu dokładnie ze sobą wymieszać i zostawić w temperaturze pokojowej na 1-2 h. Następnie wstawić zaczyn do lodówki na 16-24h.'
document.getElementById("recipe_desc").style.visibility = "visible";

document.getElementById("pizza_of_day").style.visibility = "visible";


document.getElementById("water_base").innerHTML = water_base;

document.getElementById("water_poolish").innerHTML = water_poolish;

document.getElementById("flour_base").innerHTML = flour_base;

document.getElementById("flour_poolish").innerHTML = flour_poolish;

document.getElementById("oil_base").innerHTML = oil_base;

document.getElementById("oil_poolish").innerHTML = oil_poolish;

document.getElementById("yeast_base").innerHTML = yeast_base;

document.getElementById("yeast_poolish").innerHTML = yeast_poolish;

document.getElementById("sugar_base").innerHTML = sugar_base;

document.getElementById("sugar_poolish").innerHTML = sugar_poolish;

document.getElementById("salt_base").innerHTML = salt_base;

document.getElementById("salt_poolish").innerHTML = salt_poolish;




}

function pizza_g_info_on() {
	document.getElementById("info_detail_param_helper").style.visibility = "visible";
	document.getElementById("info_detail_param_helper").innerHTML = '<p>WAGA PORCJI</p> Rozmiar pizzy wg wagi:<br><br> &bull; 250g - średnica ok. 25cm <br> &bull; 350g - średnica ok. 32cm <br> &bull; 450g - średnica ok. 40cm <br><br> *rozmiar ciasta dla danej wagi porcji zależy od wielkości krawędzi<br> 265g to idealna waga na pizzę 26 cm z dość dużymi krawędziami';
}

function pizza_g_info_off() {
	document.getElementById("info_detail_param_helper").style.visibility = "hidden";
}

function pizza_h_info_on() {
	document.getElementById("info_detail_param_helper").style.visibility = "visible";
	document.getElementById("info_detail_param_helper").innerHTML = "<p>HYDRACJA</p> <br> Poziom hydracji wpływa na smak i strukturę ciasta.<br> Im wyższy poziom tym ciasto jest lżejsze, bardziej delikatne oraz ma więcje powietrza. <br> Poziom powinien wynosić 50-80% (w domowych warunkach 65% jest optymalne)";
}

function pizza_h_info_off() {
	document.getElementById("info_detail_param_helper").style.visibility = "hidden";
}

function pizza_p_info_on() {
	document.getElementById("info_detail_param_helper").style.visibility = "visible";
	document.getElementById("info_detail_param_helper").innerHTML = "<p>LICZBA PORCJI</p> <br> Wprowadź liczbę porcji, ale pamiętaj jedna to stanowczo za mało :)";
}

function pizza_p_info_off() {
	document.getElementById("info_detail_param_helper").style.visibility = "hidden";
}



function pizza_of_day() {
	
	const pizza_day = ["Margarita: sos pomidorowy, mozzarella, bazylia",
	"Nduja: sos pomidorowy, nduja, mozzarella, oliwki",
	"Peperoni: sos pomidorowy, peperoni, mozzarella, oliwki",
	"Capricosa: sos pomidorowy, szynka, mozzarella, pieczarki",
	"Hawajska: sos pomidorowy, ananas, mozzarella",
	"Diavola: sos pomidorowy, ostre papryczki, peperoni, mozzarella"
	];
	
	pizza_no = pizza_day.length;
	
	const random = Math.floor(Math.random() * pizza_no);
	
	document.getElementById("pizza_of_day").innerHTML= '<p style="font-size:25px;"> PIZZA DNIA </p>' + pizza_day[random];
	
}
// te funkcje można zastąpić 1 funkcja może brać id targetu (prev lub next) następnie sprawdza tekst recipe_steps i określa jego miejsce w array indexOf() jeżeli target to prev
// nowy html to array[indefOf -1] inaczej +1 , jeżeli prev i index to 0 nic nie robimy i jeżeli next i index to array.lenght też nic nie robimy
// tak uzyskujemy 1 fukncję i optymalniejsze rozwiązanie

function prev_step() {
	list_of_steps = ['<p>PRZEPIS 1 / 4</p>Składniki zaczynu dokładnie ze sobą wymieszać i zostawić w temperaturze pokojowej na 1-2 h. Następnie wstawić zaczyn do lodówki na 16-24h.',
	'<p>PRZEPIS 2 / 4</p>Wyrośnięty zaczyn przełożyć do miski. Wlać tam odmierzoną wodę i wymieszać, dodać sól i rozpuścić, dodać oliwę. Następnie dodać mąkę i mieszać. Ciasto wyrabiać ok. 10-15 min po tym czasie odstawić na 15 min, aby odpoczęło. Na koniec z ciasta uformować dużą kulę. Kulę włożyć do szczelnie zamkniętego naczynia i umieścić w lodówce na 1-4 dni.',
	'<p>PRZEPIS 3 / 4</p>Przefermentowane ciasto wyjąć z lodówki, pociąć na porcję oraz uformować kulki. Kulki włożyć do lodówki na 8-24h.',
	'<p>PRZEPIS 4 / 4</p>Wyjąć kulki z lodówki do temperatury pokojowej 2-4h przez pieczeniem. Z kulek uformować pizzę, dodać ulubione dodatki i piec w maksymalnej temperaturze (najlepiej powyżej 250st.) do oczekiwanego efektu.']

	cur_text = document.getElementById("recipe_steps").innerHTML//.trim().replace('\t','').replace('/\t/g', ''); //= list_of_steps[1];
	//window.alert(cur_text)
	if (cur_text == list_of_steps[3]) {
		document.getElementById("recipe_steps").innerHTML = list_of_steps[2];
	}
	else if (cur_text == list_of_steps[2]) {
		document.getElementById("recipe_steps").innerHTML = list_of_steps[1];
	}
	else if (cur_text == list_of_steps[1]) {
		document.getElementById("recipe_steps").innerHTML = list_of_steps[0];
	}

}

function next_step() {

	list_of_steps = ['<p>PRZEPIS 1 / 4</p>Składniki zaczynu dokładnie ze sobą wymieszać i zostawić w temperaturze pokojowej na 1-2 h. Następnie wstawić zaczyn do lodówki na 16-24h.',
	'<p>PRZEPIS 2 / 4</p>Wyrośnięty zaczyn przełożyć do miski. Wlać tam odmierzoną wodę i wymieszać, dodać sól i rozpuścić, dodać oliwę. Następnie dodać mąkę i mieszać. Ciasto wyrabiać ok. 10-15 min po tym czasie odstawić na 15 min, aby odpoczęło. Na koniec z ciasta uformować dużą kulę. Kulę włożyć do szczelnie zamkniętego naczynia i umieścić w lodówce na 1-4 dni.',
	'<p>PRZEPIS 3 / 4</p>Przefermentowane ciasto wyjąć z lodówki, pociąć na porcję oraz uformować kulki. Kulki włożyć do lodówki na 8-24h.',
	'<p>PRZEPIS 4 / 4</p>Wyjąć kulki z lodówki do temperatury pokojowej 2-4h przez pieczeniem. Z kulek uformować pizzę, dodać ulubione dodatki i piec w maksymalnej temperaturze (najlepiej powyżej 250st.) do oczekiwanego efektu.']

	cur_text = document.getElementById("recipe_steps").innerHTML//.trim().replace('\t','').replace('/\t/g', '');//= list_of_steps[1];
	//window.alert(cur_text_)
	//window.alert(list_of_steps_[0])
	if (cur_text == list_of_steps[0]) {
		document.getElementById("recipe_steps").innerHTML = list_of_steps[1];
	}
	else if (cur_text == list_of_steps[1]) {
		document.getElementById("recipe_steps").innerHTML = list_of_steps[2];
	}
	else if (cur_text == list_of_steps[2]) {
		document.getElementById("recipe_steps").innerHTML = list_of_steps[3];
	}

}