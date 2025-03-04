# Popover 气泡卡片
> 点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。
和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 基本
>最简单的用法。

<br>
<p>
  <w-popover>
    <a href="javascript:;">Hover me</a>
    <a href="javascript:;" slot="title">这是标题</a>
    <ul slot="content" class="demo-popover-ul">
      <li>气泡卡片1</li>
      <li>气泡卡片2</li>
    </ul>
  </w-popover>
</p>

## 可控制的气泡卡片

<br>
<p>
  示例：
  <w-popover v-model="oneStatus" trigger="click">
    <a href="javascript:;">Click me</a>
    <a href="javascript:;" slot="title">这是标题</a>
    <div slot="content">
      <ul class="demo-popover-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
      <a href="javascript:;" @click="oneStatus = false">关闭</a>
    </div>
  </w-popover>
</p>

<p>
  <w-switch v-model="oneStatus" :stop="true">
    <span slot="open">不显示</span>
    <span slot="close">显示</span>
  </w-switch>
</p>

## 12方向

<br>
<br>
<br>

<div class="demo">
  <div class="demo-popover-top">
    <w-popover coreName="demo-popover-core" placement="topLeft">
      <w-button prefix="demo-tooltip">topLeft</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-popover-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-popover-core">
      <w-button prefix="demo-tooltip">top</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-popover-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-popover-core" placement="topRight">
      <w-button prefix="demo-tooltip">topRight</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-popover-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
  </div>
  <div class="demo-popover-left">
    <w-popover coreName="demo-popover-core" placement="leftTop">
      <w-button prefix="demo-tooltip">leftTop</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-popover-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-popover-core" placement="left">
      <w-button prefix="demo-tooltip">left</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-popover-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-popover-core" placement="leftBottom">
      <w-button prefix="demo-tooltip">leftBottom</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-popover-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
  </div>
  <div class="demo-popover-right">
    <w-popover coreName="demo-popover-core" placement="rightTop">
      <w-button prefix="demo-tooltip">rightTop</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-popover-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-popover-core" placement="right">
      <w-button prefix="demo-tooltip">right</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-popover-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-popover-core" placement="rightBottom">
      <w-button prefix="demo-tooltip">rightBottom</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-popover-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
  </div>
  <div class="demo-popover-bottom">
    <w-popover coreName="demo-popover-core" placement="bottomLeft">
      <w-button prefix="demo-tooltip">bottomLeft</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-popover-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-popover-core" placement="bottom">
      <w-button prefix="demo-tooltip">Bottom</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-popover-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
    <w-popover coreName="demo-popover-core" placement="bottomRight">
      <w-button prefix="demo-tooltip">bottomRight</w-button>
      <a href="javascript:;" slot="title">这是标题</a>
      <ul slot="content" class="demo-popover-ul">
        <li>气泡卡片1</li>
        <li>气泡卡片2</li>
      </ul>
    </w-popover>
  </div>
</div>

<br>
<br>
<br>
<br>
<br>

## API

### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|enterDelay|鼠标移入后延时多少才显示 Tooltip，单位：毫秒|Number|否|0|
|leaveDelay|鼠标移出后延时多少才隐藏 Tooltip，单位：秒|Number|否|100|
|trigger|触发行为，可选 hover\|click|String|否|hover|
|getContainer|浮层渲染父节点，默认渲染到 body 上|Function(triggerNode)|否|() => document.body|
|placement|气泡框位置|String|否|top|
|coreName|气泡框包裹元素的 class 名|String\|Array\|Object|否|() => {}|
|change|显示隐藏触发的方法，返回当前状态|Function|否|()=>{}|
|mountEnd|初始化完成之后触发，返回当前状态，和当前元素|Function|否|()=>{}|

<script>
import WSwitch from '../water/switch/Switch';
import WButton from '../water/button/Button';
import WPopover from '../water/popover/core';

export default {
  data() {
    return {
      sizeStatus: 0,
      oneStatus: false,
      groupConfig: ['small', '', 'large',],}
    },
  components: {
    WPopover,
    WButton,
    WSwitch,
  },
  methods: {
    changeOneStatus() {
      this.oneStatus = !this.oneStatus;
    },
  },
};
</script>
<style lang="scss">
@import '../water/button/style/button.scss';
@import '../water/switch/style/switch.scss';
@import '../water/popover/style/popover.scss';
</style>
