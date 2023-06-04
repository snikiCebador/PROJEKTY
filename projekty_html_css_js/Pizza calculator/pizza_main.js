function calc() {
	
pizza_qty = document.getElementById("pizza_qty").value;
pizza_g = document.getElementById("pizza_g").value;
hydration = document.getElementById("hydration").value;

	
if (pizza_qty  <= 0 || pizza_g  <= 0 || hydration  <= 0) {
	window.alert("Wartość nie może być zerowa, ujemna lub pusta")
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
	"Capricosa: sos pomidorowy, szynka, mozzarella, pieczarki"
	];
	
	pizza_no = pizza_day.length;
	
	const random = Math.floor(Math.random() * pizza_no);
	
	document.getElementById("pizza_of_day").innerHTML= '<p style="font-size:25px;"> PIZZA DNIA </p>' + pizza_day[random];
	
}