> http://kisserleon.com/2019/02/20/ExpressionChangedAfterItHasBeenCheckedError/

        This error happens in development mode. 
        In short, you update some data after the view has been built. 
        When in dev mode, every round of change detection is followed immediately by a second round 
        that verifies no bindings have changed since the end of the first, as this would indicate that 
        changes are being caused by change detection itself.


#### Solution
        There are some solutions.

        Solution setTimeout


#### Solution manually trigger change detection, Manually trigger change detection, so view can be render again.

        import { ChangeDetectorRef } from '@angular/core'


          constructor(private cdr: ChangeDetectorRef) {}

          ngAfterViewInit() {
            //any changes happening after view loaded
            this.name = 'new name after view';
          }

          ngAfterContentChecked() {
            //detect and render the changes
            this.cdr.detectChanges();
          }
        }
