const request = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");

describe("Items Router", () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImRiIiwiaWF0IjoxNTgwOTMwMTE5LCJleHAiOjE1ODEwMTY1MTl9.9DtBtw0Ee0ROVwuQNlxdEMUPHDzRDc7p7UFYl5Th_pc";

  const wrongToken = "This is the wrong token";

  it("Runs the tests", () => {
    expect(true).toBe(true);
  });

  describe('GET to "/items"', () => {
    it("Returns status code 200 on success", () => {
      return request(server)
        .get("/api/items")
        .set("Authorization", token)
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it("Returns status code 401 on wrong token", () => {
      return request(server)
        .get("/api/items")
        .set("Authorization", wrongToken)
        .then((res) => {
          expect(res.status).toBe(401);
        });
    });
  });

  describe('GET to "/item/:id', () => {
    it("Returns an object on success", () => {
      return request(server)
        .get("/api/item/1")
        .set("Authorization", token)
        .then((res) => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

  describe('POST to "/item', () => {
    beforeEach(async () => {
      await db("items").truncate();
    });

    it("Returns 201 on success", () => {
      return request(server)
        .post("/api/item")
        .set("Authorization", token)
        .send({
          id: 1,
          item_name: "Roomba",
          description: "Does the cleaning for you",
          user_id: 2,
          availability: 1,
          daily_rate: 20,
          condition: "Great",
          location: "LA",
        })
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });

    it("Returns a 401 with wrong token", () => {
      return request(server)
        .post("/api/item")
        .set("Authorization", wrongToken)
        .send({
          id: 1,
          item_name: "Roomba",
          description: "Does the cleaning for you",
          user_id: 2,
          availability: 1,
          daily_rate: 20,
          condition: "Great",
          location: "LA",
        })
        .then((res) => {
          expect(res.status).toBe(401);
        });
    });

    it("Returns a 500 code if required field is missing", () => {
      return request(server)
        .post("/api/item")
        .set("Authorization", token)
        .send({
          id: 1,
          //"item_name": "Roomba",
          description: "Does the cleaning for you",
          user_id: 2,
          availability: 1,
          daily_rate: 20,
          condition: "Great",
          location: "LA",
        })
        .then((res) => {
          expect(res.status).toBe(500);
        });
    });
  });

  describe('PUT to "/item/:id"', () => {
    it("Returns 200 on success", () => {
      return request(server)
        .put("/api/item/1")
        .set("Authorization", token)
        .send({
          id: 1,
          item_name: "Moomba",
          description: "Does the nothing",
          user_id: 2,
          availability: 1,
          daily_rate: 20,
          condition: "Great",
          location: "LA",
        })
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it("Returns 401 with wrong token", () => {
      return request(server)
        .put("/api/item/1")
        .set("Authorization", wrongToken)
        .send({
          id: 1,
          item_name: "Moomba",
          description: "Does the nothing",
          user_id: 2,
          availability: 1,
          daily_rate: 20,
          condition: "Great",
          location: "LA",
        })
        .then((res) => {
          expect(res.status).toBe(401);
        });
    });
  });

  describe('DELETE Request to "/api/item/:id', () => {
    it("Returns 200 on success", () => {
      return request(server)
        .delete("/api/item/1")
        .set("Authorization", token)
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it("Returns 401 with wrong token", () => {
      return request(server)
        .delete("/api/item/1")
        .set("Authorization", wrongToken)
        .then((res) => {
          expect(res.status).toBe(401);
        });
    });

    it("Expects a message with deleted ID", () => {
      return request(server)
        .delete("/api/item/1")
        .set("Authorization", token)
        .then((res) => {
          expect(res.text).toBe('{"message":"Item with ID 1 deleted"}');
        });
    });
  });
});

//This comment is here please ignore it
