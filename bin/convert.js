/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 */

const fs = require('fs');
const path = require('path');
const data = require('./countries.json');

const countries = [];

data.forEach((country) => {
  countries.push({
    name: country.name,
    codes: country.countryCallingCodes,
    emoji: country.emoji
  });
});

fs.writeFileSync(
  path.resolve(__dirname, '../countries.json'),
  JSON.stringify(countries, null, '  ')
);
