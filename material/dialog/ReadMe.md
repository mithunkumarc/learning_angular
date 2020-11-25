sending input to dialog component 

        openDialog() {
            let dialogRef = this.dialog.open(DialogOverviewExampleDialog);
            let instance = dialogRef.componentInstance;
            instance.text = "This text can be used inside DialogOverviewExampleDialog template ";
            console.log('dialogRef',dialogRef);
          }
