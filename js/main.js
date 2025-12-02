
document.addEventListener('DOMContentLoaded', ()=>{
  // gallery: for each .listing element, load images from img/listings/listing-X/01.jpg .. 20.jpg
  document.querySelectorAll('.listing').forEach(listing => {
    const id = listing.dataset.listing;
    const gallery = listing.querySelector('.listing-gallery');
    for(let i=1;i<=20;i++){
      const num = String(i).padStart(2,'0');
      const url = `img/listings/${id}/${num}.jpg`;
      const img = new Image();
      img.src = url;
      img.onload = ()=> { const wrap = document.createElement('div'); wrap.className='gal-item'; img.alt=''; img.loading='lazy'; img.className='gal-img'; wrap.appendChild(img); gallery.appendChild(wrap); }
    }
  });
});
