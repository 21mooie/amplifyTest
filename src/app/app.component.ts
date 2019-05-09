import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amplify-test';
  signedIn: any;
  user: any;
  greeting: string;

  constructor(private amplifySvc: AmplifyService) {
    this.amplifySvc.authStateChange$.subscribe(authState => {
      this.signedIn = authState.state === 'signedIn';
      if(!authState.user) {
        this.user = null;
      } else {
        this.user = authState.user;
        this.greeting = 'Hello' + this.user.username
      }
    })
  }

  onImagePicked(event) {
    console.log(event);
  }

  onImageLoaded(event) {}
}
