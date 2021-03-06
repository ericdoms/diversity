import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skill-step-four',
  templateUrl: './skill-step-four.component.html',
  styleUrls: ['./skill-step-four.component.scss']
})
export class SkillStepFourComponent implements OnInit {

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
