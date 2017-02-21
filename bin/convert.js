/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 */

const fs = require('fs');
const path = require('path');
const data = require('./countries.json');

const countries = [];

function getEmojiFlag(code) {
  const offset = 127397;
  return String.fromCodePoint(code.charCodeAt(0) + offset, code.charCodeAt(1) + offset)
}

data.forEach((country) => {
  const data = {
    alpha2: country.alpha2,
    alpha3: country.alpha3,
    codes: country.countryCallingCodes,
    emoji: country.alpha2 ? getEmojiFlag(country.alpha2) : null
  };

  if (country.countryCallingCodes.length) {
    countries.push(data);
  }
});

console.log(countries.length)

fs.writeFileSync(
  path.resolve(__dirname, '../countries.json'),
  JSON.stringify(countries, null, '  ')
);
