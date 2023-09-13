///Q1:- "Send a GET Fetch Req - [https://dummyjson.com/products](https://dummyjson.com/products) 
// and show the data you receive in a list view as shown in the gif. 
// Handle using promise chaining or using async await. 
// UI Reference: 
// https://storage.googleapis.com/acciojob-open-file-collections/068b3004-b530-4ee6-bce4-d519737e85d5ezgif.com-video-to-gif_(9).gif

//Solution :-
// const apiurl='https://dummyjson.com/products';

// async function getdata(){
// var data = await fetch(apiurl);
// var response = await data.json();

// fnshowdata(response);
// }
// getdata();

// function fnshowdata(data){
//     const divcontainer=document.getElementById('list-data');
//     let html='';
//     data.products.forEach(item => {
//         html +='<div class="data-list">'
//         html +=`<p>${item.description}</p>`;
//         html +=`<h5>${item.price}</h5>`;
//         html +='</div>'
//     });
//     divcontainer.innerHTML = html;
// }

//practical part Q2
//- Create a class named `Student` having firstname, lastname, 
//age and subjects properties, with subjects being an array which is 
//initially empty- Initialise firstName, lastName and age during object 
//declaration using a parameterised constructor- Create a function which 
//lets you add subjects to a student object, and throws error if the subject name is not a string

//Solution:-
class Student{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.subjects = [];
    }
    addsubject(subname){
        if(typeof(subname) !== "string")
        {
            console.log("subject name must be string");
        }
    
        this.subjects.push(subname);
    }
}    
let obj= new Student('shravan','rathore',26);
obj.addsubject('react');
obj.addsubject(123);
console.log(obj);

//Theory questions
// 1. What is async funcation. explain with example
// 2. What is Promise chaining
// 3. What is React
// 4. Predict the output
class Polygon { 
    constructor() { 
        console.log("I'm a Polygon"); 
    } 
} 
class Triangle extends Polygon { 
    constructor() { 
        console.log("I have 3 sides"); 
        super(); 
    } 
} 
const shape = new Triangle();
//Output :- I have 3 sides I'm a Polygon
