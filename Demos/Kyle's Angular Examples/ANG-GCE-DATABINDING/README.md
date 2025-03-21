# ANG-GCE-DATABINDING
In this project we will explore several data-binding techniques in Angular, including string interpolation, event binding, and property binding. Then we will see two-way data binding by combinind event and property binding.
 
If you clone this project and want to run it yourself, remember to get the node dependencies after cloning with the CLI command: `npm install`.

### Version Information
|  |  |
| ----------- | ------- |
| Angular CLI | 17.0.7  |
| Node        | 20.12.0 |
| npm         | 10.5.0  |

## One-Way Data Binding
Data binding is the name for several techniques which connect the component view to the component class. Recall that the class contains state and behaviors for the component, and the view describes the UI users interact with. As users interact with the view this might trigger changes to the component state or invoke methods. Changing component state will often result in rendering new data in the view.

We will be looking at three one-way binding techniques:
 - String interpolation
 - Event binding
 - Property binding

There is another one-way binding technique, attribute binding, which we will not be discussing here. To learn more, see the [Angular documentation](https://angular.dev/guide/templates/attribute-binding).

### String Interpolation
This method is very straightforward and has the simplest syntax. We can bind any component state which can be cast as a string with {{double curly braces}}. Inside these curly braces we can place any valid TypeScript expression, commonly a variable name.

Take a look at `one-way-binding.component.html, on line 10 we see:

```HTML
<h1>Color: <span [style.color]="colorString">{{colorString}}</span></h1>
```
Inside the `<span>` tags we find `{{colorString}}`. Next see the corresponding component class in `one-way-binding.component.ts`, the variable `colorString` is defined on line 11:

```TypeScript
colorString: String = "black";
```

We can use any expression which would resolve to a string here, including arithmatic, concatination, function invocation, and piping:

```TS
{{ 2 + 2 }} 
{{ 'Hello ' + 'World!' }}
{{ getFirstName() }}
{{ 99.95 | currency:'USD' }}
```

Remember, this is a connection to the component class, so we can refer to variables defined there by name. 

### Event Binding
String interpolation allows us to bring state from the component class into the view. Event binding takes interactions with the view and invokes some behavior or changes some state. "Event" refers to events which are generated by user action, like clicking a button or entering text into an input element. There are 4 event bindings in `one-way-binding.component.html`, each button has a click event binding:

```HTML
<button (click)="red()">red</button> | 
<button (click)="green()">green</button> | 
<button (click)="blue()">blue</button> | 
<button (click)="black()">black</button>
```

This is very similar to HTML syntax adding an event listener to an element. Consider this example:

```HTML
<script>
    function test() {
        console.log("test");
    }
</script>
<button onclick="test()">Test!</button>
```

The `onclick` attribute of this element tells the browser to invoke the `test()` function when it detects a click on this element. 

In Angular we do the same thing with slightly different syntax, adding (parentheses). We have bound some behavior to the click event. In this case the behavior is to set the `colorString` variable to a corresponding value. These functions are defined in `one-way-binding.component.ts`. For example, the first button invokes `red()`:

```TypeScript
red(): void {
    this.colorString = "red";
}
```
`colorString` is the same string we displayed earlier with interpolation. When we click a button to change that value, Angular will then re-render our component so that we see the new value on-screen.

### Property Binding
The final one-way binding we will explore is property binding. This is where we bind some state in our component to a property of an element or another component. Earlier we used event binding to set the value of `colorString`. That value is bound to the color property of the span on line 10 of `one-way-binding.component.html`. 

```HTML
<h1>Color: <span [style.color]="colorString">{{colorString}}</span></h1>
```

When the value of `colorString` changes, so does the value of that span's color property. Thus, the buttons in the component set the color of the text inside that span. 

Note the use of [square brackets] for this syntax. 
 - {{double curly brances}} are used for string interpolation
 - (parentheses) are used for event binding
 - [square brackets] are used for property binding

## Two-Way Data Binding
We can combine event and property binding into two-way binding. This technique allows our project to listen for events and update values between parent and child components.

Earlier we did something similar. We used event binding to change the value of a string, and we bound that string to the color property. We can combine these operations simply by combining the syntax. This is called "Banana-in-a-box" syntax, because the parentheses inside the square brackets looks like a `[()]` banana in a box.

```TypeScript
[(childValue)]="textString"
```
This is a snippet from `two-way-binding.component.html`. `childValue` is the property, which in this case is part of the child component. `textString` is the variable in this component. Whatever value this property is set to will be sent down to the child, and when the child sends back an event changing that value, the parent detects the event and updates the `textString` value. Let's take a look at how that happens...

### @Input & @Output()
Take a look at the child component class in `two-way-child.component.ts`. There are two variables here decorated with the `@Input` and `@Output()` decorators. 

```TypeScript
@Input() childValue: String | undefined;
@Output() childValueChange = new EventEmitter<String>();
```
These are the two mechanisms that help the two-way binding to work. We decorate a variable with `@Input`, and we decorate an `EventEmitter<>` with `@Output()`.

`@Input` indicates that this value is passed to this component from the parent. In this case it's the property-bound value `textString` from before.

`@Output()` indicates that this component passes values back up to the parent in the form of events. In the parent we bound the change event to `textString`. 

Note the name of these two variables, they must follow this pattern to work properly. If the input variable is called `value`, the output variable should be called `valueChange`. Also, the output variable should be of type `EventEmitter` wrapped around whatever the input type is. In our case we have `childValue` which is a `String` and `childValueChange` which is an `EventEmitter<String>` (an event emitter that emits Strings). 

There is one last piece to this puzzle, event emitters don't automatically emit new values. We have to do that manually, hence the `changeValue()` method.

```TypeScript
changeValue(event: any):void {
    this.childValueChange.emit(event.target.value);
}
```
This method is invoked whenever we change the text in the input element.

Now that the child component is doing what it should, we have successfully bound `childValue` to `textString`. Changes to one causes changes to the other.

### NgModel

One last thing to look at, the input elements. Take a look first at the input on line 4 of `two-way-child.component.html`:
```HTML
<input type="text" [value]="childValue" (input)="changeValue($event)">
```
Here we are using both event and property binding. This is an HTML element, not a component. But, components are just elements that Angular builds out of our code. We should be able to do two-way binding with plain old HTML elements too, but for this we need NgModel.

Next take a look at the input on line 9 of `two-way-binding.component.html`:

```HTML
<input type="text" [(ngModel)]="textString">
```
Because this is a plain HTML element, we can't add custom properties to it like we can with components. That's where NgModel comes in, Angular abstracts away the inputs, outputs, and change events so we can utilize two-way binding here.

NgModel is part of `FormsModule` which you will see in the imports array of this component.