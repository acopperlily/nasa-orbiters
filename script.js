console.log('3, 2, 1 ... blastoff!');
const btn = document.querySelector('input');
btn.addEventListener('click', getInfo);

async function getInfo(e) {
  e.preventDefault();
  const ship = document.querySelector('#fleet').value;
  console.log(ship);
  try {
    const res = await fetch(`https://nasa-orbiter-api.herokuapp.com/api/${ship}`);
    const data = await res.json();

    console.log(data);
    console.log(data.serialNum);
    console.log(data.numFlights);

    const h2 = document.querySelector('h2');
    h2.textContent = `Space Shuttle ${data.name}`;
    
  } catch(error) {
      console.log(error);
  }
}