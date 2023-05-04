import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.css']
})
export class NavContentComponent {
anuncios:Array<any>=[
  {titulo: 'Apartamento en alquiler', descripcion: 'Esta elegante rectoría de la iglesia reformada de 1925 en estilo gótico francés cuenta con vidrieras originales, así como una encantadora habitación + baño con bañera/ducha con patas, lámpara de araña, aire acondicionado y cocina compartida. ', imagen: 'dormitorioazul.jpg',perfil: 'arrendador1.png', calificacion: 4},
  {titulo: 'Casa en venta', descripcion: 'Como huésped en nuestra casa, puedes utilizar todas las áreas comunes como la cocina, la sala de estar y el comedor, pero sobre todo el tranquilo jardín. Como vivimos en la misma casa, te conviertes en parte de nuestra familia ', imagen: 'dormitoriobeige.jpg', perfil: 'arrendador2.png', calificacion: 5},
  {titulo: 'Oficina en alquiler', descripcion: 'La casa es un edificio catalogado de grado II, que data de alrededor de 1600. Tiene lleno de carácter, con hermoso jardín. Espacio recientemente reformado, con una decoración encantadora, la habitación es una escapada perfecta para relajarse y desconectar en el campo.\n', imagen: 'dormitorioazul.jpg', perfil: 'arrendador3.png', calificacion: 3},
];
}
