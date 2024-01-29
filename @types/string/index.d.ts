interface String {
  wordsStartsWith(term: string, wordsRegExp?: RegExp): boolean;

  toHtml(): string;

  matchAll(regexp: RegExp): any;
}

interface StringConstructor {
  format(template: string, args: Array<string>): string;
}
