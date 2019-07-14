import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Quizmodel } from '../../../../../../models/quizmodel';
import { Answermodel } from '../../../../../../models/quizmodel';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
 
})

export class QuizComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public answerQuiz: Number = 0;
  public sumQuestion: Number = 0;
  
  quizControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
   
  }

  
myarray: String[] = [];
i: number = 0;
languages: String[] = ["Clasificacion de los seres vivos"];
 newstr: String
  
  quizlist: Quizmodel[] = [
    {
      ID: 1, language: "Clasificacion de los seres vivos", question: "Inventor of c++?", anslistobj: ["Pavan.c", "James Gosling", "Richie Richie", "Amos.Emmanual"], answer: "Richie Richie"
    },
    {
      ID: 2, language: "Clasificacion de los seres vivos", question: "Inventor of java?", anslistobj: ["Nayan.c", "Ärmesh", "Denish Richie", "Kiran.DY"], answer: "Denish Richie"
    },
    {
      ID: 3, language: "Clasificacion de los seres vivos", question: "how is java?", anslistobj: ["Easy", "Difficult", "moderate", "nonoe"], answer: "Easy"
    },
    {
      ID: 4, language: "Clasificacion de los seres vivos", question: "Inventor of cprogram?", anslistobj: ["a", "b", "c", "d"], answer: "a"
    } ,
    {
      ID: 5, language: "Clasificacion de los seres vivos", question: "Inventor of python?", anslistobj: ["e", "f", "g", "h"], answer: "h"
    }
  ];

  /******************************************************* */
quizlength: number;
selectedlanguage: Quizmodel[] = [];
question: String;
selectedvalue: String;
option: any[];
selectedlanques: any[];
gettinglanguage() {
this.selectedlanques =  this.quizlist.filter(d => (d.language == this.selectedvalue));
this.question = this.selectedlanques[0].question;
this.option = this.selectedlanques[0].anslistobj;
this.i = 0;
this.quizlength = this.selectedlanques.length;
  }

  /******************************************************** */
  next() {   
    ++this.i;
    this.question = this.selectedlanques[this.i].question;
    this.option = this.selectedlanques[this.i].anslistobj;
  }
  previous() {
    --this.i;
    this.question = this.selectedlanques[this.i].question;
    this.option = this.selectedlanques[this.i].anslistobj;
  }

/********************************************************* */
  
  answerkey: AnswerKey[] = [];

  check(e, str: String, answer: String) {
    if (e.target.checked) {
      console.log("..................."+str + " " + answer);
      this.answerkey.push(new AnswerKey(str, answer));
    }
    else {

      this.answerkey.splice(0, 1);
    }
    console.log(this.answerkey);
    this.recursivecheck();
  }
  ///////////////////////////////////

  marks: number = 0;
  generatemark() {
    for (var i = 0; i < this.answerkey.length; i++) {
      if (this.answerkey[i].choosen == this.quizlist[i].answer) this.marks++;
    }
    // alert("your score is "+JSON.stringify(this.marks));
    //document.writeln("your score is " + this.marks);
    return alert ('your score is '+ this.marks);
  }

  ///////////////////////////////////

  recursivecheck() {
    var result1 = this.quizlist;
    var result2 = this.answerkey;

    var props = ['id', 'answer'];

    var result = result1.filter(function (o1) {
      // filter out (!) items in result2
      return result2.some(function (o2) {
        return o1.answer === o2.answer;
        // assumes unique id
      });

    }).map(function (o) {

      // use reduce to make objects with only the required properties
      // and map to apply this to the filtered array as a whole
      return props.reduce(function (newo, ans) {
        newo[ans] = o[ans];
        return newo;
      }, {});
    });
    console.log("result:" + JSON.stringify(result));
  }


}

export class AnswerKey {
  choosen: String;
  answer: String;
  constructor(choosen: String, answer: String) {
    this.choosen = choosen;
    this.answer = answer;
  }


}

