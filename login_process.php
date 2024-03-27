<?php

$host = "localhost"; 
$username = "root"; 
$password = ""; 
$database = "tugassib";


$conn = new mysqli($host, $username, $password, $database);


if ($conn->connect_error) {
    die("Koneksi ke database gagal: " . $conn->connect_error);
}


$username = $_POST['username'];
$password = $_POST['password'];

$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
   
    session_start();
    $_SESSION['username'] = $username; 
    header("Location: AdminLTE-3.2.0/index.html"); 
    exit();
} else {
    
    header("Location: login-layout.php?error=1"); 
    exit();
}


$conn->close();
?>
