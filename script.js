console.log('3, 2, 1 ... blastoff!');
const btn = document.querySelector('button');
btn.addEventListener('click', getInfo);

function getInfo() {
  const ship = document.querySelector('input').value;
  console.log(ship);
}