# Switch 开关

> 开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；

- 和 `checkbox` 的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 基本

<br>

<w-switch></w-switch>

## 图标

<br>

<p>
  <w-switch>
    <span slot="open"><w-icon /></span>
    <span slot="close"><w-icon /></span>
  </w-switch>
</p>

## 两种大小

<br>
<p>
  <span>标准：</span><w-switch></w-switch>
</p>
<p>
  <span>小版：</span><w-switch size="small"></w-switch>
</p>

## 加载中

<br>

<p>
  <w-switch loading></w-switch>
</p>

## 不可用

<br>

<p>
  <span>效果：</span>
  <w-switch :disabled="disabled">
    <span slot="open"><w-icon /></span>
    <span slot="close"><w-icon /></span>
  </w-switch>
</p>
<p>
  <span>操作：</span>
  <w-switch v-model="disabled">
    <span slot="open">不可用</span>
    <span slot="close">可用</span>
  </w-switch>
</p>

## 拦截效果

<br>

<p>
  <w-switch :loading="isLoading" :before="before"></w-switch>
</p>

## API

### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|value|状态值|Boolean|否|无|
|v-model|双向数据绑定|Boolean|否|无|
|size|尺寸大小。可选值： small \| large \| normal |String|否|normal|
|disabled|处于不可用状态，点击事件失效，样式也会变|Boolean|否|无|
|loading|处于加载中状态，点击事件失效，样式也会变|Boolean|否|无|
|before|改变之前触发，返回 Promise 对象|Function|否|无|
|change|改变的时候触发，返回 当前状态|Function|否|() => {}|
|stop|是否点击事件冒泡|Boolean|否|无|

### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|改变的时候触发|当前状态|

<script>
import WIcon from '../water/icon/Icon';
import WSwitch from '../water/switch/Switch';

export default {
  data() {
    return {
      val: true,
      isLoading: false,
      disabled: false,
    };
  },
  methods: {
    change(value) {
      this.val = !value;
    },
    before: async function() {
      this.isLoading = true;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.isLoading = false;
          resolve()
        }, 2000);
      } )
    },
  },
  components: {
    WIcon,
    WSwitch,
  },
};
</script>
<style lang="scss">
@import '../water/icon/style/icon.scss';
@import '../water/switch/style/switch.scss';
</style>
