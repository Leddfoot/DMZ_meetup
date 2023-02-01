Styling is scoped to the component to avoid overwrites. 

This is accomplished using CSS modules (**!index.js & index.css is an exception!**, just ignore it).  This is accomplished by adding a WhateverComponent.module.css alongside the WhateverComponent.js file. You must then import the styling into the component as such:

import styles from './WhateverComponent.module.css';

You can then style the component like so: <form className={styles.form}></form>.

Beware that some styles are inherited via a <Card> component or via props.

Use class Names that are BEM. The basics can be learned fast although it takes a while to learn some industry standard naming. Beware that some BEM classes already in use may be "wrong." I am still learning this myself and there is no one reviewing my code. I also don't know all of the standard naming conventions for blocks, elements and modifiers, only those that I have seen in various tuts. If you notice an BEM error, please let me know via Github. It's a very quick read here: https://getbem.com/naming/ . Example below.



<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>

```css
.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }```