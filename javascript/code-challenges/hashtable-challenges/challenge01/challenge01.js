"use strict";

class Node {
    constructor(value = null) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class Tree {
    constructor(root) {
      this.root = root || null;
    }
  
    preOrder() {
      let results = [];
      let traverse = (node) => {
        if (node && node.value) {
          results.push(node.value);
          if (node.left) traverse(node.left);
          if (node.right) traverse(node.right);
        }
      };
      traverse(this.root);
      return results;
    }
  }
  
  class hashTableArray {
    constructor() {
      this.storage = new Array();
    }
  
   set(key, value) {
    let hash = this.hash(key);
      this.storage[hash] = value;
    }

    checkSum(tree, sum) {
        let arr = tree.preOrder();
        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];
            let diff = sum - num;
            if (arr.includes(diff)) {
            return true;
            }
        }
        return false;
        }
  }
  
  module.exports = { Node, Tree, hashTableArray };