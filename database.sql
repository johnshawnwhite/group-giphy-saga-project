CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- Create the table where we are saving our favorite gifs
CREATE TABLE "favorite" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (100) NOT NULL,
	"url" VARCHAR (255) NOT NULL
);

-- Joint table where we assing many categories to our favorite gifs 
CREATE TABLE "favorite_category" (
	"id" SERIAL PRIMARY KEY,
	"favorite_id" INT REFERENCES "favorite" ON DELETE CASCADE,
	"category_id" INT REFERENCES "category"
);

-- Placeholder data
INSERT INTO "favorite" ("name", "url")
	VALUES ('regular not made up name what are you talking about','https://media0.giphy.com/media/2sj8mLiIYqWsG0tWHb/giphy.gif?cid=c6f53b158b2def2d2c8f2e609ccbf49a6f6d89b8d3760bb6&rid=giphy.gif&ct=g');
	
INSERT INTO "favorite_category" ("favorite_id", "category_id")
	VALUES (2,1);