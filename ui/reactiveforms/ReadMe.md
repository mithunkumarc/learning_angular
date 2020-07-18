Model driven approach to handling form inputs
whose values changes over time.

steps
1. Add basic form control

      register ReactiveForms Module in app.module/feature.module
      create new FormControl instance and save it in the component.inside FormGroup
      register the FormControl in the template. link to input box
	
To add a form group to this component, take the following steps.

        Create a FormGroup instance.
        Associate the FormGroup model and view.
        Save the form data.


#### number of input = number of formcontrol, group of formcontrol can be grouped into formGroup
    
        input1 -> FormControlName -> inside component  -> link to FormGroup
        input2 -> FormCOntrolName -> inside component  -> link to FormGroup
        input3 -> FormControlName -> inside component  -> link to FormGroup

