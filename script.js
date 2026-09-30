const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=950)nav.style.display='none';}));

document.querySelectorAll('.amounts button').forEach(b=>{
  b.addEventListener('click',()=>document.querySelector('#donAmount').value=b.dataset.amount);
});

document.querySelector('#donButton')?.addEventListener('click',()=>{
  const amount=Number(document.querySelector('#donAmount').value);
  if(!amount || amount<1000){alert('Le don minimum est de 1 000 FCFA.');return;}
  alert(`Don de ${amount.toLocaleString('fr-FR')} FCFA sélectionné. Le paiement sécurisé sera connecté dans la prochaine étape.`);
});

document.querySelector('#registrationForm')?.addEventListener('submit',(e)=>{
  e.preventDefault();
  alert("Inscription enregistrée dans le formulaire. Le paiement automatique sera connecté après le choix du prestataire.");
});

document.querySelector('#contactForm')?.addEventListener('submit',(e)=>{
  e.preventDefault();
  alert("Merci. Le formulaire est prêt ; pour recevoir réellement les messages, nous connecterons ensuite un service d'envoi.");
});
