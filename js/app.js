document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('.hero, .card, .colecao, .sobre-intro').forEach((el, i)=>{
    el.style.opacity=0;
    el.style.transform='translateY(10px)';
    setTimeout(()=>{ el.style.transition='opacity .6s ease, transform .6s ease'; el.style.opacity=1; el.style.transform='translateY(0)'; }, 120*i);
  });
  // editable hint
  const editable = document.querySelectorAll('[contenteditable="true"]');
  editable.forEach(el=>{ el.addEventListener('focus', ()=> el.style.outline='2px dashed #d8c89b'); el.addEventListener('blur', ()=> el.style.outline='none'); });
});