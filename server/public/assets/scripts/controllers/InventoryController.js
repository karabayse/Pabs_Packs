$(document).ready(function() {
  function a() {
    $.ajax({
      method: "GET",
      url: "/treats"
    }).done(function(a) {
      $("#treat-display").empty(), console.log("GET /treats returned ", a), $.each(a, function(a, b) {
        f(b)
      })
    })
  }

  function b(a) {
    $.ajax({
      method: "GET",
      url: "/treats?q=" + a
    }).done(function(b) {
      console.log("GET /treats?q=", a, "returned ", b), $("#treat-display").empty(), $.each(b, function(a, b) {
        f(b)
      })
    })
  }

  function c(b) {
    $.ajax({
      method: "POST",
      url: "/treats",
      data: b
    }).done(function() {
      $("#add-treat :input").not(":button").val(""), console.log("POST /treats sent ", b), a()
    })
  }

  function d(b, c) {
    $.ajax({
      method: "PUT",
      url: "/treats/" + b,
      data: c
    }).done(function() {
      console.log("PUT /treats/", b), g(), a()
    })
  }

  function e(b) {
    $.ajax({
      method: "DELETE",
      url: "/treats/" + b
    }).done(function() {
      console.log("DELETE /treats/", b), g(), a()
    })
  }

  function f(a) {
    var b = $("#treat-display"),
      c = b.children().children().length;
    c % 2 === 0 && b.append('<div class="treat row"></div>');
    var d = $('<div class="six columns individual-treat"><div class="image-wrap"><img src="' + a.pic + '" class="u-max-full-width" /><div class="toggle row"><div class="six columns"><button class="edit u-full-width">Edit</button></div><div class="six columns"><button class="delete u-full-width">Delete</button></div></div></div><h3>' + a.name + "</h3><p>" + a.description + "</p></div>");
    d.data("id", a.id), $(".treat.row:last-of-type").append(d)
  }

  function g() {
    "View" == $("#modeToggle").text() ? $("#modeToggle").text("Edit") : $("#modeToggle").text("View"), $(".toggle").toggle()
  }

  function h(a) {
    $("#modal").show(), $("#treat-name").val(a.name), $("#treat-description").val(a.description), $("#treat-url").val(a.pic), $("#modal").data("id", a.id)
  }
  a(), $("#searchButton").on("click", function(a) {
    a.preventDefault();
    var c = $("#search").val();
    b(c)
  }), $("#add-treat").on("submit", function(a) {
    a.preventDefault();
    var b = $(this).serialize();
    console.log("Attempting to POST treat::", b), c(b)
  }), $("#modeToggle").on("click", function(a) {
    a.preventDefault(), g()
  }), $("#treat-display").on("click", ".edit", function() {
    var a = $(this).closest(".individual-treat"),
      b = {
        id: a.data("id"),
        name: $.trim(a.find("h3").text()),
        description: $.trim(a.find("p").text()),
        pic: a.find("img").attr("src")
      };
    h(b)
  }), $("#treat-display").on("click", ".delete", function(a) {
    var b = $(this).closest(".individual-treat");
    e(b.data("id"))
  }), $("#modal-save").on("click", function(a) {
    a.preventDefault(), $("#modal").hide();
    var b = $("#modal").data("id"),
      c = {
        name: $("#treat-name").val(),
        description: $("#treat-description").val(),
        pic: $("#treat-url").val()
      };
    d(b, c)
  }), $("#modal-cancel").on("click", function(a) {
    a.preventDefault(), $("#modal").hide()
  })
});
