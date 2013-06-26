# Compass box-arrow v0.0.1

A scss mixin (compass) for simply generate box arrow.
By Naivencreatik

## Usage
import the "box-arrow" file and the "animate" folder (on directory : app/styles/)

```scss
@include box-arrow($param, $size, $color, $borderColor);
```
// Define short $param
`top`, `right`, `bottom`, `left`

##Example 
```scss
@import "animate/animations";
@import "box-arrow";

.box{
    @include box-arrow(top, 10, #fff, #e6e6e6);
}
```

## Browsers tested
  - IE 9+
  - FF
  - Chrome

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)