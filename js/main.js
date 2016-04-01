var centerCoord = [47.2409, 39.7108];
var zoom = 17;


//Определяем карту
var map = L.map('map').setView(centerCoord, zoom);

//Добавляем слой OpenStreetMap
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//плагины
L.control.mousePosition().addTo(map); 
L.Control.measureControl().addTo(map);

//Параметры для иконок        
var LeafIcon = L.Icon.extend({
                                options: {
                                        iconSize:     [35, 35],
                                        iconAnchor:   [16, 35],
                                        popupAnchor:  [0, -30]
                                }
});       
        
        
//точки интереса
//парк
var parkIcon = new LeafIcon({ iconUrl: 'img/park.png' });
var parkCoord = [47.2410, 39.7113];
var parkInfo = "<strong>Студенческий парк ДГТУ</strong><br/>" +
                "Одно из 10 лучших мест категории \"Парки\" <br/>в Ростов-на-Дону<br/>" +
                "Адрес: пл. Гагарина, 1";

L.marker(parkCoord, { icon: parkIcon }).addTo(map).bindPopup(parkInfo);


//церковь
var churchIcon = new LeafIcon({ iconUrl: 'img/church.png' });
var churchCoord = [47.23925, 39.7111];
var churchInfo = "<strong>Татианинский храм (при ДГТУ)</strong><br/>"+
                 "Дата основания: 25 января 2008 года<br/>" +
                 "Адрес: пл. Гагарина, 1";
                    
L.marker(churchCoord, { icon: churchIcon }).addTo(map).bindPopup(churchInfo);
        
        
//Стадион
var arenaIcon = new LeafIcon({ iconUrl: 'img/arena.png' });
var arenaCoord = [47.24097, 39.7100];
var arenaInfo = "<strong>Стадион</strong><br/>" +
                "Легкоатлетический Манеж ДГТУ<br/>" +
                "Адрес: ул. Юфимцева, 16<br/>";
                
L.marker(arenaCoord, {icon: arenaIcon} ).addTo(map).bindPopup(arenaInfo); 


//Клуб
var clubIcon = new LeafIcon({ iconUrl: 'img/club.png' });
var clubCoord = [47.23930, 39.7127];
var clubInfo = "<strong>Бильярдный клуб</strong><br/>" +
               "Бильярд-Пул, спортивный клуб ООО \"Российская ассоциация развития " +
               "бильярдного спорта по ЮФО \"Бильярдный конгресс\"<br/>" +
               "Адрес: пр. Нагибина Михаила, 5а<br/>"; 
        
L.marker(clubCoord, { icon: clubIcon }).addTo(map).bindPopup(clubInfo);
