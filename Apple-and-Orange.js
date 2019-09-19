// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below, the red region denotes his house, where  is the start point, and  is the endpoint. The apple tree is to the left of his house, and the orange tree is to its right. You can assume the trees are located on a single point, where the apple tree is at point , and the orange tree is at point .

// When a fruit falls from its tree, it lands  units of distance from its tree of origin along the - axis.A negative value of  means the fruit fell  units to the tree's left, and a positive value of  means it falls  units to the tree's right.

// Given the value of  for  apples and  oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range )?

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let house = [s, t],
    houseLeft = s,
    houseRight = t,
    appleTree = a,
    orangeTree = b,
    appleIside = 0,
    orangeInside = 0;

  apples.map(apple => {
    let applesLocation = appleTree + apple;
    if (houseLeft <= applesLocation && applesLocation <= houseRight) {
      return appleIside++;
    }
  });

  oranges.map(orange => {
    let orangesLocation = orangeTree + orange;
    if (houseLeft <= orangesLocation && orangesLocation <= houseRight) {
      return orangeInside++;
    }
  });

  console.log(appleIside);
  console.log(orangeInside);
}
