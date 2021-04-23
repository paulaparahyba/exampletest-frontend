import { PersonPhone } from "./personPhone";

export interface PersonPhoneResponse {
    data: DataObject
}

export interface DataObject {
    personPhonesObject: PersonPhone[];
    success: boolean;
    errors: object[];
}