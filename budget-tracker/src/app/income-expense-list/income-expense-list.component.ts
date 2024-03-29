import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-income-expense-list',
  templateUrl: './income-expense-list.component.html',
  styleUrls: ['./income-expense-list.component.scss'],
})
export class IncomeExpenseListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[] = new Array<BudgetItem>();
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);
  }
}
