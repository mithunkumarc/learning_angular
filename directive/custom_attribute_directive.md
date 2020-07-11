#### this example will highlight, paragraph and changes color on click (changing apperance)

app.component.html

        <p appHighlight>                              <!-- appHighlight : directive selector -->
          Start editing to see some magic happen :)
        </p>
        
app.componnet.ts

          import { Component } from '@angular/core';

          @Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: [ './app.component.css' ]
          })
          export class AppComponent  {
            name = 'Angular';
          }


hightlight.directive.ts

            import { Directive, ElementRef, HostListener } from '@angular/core';

            @Directive({
              selector: '[appHighlight]'
            })
            export class HighlightDirective {

              // dom is injected here
              constructor(public el: ElementRef) {
                this.el.nativeElement.style.backgroundColor = 'yellow';
              }
              
              // events can be bind to dom
              @HostListener('click') onMouseEnter() {
                this.highlight('red','white');
              }
              
              private highlight(colorBgColor: string, textColor: string) {
                this.el.nativeElement.style.backgroundColor = colorBgColor;
                this.el.nativeElement.style.color = textColor;
              }
            }
            
            
app.module.ts : declare directive just like component         

            import { NgModule } from '@angular/core';
            import { BrowserModule } from '@angular/platform-browser';
            import { FormsModule } from '@angular/forms';

            import { AppComponent } from './app.component';
            import { HighlightDirective } from './highlight.directive';

            @NgModule({
              imports:      [ BrowserModule, FormsModule ],
              declarations: [ AppComponent, HighlightDirective ],
              bootstrap:    [ AppComponent ]
            })
            export class AppModule { }
