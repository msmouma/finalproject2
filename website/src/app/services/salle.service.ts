import { Injectable } from '@angular/core';

import { Salle } from '../entities/salle.entity';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';

@Injectable()
export class SalleService {

    baseUrl: string = "http://localhost:3000/salles"

    private salles: Salle[];

    constructor(private http: HttpClient) { }

    getAllPosts(): Observable<Salle[]> {

        return this.http.get<Salle[]>(this.baseUrl);

    }

    findAll(): Salle[] { 
        return this.salles;
    }

    find(id: string): Salle {
        return this.salles[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.salles.length; i++) {
            if (this.salles[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}
//fin