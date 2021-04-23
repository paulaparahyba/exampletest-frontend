import { PersonPhone } from "./personPhone";

export interface PersonPhoneResponse {
    personPhonesObject: PersonPhone[];
    success: boolean;
    errors: object[];
}