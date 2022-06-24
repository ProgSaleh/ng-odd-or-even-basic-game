import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() counter = new EventEmitter<number>();

  number: number = 1;

  gameStarted: boolean = false;

  onStart() {
    this.gameStarted = true;

    setInterval(() => {
      this.number++;
    }, 1000);

    this.counter.emit(this.number);
  }

  onStop() {
    this.gameStarted = false;
    this.number = 1;
    location.reload();
  }
}
