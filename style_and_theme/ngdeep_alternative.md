https://stackoverflow.com/questions/47024236/what-to-use-in-place-of-ng-deep

The simple and easy alternative to a deep style is a common style using the element selector of the parent component. 
So if you had this in hero-details.component.css:

    :host ::ng-deep h3 {
      font-style: italic;
    }

It would become this in styles.css:

    app-hero-details h3 {
      font-style: italic;
    }

> note : check host-context
