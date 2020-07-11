app.component.html
  
          <!-- appHighlight : directive selector , defaultColor, defaultTextColor are input properties of directive -->
          <p appHighlight defaultColor="skyblue" defaultTextColor="red">
            Start editing to see some magic happen :)
          </p>
          
app.component.ts

            import { Component } from '@angular/core';
            @Component({
              selector: 'my-app',
              templateUrl: './app.component.html',
              styleUrls: [ './app.component.css' ]
            })
            export class AppComponent  {
              name = 'Angular';
            }

highlight.directive.ts

            import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

            @Directive({
              selector: '[appHighlight]'
            })
            export class HighlightDirective implements OnInit{
              
              @Input() defaultColor: string;
              @Input() defaultTextColor: string;
              
              constructor(public el: ElementRef) {
                // view not loaded
                // @Input properties not available here(undefined)
              }

              ngOnInit() {
                // console.log(this.defaultColor)
                this.highlight(this.defaultColor,this.defaultTextColor);
              }

              @HostListener('click') onMouseEnter() {
                this.highlight('red','white');
              }
              
              private highlight(colorBgColor: string, textColor: string) {
                this.el.nativeElement.style.backgroundColor = colorBgColor;
                this.el.nativeElement.style.color = textColor;
              }
            }
            
app.module.ts

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
