both used ot inject service

providers used in either module or component : declare required service


            selector: 'hello',
            template: `<p>hello component</p>`,
            providers: [HelloService]      // required service
          })
          export class HelloComponent {


providedIn used in serivce


            @Injectable({
              providedIn: 'root'//looks like optional
            })
            export class HelloService {
