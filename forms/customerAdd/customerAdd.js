customerAdd.onshow=function(){
      query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are \n ${results}`)
        if (results.length == 0)  
           lblMessage2.value = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtaCustomerNames3.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage2.value = "Error code: " + req.status
}


btnAddCustomer.onclick=function(){
      let name = 'Jesse Antiques'
    let street = '1113 F St'
    let city = 'Omaha'
    let state = 'NE'
    let zipcode = '68131'
    
    let query = "INSERT INTO customer (`name`,`street`, `city`, `state`, `zipcode`) VALUES ('" + name + "', '" + street + "', '" + city + "', '" + state + "', '" + zipcode + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { 
        if (req.responseText == 500)    
            lblMessage2.value = "You have successfully added the customer!"
        else
            lblMessage2.value = "There was a problem with adding the customer to the database."
    } else 
        lblMessage2.value = "Error: " + req.status
}

Button3.onclick=function(){
  ChangeForm(customerUpdate)
}

