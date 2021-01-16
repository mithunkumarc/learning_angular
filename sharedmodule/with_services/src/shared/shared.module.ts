import { TestDirective } from "./test.directive";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { MyService } from "./myservice.service";

@NgModule({
  declarations: [TestDirective],
  exports: [TestDirective]
  //providers: [MyService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MyService]
    };
  }
}
