<!DOCTYPE html>
<html>
<head>
    <title>רישום והתחברות</title>
    <style>
        body{
            background: url(testblog1.jpg);
        }
    </style>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .container {
            width: 50%;
            margin: 0 auto;
            padding-top: 50px;
        }
        input[type="text"],
        input[type="password"],
        button {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
    <script>
        function register() {
            var username = document.getElementById("reg-username").value;
            var password = document.getElementById("reg-password").value;
            var storedUsername = localStorage.getItem(username);
            if (storedUsername) {
                alert("שם המשתמש כבר קיים. אנא בחר שם משתמש אחר.");
                return;
            }
            localStorage.setItem(username, password);
            alert("נרשמת בהצלחה!");
        }

        function login() {
            var username = document.getElementById("login-username").value;
            var password = document.getElementById("login-password").value;
            var storedPassword = localStorage.getItem(username);
            if (password === storedPassword) {
                alert("התחברת בהצלחה!");
                window.location.href = "new-page.html";
            } else {
                alert("שם המשתמש או הסיסמה שגויים. אנא נסה שוב.");
            }
        }
    </script>
</head>
<body>
    <div class="container">
        <h2>רישום</h2>
        <input type="text" id="reg-username" placeholder="שם משתמש"><br>
        <input type="password" id="reg-password" placeholder="סיסמה"><br>
        <button onclick="register()">הרשם</button>

        <h2>התחברות</h2>
        <input type="text" id="login-username" placeholder="שם משתמש"><br>
        <input type="password" id="login-password" placeholder="סיסמה"><br>
        <button onclick="login()">התחבר</button>
    </div>
</body>
</html>
