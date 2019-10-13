import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Quizmodel } from "../../../../../../models/quizmodel";
import { Answermodel } from "../../../../../../models/quizmodel";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.scss"]
})
export class QuizComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public answerQuiz: Number = 0;
  public sumQuestion: Number = 0;

  quizControl = new FormControl("", [Validators.required]);
  selectFormControl = new FormControl("", Validators.required);
  constructor(
    private _formBuilder: FormBuilder,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {}

  myarray: String[] = [];
  i: number = 0;
  languages: String[] = ["Clasificacion de los seres vivos"];
  newstr: String;

  quizlist: Quizmodel[] = [
    {
      ID: 1,
      language: "Clasificacion de los seres vivos",
      question:
        " ¿Cuáles son los cinco reinos en los que clasificamos los seres vivos?",
      anslistobj: [
        "animales, plantas, hongos, protozoarios y bacterias",
        "plantas, animales, bacterias, protones y hongos",
        "animales, bacterias, protoctistias, hongos y setas",
        "animales, peces, hongos, bacterias y plantas"
      ],
      answer: "animales, bacterias, protoctistias, hongos y setas"
    },
    {
      ID: 2,
      language: "Clasificacion de los seres vivos",
      question: "¿El Reino Fungi está conformado por...?",
      anslistobj: [
        "animales",
        "protozoos y algas",
        "setas, mohos y levaduras",
        "bacterias"
      ],
      answer: "setas, mohos y levaduras"
    },
    {
      ID: 3,
      language: "Clasificacion de los seres vivos",
      question:
        "¿Cual de las siguientes opciones es una caracteristica del reino animal?",
      anslistobj: [
        "son pluricelulares",
        "poseen células procariotas",
        "son quimiosintéticos",
        "se alimentan de la luz solar"
      ],
      answer: "son pluricelulares"
    },
    {
      ID: 4,
      language: "Clasificacion de los seres vivos",
      question: "Realizan la síntesis de sus propios alimentos",
      anslistobj: [
        "Reino animal",
        "Reino Plantae",
        "Reino fungi",
        "Reino Protista",
        "Reino Monera"
      ],
      answer: "Reino Plantae"
    },
    {
      ID: 5,
      language: "Clasificacion de los seres vivos",
      question:
        "¿Qué característica de las siguientes no encontramos en el reino de los hongos?",
      anslistobj: [
        "Los hay pluricelulares.",
        "Toman su alimento del medio.",
        "Los hay unicelulares.",
        "Se desplazan."
      ],
      answer: "Se desplazan."
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
    this.selectedlanques = this.quizlist.filter(
      d => d.language == this.selectedvalue
    );
    this.question = this.selectedlanques[0].question;
    this.option = this.selectedlanques[0].anslistobj;
    this.i = 0;
    this.quizlength = this.selectedlanques.length;
  }

  /******************************************************** */
  next() {
    ++this.i;
    if (this.i !== 5) {
      this.question = this.selectedlanques[this.i].question;
      this.option = this.selectedlanques[this.i].anslistobj;
    }
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
      console.log("..................." + str + " " + answer);
      this.answerkey.push(new AnswerKey(str, answer));
    } else {
      this.answerkey.splice(0, 1);
    }
    console.log(this.answerkey);
    this.recursivecheck();
  }
  ///////////////////////////////////

  marks: number = 0;
  total: number;
  generatemark() {
    for (var i = 0; i < this.answerkey.length; i++) {
      if (this.answerkey[i].choosen == this.quizlist[i].answer) this.marks++;
    }
    // alert("your score is "+JSON.stringify(this.marks));
    //document.writeln("your score is " + this.marks);

    this.total = (this.marks / 5) * 5;
    const score = {};
    score["Name"] = "Andres";
    score["Nota"] = this.total;
    this.firestore.collection("notas").add(score);
    return alert("Tu calificación es " + this.total);
  }

  ///////////////////////////////////

  recursivecheck() {
    var result1 = this.quizlist;
    var result2 = this.answerkey;

    var props = ["id", "answer"];

    var result = result1
      .filter(function(o1) {
        // filter out (!) items in result2
        return result2.some(function(o2) {
          return o1.answer === o2.answer;
          // assumes unique id
        });
      })
      .map(function(o) {
        // use reduce to make objects with only the required properties
        // and map to apply this to the filtered array as a whole
        return props.reduce(function(newo, ans) {
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
