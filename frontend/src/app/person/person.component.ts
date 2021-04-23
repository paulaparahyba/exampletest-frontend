import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { PersonService } from './../person/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private router: Router, private personService: PersonService) { }

  ngOnInit(): void {
    
  }

  navigateToPersonPhoneCreate(): void {
    this.router.navigate(['personPhone/create'])
  }

  navigateToPersonPhone(): void {
    this.router.navigate(['personPhone/all'])
  }
}
