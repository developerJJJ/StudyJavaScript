class Queue {
    constructor() {
      this._data = [];
    }
    put(item) {
      this._data.push(item);
    }
    get() {
      return this._data.shift();
    }
  }
  
  const queueEx = new Queue();
  queueEx.put(1);
  queueEx.put(2);
  queueEx.put(3);
  queueEx.put(4);
  queueEx.get();  
  queueEx.get();

  console.log(queueEx._data);
