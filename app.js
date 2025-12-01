// Simple JS for nav and fade animations and catalog localStorage
document.addEventListener('DOMContentLoaded', function(){
  // smooth internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });

  // fade-up on load for elements with class fade-up
  document.querySelectorAll('.fade-up').forEach((el,i)=>{
    el.style.animationDelay = (i*120) + 'ms';
  });

  // basic mobile nav toggle
  const navBtn = document.getElementById('navBtn');
  if(navBtn){
    navBtn.addEventListener('click', ()=>{
      document.getElementById('nav').classList.toggle('open');
    });
  }

  // catalog localStorage (simple)
  const LS = 'volpi_catalog_v2';
  const listings = JSON.parse(localStorage.getItem(LS) || '[]');
  window.getListings = ()=>listings;
});
