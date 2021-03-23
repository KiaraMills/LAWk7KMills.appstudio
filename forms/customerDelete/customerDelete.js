customerSelect.onshow = function() {
 query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are \n ${results}`)
        if (results.length == 0)    
           lblMessage.value = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtaCustomerNames.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage.value = "Error code: " + req.status
}
  

btnDelete.onclick=function(){
    let customerNameDel = inptDeleteCustomer.value
    
    // make sure the pet name is in the database before you try to 
    // delete it
    let found = false
    for (i = 0; i < allCustomerNames.length; i++) {
        if (customerNameDel == allCustomerNames[i][1]){
            found = true
            break // if found the item in the database jump out of loop
        }
    }
    if (found == false) 
       inptDeleteCustomer.value = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM pets WHERE name = '" + customerNameDel + "'"
      alert(query)
      
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    // means the insert succeeded
                inptDeleteCustomer.value = `You have successfully deleted the pet named ${customerNameDel}`
            else
                inptDeleteCustomer.value = `There was a problem deleting ${customerNameDel} from the database.`
      else  // transit error
        inptDeleteCustomer.value = `Error: ${req.status}`
    } // found is true
  } // end event handler
 
 Button2.onclick = function(){
 changeForm(customerAdd)
  