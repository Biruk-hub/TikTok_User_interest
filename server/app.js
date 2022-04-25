import express from "express"; // import express
import cors from "cors";    // import cors

// import routes here
import user_router from "./router/user.js";
import category_router from ".//router/category.js"

const app = express(); // create express app


app.use(cors()); // allow any origin
app.use(express.json()); // parse json

// use routes here
// api will be at http://localhost:5000/api/user
app.use("/api/user", user_router); // use user router


// add additional route for category
app.use("/api/category", category_router );

export default app;
