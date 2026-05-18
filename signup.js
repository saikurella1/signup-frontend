
async function signup(){
        let firstName = document.getElementById("firstname").value.trim();
        let lastName = document.getElementById("lastname").value.trim();
        let emailid = document.getElementById("emailid").value.trim();
        let mobileNumber = document.getElementById("mobilenumber").value.trim();
    
        let password = document.getElementById("password").value.trim();

            if (
                firstName === "" ||
                lastName === "" ||
                emailid === "" ||
                mobileNumber === "" ||
                password === "" 
            ) {
        
                document.getElementById("result").textContent =
                    "All fields are mandatory";
        
                return;
            }
            let response = await fetch(
                "https://signup-api-dev-czli.onrender.com/signup",
                {
                    method: "POST",
        
                    headers: {
                        "Content-Type": "application/json"
                    },
        
                    body: JSON.stringify({
                        firstName: firstName,
                        lastName: lastName,
                        emailid: emailid,
                        mobileNumber: mobileNumber,
                        password: passwords,
                    })
                }
            );
            let result = await response.text();

    document.getElementById("result").textContent = result;
        

    }

   

        
        
    
