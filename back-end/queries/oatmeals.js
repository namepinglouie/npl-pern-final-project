const db = require("../db/dbConfig.js");

const getAllOatmeals = async () => {
    try {
        const allOatmeals =  await db.any("SELECT * FROM oatmeals;");
        return allOatmeals;
    } catch (error) {
        return error;
    }
};

const getOatmeal = async (id) => {
    try {
        const oneOatmeal = await db.one("SELECT * FROM oatmeals WHERE id = $1;", id);
        return oneOatmeal;
    } catch (error) {
        return error;
    }
};

const createOatmeal = async (oatmeal) => {
    try {
        if(!oatmeal.image || oatmeal.image === "") oatmeal.image = "https://dummyimage.com/200x200/8c878c.png";
        const newOatmeal = await db.one(
            "INSERT INTO oatmeals (name, calories, carb, fiber, sugar, fat, is_favorite, description, type, price, rating, featured, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *;",
            [oatmeal.name, oatmeal.calories, oatmeal.carb, oatmeal.fiber, oatmeal.sugar, oatmeal.fat, oatmeal.is_favorite, oatmeal.description, oatmeal.type, oatmeal.price, oatmeal.rating, oatmeal.featured, oatmeal.image]
        );
        return newOatmeal;
    } catch (error) {
        return error;
    }
};

const deleteOatmeal = async (id) => {
    try {
        const deletedOatmeal = await db.one("DELETE FROM oatmeals WHERE id = $1 RETURNING *;", id);
        return deletedOatmeal
    } catch (error) {
        return error;
    }
};

const updateOatmeal = async (id, oatmeal) => {
    try {
        if(!oatmeal.image || oatmeal.image === "") oatmeal.image = "https://dummyimage.com/200x200/8c878c.png";
        const updatedOatmeal = await db.one("UPDATE oatmeals SET name = $1, calories = $2, carb = $3, fiber = $4, sugar = $5, fat = $6, is_favorite = $7, description = $8, type = $9, price = $10, rating = $11, featured = $12, image = $13 WHERE id = $14 RETURNING *;",
        [oatmeal.name, oatmeal.calories, oatmeal.carb, oatmeal.fiber, oatmeal.sugar, oatmeal.fat, oatmeal.is_favorite, oatmeal.description, oatmeal.type, oatmeal.price, oatmeal.rating, oatmeal.featured, oatmeal.image, id]
        );
        return updatedOatmeal;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllOatmeals,
    getOatmeal,
    createOatmeal,
    deleteOatmeal,
    updateOatmeal
};