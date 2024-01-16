import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res)=>{
  res.render("index.ejs");
});

app.get("/ViewPost", (req, res)=>{
  res.render("ViewPost.ejs");
});

app.post("/Submit", (req, res) => {
  const PostTitle = req.body["blogTitle"];
  const PostDescription = req.body["blogDescription"];
  res.render("ViewPost.ejs", {
    Title: PostTitle,
    Description:  PostDescription
  });
});

app.get("/NewPost", (req, res)=>{
  res.render("NewPost.ejs");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });