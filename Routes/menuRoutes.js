const express=require('express')
const router=express.Router() //this router is exported in bottom and imported in myNewServer.js

const MenuItem=require('../Modals/MenuItem')

/*
->Used inside myNewServer.js like this:
    const menuRoutes=require('./Routes/menuRoutes')
    app.use('/',menuRoutes)
     or app.use('/menu',menuRoutes)
     but then you have to use like this in the below Routes: router.post('/',async(...)={...})
*/

//saving menuitems data
//POST METHOD to save menu item
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log("Menu Saved:", response);
    res.status(200).json(response);
  } catch (err) {
    console.error("Error saving Menu:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
//Getting menu data: http://localhost:3000/menu
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    res.status(200).json(data);
  } catch (error) {
    console.log("Error while fetching menu:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// http://localhost:3000/menu/Spicy
router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType=req.params.tasteType;
    const result = await MenuItem.find({taste:tasteType});
    res.status(200).json(result);
  } catch (error) {
    console.log("Error while fetching menu:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports=router