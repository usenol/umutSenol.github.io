
$(document).ready(function () {
    //when I clicked the card, information about of card will open left side
    $(".card").click(function (event) {
        event.preventDefault();
        var name = $(this).attr("id");
        //name of json file 
        var cardJson = $(this).attr("title").toLowerCase() + ".json";
        console.log(cardJson);
       
        $.getJSON(cardJson, function (data) {
            $.each(data.cards, function (index, card) {
                if (card.card.name == name) {
                    $("#about-section").empty();
                    var html = '<h2>' + card.card.title + '</h2>' +
                        '<h5>' + card.card.extra + '</h5><br><br>' +
                        '<p style="width: 600px; font-size:16px;" id="bigger">' + card.card.text + '</p>';
                    $("#about-section").css("margin-top", "70px");
                    $("#about-section").append(html);
                }
                else {
                    console.log("Error");
                }
            });
        })


    })

}); 
