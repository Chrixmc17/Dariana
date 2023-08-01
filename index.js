const yestBtn = document.querySelector('#yesBtn');

yestBtn.addEventListener('click',function () {
    alert('Feliz cumpleaños Dariana, espero que la pases bien al lado de tu familia:D. En todo nuestro, curso me alegro mucho poder ser tu compañero y ayudarte en lo que pueda. No será el mejor regalo pero espero valga mucho para ti. Feliz dia! Psdt: Gracias por hacer mi examen a mano jaja')
});
const noBtn = document.querySelector('#noBtn');
noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})