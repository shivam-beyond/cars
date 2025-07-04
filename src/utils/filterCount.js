export default function filterCount(filters) {
  const { make, color } = filters;

  const makeCount = Object.values(make).filter(Boolean).length;
  const colorCount = Object.values(color).filter(Boolean).length;

  return makeCount + colorCount;
}
