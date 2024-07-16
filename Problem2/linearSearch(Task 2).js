function linearSearch(SearchFor, searchFrom) {
  let i, isFound;
  for (i = 0; i < searchFrom.length; i++) {
    if (SearchFor === searchFrom[i]) {
      isFound = true;
      console.log(`Found ${SearchFor} in the list at ${i + 1} try(s)...`);
      break;
    }
  }

  if (!isFound) {
    console.log("Didn't find his ass...");
  }
}

linearSearch(10, [31, 35, 310, 1, 5, 10, 360, 32, 52]);
