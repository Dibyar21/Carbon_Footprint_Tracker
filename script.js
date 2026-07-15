document.getElementById('footprintForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let distance = parseFloat(document.getElementById('distance').value);
  const unit = document.getElementById('unit').value;
  const vehicleType = document.getElementById('vehicleType').value;

  // Convert miles to km
  if (unit === "miles") {
    distance = distance * 1.60934;
  }

  let emissionFactor;
  switch (vehicleType) {
    case 'car': emissionFactor = 0.21; break;
    case 'bus': emissionFactor = 0.05; break;
    case 'bicycle': emissionFactor = 0; break;
    case 'train': emissionFactor = 0.04; break;
    case 'plane': emissionFactor = 0.25; break;
    default: emissionFactor = 0;
  }

  const carbonFootprint = (distance * emissionFactor).toFixed(2);

  const resultDiv = document.getElementById('result');
  resultDiv.innerText = `Your carbon footprint for this trip is ${carbonFootprint} kg CO₂.`;
  resultDiv.classList.remove('hidden');
  setTimeout(() => resultDiv.classList.add('show'), 50);

  // Eco-tips
  const tipDiv = document.getElementById('tip');
  let tipMessage = "";
  if (vehicleType === "car") {
    tipMessage = "🚗 Try carpooling or using public transport to cut down emissions.";
  } else if (vehicleType === "plane") {
    tipMessage = "✈️ Flights have high emissions. Consider trains for short trips.";
  } else if (vehicleType === "bicycle") {
    tipMessage = "🚴 Great choice! Bicycles produce 0 CO₂ and keep you healthy.";
  } else if (vehicleType === "bus" || vehicleType === "train") {
    tipMessage = "🚌🚆 Public transport is eco-friendly, keep it up!";
  }
  
  tipDiv.innerText = tipMessage;
  tipDiv.classList.remove('hidden');
});
