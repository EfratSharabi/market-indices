import { Component, Input } from '@angular/core';
import { GridRow } from './models/grid-row.model';
import { GridColumn } from './models/grid-column.model';

@Component({
  selector: 'mi-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  @Input() rows: Array<GridRow>;
  @Input()
  set columns(value: Array<GridColumn>) {
    this._columns = value;
    this.setDisplayedColumns(value);
  }
  get columns(): Array<GridColumn> {
    return this._columns
  }
  private _columns: Array<GridColumn>

  displayedColumns: Array<string>;

  private setDisplayedColumns(columns: Array<GridColumn>): void {
    this.displayedColumns = columns.map((column: GridColumn) => column.name);
  }
}
