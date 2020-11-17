export function getSlugsFromSessionStorage() {
  var a = JSON.parse(sessionStorage.getItem("slugs"));
  return a;
}

export function popSlugFromSessionStorage() {
  var slugs = JSON.parse(sessionStorage.getItem("slugs"));
  slugs.shift();
  sessionStorage.setItem("slugs", JSON.stringify(slugs));
}

export function isSlugListEmpty() {
  var arr = JSON.parse(sessionStorage.getItem("slugs"));
  if (arr === undefined || arr.length === 0) {
    return true;
  } else {
    return false;
  }
}

export function slugLoad() {
  fetch(`http://localhost:5000/getTreeSlugList`)
    .then((res) => res.json())
    .then((data) => {
      if (data === undefined) {
        console.log("OOPS Got Nothing From Fetching");
      } else {
        console.log("Made Tree Slug Fetch Request");
        sessionStorage.setItem("slugs", JSON.stringify(data["slug_list"]));
      }
    });

  sessionStorage.setItem("getSlugsAgain", false);
}
