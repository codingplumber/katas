class SmallestIntegerFinder {
  findSmallestInt(args) {
    const sorted = args.sort((a, b) => b - a);
    return sorted.pop();
  }
}
