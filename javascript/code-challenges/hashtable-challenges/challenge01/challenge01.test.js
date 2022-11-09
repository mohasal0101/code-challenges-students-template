"use strict";

const { Node, Tree, hashTableArray } = require("./challenge01");

describe("Testing hashTable 01", () => {
 let tree,
  hashTable = new hashTableArray();
 beforeAll(() => {
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(5);
  let four = new Node(7);
  let five = new Node(9);
  let six = new Node(14);
  

  one.left = two;
  one.right = three;
  two.left = four;
  two.right = five;
  three.left = six;
  

  tree = new Tree(one);
 });
 it("It should return true", () => {
  expect(hashTable.checkSum(tree, 15)).toBeTruthy();
 });
});