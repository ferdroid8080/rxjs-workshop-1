// import the fromEvent operator
import { fromEvent, map } from 'rxjs';

// grab button reference
const button = document.getElementById('myButton') as HTMLButtonElement;

// grab counter reference
const counterElement = document.getElementById('counter') as HTMLParagraphElement;

const txtField = document.getElementById('txt') as HTMLInputElement;
const txtDisplay = document.getElementById('txt-display') as HTMLParagraphElement;

// create an observable of button clicks
const button$ = fromEvent<MouseEvent>(button, 'click');

const txtObsv$ = fromEvent<InputEvent>(txtField, 'keyup')
  .pipe(map((event: InputEvent) => (event.target as HTMLInputElement).value))

// for now, let's just log the event on each click
button$
  .subscribe(event => {
    console.log('event', event)
    const counter = Number(counterElement.innerText) + 1;
    counterElement.innerHTML = counter.toString();
  });

txtObsv$.subscribe(value => {
  // console.log('event', value);
  txtDisplay.innerText = value;
  
});