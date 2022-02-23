DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS oatmeals;

CREATE TABLE oatmeals (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    calories INTEGER NOT NULL DEFAULT 0,
    carb INTEGER NOT NULL DEFAULT 0,
    fiber INTEGER NOT NULL DEFAULT 0,
    sugar INTEGER NOT NULL DEFAULT 0,
    fat INTEGER NOT NULL DEFAULT 0,
    is_favorite BOOLEAN,
    description TEXT,
    type TEXT NOT NULL,
    price NUMERIC(4, 2) DEFAULT 0.00,
    rating SMALLINT DEFAULT 0,
    featured BOOLEAN,
    image TEXT
);
