import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() getValue: EventEmitter<any> = new EventEmitter<any>();
  searchForm = this.fb.group({
    search: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  clear(): void{
    this.searchForm.get('search').setValue('');
  }

  sendValue(): void{
    this.getValue.emit(this.searchForm.value.search);
  }

}
