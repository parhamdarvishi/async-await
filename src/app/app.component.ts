import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  waitForOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("I promise to return after one second!");
      }, 1000);
    });
  }

  promiseMethod() {
    this.waitForOneSecond().then(value => console.log(value));
  }

  async asyncMethod() {
    const value = await this.waitForOneSecond();
    console.log(value);
  }
}
