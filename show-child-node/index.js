/*Your mission here is to create a showChild() function that shows one of the children of a DOM element node. This function takes as parameter the parent node and the child node index. Error cases like a non-element node or an out-of-limits index must be taken into account.*/

//function showChild(parent, index) {
// console.log(parent.childNodes[index]);
//}

//showChild(document.body, 1);

// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node

const showChild = (node, index) => {
  console.log(node.childNodes[index]);
};

// Should show the h1 node
showChild(document.body, 1);

// Should show "Incorrect index"
showChild(document.body, -1);

// Should show "Incorrect index"
showChild(document.body, 8);

// Should show "Wrong node type"
showChild(document.body.childNodes[0], 0);
