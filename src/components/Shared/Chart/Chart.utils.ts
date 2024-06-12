export function reduceArray(
  array: any[],
  count: number,
): Array<{ item: any; initialIndex: number }> {
  const length = array.length;
  if (count >= length) {
    return array.map((item, index) => ({ item, initialIndex: index }));
  }

  const step = Math.floor(length / count);
  const result = [];
  let index = 0;

  for (let i = 0; i < count; i++) {
    result.push({
      item: array[index],
      initialIndex: index,
    });
    index += step;
  }

  return result;
}
