function main() {
  
    this.root = document.getElementsByTagName("body");
    this.createElement.createElement = (elementName) => {
        let element = document.createElement(elementName);
        element.classList.add("container-sm");
        return element;
    };
    this.createContainer = function () {
        document.appendChild(createElement("div"));
    }
}

export default main;
