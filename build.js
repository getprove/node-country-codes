
var csv       = require('csv')
  , path      = require('path')
  , fs        = require('fs')
  , countries = {}

csv()
  .from(path.join(__dirname, 'countries.csv'))
  .transform(function(row) {
    var iso2 = row[3]
    countries[iso2] = {
        name: row[0]
      , code: row[1]
      , iso3: row[2]
      , iso2: iso2
    }
  })
  .on('end', function() {
    fs.writeFile(path.join(__dirname, 'countries.json'), JSON.stringify(countries), function(err) {
      if (err) throw err
    })
  })


