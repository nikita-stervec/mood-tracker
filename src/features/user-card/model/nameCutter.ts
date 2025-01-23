export const nameCutter = (name: string) => {
  if (name.includes(' ')) {
    const [first, second] = name.split(' ');
    return `${first[0]}${second[0]}`.toUpperCase();
  }
  return name.slice(0, 1).toUpperCase();
};
