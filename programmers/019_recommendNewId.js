function solution(new_id) {
  const regex1 = /[^a-z0-9-_.]/g;
  const regex2 = /\.{2,}/g;
  const regex3 = /^\.|\.$/g;
  const id = new_id
    .toLowerCase()
    .replaceAll(regex1, "")
    .replaceAll(regex2, ".")
    .replaceAll(regex3, "")
    .slice(0, 15)
    .replaceAll(regex3, "");

  if (id === "") return "aaa";
  if (id.length <= 2)
    return id.slice(0, id.length) + id.slice(-1).repeat(3 - id.length);

  return id;
}
