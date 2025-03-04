import { noopArray } from '../../utils/noop';

export default {
  columns: {
    type: Array,
    default: noopArray,
  },
  data: {
    type: Array,
    default: noopArray,
  },
  checked: {
    type: Array,
    default: noopArray,
  },
  optional: {
    type: Array,
    default: noopArray,
  },
  bordered: Boolean,
  fixed: String,
  rowSelection: {
    type: Object,
    default: () => ({ change: () => {} }),
  },
  scroll: Object,
  expandedRowRender: Function,
};
