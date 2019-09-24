import { Component, OnInit } from '@angular/core';
import { Verzoek } from 'src/app/shared/models/verzoek';
import { VerzoekenService } from '../core/services/verzoeken.service';

@Component({
  selector: 'app-verzoeken-overzicht',
  templateUrl: './verzoeken-overzicht.component.html',
  styleUrls: ['./verzoeken-overzicht.component.css']
})
export class VerzoekenOverzichtComponent implements OnInit {

  verzoeken: Array<Verzoek> =  [];

  constructor(private verzoekenService: VerzoekenService) {
    this.verzoeken = verzoekenService.getAllVerzoeken();
  }

  ngOnInit() {
  }

}
