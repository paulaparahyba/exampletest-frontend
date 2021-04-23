import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonPhoneRequest } from '../person.request';
import { PersonService } from '../person.service';
import { PersonPhone } from '../personPhone';
import { PersonPhoneResponse } from '../personPhoneResponse';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.css']
})
export class PersonUpdateComponent implements OnInit {
  personPhoneResponse: PersonPhoneResponse = {
    personPhonesObject: [],
    success: true,
    errors: []
  }

  personPhoneDto: PersonPhone = {
    Id: 0,
    PhoneNumber: '',
    PhoneNumberTypeId: 1
  }

  personPhoneRequest: PersonPhoneRequest = {
    Dto: this.personPhoneDto,
    Nome: ''
  }

  constructor(private personPhoneService: PersonService, 
              private router: Router, 
              private route: ActivatedRoute) 
  { 
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.personPhoneService.readById(id).subscribe(personPhoneResponse =>
      this.personPhoneResponse = personPhoneResponse)

    this.personPhoneDto = this.personPhoneResponse.personPhonesObject[0]
    this.personPhoneRequest.Dto = this.personPhoneDto
  }

  updatePersonPhone(): void {
    this.personPhoneService.edit(this.personPhoneRequest).subscribe(() => 
      this.personPhoneService.showMessage('Produto atualizado'));
      this.router.navigate(['/personPhone']);
  }

  cancel(): void {
    this.router.navigate(['/personPhone']);
  }
}
