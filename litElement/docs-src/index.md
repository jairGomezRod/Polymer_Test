---
layout: page.11ty.cjs
title: <app-element> ⌲ Home
---

# &lt;app-element>

`<app-element>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<app-element>` is just an HTML element. You can it anywhere you can use HTML!

```html
<app-element></app-element>
```

  </div>
  <div>

<app-element></app-element>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<app-element>` can be configured with attributed in plain HTML.

```html
<app-element name="HTML"></app-element>
```

  </div>
  <div>

<app-element name="HTML"></app-element>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<app-element>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;app-element&gt;</h2>
    <app-element .name=${name}></app-element>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;app-element&gt;</h2>
<app-element name="lit-html"></app-element>

  </div>
</section>
