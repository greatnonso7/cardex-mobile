export const populateHitSlop = (val: number = 0) => ({
  top: val,
  left: val,
  right: val,
  bottom: val,
});

export const capitalizeFirstLetter = (word: string) =>
  word && word?.charAt(0).toUpperCase() + word?.slice(1);

export const getLettersFromName = (fullname: string | null) => {
  if (fullname === null) {
    return;
  } else {
    const twoLetter = fullname?.split(' ');
    const firstTwoLetters = twoLetter?.slice(0, 2);
    const result = firstTwoLetters?.map(([v]) => v);
    const firstNameLetters = result?.join('');

    return firstNameLetters;
  }
};

export const getModelKeys = (model: any) =>
  Object.keys(model.effects({})).map(a => `${model.name}/${a}`);

export const formatAmount = (value: any) =>
  Number(value)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');
