let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  $("#enviarCorreo").first().click (function(){
      alert("El correo fue enviado correctamente...")
  })


  $("u").on("dblclick",function(){
    $(this).css({"color": "#FF0040"
});
});

  
$( ".card-title" ).click(function() {
    $( ".card-text" ).toggle(  function() {
      // Animation complete.
    });
  });


  $(document).ready(function() {
    $('#recipeCarousel').carousel({
        interval: 5000
    })
});