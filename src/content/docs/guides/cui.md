---
title: Custom UI
---

Selene uses Chromium Embedded Framework (CEF) to render UI provided by addons. This allows for UI to be implemented using typical web technologies such as HTML, CSS, and JavaScript, as well as related frameworks.

## Loading local files in CUI

Due to secure browser standards, local files cannot be accessed or loaded directly. Selene implements a `godot-file` pseudo-protocol for loading files such as images or stylesheets.

This example would load `cat.png` directly from one of the legal search paths.

```html
<img src="https://godot-file/cat.png" />
```

Legal search paths include:

-   `<YourSeleneDirectory>/ui/**`
-   `<YourSeleneDirectory>/bundles/**`

## Loading resources in CUI

While loading local files should suffice in most cases, you can also load packaged resources by using the `godot-resource` pseudo-protocol. These resources are loaded via Godot's resource system. At the moment, only `Image`s and `Texture2D`s are supported.

This example would load `selene-logo.png` through Godot's resource loader.

```html
<img src="https://godot-resource/selene-logo.png" />
```

## Interacting with CUI from Lua

Your lua scripts can interact with the UI by firing custom events. 

:::note
The lua bindings to register fire custom events have not yet been implemented.
:::

In your UI's javascript, you can listen for these events using the `window` object. Note that this only supports `CustomEvent`s and you should therefore choose an event name that isn't already used by the browser. Your event data will be found within the `detail` property.

```javascript
window.addEventListener('helloEvent', (event) => {
    console.log(event.detail);
});
```

## Interacting with Lua from CUI

Your UI can interact with Lua by sending POST requests to the `godot-rpc` pseudo-protocol, similar to how you would interact with a backend.

```javascript
fetch('https://godot-rpc/helloWorld', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        myMessage: 'Hello, world!',
    }),
});
```

:::note
The lua bindings to register custom procedures have not yet been implemented. Therefore, you are limited to the builtin procedures at the moment.
:::

### Builtin Procedures

Selene comes with a few builtin procedures that you can use without having to implement them yourself.

| Procedure   | Description                        | Arguments | Example                                                                                                         |
| ----------- | ---------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| `/quit`     | Quits the game                     | None      | `fetch('https://godot-rpc/quit', { method: 'POST' });`                                                          |
| `/open-url` | Opens a URL in the default browser | `url`     | `fetch('https://godot-rpc/open-url', { method: 'POST', body: JSON.stringify({ url: 'https://google.com' }) });` |
