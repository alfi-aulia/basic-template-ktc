<?php
    include("connection.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>aulia</title>
    <link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
   <div id="form">
        <h1 style="position: right;">Login form</h1>
        <form name="form" action ="login.php" onsubmit="return isvalid()" method="POST">
            <label>Username: </label>
            <input type="text" id="user" name="user"></br></br>
            <label>Password:</label>
            <input type="password" id="pass" name="pass"></br></br>
            <input type="submit" id="btn" value="Login" name="submit"/>
        </form>
   </div>
    <script>
        funtion isvalid(){
            var user = documen.form.user.value;
            var pass = documen.form.pass.value;
            if(user.length=="" && pass.length==""){
                alert("Username and password field is empty!!!");
                return false
            }
            else{
                if(user.length==""){
                    alert("Username is empaty!!!");
                    return false
                }
                if(user.length==""){
                    alert("Password is empaty!!!");
                    return false
                }

                
            }
        }
</body>
</html>