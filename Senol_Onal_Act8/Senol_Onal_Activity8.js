var languages = [
  "ActionScript",
  "AppleScript",
  "ASP",
  "C",
  "C++",
  "C#",
  "Dart",
  "Go",
  "Haskell",
  "Java",
  "JavaScript",
  "Kotlin",
  "Lisp",
  "Perl",
  "PHP",
  "Python",
  "Ruby",
  "Rust",
  "Swift",
  "TypeScript"
  ];
$(document).ready(function () {
  $("#birthday").datepicker();
});


$(document).ready(function () {


  $("#language").autocomplete({ source: languages })
});
