import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonPhoneRequest } from '../person.request';
import { PersonService } from '../person.service';
import { PersonPhone } from '../personPhone';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {
  personPhoneDto: PersonPhone = {
    Id: 0,
    PhoneNumber: '',
    PhoneNumberTypeId: 1
  }

  personPhoneRequest: PersonPhoneRequest = {
    Dto: this.personPhoneDto,
    Nome: ''
  }
  constructor(private personService: PersonService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createPersonPhone(): void {
    this.personService.create(this.personPhoneRequest).subscribe(() => { 
      this.personService.showMessage('Telefone Criado com Sucesso')
      this.router.navigate(['/personPhone'])
     })
  }

  cancel(): void {
    this.router.navigate(['/personPhone'])
  }
}
