import express from "express";

const app = express();
const PORT = 5001;
import movieRoutes from "./routes/movie_routes.js";

// API routes
app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
