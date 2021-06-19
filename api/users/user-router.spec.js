const request = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");

describe("root", () => {
  test("test should begin", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("register functionality", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  it("returns 500", () => {
    return request(server)
      .post("/api/register")
      .send({
        username: "money",
        password: "123",
      })
      .then((res) => {
        expect(res.status).toBe(500);
      });
  });
  it("returns JSON", () => {
    return request(server)
      .post("/api/register")
      .send({
        username: "money",
        password: "123",
        department: "owner",
      })
      .then((res) => {
        expect(res.type).toBe("application/json");
      });
  });

  it("returns 201", () => {
    return request(server)
      .post("/api/register")
      .send({
        username: "money",
        password: "123",
        department: "owner",
      })
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });
});

describe("login functionality", () => {
  it("should return status 200", async () => {
    const res = await request(server)
      .post("/api/login")
      .send({ username: "money", password: "123" });

    expect(res.status).toBe(200);
  });

  it("should return a token", async () => {
    const res = await request(server)
      .post("/api/login")
      .send({ username: "money", password: "123" });

    expect(res.body.token).toBeTruthy();
  });

  it("should return 404", async () => {
    const res = await request(server)
      .post("/api/login")
      .send({ username: "mone", password: "123" });

    expect(res.status).toBe(401);
  });
});

describe("Creating item for user", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImRiIiwiaWF0IjoxNTgwOTMwMTE5LCJleHAiOjE1ODEwMTY1MTl9.9DtBtw0Ee0ROVwuQNlxdEMUPHDzRDc7p7UFYl5Th_pc";
  const sike = "you thought";
  it("should return status  500", async () => {
    const res = await request(server)
      .post("/api/users/:id/items")
      .set("Authorization", token)
      .send({ username: "money", password: "123" });

    expect(res.status).toBe(500);
  });

  it("should ask for a valid token", async () => {
    const res = await request(server)
      .post("/api/users/:id/items")
      .set("Authorization", sike)
      .send({
        item_name: "Mixing Table",
        description: "I call it the mixer",
        availability: 1,
        daily_rate: 62,
        condition: "one small scratch",
        location: "Texas",
        imgs: "",
      });

    expect(res.status).toBe(401);
  });

  it("should return 201", async () => {
    const res = await request(server)
      .post("/api/users/:id/items")
      .set("Authorization", token)
      .send({
        item_name: "Mixing Table",
        description: "I call it the mixer",
        availability: 1,
        daily_rate: 62,
        condition: "one small scratch",
        location: "Texas",
        imgs: "",
      });

    expect(res.status).toBe(201);
  });
});

describe("Delete user", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImRiIiwiaWF0IjoxNTgwOTMwMTE5LCJleHAiOjE1ODEwMTY1MTl9.9DtBtw0Ee0ROVwuQNlxdEMUPHDzRDc7p7UFYl5Th_pc";
  const sike = "you thought";

  it("Invaild Token", async () => {
    const res = await request(server)
      .delete("/api/user/:id")
      .set("Authorization", sike);

    expect(res.status).toBe(401);
  });

  it("delete successful", async () => {
    const res = await request(server)
      .delete("/api/user/:id")
      .set("Authorization", token);

    expect(res.status).toBe(200);
  });
});

describe("Get User by ID", () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImRiIiwiaWF0IjoxNTgwOTMwMTE5LCJleHAiOjE1ODEwMTY1MTl9.9DtBtw0Ee0ROVwuQNlxdEMUPHDzRDc7p7UFYl5Th_pc";
  const sike = "you thought";

  it("Invaild Token", async () => {
    const res = await request(server)
      .get("/api/user/:id")
      .set("Authorization", sike);

    expect(res.status).toBe(401);
  });

  it("Got user by ID", async () => {
    const res = await request(server)
      .get("/api/user/:id")
      .set("Authorization", token);

    expect(res.status).toBe(200);
  });
});
