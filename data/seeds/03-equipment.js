exports.seed = function (knex) {
  return knex("equipment")
    .del()
    .then(function () {
      return knex("equipment").insert([
        {
          equipment_name: "camera",
          equipment_description: "like new",
          equipment_img:
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          equipment_available: true,
          user_id: 2,
        },
        {
          equipment_name: "video camera",
          equipment_description: "excellent audio and image",
          equipment_img:
            "https://images.unsplash.com/photo-1589872307379-0ffdf9829123?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80",
          equipment_available: false,
          user_id: 2,
        },
        {
          equipment_name: "podcast microphone",
          equipment_description: "best audio out there",
          equipment_img:
            "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          equipment_available: false,
          user_id: 2,
        },
      ]);
    });
};
