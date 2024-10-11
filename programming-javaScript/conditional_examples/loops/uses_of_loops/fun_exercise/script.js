let cubes = "ABCDEFG";

//styling console output using CSS with a %c format specifier
for (let index = 0; index < cubes.length; index++) {
  let styles =
    "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
  console.log("%c" + cubes[index], styles);
}
