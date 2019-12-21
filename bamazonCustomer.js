var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Mys@4432262",
  database: "bamazon"
});
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

      

var totalCost = 0; 
function start() {    
  
  connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
    if (err) throw err;
   
    console.log(res);
    inquirer.prompt([
      {
        name:"choice",
        type:"input",
        message: "what is the id of the product you would like to order? "
      },
      {
        name: "quantity",
        type: "input",
        message: "How many? ",
      }
    ]).then(function(answer){
      
      
      connection.query("SELECT  * FROM products WHERE ?",
        {item_id:answer.choice}, function (err, res) {
      
          if (err ) throw err;
            
          if (answer.quantity > res[0].stock_quantity  ) {
            inquirer
            .prompt([
              {
                type: "input",
                message: "I'm sorry, we are out of stock at this time. ",
                name: "continue"
              }
             ]).then(function(answer){
                if(answer.continue == 'yes' || answer.continue == 'y') {
                start()
                }else if (totalCost >= 0) {
                  console.log("Your total is $", parseFloat(Math.round(totalCost * 100) / 100).toFixed(2));
                  connection.end();
                }else {
                  console.log("Please come again!");
                }
              });
              
          } 

           else {  //update Inventory;
            console.log("All items in stock!!");
            totalCost= totalCost + res[0].price * answer.quantity;
            var newQuantity = res[0].stock_quantity - answer.quantity;
            connection.query(`UPDATE products SET stock_quantity=${newQuantity} WHERE item_id = ${answer.choice}`, function(res){
                inquirer
                .prompt([
                  {
                    type: "input",
                    message: "Would you like additional items? ",
                    name: "continue"
                  }
              ]).then(function(answer){
                  if(answer.continue == "yes" || answer.continue == "y") {
                    start()
                  }else {
                    console.log("Your total is $", totalCost);
                    connection.end();
                  }
                  
              }) 
            } ) 
            
          };
          
         
        }); 
        
    })     
  })
} 