let htmlCompare = function(html1, html2) {
  let document1 = htmlToDocument(html1);
  let document2 = htmlToDocument(html2);

  return isValidDocument(document1) &&
    isValidDocument(document2) &&
    compareTrees(document1, document2);
};

let isValidHtml = function(html) {
  let doc = htmlToDocument(html);
  return isValidDocument(doc);
};

let htmlToDocument = function(html) {
  let parser = new DOMParser();
  return parser.parseFromString(html, "application/xml");
}

let isValidDocument = function(doc) {
  // make sure this document has no parsererror tags
  return Array.from(doc.children).reduce((result, node) => {
    // console.log(result, node, node.tagName);
    return result && node.tagName !== 'parsererror' && isValidDocument(node);
  }, true);
};

let zip = function(list1, list2) {
  let size = Math.max(list1.length, list2.length);
  return Array.from({ length: size })
    .map((e, idx) => [list1[idx], list2[idx]]);
};

let tagsMatch = function(node1, node2) {
  return node1 && node2 && node1.tagName === node2.tagName;
}

let compareTrees = function(tree1, tree2) {
  return zip(tree1.children, tree2.children)
    .reduce((result, [node1, node2]) => {
      let sameTag = tagsMatch(node1, node2);
      return result && sameTag && compareTrees(node1, node2);
    }, true);
};

export {
  htmlCompare,
  isValidHtml
};
