import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  obs = new Observable((observer) => {
    /*console.log('Observable starts');
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    */
    // With timeout interval
    setTimeout(() => observer.next(1), 1000);
    setTimeout(() => observer.next(2), 2000);
    setTimeout(() => observer.next(3), 3000);
    //Error()
    //setTimeout(() => observer.error('error'), 3500);
    //Complete()
    //setTimeout(() => observer.complete(), 3500);
    setTimeout(() => observer.next(4), 4000);
    setTimeout(() => observer.next(5), 5000);
  });
  ngOnInit(): void {
    this.obs.subscribe({
      next: (val) => {
        console.log(val);
      },
      error: (val) => {
        console.log('Error');
      },
      complete: () => {
        console.log('Complete');
      },
    });
  }
}
