import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-alert-login",
  templateUrl: "./alert-login.component.html",
  styleUrls: ["./alert-login.component.scss"]
})
export class AlertLoginComponent implements OnInit {
  @ViewChild("alert", {}) alert: ElementRef;

  closeAlert() {
    this.alert.nativeElement.classList.remove("show");
  }
  constructor() {}

  ngOnInit() {}

  emailError(error) {
    console.log(error);
  }
  passwordError() {
    alert("Wrong password.");
  }
}
