import { Injectable } from "@angular/core";
import { Verzoek } from "src/app/shared/models/verzoek";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class VerzoekenService {
  private verzoeken: Array<Verzoek> = [];
  verzoekenUpdate = new Subject<Verzoek[]>();


  constructor() {
    this.verzoeken.push(
      new Verzoek(
        123,
        'Pietje',
        'Puk',
        'pietje.puk@student.hu.nl',
        'TCIT-VKFEP',
        'Front-End Programming',
        'snapte er niks van'
      )
    );
  }

  getAllVerzoeken() {
    // de array is private, en dus wil je niet een referentie naar de array
    // maar de inhoud (een kopie) van de array teruggeven om te voorkomen
    // dat de array buiten de scope van deze klasse bewerkt wordt.
    return this.verzoeken.slice();
  }

  addVerzoek(verzoek: Verzoek) {
    this.verzoeken.push(verzoek);
    // omdat er nu iets is veranderd moeten we anderen die zich op de updates hebben geabonneert informeren dat er iets is aangepast.
    this.verzoekenUpdate.next(this.getAllVerzoeken()); // vuur een event af met daarin de nieuwe lijst van verzoeken.
  }
}
