"use strict";

require("dotenv").config();

const Fastify = require("fastify");

const app = Fastify({
  logger: true,
});

const appService = require("./dist/app.js");
app.register(appService);

app.listen({ port: process.env.PORT || 4000 }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
