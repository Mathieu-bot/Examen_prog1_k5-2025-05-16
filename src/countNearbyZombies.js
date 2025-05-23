const countNearbyZombies = (input) => {
  let inpt = input.slice(1);
  let res = 0;
  for (let v of inpt) {
    console.log(Number(v.split(" ")[0]) ** 2 + Number(v.split(" ")[1]) ** 2);

    if (Number(v.split(" ")[0]) ** 2 + Number(v.split(" ")[1]) ** 2 < 10000)
      res++;
  }
  return res;
};
module.exports = countNearbyZombies;
