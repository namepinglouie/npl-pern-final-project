const express = require("express");
const oatmeals = express.Router();
const {getAllOatmeals, getOatmeal, createOatmeal, deleteOatmeal, updateOatmeal} = require("../queries/oatmeals.js");
const {checkRating} = require("../validations/validate.js");

oatmeals.get("/", async (req, res) => {
    try {
        const allOatmeals = await getAllOatmeals();
        if(allOatmeals[0]) res.status(200).json(allOatmeals);
    } catch (error) {
        return error;
    }
});

oatmeals.get("/:id", async (req, res) => {
    try {
        const oatmeal = await getOatmeal(req.params.id);
        if(oatmeal.id) res.status(200).json(oatmeal);
    } catch (error) {
        return error;
    }
});

oatmeals.post("/", checkRating, async (req, res) => {
    try {
        const createdOatmeal = await createOatmeal(req.body);
        if(createdOatmeal.id) res.status(200).json(createdOatmeal);
        else res.status(404).json({error: "Cannot add Oatmeal!"});
    } catch (error) {
        return error;
    }
});

oatmeals.delete("/:id", async (req, res) => {
    try {
        const deletedOatmeal = await deleteOatmeal(req.params.id);
        if(deletedOatmeal.id) res.status(200).json(deletedOatmeal);
        else res.status(404).json({error: "Cannot delete Oatmeal"});
    } catch (error) {
        return error;
    }
});

oatmeals.put("/:id", checkRating, async (req, res) => {
    try {
        const updatedOatmeal = await updateOatmeal(req.params.id, req.body);
        if(updatedOatmeal.id) res.status(200).json(updatedOatmeal);
        else res.status(404).json({error: "Cannot edit Oatmeal"});
    } catch (error) {
        return error;
    }
});

module.exports = oatmeals;