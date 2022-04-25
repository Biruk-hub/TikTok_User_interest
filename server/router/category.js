import express from "express";
import category from "../controller/category.js";

const route = express.Router(); // create express router

route.get("/", category);


// implement your routes here

// route.get("/:id", user);
// route.post("/", user);
// route.put("/:id", user);
// route.delete("/:id", user);

export default route;
