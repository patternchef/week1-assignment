// Import  here
import HTMLElement from './HTMLElement';
// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
    this.content = content;
    this.tag = 'div';
  }
}

const andIThinkToMyself = new DivElement('What a wonderful world');
console.log(andIThinkToMyself.render());

// Export class here
export default DivElement;
