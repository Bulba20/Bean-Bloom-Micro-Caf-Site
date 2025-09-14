window.onload = function () {
  const bar = new ldBar("#progressBar");

  let value = 0;
  const duration = 3000; // ms for 0–100%
  const stepTime = 50;
  const increment = 100 * stepTime / duration;

  const interval = setInterval(() => {
    value += increment;
    if (value >= 100) {
      value = 100;
      clearInterval(interval);
      // hide loader and show page
      document.getElementById('loader').style.display = 'none';
      document.getElementById('content').style.display = 'block';
    }
    bar.set(value);
  }, stepTime);
};

