export const wrapLabelAxis = (str: string, limit: number) => {
  const words = str.split(" ");
  let aux = [];
  let concat = [];

  for (let i = 0; i < words.length; i++) {
    concat.push(words[i]);
    let join = concat.join(" ");
    if (join.length > limit) {
      aux.push(join);
      concat = [];
    }
  }

  if (concat.length) {
    aux.push(concat.join(" ").trim());
  }

  return aux;
};
