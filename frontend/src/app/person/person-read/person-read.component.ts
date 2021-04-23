import { Component, OnInit } from '@angular/core';
import { PersonPhone } from '../personPhone';
import { PersonService } from '../person.service';
import { DataObject, PersonPhoneResponse } from '../personPhoneResponse';

@Component({
  selector: 'app-person-read',
  templateUrl: './person-read.component.html',
  styleUrls: ['./person-read.component.css']
})
export class PersonReadComponent implements OnInit {
  dataResponse: DataObject = {
    personPhonesObject: [],
    success: true,
    errors: []
  }

  phonesResponse: PersonPhoneResponse = {
    data: this.dataResponse
  }

  displayedColumns = ['PhoneNumber', 'PhoneNumberTypeId']
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.read().subscribe(phonesResponse=> {
        this.phonesResponse.data.personPhonesObject = phonesResponse.data.personPhonesObject
        console.log(phonesResponse)
      })
  }
}
