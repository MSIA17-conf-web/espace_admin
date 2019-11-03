import { ConferenceSubject } from "./conference-subject";

export class Conference {
    idConference: number;
    name: string;
    description: string;
    subjectList: ConferenceSubject[];
}