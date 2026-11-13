// Menu mobile
document.addEventListener('click',function(e){
  var b=e.target.closest('.menu-btn'); if(!b) return;
  document.querySelector('.nav').classList.toggle('open');
});
// Utilitaires partagés (commande -> CRM)
window.DECLIC={
  KEY:'declic_crm_v1',
  ORDERS:'declic_orders_v1',
  euro:function(n){return n.toLocaleString('fr-FR',{style:'currency',currency:'EUR'});}
};
