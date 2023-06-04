function on() 
{
	
var chosen_skill = event.target.id
	
if (chosen_skill === "HTML"){
	chosen_skill = 
	'<b style="font-size:20px;"> HTML </b> <br>'
	+ '<br>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Poziom: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > &#9733; &#9733; &#9734; &#9734; &#9734; &nbsp; &nbsp; &nbsp; </span> <br>'
	+ '<div style="clear:both;"> </div>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Doświadczenie: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > &#9733; &#9734; &#9734; &#9734; &#9734; &nbsp; &nbsp; &nbsp; </span> <br>'
	+ '<div style="clear:both;"> <br> </div>'
	+ '<i>Po kliknięciu będzie kiedyś jakaś podstrona z projektami w typie artykułu</i>';
		}

else if (chosen_skill === "CSS"){
	chosen_skill = 
	'<b style="font-size:20px;"> CSS </b> <br>'
	+ '<br>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Poziom: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > &#9733; &#9733; &#9734; &#9734; &#9734; &nbsp; &nbsp; &nbsp; </span> <br>'
	+ '<div style="clear:both;"> </div>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Doświadczenie: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > &#9733; &#9734; &#9734; &#9734; &#9734; &nbsp; &nbsp; &nbsp; </span> <br>'
	+ '<div style="clear:both;"> <br> </div>'
	+ '<i>Po kliknięciu będzie kiedyś jakaś podstrona z projektami w typie artykułu</i>';
		}

else if (chosen_skill === "Python"){
	chosen_skill = 
	'<b style="font-size:20px;"> Python </b> <br>'
	+ '<br>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Poziom: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > &#9733; &#9733; &#9733; &#9733; &#9734; &nbsp; &nbsp; &nbsp; </span> <br>'
	+ '<div style="clear:both;"> </div>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Doświadczenie: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > &#9733; &#9733; &#9734; &#9734; &#9734; &nbsp; &nbsp; &nbsp; </span> <br>'
	+ '<div style="clear:both;"> <br> </div>'
	+ '<i>Po kliknięciu będzie kiedyś jakaś podstrona z projektami w typie artykułu</i>';
		}
else if (chosen_skill === "SQL"){
	chosen_skill = 
	'<b style="font-size:20px;"> SQL </b> <br>'
	+ '<br>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Poziom: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > &#9733; &#9733; &#9733; &#9733; &#9734; &nbsp; &nbsp; &nbsp; </span> <br>'
	+ '<div style="clear:both;"> </div>'
	+ '<span style="font-size:16px;float:left;line-height:22px;"> <b>Doświadczenie: </b> </span> 	<span style="font-size:16px;float:right;line-height:22px;" > &#9733; &#9733; &#9733; &#9733; &#9734; &nbsp; &nbsp; &nbsp; </span> <br>'
	+ '<div style="clear:both;"> <br> </div>'
	+ '<i>Po kliknięciu będzie kiedyś jakaś podstrona z projektami w typie artykułu</i>';
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

