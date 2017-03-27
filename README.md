# ezDOM
Lightweight JS library that extends the DOM elements with few utility methods

## Usage

```javascript
import workTheMagic from 'ezDOM'

var options = {}

workTheMagic(options)
```

After that you may use the package's functionality to unlimited extent

```javascript

(function doShowExample (element) {

// Append a div element
var createdElement = element.append('div');

// Add a class for the created element
createdElement.class = 'nice';

// Classes may also be added by addClass & toggleClass methods:
createdElement.toggleClass('nice');

// To get the class list, call the .class getter
var clsList = createdElement.class; // returns []

})(document.body)
```


## Features



### HTMLElement extensions

| HTMLElement.prototype.          | Description
|---------------------------------|----------------------------
| `append`  | Appends the given element to calling element as a last child
| `prepend` | Prepends the given element to calling element as a first child
| `insert`  | Inserts the given element as the n:th child to the calling element
| `addClass`  | Adds the given class to the caller's class list (for each parameter provided).
| `removeClass`  | Removes the given classes from the caller's class list (for each parameter provided).
| `toggleClass`  | Removes the given class from the caller's class list if the element has the provided class. If the element does not have the given class, adds the class for the element.


#### .append & .prepend

**Signature** `function append (el: HTMLElement | string): HTMLElement | null`

Append an element as a `:last-child` for the calling element

```javascript
document
  .querySelector('div')
  .append('div')

document
  .querySelector('div')
  .prepend('div')
```

#### .insert

**Signature** `function insert (el: HTMLElement | string, index?: HTMLElement | number | 'first'): HTMLElement | null`

Insert the `el` element as a `:nth-element(index)` for the calling element.

If the index provided is of type element, el is inserted just before it (assuming the index is a child of the caller - otherwise throws an error). The index argument also accepts keywords 'first' and 'last'. If omitted, the element is inserted as a last child.

```javascript
let el = document
  .querySelector('div')

el.insert('span')

document
  .querySelector('div')
  .prepend('div')
```

#### .addClass, .removeClass, .toggleClass

**Signature** `function addClass (...classNames): DOM`

Add or remove class(es) for/from the calling element

Shortcut setter for addClass `element.class = <className>`

```javascript
const el = document.querySelector('div')
const log = () => console.log(el.getAttribute('class'))

// Adds classes 'emphasized-text' and 'lol' for the el
// Outputs 'emphasized-text 'lol'
el.addClass('emphasized-text', 'lol')
log()

// Removes the 'emphasized-text' class from el
// Outputs 'lol'
el.removeClass('emphasized-text')
log()

// Removes the 'lol' class from el and adds the 'derp-a-derpy' class
// Outputs 'derp-a-derpy'
el.toggleClass('derp-a-derpy', 'lol')
log()
```
