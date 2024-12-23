template 
    
    <ng-template #template1>
        <div>
            template one
        </div>
    </ng-template>
    <ng-template #template2>
        <div>
            template two
        </div>    
    </ng-template>
    <ng-container *ngTemplateOutlet="activeTemplate"></ng-container>
    <button (click)="toggleTemplate()">toggle</button>

component

    flag = true
      @ViewChild('template1', { static: true }) template1!: TemplateRef<any>;
      @ViewChild('template2', { static: true }) template2!: TemplateRef<any>;
      activeTemplate!:TemplateRef<any>;//  = this.template1;
      ngAfterViewInit(): void {
        setTimeout(() => {
          this.toggleTemplate();
        })
      }
      toggleTemplate() {
        if(this.flag) {
          this.activeTemplate = this.template1;
        } else {
          this.activeTemplate = this.template2;
        }
        this.flag = !this.flag;
      }
