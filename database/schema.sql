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
	"preview" TEXT NOT NULL,
	"author" TEXT NOT NULL,
	CONSTRAINT "posts_pk" PRIMARY KEY ("postId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "paragraphs" (
	"paragraphId" serial NOT NULL,
	"text" TEXT NOT NULL,
	CONSTRAINT "paragraphs_pk" PRIMARY KEY ("paragraphId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "postParagraph" (
	"postId" integer NOT NULL,
	"paragraphId" integer NOT NULL
) WITH (
  OIDS=FALSE
);





ALTER TABLE "postParagraph" ADD CONSTRAINT "postParagraph_fk0" FOREIGN KEY ("postId") REFERENCES "posts"("postId");
ALTER TABLE "postParagraph" ADD CONSTRAINT "postParagraph_fk1" FOREIGN KEY ("paragraphId") REFERENCES "paragraphs"("paragraphId");
