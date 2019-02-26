import { User } from '../entities/user.entity';
import { Component, OnDestroy, OnInit } from '@angular/core';
//import { Subscription } from 'rxjs/Subscription';
//import { UserService } from '../services/user.service';


@Component({
  selector: 'app-moncompte',
  templateUrl: './moncompte.component.html',
  styleUrls: ['./moncompte.component.css']
})
export class MoncompteComponent implements OnInit {

  users: User[];
  //userSubscription: Subscription;

  //constructor(private userService: UserService) { }

  ngOnInit() {
   /* **this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();*/
  }

  ngOnDestroy() {
   // this.userSubscription.unsubscribe();
  }

}
