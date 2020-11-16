export function getSlugsFromSessionStorage() {
  var a = JSON.parse(localStorage.getItem("slugs"));
  console.log(a, "inside helper")
  return a;
}

export const popSlugFromSessionStorage = () => {
    var slugs;
  };
  