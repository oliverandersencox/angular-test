import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PanelComponent } from './components/panel/panel.component';
import { WeatherBoxComponent } from './components/weather-box/weather-box.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [PanelComponent, NavbarComponent, WeatherBoxComponent, TableComponent, FilterPipe],
    exports: [PanelComponent, NavbarComponent, WeatherBoxComponent, TableComponent, FilterPipe],
    imports: [
      CommonModule,
      FormsModule,
      NgbPaginationModule
    ]
  })
  export class SharedModule {}
