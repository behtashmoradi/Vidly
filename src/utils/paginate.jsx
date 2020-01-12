import _ from "lodash";
export function Paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  console.log(startIndex);
  console.log(pageSize);
  console.log(items.length);
  var pagedItems = _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
  console.log("paginate fuction");
  console.log(pagedItems.length);
  return pagedItems;
}
