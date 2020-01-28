import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skill-step-one',
  templateUrl: './skill-step-one.component.html',
  styleUrls: ['./skill-step-one.component.scss']
})
export class SkillStepOneComponent implements OnInit {

  @Input() stepNumber: string;
  @Output() newStepNumber: EventEmitter<number> = new EventEmitter<number> ();
  nextStepNumber: number;

  constructor() { }

  ngOnInit() {
  }

  setNextStep() {
    this.nextStepNumber = parseInt(this.stepNumber, 0);
    this.newStepNumber.emit(this.nextStepNumber += 1);
  }

}
