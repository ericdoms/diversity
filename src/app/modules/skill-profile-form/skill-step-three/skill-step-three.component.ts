import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-skill-step-three',
  templateUrl: './skill-step-three.component.html',
  styleUrls: ['./skill-step-three.component.scss']
})
export class SkillStepThreeComponent implements OnInit {

  @Input() stepNumber: string;
  @Output() newStepNumber: EventEmitter<number> = new EventEmitter<number> ();
  nextStepNumber: number;
  prevStepNumber: number;

  constructor() { }

  ngOnInit() {
  }

  setPrevStep() {
    this.prevStepNumber = parseInt(this.stepNumber, 0);
    this.newStepNumber.emit(this.prevStepNumber -= 1);
  }

  setNextStep() {
    this.nextStepNumber = parseInt(this.stepNumber, 0);
    this.newStepNumber.emit(this.nextStepNumber += 1);
  }

}
