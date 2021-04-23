import { Component, OnInit } from '@angular/core';
import { PersonPhone } from '../personPhone';
import { PersonService } from '../person.service';
import { PersonPhoneResponse } from '../personPhoneResponse';

@Component({
  selector: 'app-person-read',
  templateUrl: './person-read.component.html',
  styleUrls: ['./person-read.component.css']
})
export class PersonReadComponent implements OnInit {

  phonesResponse: PersonPhoneResponse
  displayedColumns = ['PhoneNumber', 'PhoneNumberTypeId']
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.read().subscribe(phonesResponse=> {
        this.phonesResponse.personPhonesObject = phonesResponse.personPhonesObject
        console.log(phonesResponse)
      })
  }
}
