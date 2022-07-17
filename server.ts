"use strict";

require("dotenv").config();

const Fastify = require("fastify");

const app = Fastify({
  logger: true,
});

const appService = require("./src/app.ts");
app.register(appService);

app.listen({ port: process.env.PORT || 4000 }, (err: any) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
