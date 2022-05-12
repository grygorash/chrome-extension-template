const removeHTMLElement = (container: HTMLElement, selector: string) => {
  document.querySelector(selector)?.remove();
};

export default removeHTMLElement;
