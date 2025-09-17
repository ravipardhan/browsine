// script.js - small interactions

// Smooth scroll for nav links
document.querySelectorAll('.main-nav a').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const href = a.getAttribute('href');
    const el = document.querySelector(href);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Contact form submit (demo)
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    // Basic demo validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if(!name || !email || !message){
      alert('Please fill name, email and message.');
      return;
    }
    // In real site: send via fetch() to backend or use form handler
    alert('Thank you, ' + name + '! Your message was sent (demo).');
    form.reset();
  });
}