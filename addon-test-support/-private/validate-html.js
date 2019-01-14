import { HTMLtoTree } from './html-parser';

let validateHtml = function(html) {
  let fastbootDocument = HTMLtoTree(html);
  let parser = new DOMParser();
  let correctedHtml = parser.parseFromString(html, "text/html");

  // debugger;

  return compareTrees(fastbootDocument, correctedHtml.body);
};

let zip = function(list1, list2) {
  let size = Math.max(list1.length, list2.length);
  return Array.from({ length: size })
    .map((e, idx) => [list1[idx], list2[idx]]);
};

let tagsMatch = function(node1, node2) {
  return node1 && node2 && node1.tagName.toLowerCase() === node2.tagName.toLowerCase();
}

let compareTrees = function(tree1, tree2) {
  return zip(tree1.children, tree2.children)
    .reduce((result, [node1, node2]) => {
      let sameTag = tagsMatch(node1, node2);
      return result && sameTag && compareTrees(node1, node2);
    }, true);
};

export { validateHtml };


// todo, should we keep this?

let parserErrors = function(html) {
  let parser = new DOMParser();
  // will this ever fail?
  let correctedHtml = parser.parseFromString(html, "text/html");

  return extractParsingErrors(correctedHtml);
}

let extractParsingErrors = function(doc) {
  // make sure this document has no parsererror tags
  return Array.from(doc.body.children).reduce((errors, node) => {
    if (node.tagName === "parsererror") {
      // add errors
      errors.push("figure out the error...");
      return errors;
    } else {
      return errors.concat(extractParsingErrors(node));
    }
  }, []);
};

export { parserErrors };
