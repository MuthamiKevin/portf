/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  let menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}





/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

// /* -- PROJECT BOX -- */
// sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}




window.addEventListener('scroll', scrollActive)
document.getElementById('button').addEventListener('click', function() {
  var a = document.createElement('a');
  a.href = 'C:\Users\mutha\OneDrive\Documents\GitHub\MuthamiKN\Portfolio\Resume.docx'; 
  a.download = 'resume.docx'; 
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "muthamikevin80@gmail.com",
    Password : "39899677#Kn,",
    To : 'muthamikevin80@gmail.com',
    From : document.getElementById("email").value,
    Subject : "Services Inquiry",
    Body : "Name:" + document.getElementById("first").value
          +"<br> Email:"  + document.getElementById("email").value
          +"<br> Phone NO:"  + document.getElementById("tel").value
          +"<br> Message:"  + document.getElementById("message").value
}).then(
  message => alert("Message sent successfully")
);
}
function sendEmail() {
  var formData = new FormData(document.getElementById("emailForm"));
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "send_email.php"); // Replace "send_email.php" with your server-side script
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // Handle response from server (e.g., show success message)
          alert(xhr.responseText);
      }
  };
  xhr.send(formData);
}