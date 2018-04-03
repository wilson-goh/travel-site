what is css workflow
- autoprefixer
- css preprocessors SASS less SCSS ...PostCSS
- css variables
  ex $mainBlue : #2f5572;
- nested css`  



vocab
async function that need a return .....
gulp.src()
.pipe()
gulp.dest()

setup css workflow

B.E.M : BEM
 B: A Block is an independent reusable part of our design
 E: An element belongs to a block.
    it cannot be used outside of the block that it belongs to.
 M: A modifier can be used on a block or an element
    to indicate a change to the default state of an object.
BEM overview
- CSS selectors should target elements directly with classes,
  instead of relying on type selectors, descendent selectors,
  and the cascade.
- Because we are limiting cascade
  we are free to move blocks around and
  reuse them throughout the page.    
  -> block independent self-contained
- Blocks can be nested inside other blocks.
- identify patterns and then create single-responsibility blocks.
- makes the relationship between our HTML and CSS Clear

Mobile first
CSS the mobile first way approach
