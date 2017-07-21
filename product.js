function product(values) {
  return (values === null || values.length === 0)  ? null : values.reduce((acc, num) => acc * num);
}

product([1, 2, 3, 4, 5, 6, 7, 8, 9]);
