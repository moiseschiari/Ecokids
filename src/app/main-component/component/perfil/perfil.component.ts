import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { UserInterface } from "../../../models/user";
import { AngularFirestore } from "@angular/fire/firestore";
import { equal } from "assert";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.scss"]
})
export class PerfilComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private firestore: AngularFirestore
  ) {}
  user: UserInterface = {
    name: "",
    email: "",
    photoUrl: "",
    roles: {}
  };

  public prodata: any;

  provideProfileData() {}

  public providerId: string = "null";
  ngOnInit() {
    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.firestore
          .collection("users", ref => ref.where("id", "==", user.uid))
          .snapshotChanges()
          .subscribe(data => {
            this.prodata = data.map(e => {
              return {
                id: e.payload.doc.id,
                Name: e.payload.doc.data()["name"],
                Lname: e.payload.doc.data()["lname"],
                Email: e.payload.doc.data()["email"]
              };
            });
          });
      }
    });
  }
}
