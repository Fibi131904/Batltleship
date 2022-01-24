let view = {
    displayMessage: function(msg){
       let messageArea = document.getElementById('messageArea');
       messageArea.innerHTML = msg;
    },

    displayHit: function(location){
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'hit');
    },
    displayMiss: function(location){
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'miss');
    },

}
view.displayMiss('00');
view.displayHit('34');
view.displayMiss('55');
view.displayHit('12');
view.displayMiss('25');
view.displayHit('26');

view.displayMessage('Tap tap, is this thing on?');

var model = { // ОбЪект модели
    bordSize: 7,
    numShips : 3,
    shipsSunk: 0,
    shipLength : 3,
    ships :
     [ { locations : ['06', '16', '26'], hits: ['', '', ''] },
     { locations : ['24', '34', '44'], hits: ['', '', ''] },
     { locations : ['10', '11', '12'], hits: ['', '', ''] }],

     fire: function(guess) {  // Метод получает координаты выстрела
         for (var i = 0; i < this.numShips; i++) {
             var ship = this.ships[i]; // для каждого корабля
            var locations = ship.locations; //Получаем массив клеток, занимаемых кораблем
            var index = locations.indexOf(guess); // Метод indexOff ищет в массиве указанное значение locations
            if (index >= 0) {
                ship.hits[index] = 'hit'; // ставим отметку в массив hits
                return true;
            }
         }
         return false;
     }
};