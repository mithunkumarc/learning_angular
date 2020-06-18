import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent, ThankYouComponent, PaymentComponent, UserInformationComponent } from "./app.component";
import { MatTabsModule} from "@angular/material/tabs"
import { MatToolbarModule } from "@angular/material/toolbar"

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MatTabsModule, MatToolbarModule],
  declarations: [AppComponent,
  UserInformationComponent,
  ThankYouComponent,
  PaymentComponent
  ],
  entryComponents:[
    UserInformationComponent,
    PaymentComponent,
    ThankYouComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
