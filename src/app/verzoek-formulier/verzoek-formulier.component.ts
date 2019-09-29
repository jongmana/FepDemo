import { Component, OnInit, OnDestroy } from '@angular/core';
import { Verzoek } from '../shared/models/verzoek';
import { VerzoekenService } from '../core/services/verzoeken.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verzoek-formulier',
  templateUrl: './verzoek-formulier.component.html',
  styleUrls: ['./verzoek-formulier.component.css']
})
export class VerzoekFormulierComponent implements OnInit, OnDestroy {

  verzoekform = new Verzoek(0, '', '', '', '', '', ''); 

  constructor(
    private verzoekenService: VerzoekenService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: validatie van het formulier, maar dat is even minder spannend voor het doel nu, 
    // vandaar dat deze op dit moment ontbreekt; We gaan ervan uit dat alle velden netjes en goed worden gevuld.

    this.verzoekenService.addVerzoek(this.verzoekform);
    this.router.navigate(['/verzoekenOverzicht']);
  }

  ngOnDestroy() {
  }
}
