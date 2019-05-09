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
  customVoiceConfig = {
    silenceDetectionConfig: {
        time: 2000,
        amplitude: 0.2
    }   
}

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

  onAlbumImageSelected( event ) {
    window.open( event, '_blank' );
  }

  onBotComplete($event){
    console.log($event);
  }
}
