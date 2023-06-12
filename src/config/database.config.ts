import { DataSource } from "typeorm";

import "reflect-metadata";
import env from "./env";
import { TODO } from "../entities/todo.entity";

const appDataSource = new DataSource({
  type: "mongodb",
  database: "to_do",
  synchronize: true,

   logging:["query"],
  entities:[TODO],
  //  entities: ["./src/entities/**/*entity.ts"],
  subscribers: [],
  migrations: [],
});

export default appDataSource;
