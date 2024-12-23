template

    <div #hello>hello</div>

in component

    @ViewChild('hello', { static: true, read: ElementRef }) input!: ElementRef;
      ngAfterViewInit(): void {
        // console.log(this.input.nativeElement.innerHTML);
        this.input.nativeElement.style.color = 'red';
      }
