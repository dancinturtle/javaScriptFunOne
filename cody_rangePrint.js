function rangePrint(start, end, skip) {
  while (start < end) {
    console.log(start);
    start += skip;
  }
}

rangePrint(2, 10, 2);
