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
            var usersHair = [];
            var userBrownHair = [];
            
            $.each(users, function(i,item){
                $('.userBlock').append('<p>'+item.name+'</p>'); //Выведим все имена пользователей
                usersHair.push(item.hair_color); //Запишем цвета волос пользователей в отдельный массив
            });
            
            //Запишем в массив userBrownHair имена пользователей с коричневым цветом волос
            for (var i = 0; i < users.length; i++) {
                console.log(users[i]);
                if(users[i].hair_color == "brown") {
                    userBrownHair.push(users[i].name);
                }
            };

 

    

 

			// var listHeroes = this.props.heroes.results.filter(test => test.name.toLowerCase().includes(this.props.search_value)).map((item, index) => {
			//   return <StarWarsPrew key={index} name={item.name} id={index} />;
			// });

        };

    }
    axajTest();

})();