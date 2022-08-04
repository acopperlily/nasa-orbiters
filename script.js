console.log('3, 2, 1 ... blastoff!');
const btn = document.querySelector('input');
btn.addEventListener('click', getInfo);

const ul = document.querySelector('ul');

async function getInfo(e) {
  e.preventDefault();
  const ship = document.querySelector('#fleet').value;
  console.log(ship);
  if (!ship) return;
  try {
    const res = await fetch(`https://nasa-orbiter-api.herokuapp.com/api/${ship}`);
    const data = await res.json();

    console.log(data);
    console.log(data.serialNumber);
    console.log(data.numberOfFlights);

    const h2 = document.querySelector('h2');
    h2.textContent = `Space Shuttle ${data.name}`;

    const quickStats = document.querySelector('#quick-stats');
    quickStats.classList.remove('hidden');

    // Update DOM with retrieved info
    populateStats(data);
    
  } catch(error) {
      console.log(error);
  }
}

// Put data inside of list items
function populateStats(data) {
  document.querySelector('#serial-number').textContent = `Serial number: ${data.serialNumber}`;

  document.querySelector('#number-of-orbits').textContent = `Orbits: ${data.numberOfOrbits}`;

  document.querySelector('#number-of-flights').textContent = `Missions: ${data.numberOfFlights}`;

  document.querySelector('#flight-hours').textContent = `Flight hours: ${data.flightHours}`;

  document.querySelector('#miles-traveled').textContent = `Miles traveled: ${data.milesTraveled}`;

  document.querySelector('#first-mission').textContent = `First mission: ${data.firstMission}`;

  document.querySelector('#last-mission').textContent = `Last mission: ${data.lastMission}`;
}
