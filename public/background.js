var visitCountObj = { count: 1 };

localStorage.setItem("count", 1);

fetch(
  `http://localhost:5000/getTreeSlugList?visitCount=${encodeURIComponent(
    localStorage.getItem("count")
  )}`
)
  .then((res) => res.json())
  .then((data) => {
    if (data === undefined) {
      console.log("OOPS Got Nothing");
    } else {
      console.log("Made Tree Slug Fetch Request");
      localStorage.setItem("slugs", JSON.stringify(data["random20plants"]));
      console.log(data);
    }
  });
