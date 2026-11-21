const contactForm =document.getElementById("contactForm");
const whatsappNumber = "2349077083859";
contactForm.addEventListener("submit", function(event){
    event.preventDefault();
const name = document.getElementById("customerName").value.trim();
const email = document.getElementById("customerEmail").value.trim();
const message = document.getElementById("customerMessage").value.trim();
const whatsappMessage ="Hello Essie Brand! I would like to make an enquiry.\n\n" +
"Name: " + name + "\n" +
"Email: " + email + "\n" +
"Message: " + message;
const whatsappURL =
"https://wa.me/" + whatsappNumber +
"?text=" + encodeURIComponent(whatsappMessage);
window.open(whatsappURL, "_blank");
});
document.getElementById('menuToggle').addEventListener('click',function(){
document.getElementById('navLinks').classList.toggle('active');
});
    

