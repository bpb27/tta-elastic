export const numberWithCommas = (num = 0) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const numberWithKs = (num = 0) => {
  return num > 999 ? (num / 1000).toFixed(0).replace('.0', '') + 'k' : num.toString();
};

export const replaceHTMLEntities = (text = '') => {
  return text.replace(/&amp;/g, '&'); // replace html entity ampersand with actual ampersand
};

export const capitalize = (text = '') => text.replace(/^\w/, c => c.toUpperCase());

export function parseTruthSocialBullshit(htmlString) {
  try {
    // Create a new DOMParser instance
    const parser = new DOMParser();
    // Parse the HTML string into a document
    const doc = parser.parseFromString(htmlString, 'text/html');

    // Function to convert the document into a plain text with links
    const traverseNodes = node => {
      let result = '';

      node.childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          result += child.textContent;
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          if (child.tagName === 'A') {
            // Extract the href and text of the link
            const href = child.getAttribute('href');
            const linkText = child.textContent.trim();
            result += `${linkText} (${href})`;
          } else {
            result += traverseNodes(child); // Recursively handle nested elements
          }
        }
      });

      return result;
    };

    // Traverse the document body to extract text and links
    return traverseNodes(doc.body).trim();
  } catch (e) {
    console.error('Failed to parse truth social bullshit', e);
    return '';
  }
}
