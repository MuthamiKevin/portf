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
document.addEventListener('DOMContentLoaded', function() {
  var editor = grapesjs.init({
      container: '.container',
      // Set the height of the editor
      height: '100%',
      // Enable components panel
      panels: { 
          defaults: [
              {
                  id: 'panel-left',
                  el: '.panel-left',
                  // Enable components panel
                  resizable: { 
                      maxDim: 200, 
                      minDim: 100,
                      tc: 0, // Top handler
                      cl: 1, // Left handler
                      cr: 0, // Right handler
                      bc: 0, // Bottom handler
                      // Being a flex child we need to change `flex-basis` also
                      keyWidth: 'flex-basis',
                  }
              },
              {
                  id: 'basic-actions',
                  el: '.panel-right',
                  buttons: [
                      {
                          id: 'visibility',
                          active: true, // active by default
                          label: '<u>B</u>',
                          command: 'sw-visibility', // Built-in command
                          context: 'sw-visibility', // Better to use the same of the command
                          className: 'btn-vis', // Class for styling
                      },
                      // Other buttons
                  ],
              }
          ]
      },
      // Enable commands
      commands: {
          defaults: [
              {
                  id: 'grapes-undo',
                  run: function(editor, sender) {
                      sender.set('active', 0); // turn off the button
                      editor.UndoManager.undo(1); // Undo 1 action
                  },
                  stop: function(editor, sender) {
                      sender.set('active', 1); // turn on the button
                  },
              },
              // Other commands
          ],
      },
      // Enable asset manager
      assetManager: {
          embedAsBase64: 1, // Enable to convert images in base64
      },
      // Enable style manager
      styleManager: {
          sectors: [
              {
                  name: 'General',
                  open: false,
                  buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
              },
              // Other sectors
          ],
      },
      // Enable device manager
      deviceManager: {
          devices: [{
              name: 'Desktop',
              width: '', // default size
          }, {
              name: 'Tablet',
              width: '768px', // this value will be used on canvas
              widthMedia: '992px', // this value will be used in CSS
          }],
      },
      // Enable plugins
      plugins: [
          // Add plugins here
      ],
      // Enable custom components
      components: '',
      // Enable custom styles
      style: '',
  });
});

