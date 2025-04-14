#### default change detection

####  on push change detection

- onPush change detection runs only when @Input() value is completely changed with new value in parent/anwhere else from the current component.  
- any change happens to model in current component will be picked on onPush, no difference between default and onPush strategy in current component.  
       
       example
- parent shares user object with child component
- child component uses onPush change detection strategy
- in parent component if name property of user object is changed , user.name = 'new name', onPush strategy will not detect this change
- solution: instead of changing only name replace with new user object, user = { ...user , name: newValue} 


#### onPush change strategy with Observable streams/data


- If you are using onPush strategy in a component
- In that component if you subsribing to Observable(backend api) use async pipe to subscribe 
- Advantage of async it subscribes and unsubscribes and listen to change in value of obervable
- onPush will not work with traditional subscribe, eg: this.service.getData().subscribe(data => this.model = data); 	


#### Note : 

use always default change detection, use onPush+async when working with large data and need performance
