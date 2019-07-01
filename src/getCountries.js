/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow strict
 */

import countries from './meta/countries.json';

export type CountryInfo = {
  alpha: string,
  codes: string[],
  emoji: string,
};

export function getCountries(): CountryInfo[] {
  return countries;
}
