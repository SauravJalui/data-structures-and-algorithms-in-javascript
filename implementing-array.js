class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    //this somehow doesn't work,
    //it does not return the last item that was deleted;idk why
    //solved: we need to console.log pop to see the popped item
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);

    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
console.log(newArray);
console.log(`The new element added to the array is: ${newArray.push(2)}`);
console.log(`The new element added to the array is: ${newArray.push(3)}`);
console.log(`The new element added to the array is: ${newArray.push(34)}`);
console.log(`The new element added to the array is: ${newArray.push(5)}`);
//can't do this console.log using object literals idk why
// console.log(`The latest array is: ${newArray}`);
console.log(newArray);
console.log(`item popped is: ${newArray.pop()}`);
console.log(newArray);
console.log(`item deleted is: ${newArray.delete(2)}`);
console.log(newArray);
//how would we display what index we asked for?
console.log(`item at index ${this.index} is: ${newArray.get(1)}`);
