https://www.youtube.com/watch?v=NugqJxFYmDM

Angular material url : https://material.angular.io/
Material ui color : https://material-ui.com/customization...
Your custom theme will be a Sass file and in our case, we’ll call it theme.scss and place it in our app’s /src folder.
Don’t worry if you don’t use Sass for your the rest of your app. If you’re using the Angular CLI, you can simply add your Sass file to the list of styles in the angular.json configuration file and the Angular CLI will take care of compiling the CSS file
```
"styles": [
  "styles.css",
  "theme.scss"
],
```
In the theme file, you’ll want to first import the main theming Sass file from Angular Material and include the base styles

theme.scss
```
@import "../node_modules/@angular/material/theming";
@include mat-core();
```
Next, you’ll declare variables for your primary, accent and warning colors using the mat-palette function.
mat-palette takes a color name as its first argument, and the remaining optional second, third and fourth arguments define a default value, a lighter value and a darker value. The color names and values themselves are taken from the official Material Design color guidelines

theme.scss
```
$my-primary: mat-palette($mat-teal);
$my-accent:  mat-palette($mat-pink);
$my-warn:    mat-palette($mat-deep-orange);
$my-theme: mat-light-theme($my-primary, $my-accent, $my-warn);
@include angular-material-theme($my-theme);
```
We finalize by creating a $my-app-theme variable that combines our color definitions with the mat-light-theme or mat-light-theme function, and finally, include the result of calling the angular-material-theme function with our $my-theme.
The warning color is optional and will default to red if none is provided.

theme.scss
```
@import "../node_modules/@angular/material/theming";
@include mat-core();

$my-primary: mat-palette($mat-teal, 800);
$my-accent: mat-palette($mat-light-green, 800);

$my-theme: mat-light-theme($my-primary, $my-accent);

@include angular-material-theme($my-theme);


.alternative {
  $my-primary: mat-palette($mat-amber, 800);
  $my-accent: mat-palette($mat-light-green, 800);
  $my-theme: mat-light-theme($my-primary, $my-accent);
  @include angular-material-theme($my-theme);
}

```
