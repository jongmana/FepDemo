import { Component, OnInit } from "@angular/core";
import { Verzoek } from "src/app/shared/models/verzoek";
import { VerzoekenService } from "../core/services/verzoeken.service";

@Component({
  selector: "app-verzoeken-overzicht",
  templateUrl: "./verzoeken-overzicht.component.html",
  styleUrls: ["./verzoeken-overzicht.component.css"]
})
export class VerzoekenOverzichtComponent implements OnInit {
  verzoeken: Array<Verzoek> = [];

  constructor(private verzoekenService: VerzoekenService) {}

  ngOnInit() {
    this.verzoeken = this.verzoekenService.getAllVerzoeken();

    // simulatie dat er elders in de app een nieuw verzoek was ingediend.
    this.verzoekenService.addVerzoek(
      new Verzoek(
        321,
        "Sinter",
        "Klaas",
        "sinter.klaas@student.hu.nl",
        "TCIT-VKFEP",
        "Front-End Programming",
        "was vergeten me in te schrijven"
      )
    );
  }
}
