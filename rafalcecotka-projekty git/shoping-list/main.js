// mechanizm dodawania elementów do listy
// w jQ wybieramy selektorem klase przycisku i podpinamy on , na klik , klik powoduje wywołanie fukcji anonimowej
// funkcja tworzy zmienną obiektu kontenera na itemy
// do zmiennej pobiera aktualną wartość wyraną z selektora inputa
// dodaje do kontenera div todo z nazwąz inputa


// obsługa zachowania dodawania rekordu z przycisku
$('.btn_add').on('click', function() {
    let curr_add = $('.int_add').val(); // co teraz chcemy dodać
    // dla każdego elem. w liście sprawdzamy czy jakichś elem. jest taki jak ten który zamierzamy dodać
    $('.item_container').children().each(function(){
        let cur_item = $(this).text().slice(0, -1); // usuwam X z przycisku tj. zawsze ostatni znak w stringu
        if (cur_item==curr_add){
            $('.error_txt').text("Podana wartość już istnieje w liście"); // jeżeli taki sam do błąd dublowania wartości
        }
    })
    // jeżeli nie ma dubla
    $items = $('.item_container');
    var item = $('.int_add').val();
    var error_text = $('.error_txt').text();
    if (item.length > 0 & error_text.length < 1) { // dodajemy tylko niepuste rekordy
        $('.int_add').val(''); // sztuczka na czyszczenie formularza text
        $items.append('<div class = "todo">' + item + '<button class = "remove_item">X</button></div>').children(':last').hide().fadeIn(600); // po dodaniu biorę ostatni element tj. ostatnie dziecko obiektu kontener, ukrywam i płynnie ujawniam
        // w elemencie wstawiam przycisk X do usuwania całego rekordu
    }
    
}
);

// tutaj następuje delegacja zadań żeby odświeżyć listę elementów po dodaniu z kontenera i wybrać konkretną klasę
$('.item_container').on('click', '.todo', function() {
    $(this).toggleClass('todo done');
});


$('.item_container').on('click', '.done', function() {
    $(this).toggleClass('done todo');
});


// czyści listę
$('.btn_clear_items').on('click', function() {
    $('.item_container').empty();
})


$('.item_container').bind("DOMSubtreeModified", function() {
    // Construct URLSearchParams object instance from current URL querystring.
    var queryParams = new URLSearchParams(window.location.search);
    var list_param = '';
    var items = $('.item_container').children('div').length
    counter = 0
    $('.item_container').children('div').each(function () { 
        counter = counter + 1
        //tutaj też usuwam techniczny X z buttona aby w parametrze nie było w nazwie tekstu z przycisku
        if (counter == 1 & items !== 1) {
            list_param = list_param + '{"' + $(this).text().toString().slice(0, -1) + '":"' + $(this).attr("class").toString()+'",';
        }
        
        else if (counter == items & items !== 1) {
            list_param = list_param + '"' + $(this).text().toString().slice(0, -1) + '":"' + $(this).attr("class").toString()+'"}';
        }
    
        else if (items == 1) {
            list_param = list_param + '{"' + $(this).text().toString().slice(0, -1) + '":"' + $(this).attr("class").toString()+'"}';
        }
    
        
        else {
            list_param = list_param + '"' + $(this).text().toString().slice(0, -1) + '":"' + $(this).attr("class").toString()+'",';
        }
        
    })
    
    queryParams.set("data", list_param);
     
    // Replace current querystring with the new one.
    history.replaceState(null, null, "?"+queryParams.toString());
    });

    $( document ).ready(function() {
    var params = new URLSearchParams(window.location.search);
	var param = params.get('data');
    var json_data  = JSON.parse(param);

    for (let i = 0 ; i < Object.keys(json_data).length ; i++) {
        $('.item_container').append('<div class ="'+ Object.values(json_data)[i].toString() + '">' + Object.keys(json_data)[i].toString() + '<button class = "remove_item">X</button></div>');

    }
    });


    $('.item_container').on("click", function() {
        // Construct URLSearchParams object instance from current URL querystring.
        var queryParams = new URLSearchParams(window.location.search);
        var list_param = '';
        var items = $('.item_container').children().length
        counter = 0
        $('.item_container').children().each(function () { 

            counter = counter + 1
            // obsługa X cd.
            if (counter == 1 & items !== 1) {
                list_param = list_param + '{"' + $(this).text().toString().slice(0, -1) + '":"' + $(this).attr("class").toString()+'",';
            }
            
            else if (counter == items & items !== 1) {
                list_param = list_param + '"' + $(this).text().toString().slice(0, -1) + '":"' + $(this).attr("class").toString()+'"}';
            }
        
            else if (items == 1) {
                list_param = list_param + '{"' + $(this).text().toString().slice(0, -1) + '":"' + $(this).attr("class").toString()+'"}';
            }
        
            
            else {
                list_param = list_param + '"' + $(this).text().toString().slice(0, -1) + '":"' + $(this).attr("class").toString()+'",';
            }
            

        })
        

        queryParams.set("data", list_param);
         
        // Replace current querystring with the new one.
        history.replaceState(null, null, "?"+queryParams.toString());
        });


        $('.btn_copy_URL').on('click', function () {
            let url = location.href;
            $('#url_to_copy').val(url);
        
            let copyText = document.getElementById("url_to_copy");
        
            // Select the text field
            copyText.select();
            copyText.setSelectionRange(0, 99999); // For mobile devices
        
            try {
                // Try using Clipboard API
                navigator.clipboard.writeText(copyText.value);
                alert("Skopiowano URL tej listy");
            } catch (err) {
                // Fallback for browsers that do not support Clipboard API
                document.execCommand("copy");
                alert("Skopiowano URL tej listy");
            }
        });



// złączona poprawiona funkcja , obsługouje dodawanie przez ENTER i komunikaty błędów po keyup niedozwolone znaki i duplikaty

        $('.int_add').on('keyup', function(e) {
            $('.error_txt').text("");
            var typed_till = $('.int_add').val(); // wartość wprowadzona do tej pory
            //pressed_k = e.key // kod przycisku wciśniętego
            if (typed_till.indexOf("{")>-1 | typed_till.indexOf("}")>-1 | typed_till.indexOf(":")>-1 | typed_till.indexOf('"')>-1 | typed_till.indexOf("'")>-1) { // dodajemy tylko niepuste rekordy i tylko jak wciskamy enter czyli kod 13
                
                $('.error_txt').text("Nazwa zawiera niedozwolony znak ({, }, :, ', "+' ")');
            }
            else if ($('.error_txt').text() == "Podana wartość już istnieje w liście") {
                $('.error_txt').text("Podana wartość już istnieje w liście");
            }
            else {
                $('.error_txt').text("");
            }
            pressed_k = e.which // kod przycisku wciśniętego
            $items = $('.item_container');
            let curr_add = $('.int_add').val();
            $('.item_container').children().each(function(){
                let cur_item = $(this).text().slice(0, -1); // obsługa X 
                if (cur_item==curr_add){
                    $('.error_txt').text("Podana wartość już istnieje w liście");
                }
            })
            var item = $('.int_add').val();
            var error_text = $('.error_txt').text();
            
            if (item.length > 0 & pressed_k == 13 & error_text.length < 1 ) { // dodajemy tylko niepuste rekordy i tylko jak wciskamy enter czyli kod 13
        
                $('.int_add').val(''); // sztuczka na czyszczenie formularza text
                $items.append('<div class = "todo">' + item + '<button class = "remove_item">X</button></div>').children(':last').hide().fadeIn(600); // po dodaniu biorę ostatni element tj. ostatnie dziecko obiektu kontener, ukrywam i płynnie ujawniam
            }
            
        }
        );


        // w kontenerze na itemy jak kliknę button z X to usuwam rodzica czyli cały wiersz
        $('.item_container').on('click','.remove_item', function () {
            $(this).parent().remove();
        })