/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import en from './meta/en.json';
import ru from './meta/ru.json';

export function getCountryName(alpha: string, locale: string): string {
  switch (locale) {
    case 'ru':
      return ru[alpha];
    default:
      return en[alpha];
  }
}

export function getCountryNamesArray(alpha: string): string[] {
  const names = [];

  names.push(en[alpha]);
  names.push(ru[alpha]);

  return names;
}
