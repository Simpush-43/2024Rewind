const heartContainer = document.getElementById('heart-contianer');
const createHeart = ()=>{
  const heart = document.createElement('div');
  heart.classList.add('heart');
   const randomX = Math.random()* window.innerWidth
   const randomY = Math.random()* window.innerHeight
   const animationDuration = Math.random()* 5+2;
   const animationDelay = Math.random()*2;
    // giving style 
    heart.style.top =`${randomY}px`
    heart.style.left = `${randomX}px`
    heart.style.animationDuration = `${animationDuration}s`
    heart.style.animationDelay = `${animationDelay}s`
    heartContainer.appendChild(heart);

    setTimeout(()=>{
heart.remove();
    },animationDuration*1000)
};

setInterval(createHeart,800)

// GSAP Animation for Waving Effect
function breakText(){
  const h1 = document.querySelector('h1')
console.log(h1);
var h1Text = h1.textContent;
var splitTExt= h1Text.split("")
console.log(splitTExt)
var clutter = "  "
splitTExt.forEach((elem) => {
  if (elem === " ") {
    clutter += `<span>&nbsp;</span>`; // Add non-breaking space for spaces
  } else if (elem === "\n" || elem === "<br>") {
    clutter += "<br>"; // Preserve line breaks
  } else {
    clutter += `<span>${elem}</span>`;
  }
})
h1.innerHTML = clutter
}
breakText();

gsap.from("h1 span",{
  y: (i) => Math.sin(i * 0.35) * 25, // Wave-like motion
    repeat: -1, // Infinite animation
    yoyo: true, // Reverse the animation direction
    stagger: 0.2, // Delay between words
    duration: 0.6, // Duration of one wave cycle
    ease: "power1.inOut", // Smooth easing
    color:"#551A8B"
}) 

const pianAudio = new Audio('romantic-piano-254876.mp3');
const text = document.getElementById('Text1')
const text2 = document.getElementById('title')
const wrapper = document.getElementById('wrapper')

//  BUTTON ANIMATION 
 const button=document.getElementById('Button');
 button.addEventListener('click',()=>{
  console.log('button is clicked')
  // pianAudio.play();
  text.style.display ='none'
  text2.innerHTML ='CHOOSE THE CARD💓'
wrapper.style.display ='block'

 })

//  for cards 

const cards = document.querySelectorAll('.card')
const Letter = document.getElementById('Letter')
cards.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
      e.stopPropagation();
const message = elem.getAttribute('data-message');
console.log(message);
Letter.style.display='block'
Letter.style.height = '400px'
Letter.style.width = '400px'
const hideLetter = (event) => {
  if (!Letter.contains(event.target)) {
      Letter.style.display = 'none';
      window.removeEventListener('click', hideLetter); // Remove the listener after hiding Letter
  }
};

window.addEventListener('click', hideLetter);
    })
})

const card1 = document.getElementById('card1')
console.log("card 1 is found")
const card2 = document.getElementById('card2')
const card3 = document.getElementById('card3')
const card4 = document.getElementById('card4')
const card5 = document.getElementById('card5')

const image = document.getElementById('image')

card1.addEventListener('click',()=>{
  console.log("card 1 is clickded")
  Letter.src="prem patra.jpg"
})

card2.addEventListener('click',()=>{
  console.log("card 2 is clickded")
Letter.src="17nove.jpeg"
})

card3.addEventListener('click',()=>{
  console.log("card 3 is clickded")
  Letter.src="14june.jpg"
})

card4.addEventListener('click',()=>{
  console.log("card 4 is clickded")
  Letter.src="1 janu.jpeg"
})

card5.addEventListener('click',()=>{
  console.log("card 5 is clickded")
  Letter.src ="letter1.jpg"
})


Letter.addEventListener('click',(e)=>{
  e.stopPropagation();
})
window.addEventListener('click', (event) => {
  console.log('Window clicked:', event.target);
});

// card selections
// Form submisson 
