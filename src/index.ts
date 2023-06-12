import dataSource from "./config/database.config";
import app from "./config/app";
import env from "./config/env";


dataSource.initialize()
  .then((_) => {
    app.listen(env.PORT, () => {
      console.log(`Server is running on port ${env.PORT}`);
    });
  })
  .catch((err:any) => {
    console.log(err);
  });
