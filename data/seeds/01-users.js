exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "test",
          password:
            "$2a$10$06O4kv2CcsBOKYj2im5wneQGH4GcLvnz.uBLTqkPPHx5Iqu8afhWi",
          department: "owner",
        },
        {
          id: 2,
          username: "db",
          password:
            "$2a$10$06O4kv2CcsBOKYj2im5wneQGH4GcLvnz.uBLTqkPPHx5Iqu8afhWi",
          department: "owner",
        },
        {
          id: 3,
          username: "ye",
          password:
            "$2a$10$06O4kv2CcsBOKYj2im5wneQGH4GcLvnz.uBLTqkPPHx5Iqu8afhWi",
          department: "owner",
        },
      ]);
    });
};
