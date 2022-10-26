class Friend {
    constructor(name, phone, email){        //Typical way to make a class in javascript
        this.name = name;
        this.phone = phone;
        this.email = email;
    }

    toString(){
        return `${this.name} | ${this.phone} | ${this.email}`
    }



}
//Making an array of friends
let friends = [
    new Friend("Denise", "513-322-8888", "denise@maxtrain.com"),
    new Friend("Patrica", "513-322-8888", "patrica@maxtrain.com"),
    new Friend("Kim", "513-322-8888", "kim@maxtrain.com")
];


const loaded = () => {
    
    let tbody = document.getElementById("tbody");
    tbody.innerHTML="";

    for(let friend of friends) {        //This is the process of adding a row dynamically to table
        let tr = "";
        tr += "<tr>"
        tr += `<td>${friend.name}</td>`;
        tr += `<td>${friend.phone}</td>`;
        tr += `<td>${friend.email}</td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;      //This will ammend what is already there with our new row
    }
    console.log(friends);       //Displays the array inside of our console (not the webpage)

}

const add = () =>{
    let name = document.getElementById("xname").value;
    let phone = document.getElementById("xphone").value;
    let email = document.getElementById("xemail").value;
    let newFriend = new Friend(name, phone, email);
    friends.push(newFriend);
    loaded();
}