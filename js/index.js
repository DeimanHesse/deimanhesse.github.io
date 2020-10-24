let owlArray = document.querySelectorAll ('.owl');
let right = document.getElementById ('right');
let change = document.getElementById ('change');
let left = 0;
let index = 0;




function move (){
    left=left+200;
    owl.style.left = +'px';   
}

function moveRight (){
    let owl = document.querySelector ('.active');
    for (let i = 0; i< owlArray.length; i++) {
    right.onclick.move(); 
    }
    
    owl.style.left = 100+'px';
    
    
}

moveRight();

function changeColor () {
    for (let i = 0; i< owlArray.length; i++) {
       owlArray[i].classList.remove ('active');
    }
   owlArray[index].classList.add('active');

   if (index == owlArray.length-1)  {
    index = 0; 
}
else {
    index++;
}
console.log(owlArray);
console.log(index);
}









//slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';






















change.addEventListener('click',changeColor);














/*class Hater {                  //создание класса
    constructor (firstName, lastName) {          //создание метода "конструктор"
       this.firstName = firstName;
       this.lasttName = lastName;
    }
    sayName() {
        console.log (`${this.firstName} ${this.lasttName}`);
    }
}

let hater2= new Hater ('Джо', 'Трибиани');  
let hater1 = new Hater ('Норман','Грин'); //создание нового объекта из класса

console.log (hater1.firstName);
console.log (hater2.firstName);

hater2.sayName();

document.querySelector

/*let hater = {
firstName: 'Билл',
lastName: 'Гейтс',
getName(){
    return `${this.firstName} ${this.lastName}`;
    }

}

console.log (hater.getName());

let hater2 = {
    firstName: 'Дональд',
    lastName: 'Дак',
    getName(){
        return `${this.firstName} ${this.lastName}`;
        }
    
    }
    
    console.log (hater2.getName());


/*

let drivers = ['Ваня','Саня','Жорик'];
for(i=drivers.length -1;i>=0; i--){
    console.log(drivers[i]); 
}







/*let car = {
    color: 'red',
    driver: ['Ваня','Саня'],
    getDriver: function(who) {
        console.log(this.driver[who])
    } 
}

car.getDriver(0);

*/
/*let car = {
  color: 'red',
  maxSpeed: 250,
  audio: {
      brand: 'sony',
      speakers: 12
  } ,
  open: function (){
      console.log ('Открыто')
  }
};

car.open();
*/



/*function speedChange (carSpeed) {
    console.log ('Было '+carSpeed.maxSpeed);
    carSpeed.maxSpeed= '300';
    console.log ('Cтало '+carSpeed.maxSpeed);
}

let speed =() => console.log(car.color);

speed();

*/
