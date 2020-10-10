#### Do we need to put abc.subscribe() inside ngOnInit?

        You don‘t have to put a subscription inside ngOnInit(). 
        It depends on what you want to achieve in the component. 
        But most of the time you want to load and display data directly when 
        you access the component and update the UI when this data changes. 
        
        That's why it is good practice to put the subscription in ngOnInit().

        Note: put abc.subscribe() when abc instance available or else you will be calling subscribe on undefined. 

#### information : 

        You usually put Observables to subscribe to inside a Service and make them available via getters and setters.

        When subscribing to an Observable it behaves in a certain way like an EventListener. 
        Whenever the object inside the Observable gets changed, an Event gets fired and your code 
        inside the subscription gets executed. 
        Additionally, you get provided the updated object.

        Even if you init the subscription inside ngOnInit this won't cause your entire Component 
        to reload when an update arrives. 
        Only those parts that get updated by your code inside the subscription.


#### ngOnInit : when it is fired

1. The Angular raises the ngOnInit hook, after it creates the component and updates its input properties. 
2. It raises it after the ngOnChanges hook.
3. This hook is fired only once and immediately after its creation (during the first change detection).

#### usage

1. This is a perfect place where you want to add any initialisation logic for your component.  
2. Here you have access to every input property of the component. 
3. You can use them in  http get requests to get the data from the back end server or run some initialization logic etc.(obseravable subscribe)

#### what you can't do/access

1. But note that none of child components or projected content are available at this point. 
2. Hence any properties we decorate with @ViewChild, @ViewChildren , @ContentChild & @ContentChildren will not be available to use.

#### reference

https://www.tektutorialshub.com/angular/angular-component-life-cycle-hooks/
