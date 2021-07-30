import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-items-form',
  templateUrl: './add-items-form.component.html',
  styleUrls: ['./add-items-form.component.scss'],
})
export class AddItemsFormComponent implements OnInit {
  @Input() item: BudgetItem = new BudgetItem('', 0);
  @Output() formSubmit: EventEmitter<BudgetItem> =
    new EventEmitter<BudgetItem>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
