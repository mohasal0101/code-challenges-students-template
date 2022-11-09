class hashTableArray {
    constructor() {
     this.storage = {};
    }
   
    set(key, value) {
     if (!this.storage[key]) this.storage[key] = { value: value };
    }
   }
   
   const onRepeat = (str) => {
    let arr = [],
     onRepeat,
     splitted = str.split(" ");
    for (let i = 0; i < splitted.length; i++) {
     arr.includes(splitted[i]) ? (onRepeat = splitted[i]) : arr.push(splitted[i]);
     if (onRepeat) return onRepeat;
    }
    return "No Repetition";
   };
   console.log(onRepeat("I am ASAC learning programming at ASAC"));
   
   module.exports = { hashTableArray, onRepeat }; 