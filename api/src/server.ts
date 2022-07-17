import "reflect-metadata";
import router from "express";
import { routes } from "./routes";
import { AppDataSource } from "./Database/AppDataSource";

AppDataSource.initialize()
    .then(() => {
        console.log("Database initialized!");

        const app = router();

        app.use(routes);
        
        app.listen(3001, () => {
            console.log("Server is running!");
        });
    })
    .catch((err) => console.log(`Database initialization error: ${err}`));
