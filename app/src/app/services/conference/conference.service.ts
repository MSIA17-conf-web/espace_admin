import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  constructor() { }

  getAllConferences() {
    return [
      { idConference: 1, name: 'CyberSécu', description: "Test 1", subjectList: [{ idConferenceSubject: 1, name: "BioSécurité", description: "Test subject 1", hour: "12h00" }, { idConferenceSubject: 2, name: "Digital", description: "Any", hour: "14h00" }] },
      { idConference: 2, name: 'Ecologie', description: "Test 2", subjectList: [{ idConferenceSubject: 3, name: "Recyclage info", description: "Test subject 2", hour: "12h00" }, { idConferenceSubject: 4, name: "Green IT", description: "Any", hour: "14h00" }] },
      { idConference: 3, name: 'Cloud', description: "Test 3", subjectList: [{ idConferenceSubject: 5, name: "GCP", description: "Test subject 3", hour: "12h00" }, { idConferenceSubject: 6, name: "Azure", description: "Any", hour: "14h00" }] },
    ];
  }
}
