<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marvel Movies</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/style.css">
        <link rel="stylesheet" href="assets/css/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
 
</head>
<body>
<nav id="navbar">
      <a href="index.html">
      <img src="assets/img/logo/arkatama-removebg-preview.png" alt="logo" height="60"></img>
    </a>
      <ul>
        <li>
          <a href="form.html">Form</a>
        </li>
        <li>
          <a href="jsdasar.html">Materi JavaScript</a>
        </li>
        <li>
          <a href="landingdom.html">Landing Dom</a>
        </li>
        <li class="nav-item dropdown">
          <a href="#" class="dropbtn">Product</a>
          <div class="dropdown-content">
            <a href="productapi.html">Product</a>
            <a href="product-responsive.html">Product Responsive</a>
            <a href="newproduct.php">New Product</a>
          </div>
        </li>
          <li class="nav-item dropdown">
            <a href="#" class="dropbtn">Login</a>
            <div class="dropdown-content">
              <a href="login-responsive.html">Login Responsive</a>
              <a href="login.php">Login Dashboard</a>
              
            </div>
        </li>
      </ul>
    </nav>

    <div class="container mt-5">
        <h1 class="mb-5  d-flex justify-content-center">Daftar Film Marvel</h1>
        <div class="row">
            <?php
            // Include file koneksi
            include 'koneksi/koneksi.php';

            // Query untuk mengambil data film Marvel
            $sql = "SELECT * FROM marvel_movies";
            $result = $conn->query($sql);

            // Tampilkan data film dalam card Bootstrap
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "<div class='col-md-4 mb-4'>";
                    echo "<div class='card '>";
                    echo "<img src='" . $row['image'] . "' class='card-img-top' alt='" . $row['title'] . " Poster'>";
                    echo "<div class='card-body'>";
                    echo "<h5 class='card-title'>" . $row['title'] . "</h5>";
                    echo "<p class='card-text'>Year: " . $row['director'] . "</p>";
                    echo "<p class='card-text'>Cast: " . $row['cast'] . "</p>";
                    echo "<p class='card-text'>Year: " . $row['year'] . "</p>";
                    echo "</div>";
                    echo "</div>";
                    echo "</div>";
                }
            } else {
                echo "<p>Tidak ada data film.</p>";
            }

            // Tutup koneksi database
            $conn->close();
            ?>
        </div>
    </div>
    <!-- Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
