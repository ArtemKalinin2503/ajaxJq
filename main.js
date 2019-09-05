(function () {

    function axajTest(){
        //Ajax запрос на api
        $.ajax({
            type: 'Get',
            url:"https://swapi.co/api/people",
            cache: false,
            success: function(res){
                user(res.results);
            }
        });    
        //Функция вывода данных в качестве аргумента передаем ответ от ajax
        function user(data) {
            var users = data;
            $.each(users, function(i,item){
                $('.userBlock').append('<p>'+item.name+'</p>')
            })
        };

    }
    axajTest();

})();