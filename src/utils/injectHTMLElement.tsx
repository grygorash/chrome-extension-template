import { render } from 'react-dom';
import { ReactElement } from 'react';
import forEach from 'lodash/forEach';

interface IAttributes {
  id?: string,
  class?: string
}

const injectHTMLElement = (
  container: HTMLElement,
  reactElement: ReactElement,
  attributes: IAttributes = {},
) => {
  const div = document.createElement('div');

  forEach(attributes, (attribute, key) => div.setAttribute(`${key}`, attribute as string));

  container.prepend(div);

  render(reactElement, div);
};

export default injectHTMLElement;
