 let query = ""
 let req ={}
 let netID = "kdm47641"
 let pw = "@Softball18"
 let results = []
 
 
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
  
btnNextForm.onclick=function(){
  changeForm(customerDelete)
}
