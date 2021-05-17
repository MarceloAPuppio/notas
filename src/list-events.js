const sortedByDate = (list) => {
  let sorted = list.sort((x, y) => x.fecha - y.fecha);
  return sorted;
};
const sortedByPin = (list) => {
  let pinned = list.filter((item) => item.pinned);
  let pinnedOff = list.filter((item) => !item.pinned);
  let sortedByPinned = [...sortedByDate(pinned), ...sortedByDate(pinnedOff)];
  return sortedByPinned;
};
export { sortedByDate, sortedByPin };
