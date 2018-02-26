class Sorter {
  constructor(arr=[]) {
    this.elements = arr;
    this.comparator = this._baseComparator;
  }
  add(element) {
    this.elements.push(element);
    return this;
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  _baseComparator(left, right) {
    return left - right;
  } 

  sort(indices) {
    var auxArray = [];
    indices.sort(this._baseComparator);
    indices.forEach((element) =>  {
      auxArray.push(this.elements[element]);
    });

    auxArray.sort(this.comparator);
 
    indices.forEach((element, index) => {
      this.elements[element] = auxArray[index];
    })

    return this;
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;