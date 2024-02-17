function get_mark(mark){
	if (mark===1){
		stars = "&#9733; &#9734; &#9734; &#9734; &#9734; &nbsp; &nbsp; &nbsp;";
	}
	else if (mark===2) {
		stars = "&#9733; &#9733; &#9734; &#9734; &#9734; &nbsp; &nbsp; &nbsp;";
	}
	else if (mark===3) {
		stars = "&#9733; &#9733; &#9733; &#9734; &#9734; &nbsp; &nbsp; &nbsp;";
	}
	else if (mark===4) {
		stars = "&#9733; &#9733; &#9733; &#9733; &#9734; &nbsp; &nbsp; &nbsp;";
	}
	else if (mark===5) {
		stars = "&#9733; &#9733; &#9733; &#9733; &#9733; &nbsp; &nbsp; &nbsp;";
	}
	return stars;
}

function on() 
{
	
var chosen_skill = event.target.id
	
if (chosen_skill === "HTML"){
	chosen_skill = 
	'<b style="font-size:20px;">' + chosen_skill + '</b> <br>'
	+ '<br>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Poziom: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" >' + get_mark(2) + '</span> <br>'
	+ '<div style="clear:both;"> </div>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Doświadczenie: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > ' + get_mark(1) + ' </span> <br>'
	+ '<div style="clear:both;"> <br> </div>'
	+ 'HTML znam w zakresie podstawowym do średniego. W ramach HTML dokonałem kilku projektów prowadzonych na własny użytek.'
	+ '<br><br>'
	+ '<i style="font-size:14px;">Po kliknięciu w przycisk zostanie uruchomiona strona z projektami używającymi <b>'+ chosen_skill + '</b></i>';
		}

else if (chosen_skill === "CSS"){
	chosen_skill = 
	'<b style="font-size:20px;">' + chosen_skill + '</b> <br>'
	+ '<br>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Poziom: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" >' + get_mark(2) + '</span> <br>'
	+ '<div style="clear:both;"> </div>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Doświadczenie: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > ' + get_mark(1) + ' </span> <br>'
	+ '<div style="clear:both;"> <br> </div>'
	+ 'CSS znam w zakresie podstawowym do średniego. W ramach CSS dokonałem kilku projektów prowadzonych na własny użytek.'
	+ '<br><br>'
	+ '<i style="font-size:14px;">Po kliknięciu w przycisk zostanie uruchomiona strona z projektami używającymi <b>'+ chosen_skill + '</b></i>';
		}

else if (chosen_skill === "Python"){
	chosen_skill = 
	'<b style="font-size:20px;">' + chosen_skill + '</b> <br>'
	+ '<br>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Poziom: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" >' + get_mark(3) + '</span> <br>'
	+ '<div style="clear:both;"> </div>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Doświadczenie: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > ' + get_mark(3) + ' </span> <br>'
	+ '<div style="clear:both;"> <br> </div>'
	+ 'Pythona znam w zakresie średniozaawansowanym. W ramach Pythona dokonałem kilku projektów prowadzonych na własny użytek oraz wewnętrzne potrzeby w miejscu zatrudnienia.'
	+ '<br><br>'
	+ '<i style="font-size:14px;">Po kliknięciu w przycisk zostanie uruchomiona strona z projektami używającymi <b>'+ chosen_skill + '</b></i>';
		}
else if (chosen_skill === "SQL"){
	chosen_skill = 
	'<b style="font-size:20px;">' + chosen_skill + '</b> <br>'
	+ '<br>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Poziom: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" >' + get_mark(3) + '</span> <br>'
	+ '<div style="clear:both;"> </div>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Doświadczenie: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > ' + get_mark(4) + ' </span> <br>'
	+ '<div style="clear:both;"> <br> </div>'
	+ 'SQL znam w zakresie średniozaawansowanym. SQL wykorzystuję systematycznie do obsługi wewnętrznych procesów w miejscu zatrudnienia.'
	+ '<br><br>'
	+ '<i style="font-size:14px;">Po kliknięciu w przycisk zostanie uruchomiona strona z projektami używającymi <b>'+ chosen_skill + '</b></i>';
		}
else if (chosen_skill === "JavaScript"){
	chosen_skill = 
	'<b style="font-size:20px;">' + chosen_skill + '</b> <br>'
	+ '<br>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Poziom: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" >' + get_mark(2) + '</span> <br>'
	+ '<div style="clear:both;"> </div>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Doświadczenie: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > ' + get_mark(1) + ' </span> <br>'
	+ '<div style="clear:both;"> <br> </div>'
	+ 'JavaScript znam w zakresie podstawowym do średniego. W ramach JavaScript dokonałem kilku projektów prowadzonych na własny użytek.'
	+ '<br><br>'
	+ '<i style="font-size:14px;">Po kliknięciu w przycisk zostanie uruchomiona strona z projektami używającymi <b>'+ chosen_skill + '</b></i>';
		}
else if (chosen_skill === "Django"){
	chosen_skill = 
	'<b style="font-size:20px;">' + chosen_skill + '</b> <br>'
	+ '<br>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Poziom: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" >' + get_mark(2) + '</span> <br>'
	+ '<div style="clear:both;"> </div>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Doświadczenie: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > ' + get_mark(1) + ' </span> <br>'
	+ '<div style="clear:both;"> <br> </div>'
	+ 'Django znam w zakresie podstawowym do średniego. W ramach Django dokonałem kilku projektów prowadzonych na własny użytek.'
	+ '<br><br>'
	+ '<i style="font-size:14px;">Po kliknięciu w przycisk zostanie uruchomiona strona z projektami używającymi <b>'+ chosen_skill + '</b></i>';
		}	
else if (chosen_skill === "VBA"){
	chosen_skill = 
	'<b style="font-size:20px;">' + chosen_skill + '</b> <br>'
	+ '<br>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Poziom: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" >' + get_mark(2) + '</span> <br>'
	+ '<div style="clear:both;"> </div>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Doświadczenie: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > ' + get_mark(1) + ' </span> <br>'
	+ '<div style="clear:both;"> <br> </div>'
	+ 'VBA znam w zakresie podstawowym do średniego. W ramach VBA dokonałem kilku projektów prowadzonych na własny użytek oraz do obsługi procesów wewnętrznych w miejscu zatrudnienia.'
	+ '<br><br>'
	+ '<i style="font-size:14px;">Po kliknięciu w przycisk zostanie uruchomiona strona z projektami używającymi <b>'+ chosen_skill + '</b></i>';
		}
else if (chosen_skill === "MachineLearning"){
	chosen_skill = 
	'<b style="font-size:20px;">' + chosen_skill + '</b> <br>'
	+ '<br>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Poziom: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" >' + get_mark(2) + '</span> <br>'
	+ '<div style="clear:both;"> </div>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Doświadczenie: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > ' + get_mark(1) + ' </span> <br>'
	+ '<div style="clear:both;"> <br> </div>'
	+ 'ML znam w zakresie podstawowym do średniego. W ramach ML dokonałem kilku projektów prowadzonych na własny użytek.'
	+ '<br><br>'
	+ '<i style="font-size:14px;">Po kliknięciu w przycisk zostanie uruchomiona strona z projektami używającymi <b>'+ chosen_skill + '</b></i>';
		}
document.getElementById("bottom_content_coll").style.display="none";
document.getElementById("bottom_content_coll_add").style.display="block";
document.getElementById("detail_msg").innerHTML = chosen_skill;
	}
	
function off() 
{
document.getElementById("bottom_content_coll").style.display="block";
document.getElementById("bottom_content_coll_add").style.display="none";
}

