import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

  export class QuizComponent {
    items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  }
