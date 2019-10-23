import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-puntaje",
  templateUrl: "./puntaje.component.html",
  styleUrls: ["./puntaje.component.scss"]
})
export class PuntajeComponent implements OnInit {
  constructor(private firestorereq: AngularFirestore) {}

  ngOnInit() {
    this.getScore();
  }
  headElements = ["First", "Last"];
  elements: any;
  notas: any;
  getScore() {
    this.firestorereq
      .collection("notas")
      .snapshotChanges()
      .subscribe(data => {
        this.elements = data.map(e => {
          return {
            first: e.payload.doc.data()["Name"],
            last: e.payload.doc.data()["Nota"]
          };
        });
      });
  }
}
