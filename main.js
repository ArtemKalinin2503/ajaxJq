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
            var users = data; //Данные всех пользователей
            var usersHair = []; //Массив с цветами волос всех пользователей
            var usersBrownHair = []; //Массив с именами пользователй у которых коричневые волосы
            var usersFilter = []; //Массив объектов со всеми данными пользователей у которых коричневые волосы

            $.each(users, function(i,item){
                $('.userBlock').append('<p>'+item.name+'</p>'); //Выведим все имена пользователей
                usersHair.push(item.hair_color); //Запишем цвета волос пользователей в отдельный массив
            });
            
            //Запишем в массив usersBrownHair имена пользователей с коричневым цветом волос
            for (var i = 0; i < usersBrownHair.length; i++) {
                if(users[i].hair_color == "brown") {
                    usersBrownHair.push(users[i].name);
                }
            };

            //Отфильтруем пользователей по цвету волос 
            usersFilter = users.filter(function(currentValue, index){
                return currentValue.hair_color == "brown" 
            });

        };

    }
    axajTest();

})();