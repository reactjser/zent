import { getOptionsLabel } from './utils';

/**
 * 通用的 defaultProps
 */
export const commonProps = {
  value: [],
  options: [],
  changeOnSelect: false,
  placeholder: '',
  className: '',
  popupClassName: 'zent-cascader__popup',
  renderValue: getOptionsLabel,
  clearable: false,
};
