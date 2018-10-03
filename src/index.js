module.exports = function getZerosCount(number, base) {
  // your implementation\
  var arrFac = [];

  for (var i = 2; i <= base; i++){
  	if(base % i != 0) continue;
  	var k = 0;
  	while (base % i == 0){
  		base = base / i;
  		k++;
  	}
  	arrFac.push({value: i, count: k});
  }

  countArr = [];

  arrFac.forEach(factor => {
  	var count = 0;
  	var temp = number;
  	while (temp/factor.value != 0){
  		count = count + Math.floor(temp/factor.value);
  		temp = Math.floor(temp/factor.value);
  	}
  	countArr.push(Math.floor(count/factor.count));
  }) ;
  return Math.min.apply(null, countArr);
}