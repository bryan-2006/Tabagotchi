// Create a new image element for the pet
let pet = document.createElement('img');
pet.src = chrome.runtime.getURL('images/dog.png'); // Path to your pet image
pet.style.position = 'fixed';
pet.style.width = '100px';
pet.style.height = '100px';
pet.style.left = '50%';
pet.style.top = '50%';
pet.style.cursor = 'grab';
document.body.appendChild(pet);

// Make the pet draggable
let isDragging = false;

pet.addEventListener('mousedown', function (e) {
  isDragging = true;
  pet.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', function (e) {
  if (isDragging) {
    pet.style.left = `${e.clientX - pet.clientWidth / 2}px`;
    pet.style.top = `${e.clientY - pet.clientHeight / 2}px`;
  }
});

document.addEventListener('mouseup', function () {
  isDragging = false;
  pet.style.cursor = 'grab';
});