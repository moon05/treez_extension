// sessionStorage.setItem("getSlugsAgain", true);


// if (sessionStorage.getItem("getSlugsAgain")) {
//   fetch(`http://localhost:5000/getTreeSlugList`)
//     .then((res) => res.json())
//     .then((data) => {
//       if (data === undefined) {
//         console.log("OOPS Got Nothing From Fetching");
//       } else {
//         console.log("Made Tree Slug Fetch Request");
//         localStorage.setItem("slugs", JSON.stringify(data["slug_list"]));
//         console.log("inside background");
//       }
//     });

//     sessionStorage.setItem("getSlugsAgain", false);
// }
