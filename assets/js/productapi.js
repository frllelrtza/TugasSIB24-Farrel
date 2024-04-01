const endpoint = "https://crudcrud.com/api/5a1bb6e8f15f4f95a5ca8b5c6457d169/marvel";
    const konten = document.getElementById("konten");

    // Fungsi untuk menampilkan form berdasarkan nama ID
    function showForm(formId) {
      const forms = document.querySelectorAll('.form-container');
      forms.forEach(form => {
        if (form.id === formId) {
          form.style.display = 'block';
        } else {
          form.style.display = 'none';
        }
      });
    }


    // Fungsi untuk menutup form
    function closeForm(formId) {
      document.getElementById(formId).style.display = 'none';
    }

    // Fungsi untuk menampilkan data film dari API
    function displayMovies() {
      fetch(endpoint)
        .then(response => response.json())
        .then(data => {
          let movies = data[0].marvel;
    
          movies.forEach(movie => {
            let card = document.createElement("div");
            card.className = "card";
    
            let img = document.createElement("img");
            img.src = movie.image;
            img.className = "card-img";
            img.alt = movie.title;
    
            let cardContent = document.createElement("div");
            cardContent.className = "card-content";
    
            let title = document.createElement("h2");
            title.className = "card-title";
            title.textContent = movie.title;
    
            let cast = document.createElement("p");
            cast.className = "card-text";
            cast.textContent = "Cast: " + movie.cast.join(", ");
    
            let year = document.createElement("p");
            year.className = "text-muted";
            year.textContent = "Year: " + movie.year;
    
            // Button Edit
            let editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.className = "edit";
            editButton.addEventListener("click", () => {
              editMovie(movie._id); // Panggil fungsi editMovie dengan ID film sebagai parameter
            });
    
            // Button Delete
            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete";
            deleteButton.addEventListener("click", () => {
              deleteMovie(movie._id); // Panggil fungsi deleteMovie dengan ID film sebagai parameter
            });
    
            cardContent.appendChild(title);
            cardContent.appendChild(cast);
            cardContent.appendChild(year);
            cardContent.appendChild(editButton);
            cardContent.appendChild(deleteButton);
    
            card.appendChild(img);
            card.appendChild(cardContent);
    
            konten.appendChild(card);
          });
        })
        .catch(error => {
          console.error('Terjadi kesalahan saat mengambil data dari API:', error);
        });
    }
    
    // Fungsi untuk mengedit film berdasarkan ID
    function editMovie(movieId) {
      console.log("Edit movie with ID:", movieId);
      // Implementasi logika edit disini, misalnya dengan menampilkan modal form untuk edit
    }
    
    // Fungsi untuk menghapus film berdasarkan ID
    function deleteMovie(movieId) {
      console.log("Delete movie with ID:", movieId);
      // Implementasi logika delete disini, misalnya dengan konfirmasi dan mengirim request DELETE ke API
    }
    
    // Panggil fungsi untuk menampilkan data film saat halaman dimuat
    displayMovies();
    
    

    // Fungsi untuk menambahkan film baru
    document.getElementById('addMovieForm').addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(this);
      const newMovie = {};
      formData.forEach((value, key) => {
        newMovie[key] = value;
      });
    
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Film berhasil ditambahkan:', data);
          // Tampilkan kembali data film setelah penambahan
          konten.innerHTML = ''; // Kosongkan konten sebelum menampilkan ulang
          displayMovies();
          // Tutup form setelah berhasil menambahkan film
          closeForm('addForm');
        })
        .catch(error => {
          console.error('Terjadi kesalahan saat menambahkan film:', error);
        });
    });
    


