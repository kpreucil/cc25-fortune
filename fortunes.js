var fs = require('fs');

module.exports = {
  getFortune: function(callback){
      fs.readFile('./fortunes.json', function(err, data){
          var fortunes = data.toString();
          var fortuneArray = JSON.parse(fortunes);
          callback(fortuneArray[Math.floor(Math.random() * fortuneArray.length)]);
      })
  },
    
  addFortune: function(newFortune){
      fs.readFile('./fortunes.json', function(err, data){
          var fortunes = data.toString();
          var fortuneArray = JSON.parse(fortunes);
          fortuneArray.push(newFortune);
          fs.writeFile('./fortunes.json', JSON.stringify(fortuneArray));
      });
  }
    
};