// Button Elements
const button = document.getElementById('magicButton');

// — Click ➔ change text/color
button.addEventListener('click', () => {
  button.textContent = 'FLORIST!';
  button.style.backgroundColor = '#bada55';
});

// — Double-click secret
button.addEventListener('dblclick', () => {
  alert('HAVE A LOVELY DAY!');
});

// — Long-press secret (hold 1s)
let pressTimer;
button.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    alert('AS BTS ALWAYS SAY: I PURPLE YOU!');
  }, 1000);
});
button.addEventListener('mouseup', () => clearTimeout(pressTimer));
button.addEventListener('mouseleave', () => clearTimeout(pressTimer));

// — Hover Effects handled in CSS

// — Keypress Detection
document.addEventListener('keydown', (e) => {
  document.getElementById('keypressInfo').textContent = `You pressed: ${e.key}`;
});

// — Image Slideshow
const images = [
  'https://images.pexels.com/photos/1381683/pexels-photo-1381683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/31782127/pexels-photo-31782127/free-photo-of-close-up-of-vibrant-purple-hyacinth-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/2928032/pexels-photo-2928032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];
let currentImage = 0;
setInterval(() => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById('slideshowImage').src = images[currentImage];
}, 2000);

// — Accordion (with CSS animation)
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// — Form Validation & Real-time Feedback
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

emailInput.addEventListener('input', () => {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  emailFeedback.textContent = valid ? '' : 'Invalid email format.';
});

passwordInput.addEventListener('input', () => {
  passwordFeedback.textContent = 
    passwordInput.value.length >= 8 
      ? '' 
      : 'Password must be at least 8 characters.';
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailInput.checkValidity() && passwordInput.checkValidity()) {
    alert('LOGIN SUCCESSFULL!');
  } else {
    alert('Please fix validation errors first.');
  }
});


