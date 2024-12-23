template file
    
    <ng-template #template1 let-data="data" let-color="color">
        <div>
            template one <br /> {{data}} : {{color}}
        </div>
    </ng-template>
    <ng-template #template2 let-data="data" let-color="color">
        <div>
            template two <br /> {{data}} : {{color}}
        </div>    
    </ng-template>
    <ng-container *ngTemplateOutlet="activeTemplate; context : templateContext"></ng-container>
    <button (click)="toggleTemplate()">toggle</button>

component file

    export class TestComponent implements AfterViewInit {
      flag = true
      @ViewChild('template1', { static: true }) template1!: TemplateRef<any>;
      @ViewChild('template2', { static: true }) template2!: TemplateRef<any>;
      activeTemplate!:TemplateRef<any>;
      templateOneData = { data: 'TEMPLATE ONE Message', color: 'red' };
      templateTwoData = { data: 'TEMPLATE TWO Message', color: 'green' };
      templateContext = this.flag ? this.templateOneData : this.templateTwoData;
    
      ngAfterViewInit(): void {
        setTimeout(() => {
          this.toggleTemplate();
        })
      }
      toggleTemplate() {
        if(this.flag) {
          this.activeTemplate = this.template1;
          this.templateContext  = this.templateOneData;
        } else {
          this.activeTemplate = this.template2;
          this.templateContext  = this.templateTwoData;
        }
        this.flag = !this.flag;
      }
    }

