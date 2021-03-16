set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "posts" (
	"postId" serial NOT NULL,
	"title" TEXT NOT NULL,
	"date" TEXT NOT NULL,
	"image" TEXT NOT NULL,
	"text" TEXT NOT NULL,
	"preview" TEXT NOT NULL,
	CONSTRAINT "posts_pk" PRIMARY KEY ("postId")
) WITH (
  OIDS=FALSE
);
