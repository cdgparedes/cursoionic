import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() mensaje: any; // con @Input estamos diciendo que se va recibir desde el esterior si no recibe entoces es Null o undefine
  @Output() clickPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
   this.clickPost.emit(this.mensaje.id); // asi es como emitios de un componente hijo a un componente padre.

  }

}
