# Compass box-arrow v0.0.2

A scss mixin (compass) for simply generate box arrow.
By Naivencreatik

## Usage
import the "box-arrow" file

```scss
@include box-arrow($orientation, $position, $size, $color, $borderColor);
```
// Define short $params
$orientation : `top`, `right`, `bottom`, `left`
$position : `right`, `center`, `left`

##Example 
```scss
@import "box-arrow";

.box{
	@include box-arrow(top, center, 10, #fff, #e6e6e6);
}
```

## Browsers tested
  - IE 9+
  - FF
  - Chrome

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
