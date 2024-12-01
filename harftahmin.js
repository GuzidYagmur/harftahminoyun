const text = prompt("Lütfen bir metin giriniz: ");
const character = prompt("Lütfen aradığınız karakteri giriniz: ");

let count=0;

for(let i=0; i<text.length; i++){
  if(text.charAt(i)===character){
    count++;

  }

}
console.log(`Metinde ${character} harfi metinde ${count} kez geçiyor`);
