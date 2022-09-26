const fastify = require("fastify");
const request = require("supertest");

const run = async () => {
  const app = fastify();

  app.get("/test", (req, res) => {
    res.status(200).send();
  });

  await request(app.server).get("/test").expect(200);
};

run();
