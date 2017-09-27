import React, { Component, PureComponent } from 'react';
import classNames from 'classnames';

export default class BreadcrumbSteps extends (PureComponent || Component) {
  render() {
    const props = this.props;
    const { className, prefix, children, current, sequence } = props;
    const stepWidth = `${100 / children.length}%`;
    const classString = classNames({
      [`${prefix}-steps`]: true,
      [`${prefix}-steps-breadcrumb`]: true,
      [`${className}`]: true
    });

    return (
      <div className={classString}>
        {React.Children.map(children, (item, index) => {
          const succClassName = index <= current - 1 ? 'is-finish' : '';
          let itemTitle = item.props.title;

          return (
            <div
              className={`${prefix}-steps-item ${succClassName}`}
              style={{ width: stepWidth }}
            >
              <div className={`${prefix}-steps-step`}>
                {sequence ? `${index + 1}. ${itemTitle}` : itemTitle}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
