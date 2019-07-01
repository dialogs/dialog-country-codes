declare module './meta/en.json' {
  declare module.exports: {
    [string]: string,
  };
}

declare module './meta/ru.json' {
  declare module.exports: {
    [string]: string,
  };
}

declare module './meta/natives.json' {
  declare module.exports: {
    [string]: Array<string>,
  };
}

declare module './meta/countries.json' {
  declare module.exports: Array<{
    alpha: string,
    codes: Array<string>,
    emoji: string,
  }>;
}
