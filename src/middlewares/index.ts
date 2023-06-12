import express, { Application } from "express";

import errorHandler from "./error.middleware";


import routes from "../routes/index";


import compression from 'compression'


import env from "../config/env";


import cors from "cors";


const middleware = (app: Application) => {
    app.use(compression())

    app.use(cors())

    app.use(express.json());



    app.use(express.static("public/uploads"))

    app.use("/api", routes);



    app.use(errorHandler);


}

export default middleware;