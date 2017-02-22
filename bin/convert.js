/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 */

const fs = require('fs');
const path = require('path');
const data = require('./countries.json');

function getEmojiFlag(code) {
  const offset = 127397;
  return String.fromCodePoint(code.charCodeAt(0) + offset, code.charCodeAt(1) + offset)
}

const countries = data.filter((country) => {
  return country.countryCallingCodes.length;
}).map((country) => {
  return {
    alpha: country.alpha2 || country.alpha3,
    codes: country.countryCallingCodes,
    emoji: country.alpha2 ? getEmojiFlag(country.alpha2) : null
  };
});

fs.writeFileSync(
  path.resolve(__dirname, '../countries.json'),
  JSON.stringify(countries, null, '  ')
);
