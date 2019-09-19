// Maria plays college basketball and wants to go pro.Each season she maintains a record of her play.She tabulates the number of times she breaks her season record for most points and least points in a game.Points scored in the first game establish her record for the season, and she begins counting from there.
// For example, assume her scores for the season are represented in the array.Scores are in the same order as the games played.She would tabulate her results as follows:
// Game  Score  Minimum  Maximum   Min Max
// 0      12     12       12       0   0
// 1      24     12       24       0   1
// 2      10     10       24       1   1
// 3      24     10       24       1   1
// Given Maria's scores for a season, find and print the number of times she breaks her records for most and least points scored during the season.

function breakingRecords(scores) {
  let firstScore = scores[0];
  let highestResult = 0;
  let highResultCount = 0;
  let lowestResult = scores[0];
  let lowerResultCount = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > firstScore && scores[i] > highestResult) {
      highestResult = scores[i];
      highResultCount++;
    } else if (scores[i] < firstScore && scores[i] < lowestResult) {
      lowestResult = scores[i];
      lowerResultCount++;
    }
  }
  return [highResultCount, lowerResultCount];
}
