1.  constructor
2.  ngOnChanges
3.  ngOnInit
4.  ngDoCheck
    1.  ngAfterContentInit
    2.  ngAfterContentChecked
    3.  ngAfterViewInit
    4.  ngAfterViewChecked
5.  ngOnDestroy



#### ngAfterContentInit and ngAfterContentChecked

                
            <ng-content></ng-content>
            
            <MyComponent>content projection</MyComponent>

#### read 

            https://blog.logrocket.com/angular-lifecycle-hooks/

#### ngdocheck

            https://www.stackchief.com/blog/ngDoCheck%20Example%20%7C%20Angular

#### on push strategy

1. when you enable onPush change detection strategy, component runs change detection only when @Input prop changes(only immutable)
2. use markForCheck to run change detection manually


       https://www.youtube.com/watch?v=qklnVKgxMIY
       https://www.youtube.com/watch?v=2qA_5v8NahA
       https://www.youtube.com/watch?v=KmeRGCGnwy0


#### markforcheck

https://stackoverflow.com/questions/53426412/should-use-changedetectionstrategy-onpush-for-eveything
https://www.youtube.com/watch?v=KmeRGCGnwy0
