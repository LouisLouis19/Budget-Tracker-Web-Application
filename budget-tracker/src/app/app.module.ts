import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemsFormComponent } from './add-items-form/add-items-form.component';
import { IncomeExpenseListComponent } from './income-expense-list/income-expense-list.component';
import { ItemCardComponent } from './income-expense-list/item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemsFormComponent,
    IncomeExpenseListComponent,
    ItemCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
