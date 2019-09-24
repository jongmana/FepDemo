import { Component, OnInit, OnDestroy } from '@angular/core';
import { Verzoek } from 'src/app/shared/models/verzoek';
import { VerzoekenService } from '../core/services/verzoeken.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-verzoeken-overzicht',
  templateUrl: './verzoeken-overzicht.component.html',
  styleUrls: ['./verzoeken-overzicht.component.css']
})
export class VerzoekenOverzichtComponent implements OnInit, OnDestroy {
  verzoekenAbo: Subscription;
  verzoeken: Array<Verzoek> =  [];

  constructor(private verzoekenService: VerzoekenService) {

    // simulatie dat er elders in de app een nieuw verzoek was ingediend.
    this.verzoekenService.addVerzoek(
      new Verzoek(
        321,
        'Sinter',
        'Klaas',
        'sinter.klaas@student.hu.nl',
        'TCIT-VKFEP',
        'Front-End Programming',
        'was vergeten me in te schrijven'
      )
    );

  }

  ngOnInit() {
    this.verzoeken = this.verzoekenService.getAllVerzoeken(); // initiele vulling van de list van verzoeken

    this.verzoekenAbo = this.verzoekenService.verzoekenUpdate.subscribe(
      (verzoeken: Verzoek[]) => {
        this.verzoeken = verzoeken;
      }
    )

  }

  ngOnDestroy() {
    // - vergeet niet de OnDestroy klasse bij de implements bovenaan toe te voegen.
    // - omdat we nu een subscription hebben moeten we deze ook weer aan het einde van de lifecycle van deze klasse weer verwijderen;
    // anders kun je vreemde bijwerkingen krijgen tijdens het runnen van de applicatie omdat de klasse maar blijft reageren op updates.
    this.verzoekenAbo.unsubscribe();
  }

}
