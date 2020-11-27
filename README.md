# react-transition-group 学习笔记

## Transition

> 你可以使用 Transition 组件用一个简单的声明式 API 来描述一个组件从一个状态到另一个状态的变化，大多数情况用来实现组件挂载和卸载的动画，也可以用来实现组件的状态过渡。

> Transition 是一个基础组件，如果想在 CSS 中使用过渡，你可以使用 CSSTransition,它继承了 Transition 的所有特性，而且还包含了额外的一些更契合 css 的属性

> Transition 组件默认情况下不会改变组件的渲染行为，只会改变组件的 enter 和 exit 状态，可以通过添加样式来实现

```jsx
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

const Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
        {(state) => (
            <div
                style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                }}
            >
                I'm a fade Transition!
            </div>
        )}
    </Transition>
);
```

> 有四种状态：

-   entering
-   entered
-   exiting
-   exited

> Transition 通过**in**属性来改变状态，当**in**为 true 时表示从 enter 阶段开始，在这个阶段中，组件将会从当前状态切换到*entering*，然后当过渡完成后再切换到*entered*，以下代码为示例代码：

```jsx
function App() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <Transition in={inProp} timeout={500}>
        {state => (
          // ...
        )}
      </Transition>
      <button onClick={() => setInProp(true)}>
        Click to Enter
      </button>
    </div>
  );
}
```

> 当按钮按下后，组件将会从在*entering*状态保持 500 毫秒（timeout 的值），然后最后过渡到*entered*，*exiting*和*exited*同理。

### Props

#### nodeRef [shape]

> 对需要过渡的 dom 的引用

#### **_children_** [Function|element] (required)

> 一个函数而并非一个 React 元素，当过渡状态为上述四种状态之一时被调用

```jsx
<Transition in={this.state.in} timeout={150}>
    {(state) => <MyComponent className={`fade fade-${state}`} />}
</Transition>
```

#### **_in_** [boolean-false]

> 显示组件的状态，

#### mountOnEnter [boolean-false]

> 默认情况下子组件会在父组件挂载时立即挂载，如果你想在**in**第一次为 true 之前实现延迟挂载，可以将*mountOnEnter*设置为 true。

> `in={false}`时不渲染子组件，当第一次 in 变为 true 的时候才渲染子组件

#### unmountOnExit [boolean-false]

> 默认情况下子组件依然挂载当前状态为*exited*时，如果此时想让子组件卸载，则可以设置*unmountOnExit*为 true。

#### appear [boolean-false]

> 默认情况下子组件在*in*属性为 true，首次挂载时，不会有状态的过渡，如果此时让子组件状态过渡，可以同时设置*appear*和*in*为 true。（**注意**:此处的过渡不是 css 的过渡，而是组件状态的过渡，可以在 react 的开发者工具中看到组件的 status 的变化, 后续提到的过渡同理）

#### enter [boolean-true]

> 使用/禁用 enter 过渡

#### exit [boolean-true]

> 使用/禁用 exit 过渡

#### timeout [number | { enter?: number, exit?: number, appear?: number }]

> 过渡的时长，单位：毫秒，必填，除非添加了*addEndListener*

```jsx
//如果仅提供一个值，则所有过渡共用这个值
timeout={500}
// 也可以单独设置每个过渡的时长
timeout={{
 appear: 500,
 enter: 300,
 exit: 500,
}}
```

-   appear 的默认值为 enter 的值
-   enter 的默认值为 0
-   exit 的默认值为 0

#### addEndListener [Function]

> 添加一个自定义钩子，提供两个参数，过渡dom和done回调

- done函数执行后，立即改变组件状态，默认执行

#### onEnter [Function(node: HtmlElement, isAppearing: bool) -> void]

> 在进入*entering*状态之前调用,第二个参数isAppear表明是否是首次挂载的entering过渡, 当且仅当*appear*和*in*都为true时为true。

#### onEntering [Function(node: HtmlElement, isAppearing: bool) -> void]

> 在进入*entering*状态之后调用

#### onEntered [Function(node: HtmlElement, isAppearing: bool) -> void]

> 在进入*entered*状态之后调用

#### onExit [Function(node: HtmlElement) -> void]

> 在进入*exiting*状态之前调用

#### onExiting [Function(node: HtmlElement) -> void]

> 在进入*exiting*状态之后调用

#### onExited [Function(node: HtmlElement) -> void]

> 在进入*exited*状态之后调用

