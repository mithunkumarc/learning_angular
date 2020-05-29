#### pure pipe : 
      
          called only once on data, if data gets updated later , pure pipe dont recognize and execute on data again
          in other ways u can say , works on immutable input, further changes on input not recognized

#### impure pipe : 

          called every time when data gets updated. eg : async, jsonpipe
          in other ways u can say , works on mutable input, keep track of data and apply pipe


#### declaring pipe as pure or impure, by default pipes are pure

      @Pipe({
        name: 'myCustomPipe', 
        pure: false/true        <----- here (default is `true`), if false : pipe is said to be impure
      })
      export class MyCustomPipe {}
