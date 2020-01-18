import _ from "lodash";
export function Paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  var pagedItems = _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();

  return pagedItems;
}
