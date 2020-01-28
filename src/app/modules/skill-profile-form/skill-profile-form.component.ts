import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-profile-form',
  templateUrl: './skill-profile-form.component.html',
  styleUrls: ['./skill-profile-form.component.scss']
})
export class SkillProfileFormComponent implements OnInit {

  step: number;

  constructor() { }

  ngOnInit() {
    this.step = 1;
  }

  setNewStepNumber(value){
    this.step = value;
  }

}
