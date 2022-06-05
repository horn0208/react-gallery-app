CREATE TABLE gallery(
	"id" SERIAL PRIMARY KEY,
	"path" varchar(200),
	"title" varchar(50),
	"description" varchar(250),
	"likes" integer
)
--updating table to set default value of likes to 0:
ALTER TABLE gallery ALTER COLUMN likes SET DEFAULT 0;

INSERT INTO gallery (path, title, description, likes)
VALUES
	('images/vietnam.jpeg', 'Con Dao Island, Vietnam', 'On a beach in Vietnam, a few days before Pi proposed.', 0),
	('images/laurel.jpeg', 'Minneapolis, MN', 'Laurel on her first trip to the dog park: unbridled joy.', 0),
	('images/laos.jpeg', 'Kuang Si Falls, Laos', 'Falls in the countryside near Luang Prabang, Laos.', 0),
	('images/font.jpeg', 'Fontainebleau, France', 'Climbing turtleshell-textured rocks in the forest of Fontainebleau.', 0),
	('images/moto.jpeg', 'Cat Ba Island, Vietnam', 'Motorbike rides with Pi on Cat Ba Island, Vietnam', 0),
	('images/palisade.jpg', 'Palisade Head, MN', 'Rachelle climbing at Palisade Head, before we got the first female ascents of Oz.', 0);

SELECT * FROM gallery ORDER BY id ASC;
-- to update like count:
UPDATE gallery SET likes = likes + 1 WHERE id=1;

DELETE FROM gallery WHERE id=1;

