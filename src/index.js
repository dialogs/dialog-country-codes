/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */
 
import countries from '../countries.json';
 
export type CountryInfo = {
  alpha: ?string,
  codes: string[],
  emoji: ?string
};
 
export function getCountries(): CountryInfo[] {
  return countries;
}