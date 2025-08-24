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



  const BOT_TOKEN = "8495802563:AAEkbbHEZ2xYSxTII5FeCvvwT60ulup55SE"; // Replace with your bot token
  const CHAT_ID = "5593690141"; // Replace with your friend's chat ID

  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    const name = form.querySelector('input[placeholder="NAME"]').value;
    const email = form.querySelector('input[placeholder="EMAIL"]').value;
    const phone = form.querySelector('input[placeholder="PHONE"]').value;
    const message = form.querySelector('input[placeholder="MESSAGE"]').value;

    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(text)}`)
      .then(res => res.json())
      .then(data => {
        if(data.ok){
          alert("Message sent to Telegram!");
          form.reset(); // Clear the form
        } else {
          alert("Failed to send message.");
          console.error(data);
        }
      })
      .catch(err => console.error(err));
  });
