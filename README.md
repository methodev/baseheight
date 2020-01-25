# jQuery BaseHeight Plugin

Equal heights for set of responsive columns.

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/) [![GitHub license](https://img.shields.io/badge/license-MIT-yellow.svg)](https://raw.githubusercontent.com/martinmethod/baseheight/prod/LICENSE-MIT) [![Travis](https://img.shields.io/travis/martinmethod/baseheight.svg)](https://travis-ci.org/martinmethod/baseheight) [![David](https://img.shields.io/david/dev/martinmethod/baseheight.svg)](https://david-dm.org/martinmethod/baseheight?type=dev) [![GitHub release](https://img.shields.io/github/release/martinmethod/baseheight.svg)](https://github.com/martinmethod/baseheight/releases/latest) [![npm](https://img.shields.io/npm/v/baseheight.svg)](https://www.npmjs.com/package/baseheight) [![Bower](https://img.shields.io/bower/v/baseheight.svg)](https://github.com/martinmethod/baseheight)

## Description

BaseHeight is just another simple jQuery plugin that equalizes responsive heights of given elements. It works perfectly with multiple sets on a single page and it's
also a great module to control due to it's methods.

## Demo

<a href="https://baseheight.metodiev.dev" target="_blank">baseheight.metodiev.dev</a>

## Getting Started

You can [download the plugin as an archive][zip].

[zip]: https://github.com/martinmethod/baseheight/zipball/prod

Or you can grab it by using **npm**:

```javascript
npm install baseheight
```

Or you can grab it by using **Bower**:

```javascript
bower install baseheight
```

## Installation

Include the script after the jQuery library (unless you package scripts otherwise):

```html
<script src="/path/to/baseheight.min.js"></script>
```

## Usage

### Initialization

There are two ways of initializing BaseHeight.

#### I. jQuery function

The first way is as follows:

```javascript
$.baseheight(); // returns the target
```

This is the most basic initialization. It's a good way to use only if it's for a single set of elements on a page. By calling it so, the plugin will look for anything with "**baseheight**" class. If no such elements, nothing will happen.

Of course, you can also provide specific targets with a custom selector by doing so:

```javascript
$.baseheight({
    target: $('selector')
});
```

#### II. Method function

The second way is as a method function. So, we can also use the plugin this way:

```javascript
$('selector').baseheight(); // returns the target
```

### Options

#### target

Defines a custom target selector.

*The target property is only available when initialize BaseHeight as a jQuery function like the example below.*

```javascript
$.baseheight({
    target: $('selector')
});
```

Default value: **$('.baseheight')**

### Methods

#### baseheightOff()

Removes the alignment and turns the equalizer off.

```javascript
var columns = $('selector').baseheight();

columns.baseheightOff();
```

#### baseheightOn()

Aligns the targets and turns the equalizer on.

```javascript
var columns = $('selector').baseheight();

columns.baseheightOn();
```

#### destroy()

Removes the alignment and deletes all BaseHeight methods from the target.

```javascript
var columns = $('selector').baseheight();

columns.destroy();
```

## Browsers compatibility

- Apple Safari
- Google Chrome
- Microsoft Internet Explorer 9+
- Mozilla Firefox
- Opera

## Dependencies

- [jQuery][jq]

[jq]: https://github.com/jquery/jquery.git

## License

Copyright © 2017 Martin Metodiev. Licensed under the MIT license. [See here for more details.][licence]

[licence]: https://raw.github.com/martinmethod/baseheight/prod/LICENSE-MIT
