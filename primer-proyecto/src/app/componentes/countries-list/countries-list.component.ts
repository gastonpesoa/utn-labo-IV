import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../../servicios/countries-service.service'

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  constructor(private countryService: CountriesServiceService) { }

  countries: Object[];

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries);
  }

}
