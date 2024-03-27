<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body style="background-color: #92bdeb">
    <div class="container-md  ">
        <div class="row justify-content-center m-3 p-3 ">
            <div class="col-md-4 rounded position-absolute top-50 start-50 translate-middle">
                <div class="card rounded">
                    <div class="card-header rounded">
                        <div class="row">
                            <div class="col d-flex justify-content-between">
                                <h3 class="card-title fw-bold">Login Dashboard.</h3>
                                <img src="assets/img/logo/arkatama-removebg-preview.png" alt="logo" height="50" />
                            </div>
                        </div>
                    </div>
                    <form action="login_process.php" method="POST">
                    <div class="form-floating mx-5 my-5 ">
                        <input type="email" class="form-control bg-light" id="floatingInput" placeholder="admin@gmail.com">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mx-5 mb-3 ">
                        <input type="password" class="form-control bg-light" id="floatingPassword" placeholder="admin">
                        <label for="floatingPassword">Password</label>
                    </div>
                         <button type="submit" class="btn btn-primary mx-5 mb-3 px-3 py-2 fw-bold d-flex">Login</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</html>
