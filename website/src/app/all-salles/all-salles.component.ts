import { Component, OnInit } from '@angular/core';
import { Salle } from '../entities/salle.entity';
import { SalleService } from '../services/salle.service'; 
@Component({
  selector: 'app-all-salles',
  templateUrl: './all-salles.component.html',
  styleUrls: ['./all-salles.component.css']
})
export class AllSallesComponent implements OnInit {

  private salles: Salle[];
  private s: any;
  private salle;

  constructor(private salleservice: SalleService) { }

  showSalles(s){
    if (s.name.length>0){
      return s;
    }
  }

  ngOnInit() {

    this.salleservice.getAllPosts().subscribe(data=>{this.salles=data['salles'];},
    errorCode => console.log('errorCode'));
  }

}
//fin
