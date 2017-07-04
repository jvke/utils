/**
 * mapApply(obj: { [string]: any }, fn(obj: any): any)
 * takes an iterable object, loops over
 * each keyed property, performing the
 * function given in the `fn` param
 */
function mapApply(obj, fn) {
  const keys = [...Object.keys(obj)];

  return keys.map(key => {
    return {
      [key]: fn(obj[key])
    };
  });
}
