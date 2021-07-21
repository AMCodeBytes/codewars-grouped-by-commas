const groupByCommas = () => {

}

console.log(groupByCommas(1)); // 1
console.log(groupByCommas(10)); // 10
console.log(groupByCommas(100)); // 100
console.log(groupByCommas(1000)); // 1,000
console.log(groupByCommas(10000)); // 10,000
console.log(groupByCommas(100000)); // 100,000
console.log(groupByCommas(1000000)); // 1,000,000
console.log(groupByCommas(35235235)); // 35,235,235

Test.assertEquals(groupByCommas(1), '1');
Test.assertEquals(groupByCommas(10), '10');
Test.assertEquals(groupByCommas(100), '100');
Test.assertEquals(groupByCommas(1000), '1,000');
Test.assertEquals(groupByCommas(10000), '10,000');
Test.assertEquals(groupByCommas(100000), '100,000');
Test.assertEquals(groupByCommas(1000000), '1,000,000');
Test.assertEquals(groupByCommas(35235235), '35,235,235');
