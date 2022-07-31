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
    console.log(data.serialNum);
    console.log(data.numFlights);

    const h2 = document.querySelector('h2');
    h2.textContent = `Space Shuttle ${data.name}`;

    const quickStats = document.querySelector('#quick-stats');
    quickStats.classList.remove('hidden');

    removeListItems();

    buildListItem('Serial Number', data.serialNum);
    buildListItem('Number of Flights', data.numFlights);
    
  } catch(error) {
      console.log(error);
  }
}

function buildListItem(stat, info) {
  const li = document.createElement('li');
  li.textContent = `${stat}: ${info}`;
  ul.appendChild(li);
}

function removeListItems() {
  console.log(ul.children.length);
  while (ul.children.length) {
    ul.removeChild(ul.firstElementChild);
  }
}