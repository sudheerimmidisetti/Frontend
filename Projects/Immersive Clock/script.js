function createDigitStrip(columnId) {
  const column = document.getElementById(columnId);
  const strip = document.createElement('div');
  strip.classList.add('digit-strip');
  for (let i = 0; i < 10; i++) {
    const digit = document.createElement('div');
    digit.classList.add('digit');
    digit.textContent = i;
    strip.appendChild(digit);
  }
  column.appendChild(strip);
}

['h1', 'h2', 'm1', 'm2', 's1', 's2'].forEach(createDigitStrip);

function updateClock() {
  const now = new Date();
  const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, '');
  const ids = ['h1', 'h2', 'm1', 'm2', 's1', 's2'];

  for (let i = 0; i < 6; i++) {
    const digit = parseInt(timeStr[i]);
    const column = document.getElementById(ids[i]).firstElementChild;
    column.style.transform = `translateY(-${digit * 60}px)`;
  }
}

updateClock();
setInterval(updateClock, 1000);
