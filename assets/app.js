document.documentElement.classList.add('js');
// Menu mobile
document.addEventListener('click',function(e){
  var b=e.target.closest('.menu-btn'); if(!b) return;
  var n=document.querySelector('.nav'); n.classList.toggle('open');
  b.setAttribute('aria-expanded',n.classList.contains('open'));
});
// Apparition douce des blocs au défilement
document.addEventListener('DOMContentLoaded',function(){
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('in')});return;}
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
  },{rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(el){io.observe(el)});
});
// Utilitaires partagés (commande -> CRM)
window.DECLIC={
  KEY:'declic_crm_v1',
  ORDERS:'declic_orders_v1',
  euro:function(n){return n.toLocaleString('fr-FR',{style:'currency',currency:'EUR'});}
};
