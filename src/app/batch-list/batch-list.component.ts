import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batch-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-list.component.html',
  styleUrl: './batch-list.component.css'
})
export class BatchListComponent {

  public books=[
    {"Name" : "AI" ,"Book":"abc" },
    {"Name" : "ML" ,"Book":"pqr" },
    {"Name" : "Angular", "Book":"wxy"},
    {"Name" : "AWS" ,"Book":"qwe"}
  ]
}
