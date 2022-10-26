const url = "http://localhost:5050/api/users"

class UserService {     //This allows you to do UserService.method


    static list = () => {       //EX: this is called  by UserService.list
        return $.getJSON(`${url}`);
    };
    static get = (id) => {
        return $.getJSON(`${url}/${id}`);
    }
    static create = (user) => {
        return $.ajax({ //This will take in JSON datat
            method: "POST",     //What kind of HTTP Method (get,put,post,delete,etc)
            url:`${url}`,
            data: JSON.stringify(user),               //With post and put you need to pass in an instance of the user
            contentType: "application/json"           //Telling the server what we are passing in is Json
        });
    }
    static change = (user) => {
        return $.ajax({ 
            method: "PUT",     
            url:`${url}/${user.id}`,        //Just like the path in c#
            data: JSON.stringify(user),               
            contentType: "application/json"           
        });
    }
    static remove = (id) => {
        return $.ajax({ 
            method: "DELETE",     
            url:`${url}/${id}`                         
        });
    }
}