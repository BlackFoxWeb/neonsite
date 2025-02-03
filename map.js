ymaps.ready(init);

function init() {
    // Создаем карту
    const map = new ymaps.Map("map", {
        center: [57.153, 65.534], // Координаты центра карты (Тюмень)
        zoom: 7 // Масштаб карты
    });

    // Добавляем метки для населенных пунктов
    const towns = [
        { name: "Абатское", coords: [56.286, 70.455], link: "abatskoe.html" },
        { name: "Аромашево", coords: [56.860, 68.637], link: "aromashevo.html" },
        { name: "Голышманово", coords: [56.396, 68.372], link: "golyshmanovo.html" },
        { name: "Ишим", coords: [56.113, 69.490], link: "ishim.html" },
        { name: "Тобольск", coords: [58.198, 68.254], link: "tobolsk.html" },
        { name: "Тюмень", coords: [57.153, 65.534], link: "tyumen.html" },
        { name: "Ялуторовск", coords: [56.652, 66.303], link: "yalutorovsk.html" }
    ];

    towns.forEach(town => {
        const placemark = new ymaps.Placemark(town.coords, {
            hintContent: town.name,
            balloonContent: `<a href="${town.link}">Перейти к достопримечательностям ${town.name}</a>`
        }, {
            preset: 'islands#blueDotIcon' // Иконка для метки
        });
        map.geoObjects.add(placemark);
    });
}