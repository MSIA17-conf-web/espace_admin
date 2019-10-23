import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  constructor() { }

  getAllConferences() {
    return [
      { name: 'CyberSécu', description: "Test 1", subjectList: [{ name: "BioSécurité", description: "Test subject 1", hour: "12h00"}, {name: "Digital", description: "Any", hour: "14h00" }] },
      { name: 'Ecologie', description: "Test 2", subjectList: [{ name: "Recyclage info", description: "Test subject 2", hour: "12h00"}, {name: "Green IT", description: "Any", hour: "14h00" }] },
      { name: 'Cloud', description: "Test 3", subjectList: [{ name: "GCP", description: "Test subject 3", hour: "12h00"}, {name: "Azure", description: "Any" , hour: "14h00"}] },
    ];
  }
}
