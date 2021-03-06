import smoothscroll from 'smoothscroll-polyfill';
import { cloneElement, useEffect } from 'react';
import type { FC, KeyboardEvent, MouseEvent, ReactElement } from 'react';

const Element: FC<{ children: ReactElement }> = ({ children }) => children;

function scrollTo(element?: Element, offSet = 0, timeout?: number) {
  const elemPos = element
    ? element.getBoundingClientRect().top + window.pageYOffset
    : 0;

  if (!timeout) {
    window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
  }

  setTimeout(() => {
    window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
  }, timeout);
}

interface ScrollProps {
  type: string;
  element: string;
  offset?: number;
  timeout?: number;
  children: ReactElement;
  counter: number;
}

const Scroll: FC<ScrollProps> = ({
  type,
  element,
  offset,
  timeout,
  children,
  counter,
}) => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  function handleClick(event: KeyboardEvent | MouseEvent) {
    event.preventDefault();
    let elem = null;
    let scroll = true;
    if (type && element) {
      switch (type) {
        case 'class':
          // eslint-disable-next-line prefer-destructuring
          elem = document.getElementsByClassName(element)[0];
          scroll = !!elem;
          break;
        case 'id':
          elem = document.getElementById(element);
          scroll = !!elem;
          break;
        default:
      }
    }

    return scroll && !!elem
      ? scrollTo(elem, offset, timeout)
      : console.log(`Element not found: ${element}`); // eslint-disable-line
  }

  return (
    <Element>
      {typeof children === 'object' ? (
        cloneElement(children, { onClick: handleClick })
      ) : (
        <span
          onClick={handleClick}
          onKeyDown={handleClick}
          role="tab"
          tabIndex={counter}
        >
          {children}
        </span>
      )}
    </Element>
  );
};

Scroll.defaultProps = {
  offset: 0,
  timeout: 300,
};

export default Scroll;
