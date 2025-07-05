const express = require("express");
const router = express.Router(); //this router is exported in bottom and imported in myNewServer.js

const MenuItem = require("../Modals/MenuItem");

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
    const tasteType = req.params.tasteType;
    const result = await MenuItem.find({ taste: tasteType });
    res.status(200).json(result);
  } catch (error) {
    console.log("Error while fetching menu:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


//Deleting a menu item by id
router.delete("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const response = await MenuItem.findByIdAndDelete(menuId);
    if (!response) {
      return res.status(400).json({ error: "Menu Item Not Found!" });
    }
    return res.status(200).json({ message: "Menu Item Deleted Successfully!" });
  } catch {
    console.log("Error while deleting a menu item record", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//Updating Menu Item data via id
router.put("/:id", async (req, res) => {
  try {
    const menuItemId = req.params.id;
    const updatedMenuItem = req.body;
    const response = await MenuItem.findByIdAndUpdate(
      menuItemId,
      updatedMenuItem,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!response) {
      return res.status(404).json({ error: "Menu Item not found!" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while updating Menu Item data", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//getting menu item by name:
router.get("/name/:name",async(req,res)=>{
  try{
    const menuName=req.params.name;
    const result=await MenuItem.find({name:menuName})
    if(!result.length>0){
      return res.status(404).json({ error: "Menu not found!" });
    }
    res.status(200).json(result)
  }catch(err){
    console.log("Error while fetching Menu:", error);
    res.status(500).json({ error: "Internal server error" });
  }
})

//Example of middleware (31_MiddleWare.txt), getting menu items by price
// http://localhost:3000/menu/price/1000
router.get("/price/:price", async (req, res) => {
  try {
    const price = req.params.price;
    const result = await MenuItem.find({ price:price });
    if(!result.length>0){
      return res.status(404).json({error:`No Item Found For ${price} RS.`})
    }
    res.status(200).json(result);
  } catch (error) {
    console.log("Error while fetching menu:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//Note: to see about update and delete visit files 26 and 27 and personRoutes file

module.exports = router;
