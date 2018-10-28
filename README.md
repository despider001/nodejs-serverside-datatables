# nodejs_serverside_datatables
1. git clone 
2. npm install
3. npm start

### views/index.ejs contains dataTables client side code (ajax configuration)
### routes/index.js contains ajax req handler
To keep it simple, I used data.json file. In real life, we will have to process it through a SQL/NoSQL query, 
and send the data to the view as json.

Don't forget to bind `recordsTotal` (number of total records) and `recordsFiltered` (number of filtered records)

```
let viewObj = {}
viewObj.result = []; //result goes here
viewObj.recordsTotal = 12; //dynamic number goes here
viewObj.recordsFiltered = 9; //dynamic number goes here
```
