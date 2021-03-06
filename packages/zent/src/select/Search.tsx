import * as React from 'react';
import { forwardRef } from 'react';
import cx from 'classnames';

export interface ISelectSearchProps {
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onIndexChange(delta: number): void;
  onEnter(): void;
  autoWidth?: boolean;
}

interface ISelectImperativeHandlers {
  focus: () => void;
}

function SelectSearch(
  {
    placeholder,
    onChange,
    onIndexChange,
    onEnter,
    autoWidth,
    value,
  }: ISelectSearchProps,
  cmdRef: React.RefObject<ISelectImperativeHandlers>
) {
  const ref = React.useRef<HTMLInputElement>(null);
  const focusSearchInput = React.useCallback(() => {
    ref.current!.focus({
      preventScroll: true,
    });
  }, [ref]);

  React.useImperativeHandle(cmdRef, () => ({
    focus: () => {
      focusSearchInput();
    },
  }));

  React.useLayoutEffect(() => {
    focusSearchInput();
  }, [focusSearchInput]);

  // We measure width and set to the input immediately
  const mirrorValue = value || placeholder;
  const searchClass = cx('zent-select-search-wrap', {
    'zent-select-search-wrap-auto-width': autoWidth,
  });

  return (
    <span className={searchClass}>
      <input
        ref={ref}
        placeholder={placeholder}
        className="zent-select-search"
        value={value}
        onChange={onChange}
        onKeyDown={e => {
          switch (e.key) {
            case 'ArrowUp':
              onIndexChange(-1);
              break;
            case 'ArrowDown':
              onIndexChange(1);
              break;
            case 'Enter':
              onEnter();
              break;
            default:
              break;
          }
        }}
      />
      {/* Measure Node */}
      {autoWidth && (
        <p className="zent-select-search-mirror" aria-hidden>
          {mirrorValue}
        </p>
      )}
    </span>
  );
}

export default forwardRef(SelectSearch);
