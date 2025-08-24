var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  let svgs =document.querySelectorAll(".svg");
  svgs.forEach((val) =>{
    val.addEventListener("click", ()=>{
      console.log(val);
      val.classList.toggle("rotate-180")
      let spann =val.nextElementSibling;
      spann.classList.toggle("hidden")
    })
  })