# Back-End

Endpoints => {  
  
## user  
<pre>user = { username: "money",
         password: "123",
         department: "owner",
        }</pre>
https://ptpt-use-my-tech5.herokuapp.com/api/user/:id => {
**GET**
Gets user by id
}  
https://ptpt-use-my-tech5.herokuapp.com/api/user/:id => {
**DELETE**
Deletes user by id
}  
https://ptpt-use-my-tech5.herokuapp.com/api/register => {
**POST**
registers user
requires
{"username": ,
"password": ,
"department": "renter or owner"}
}  
https://ptpt-use-my-tech5.herokuapp.com/api/login => {
**POST**
logs in user
requires
{"username": ,
"password"}
}  
  
## items  
<pre>item = {id: 1,  
        item_name: "Moomba",  
        description: "Does the nothing",  
        user_id: 2,  
        availability: 1,  
        daily_rate: 20,  
        condition: "Great",  
        location: "LA",  
        }</pre>
https://ptpt-use-my-tech5.herokuapp.com/api/items => {
**GET**
Gets all items
}  
https://ptpt-use-my-tech5.herokuapp.com/api/item/:id => {
**GET**
Get specific item by id
}   
https://ptpt-use-my-tech5.herokuapp.com/api/item/:id => {
**DELETE**
Deletes item by id
}  
https://ptpt-use-my-tech5.herokuapp.com/api/item => {
**POST**
Adds new item
}  
https://ptpt-use-my-tech5.herokuapp.com/api/users/:id/items => {
**POST**
Adds new item and assigns to a user
}  
https://ptpt-use-my-tech5.herokuapp.com/api/users/:id/items => {
**GET**
Gets all items for an owner
}  
}
