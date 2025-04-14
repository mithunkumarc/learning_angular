#### default change detection

####  on push change detection

- onPush change detection runs only when @Input() value is completely changed with new value in parent/anwhere else from the current component.  
- any change happens to model in current component will be picked on onPush, no difference between default and onPush strategy in current component.  
       
       example
- parent shares user object with child component
- child component uses onPush change detection strategy
- in parent component if name property of user object is changed , user.name = 'new name', onPush strategy will not detect this change
- solution: instead of changing only name replace with new user object, user = { ...user , name: newValue} 
