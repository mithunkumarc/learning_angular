import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public dynamicTabs = [
    {
        label: 'User Information',
        component: UserInformationComponent
    },
    {
        label: 'Payment',
        component: PaymentComponent
    },
    {
        label: 'Thank You',
        component: ThankYouComponent
    }
];
}


@Component({
  selector: 'userinfo',
  template: `uesrinfo`
})
export class UserInformationComponent {

}

@Component({
  selector: 'payment',
  template: `payment`
})
export class PaymentComponent {

}


@Component({
  selector: 'thankyou',
  template: `thankyou`
})
export class ThankYouComponent {

}