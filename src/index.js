class Sorter {
  constructor(arr = []) {
    this.arr = arr;
    this.comparator = this.baseComparator;
  }
  
  baseComparator(a, b){
    return a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr
  }

  sort(indices) {
    var auxArray = [];
    indices.sort(this.baseComparator);
    indices.forEach((element) => {
      auxArray.push(this.arr[element]);
    });

    auxArray.sort(this.comparator);
 
    indices.forEach((element, index) => {
      this.arr[element] = auxArray[index];
    })

    return this.arr;
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
