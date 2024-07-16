(() => {
  let trys = 1;
  function binarySearch(searchFor, searchFrom) {
    if (searchFrom.length === 0) {
      console.log("Didn't find his ass...");
      return;
    }
    let middle = parseInt(searchFrom.length / 2);

    if (searchFor === searchFrom[middle]) {
      let msg = `Found ${searchFor} in the list at ${trys} try(s)`;
      console.log(trys !== 1 ? msg : `${msg}, ---BEST CASE O(1)---`);
      return;
    } else if (searchFor > searchFrom[middle]) {
      trys++;
      binarySearch(searchFor, searchFrom.slice(middle + 1));
    } else if (searchFor < searchFrom[middle]) {
      trys++;
      binarySearch(searchFor, searchFrom.slice(0, middle));
    }
  }
  // Binary search assumes the given elements are already sorted!
  binarySearch(32, [1, 5, 10, 31, 32, 35, 52, 310, 360]);
})();
