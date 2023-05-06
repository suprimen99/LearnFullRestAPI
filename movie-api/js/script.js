function SearchMovie(){

        $('#movie-list').html('');
        $.ajax({
            url: 'http://omdbapi.com',
            type: 'get',
            dataType: 'json',
            data: {
                'apikey' : 'afadeea8',
                'S' : $('#search-input').val()
            },
            success: function(result) {
                if(result.Response == "True"){
                let movie = result.Search;
        
                    $.each(movie, function(i, data){
                        $('#movie-list').append(`
                        <div class="col-md-4 py-3">
                        <div class="card">
                        <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">`+ data.Title +`</h5>
                        <h6 class="card-subtitle mb-2 text-muted">` + data.Year + `</h6>
                            <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+data.imdbID +`">See Detail</a>
                        </div>
                        </div>
                        </div>
                        `);
                    });
        
                    $('#search-input').val('');
                }else{
                    $('#movie-list').html(`
                    <div class="col">
                    <h1 class="text-center">`+ result.Error +`</h1></div>`)
                }
            }
        });
}

$('#search-button').on('click', function(){
    SearchMovie();
});

$('#search-input').on('keyup', function(e){
    if (e.which == 13) {
        SearchMovie();
    }
});

$('#movie-list').on('click', '.see-detail', function(){
   $.ajax({
    url : 'http://omdbapi.com',
    type : 'get',
    dataType : 'json',
    data : {
        'apikey' : 'afadeea8',
        'i' : $(this).data('id') 
    },
    success : function(movie){
        if( movie.Response === "True"){

            $('.modal-body').html(`
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                    <img src="`+movie.Poster+`" class="img-fluid">
                    </div>

                    <div class="col-md-8">
                        <ul class="list-group">
                            <li class="list-group-item"><h3>`+movie.Title+`</h3></li>
                            <li class="list-group-item">Released : `+movie.Released+`</li>
                            <li class="list-group-item">Genre : `+movie.Genre+`</li>
                            <li class="list-group-item">Director : `+movie.Director+`</li>
                        </ul>
                </div>
            </div>
            `)
        }
    }
   })
})


















// $('#search-button').on('click', function() {
//     $.ajax({
//         url: 'http://www.omdbapi.com',
//         type: 'get',
//         dataType: 'json',
//         data: {
//             'apikey': 'afadeea8',
//             's': $('#search-input').val()
//         },
//         success: function(result) {
//             if (result.Response === 'True') {
//                 console.log(result);
//             } else {
//                 console.log('Pencarian tidak ditemukan!');
//             }
//         },
//         error: function(xhr, status, error) {
//             console.log('Terjadi kesalahan: ' + error);
//         }
//     });
// });
