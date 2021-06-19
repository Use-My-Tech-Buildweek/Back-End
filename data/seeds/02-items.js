exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          id: 1,
          item_name: "Roomba",
          description: "Does the cleaning for you",
          user_id: 2,
          availability: true,
          daily_rate: 20,
          condition: "Great",
          location: "LA",
          imgs: "https://images-na.ssl-images-amazon.com/images/I/81Qhp8Yt81L._AC_SX522_.jpg",
        },
        {
          id: 2,
          item_name: "XXL Megaphone",
          description: "Obnoxiously loud ",
          user_id: 1,
          availability: true,
          daily_rate: 15,
          condition: "It works",
          location: "LA",
          imgs: "https://images-na.ssl-images-amazon.com/images/I/51ClklVIA5L._AC_SX466_.jpg",
        },
        {
          id: 3,
          item_name: "Iphone 8",
          description: "Its an IPhone, what did you expect?",
          user_id: 3,
          availability: false,
          daily_rate: 10,
          condition: "It makes calls",
          location: "Mexico",
          imgs: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-plus-select-2017?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1550795430207",
        },
        {
          id: 4,
          item_name: "Laptop",
          description:
            "It has viruses, but once you get passed the pop-ups youre good to go",
          user_id: 1,
          availability: true,
          daily_rate: 25,
          condition: "Working",
          location: "Mexico",
          imgs: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6364/6364560_sd.jpg;maxHeight=640;maxWidth=550",
        },
        {
          id: 5,
          item_name: "Massage Chair",
          description: "It works so well, Im able to walk again",
          user_id: 2,
          availability: false,
          daily_rate: 50,
          condition: "Working",
          location: "Utah",
          imgs: "https://s7d6.scene7.com/is/image/bjs/226333?$bjs-Zoom$",
        },
        {
          id: 6,
          item_name: "RoboSapien",
          description: "He doesnt do much, but I got him to pick up trash once",
          user_id: 3,
          availability: true,
          daily_rate: 20,
          condition: "Working",
          location: "Washington",
          imgs: "https://images-na.ssl-images-amazon.com/images/I/71IVqCfY9qL._AC_SL1500_.jpg",
        },
      ]);
    });
};
