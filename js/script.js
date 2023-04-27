$.getJSON('pizza.json', function (data) {
    let menu = data.menu;
   $.each(menu, function(i, data ){
    $('#daftar-menu').append('<div class="col-md-4"> <div class="card mb-3"><img class="card-img-top" src="img/pizza/'+ data.gambar +'" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text"><?=$row["deskripsi"]?></p><h5 class="card-title">Rp'+ data.harga +',-</h5><a href="#" class="btn btn-primary">Pesan</a></div></div></div>');
   });
});

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    $.getJSON('pizza.json', function (data){
        
    });
});