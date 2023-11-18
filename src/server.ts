import app from "./app";
import "dotenv/config";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database is running");

    const PORT = Number(process.env.PORT) || 3000;
    app.listen(PORT, () => console.log("Server is running"));
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
