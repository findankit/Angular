 ## Lifecycle hooks Execution Ordered list

🔄 ->  Repeated
1️⃣ ->  Executed only once

- 🔄ngOnChanges() - @Input change
- 🔄ngDoCheck() - every change detection
  - 1️⃣ngAfterContentInit() - after first ngDoCheck
    - 1️⃣ngAfterContentChecked() - after ngAfterContentInit
      - 🔄ngAfterViewChecked()
      - 1️⃣ngAfterViewInit() - once after first ngAfterContentChecked
        - 1️⃣ngAfterViewChecked() - once after first ngAfterContentChecked
  - 🔄ngAfterContentChecked() - & after ngDoCheck
    - 🔄ngAfterViewChecked()
    - 1️⃣ngAfterViewInit() - once after first ngAfterContentChecked
- 1️⃣ngOnInit()
- 🔴ngOnDestroy() - Before component is destroyed


## Plain List
- 🔄ngOnChanges
- 🔄ngDoCheck
- 1️⃣ngAfterContentInit
- 1️⃣🔄ngAfterContentChecked
- 1️⃣ngAfterViewInit
- 1️⃣ngOnInit
- 🔄1️⃣ngAfterViewChecked
- 🔴ngOnDestroy
