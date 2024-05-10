var countries = [
    "Australia",
    "Brazil",
    "Canada",
    "China",
    "Egypt",
    "France",
    "Germany",
    "Greece",
    "India",
    "Indonesia",
    "Italy",
    "Japan",
    "Mexico",
    "Netherlands",
    "New Zealand",
    "Norway",
    "Pakistan",
    "Russia",
    "Saudi Arabia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Thailand",
    "Turkiye",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Vietnam",
    "Argentina",
    "Colombia",
    "Peru",
    "Venezuela",
    "Chile"
    ];     

  $(document).ready(function () {
    $("#birthday").datepicker();
  });  

  $(document).ready(function() {
    $("#autocomplete").autocomplete({
      source: countries,
      open: function(event, ui) {
        var autocompleteMenu = $(this).autocomplete("relative");
        autocompleteMenu.css("position", "relative");
        autocompleteMenu.position({
          my: "left top",
          at: "left bottom",
          of: $(this)
        });
      }
    });
  });
  