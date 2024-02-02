### Angular docs:

```bash
ng new <project_name>
cd <project_name>
ng serve // to start at dev
ng build // to build the app

```

#### 1. Data Biding technique:

- one way data binding
  1. string interpolation
  2. property binding
- two way data binding
  1. `$event`: for form & inputs.
  2. `ngModel`: for forms & inputs. (to use this import FormsModule inside that component .ts file)

#### 2. Forms:

- two way to handle forms `using ngModel` build in `FormsModule` or buy one way binding event-binding

###### 1st method: login form:

```ts
// login.component.ts
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  username: string = "";
  passwordData: string = "";

  userName(event: any) {
    this.username = event.target.value;
  }
  password(event: any) {
    this.passwordData = event.target.value;
  }

  onsubmit(event: Event) {
    event.preventDefault();
    // console.log(event);
    console.log(`username: ${this.username}`);
    console.log(`password: ${this.passwordData}`);

    this.username = "";
    this.passwordData = "";
  }
}
```

```html
<div class="loginContainer">
  <h1>Login</h1>
  <form (submit)="onsubmit($event)">
    <span class="formElement">
      <label for="username"> Username: </label>
      <input type="text" (input)="userName($event)" value="{{ username }}" name="username" placeholder="Username" />
    </span>
    <span class="formElement">
      <label for="Password"> Password: </label>
      <input type="text" (input)="password($event)" name="password" value="{{ passwordData }}" placeholder="Password" />
    </span>
    <span class="formElement">
      <button type="submit">Submit</button>
    </span>
  </form>
</div>
```

###### 2nd method: register form:

```ts
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent {
  username: string = "";
  email: string = "";
  passwordData: string = "";

  onSubmit(registerForm: any) {
    console.log("Username:", this.username);
    console.log("email:", this.email);
    console.log("Password:", this.passwordData);

    // Reset the form after submission (optional)
    registerForm.resetForm();
  }
}
```

```html
<div class="registerContainer">
  <h1>Register</h1>
  <form #registerForm="ngForm" (ngSubmit)="onSubmit(registerForm)">
    <span class="formElement">
      <label for="username"> Username: </label>
      <input type="text" [(ngModel)]="username" name="username" placeholder="Username" />
    </span>
    <span class="formElement">
      <label for="Email"> Email: </label>
      <input type="email" name="email" [(ngModel)]="email" placeholder="email" />
    </span>
    <span class="formElement">
      <label for="Password"> Password: </label>
      <input type="password" name="password" [(ngModel)]="passwordData" placeholder="Password" />
    </span>
    <span class="formElement">
      <button type="submit" [disabled]="!registerForm.valid">Register</button>
    </span>
  </form>
</div>
```

#### 3. Directives:

1. components
2. attribute - to use component as attribute/ style or class
3. structural - `*ngFor`, `*ngIf`, & `*ngSwitch`

Note: see how we use component inside component
cards - card

- cards component

```ts
// cards.component.ts
import { Component } from "@angular/core";
import { CardComponent } from "../card/card.component";
import { CommonModule } from "@angular/common";
import { CardsService } from "../../service/cardsService/cards.service";

@Component({
  selector: "app-cards",
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: "./cards.component.html",
  styleUrl: "./cards.component.scss",
})
export class CardsComponent {
  cardsData: any;

  constructor(CardsService: CardsService) {
    this.cardsData = CardsService.getAllCards();
  }
}
```

```html
<div class="cardsContainer">
  <app-card *ngFor="let cardItem of cardsData" [card]="cardItem"></app-card>
</div>
```

- card component

```ts
// card.component.ts
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent {
  @Input()
  card: any; //here we can set interface like
  cardCounter = 0;
  increment() {
    return (this.cardCounter += 1);
  }
  decrement() {
    if (this.cardCounter > 0) {
      return (this.cardCounter -= 1);
    }
    return this.cardCounter;
  }
}
```

```html
<div class="singleCardContainer">
  <div class="singleCardImgBox">
    <img [src]="card.imgUrl" alt="imgErr" />
  </div>
  <div class="singleCardInfoBox">
    <span class="singleCardInfoTitle">{{ card.title }}</span>
    <span class="singleCardInfoDesc">{{ card.desc }}</span>
  </div>
  <div class="singleCardActions">
    <button [disabled]="cardCounter == 0" class="singleCardButtonAction" (click)="decrement()">del</button>
    <span class="singleCardActionData">{{ cardCounter }}</span>
    <button class="singleCardButtonAction" (click)="increment()">add</button>
  </div>
</div>
```

#### 4. ngStyle & ngClass:

- to add class or style dynamically based on conditions

1. ngStyle

```html
<div [ngStyle]="{ 'color': textColor, 'font-size': fontSize + 'px' }">This text has dynamic styles.</div>
```

2. ngClass

```html
<div [ngClass]="{ 'highlight': isHighlighted, 'error': hasError }">This element has dynamic classes.</div>
```

- here we can use `ternary` or `*ngIf` for condition checking.
  Note:
  js falsy values - [`false`, `empty string`, `null`, `undefined`, 0]

#### 5. template reference variable

```html
<div class="search">
  <input type="text" placeholder="Search Here" #searchInput />
  <button (click)="handleSearch(searchInput)">Search</button>
</div>
```

```ts
handleSearch(searchInput: any) {
    console.log(searchInput.value);
    searchInput.value = '';
  }
```

#### 6. viewChild & viewchildren:

- viewchild

```ts
import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "Viewchild",
  standalone: true,
  imports: [],
  templateUrl: "./viewchild.component.html",
  styleUrl: "./viewchild.component.scss",
})
export class ViewchildComponent {
  @ViewChild("username") inputElements: ElementRef | undefined;
  showUserName() {
    console.log(this.inputElements?.nativeElement.value);
  }
}
```

```html
<div class="viewChildContainer">
  <input type="text" name="username" #username />
  <button (click)="showUserName()">submit</button>
</div>
```

Note: viewchild always return first match element for all do use `viewChildren`

- viewChildren:

```ts
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from "@angular/core";

@Component({
  selector: "Viewchild",
  standalone: true,
  imports: [],
  templateUrl: "./viewchild.component.html",
  styleUrl: "./viewchild.component.scss",
})
export class ViewchildComponent {
  @ViewChildren("userInfo") inputElements: QueryList<ElementRef> | undefined;

  showCredentials() {
    if (this.inputElements) {
      this.inputElements.forEach((elementRef) => {
        console.log(elementRef.nativeElement);
      });
    }
  }
}
```

```html
<div class="viewChildrenContainer">
  <input type="text" name="email" #userInfo />
  <input type="password" name="password" #userInfo />
  <button (click)="showCredentials()">Login</button>
</div>
```

#### 7.ng-template, ng-container & ng-content:

**1. ng-template:**

The `<ng-template>` is an Angular element that represents an inert piece of code that won't be rendered immediately. It serves as a placeholder for content that can be stamped out and used later.

Use Case Example:

Lazy Loading: You might use ng-template to define a template that is not immediately rendered but is loaded dynamically when needed.
Code Example:

```
html
<ng-template #lazyLoadedContent>
  <h3>Lazy Loaded Content</h3>
  <p>This content is loaded lazily.</p>
</ng-template>

<!-- Using the ng-template -->
<ng-container *ngTemplateOutlet="lazyLoadedContent"></ng-container>


```

**2. ng-container:**

The `<ng-container>` is a grouping element that doesn't create a DOM element. It's often used to wrap multiple elements when you want to apply structural directives like *ngFor or *ngIf without adding an extra div to the DOM.

Use Case Example:

Grouping Elements: You might use ng-container to group elements without introducing an additional parent element in the DOM.
Code Example:

```html
<ng-container *ngFor="let item of items">
  <div>{{ item.name }}</div>
  <div>{{ item.description }}</div>
</ng-container>
```

**3. ng-content:**

The `<ng-content>` element is used to project content from the parent component into the child component. It allows you to pass content from the parent to the child component.

Use Case Example:

Content Projection: You might use ng-content to create a reusable component that can accept dynamic content from its parent.
Code Example:

```html
<!-- Parent Component -->
<app-card>
  <h3>Title</h3>
  <p>Card Content</p>
</app-card>

<!-- Child Component (app-card) Template -->
<div class="card">
  <div class="header">
    <!-- Projecting the title from the parent -->
    <ng-content select="h3"></ng-content>
    <!-- here we can select using class also select=".paraInfo" -->
  </div>
  <div class="content">
    <!-- Projecting the content from the parent -->
    <ng-content select="p"></ng-content>
  </div>
</div>
```

Note:

1. `ContentChild` decorator is used to get reference form parent to child. Also it returns the first matching element. for many you can use `ContentChildren` .
2. `ViewChild` decorator is used to get reference from the same component for ex- parent

- go and see component file for this one

**Input** variable is not called during constructor of that component is called it will show you only initial value not which you assigned from the property binding.

#### 7. Life Cycle Method: angular

**1. ngOnChange hook**:
it invokes when

- when `@input()` property changes of a component
- whenever a dom event happens i.e `click` or `change`
- whenever a timer events happens using `setTimeOut()` and `setInterval()`.
- whenever an `HTTP` request is made.

**Note:**

1. if previous and current value is not changed then onChange hook will not get called. using this it optimize redundant change call.
2. If we pass an `array` type then onChange will not get called because array is of referenced type and array may change but its reference still remain same.

**2. ngOnInit hook**:

- During this phase

  1. viewChild
  2. contentChild
  3. any projection
  4. Mainly no view template been created yet during called of this life cycle hook
  5. This hook is called **only once**.

**3. ngDoCheck hook**:

1. It will be called everytime the change detection is happend. i.e. either onChange or any type of changes or change detection is happend angular will called ngDoCheck hook.

**4. ngAfterContentInit hook**:

1. It will be called when ngContent will get initialized i.e. after the project of any component is initialized through `ng-content` then only this hook will be called.
2. Even if no content in between the ng-content or we can say there is no projection even then this hook get called.
3. even though we don't use `ng-content` even then this hook is get called.
4. It is called `only once` it the projected content change again this hook will not get called.

**4. ngAfterContentChecked hook**:

1. It is similary to `ngAfterContentInit` only difference it will get called everytimes when the content or projection is changed.
2. It will gets call every change detection happens in UI.
3. I.e it will called every Init, change and Update detection.
4. So we can say it is very similar to `ngDoCheck`

**Note**:

1. `ngAfterContentInit` and `ngAfterContentChecked` hook are component hook not directive hook.

**5. ngAfterViewInit hook**:

1. It is called only once when then component all the viewChild and viewChildren get initialized.
2. By the time this hook is get called then all the other life cycle hook is completely processed.

**Note**: It is also component hook , can not use with directive.

**6. ngAfterViewCheck hook**:

1. It is similar to `ngAfterViewInit` only difference is it will gets call at every change detection and viewChild changes.

**Note**: It is also component hook , can not use with directive.

**Points to Remember**

1. **ngDoCheck vs ngAfterContentChecked**:

- ngDoCheck is called at every change detection of the hook but keep in mind. If you need to compare the previous and current value of projection or `ng-content` then you can't do with ngDoCheck hook.

1. **ngDoCheck vs ngAfterViewChecked**:

**7. ngDestroy hook**:

#### 8. Custom Directive:

- create a custom.directive.ts
- add content to it

```ts
import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[setBackground]",
  standalone: true,
})
export class setBackground {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.elRef.nativeElement.style.backgroundColor = 'red';
    this.renderer.setStyle(this.elRef.nativeElement, "color", "green");
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'backgroundcolor',
    //   'green'
    // );
    // this.renderer.addClass(this.elRef.nativeElement, 'addBackground');
    // this.renderer.removeClass(this.elRef.nativeElement, 'addBackground');
  }
}
```

- import it and add in the view template to use.

**HostListener**:

- It is used to set an event on the element for ex- click, blur, etc.

**HostBinding**:

- It is used to bind properties of that element for ex- style.background, style.border, style.color and so on.

##### Property Binding Vs Host Binding:

- using property binding we can bind property or value only from its component.ts file not from the directive file for that or to set value from the custom directive file we can use `host binding`.
