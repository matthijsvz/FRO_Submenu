let heeftSub = document.querySelectorAll('.lijst a');
console.log(heeftSub);

for (let i=0; i <heeftSub; i++) {
  heeftSub[i].addEventListener('click', (e)=> e.preventDefault());
}
