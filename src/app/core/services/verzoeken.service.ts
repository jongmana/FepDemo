import { Injectable } from "@angular/core";
import { Verzoek } from "src/app/shared/models/verzoek";

@Injectable({
  providedIn: "root"
})
export class VerzoekenService {
  private verzoeken: Array<Verzoek> = [];

  constructor() {
    this.verzoeken.push(
      new Verzoek(
        123,
        "Pietje",
        "Puk",
        "pietje.puk@student.hu.nl",
        "TCIT-VKFEP",
        "Front-End Programming",
        "snapte er niks van"
      )
    );
  }

  getAllVerzoeken() {
    return this.verzoeken;
  }
}
