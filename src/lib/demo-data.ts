export type Product = {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  alerta: boolean;
  descripcion: string;
  foto: string;
};

export const demoProducts: Product[] = [
  { id: 1, nombre: "Cohete 7 Patas", categoria: "Cohetes", precio: 120, stock: 12, alerta: false, descripcion: "Cohete tradicional de 7 efectos consecutivos, ideal para eventos grandes.", foto: "/brand/productos/cohetes.jpg" },
  { id: 2, nombre: "Cohete Ala de Fuego", categoria: "Cohetes", precio: 150, stock: 3, alerta: true, descripcion: "Despegue con estela dorada y silbido característico.", foto: "/brand/productos/cohetes.jpg" },
  { id: 3, nombre: "Castillo 15cm", categoria: "Castillos", precio: 250, stock: 8, alerta: false, descripcion: "Castillo artesanal de mediano formato, múltiples figuras pirotécnicas.", foto: "/brand/productos/castillos.jpg" },
  { id: 4, nombre: "Castillo Mágico 20cm", categoria: "Castillos", precio: 350, stock: 2, alerta: true, descripcion: "Pieza grande de exhibición, secuencia de luces y sonidos.", foto: "/brand/productos/castillos.jpg" },
  { id: 5, nombre: "Bengala Estrella LED", categoria: "Luces", precio: 45, stock: 30, alerta: false, descripcion: "Bengala clásica, segura para niños supervisados.", foto: "/brand/productos/luces.jpg" },
  { id: 6, nombre: "Bengala Nitro Multicolor", categoria: "Luces", precio: 60, stock: 4, alerta: true, descripcion: "Cambios de color en cascada, alta duración.", foto: "/brand/productos/luces.jpg" },
  { id: 7, nombre: "Bomba Atronadora 3kg", categoria: "Bombas", precio: 500, stock: 7, alerta: false, descripcion: "Bomba de gran formato, sonido potente para fiestas patronales.", foto: "/brand/productos/bombas.jpg" },
  { id: 8, nombre: "Bomba Tumbadora 5kg", categoria: "Bombas", precio: 850, stock: 1, alerta: true, descripcion: "Máxima potencia, uso profesional con permiso correspondiente.", foto: "/brand/productos/bombas.jpg" },
  { id: 9, nombre: "Torito Fuego Veloz", categoria: "Toritos", precio: 30, stock: 18, alerta: false, descripcion: "Torito tradicional, ligero y de rápida combustión.", foto: "/brand/productos/toritos.jpg" },
  { id: 10, nombre: "Torito Chispa Loca", categoria: "Toritos", precio: 28, stock: 3, alerta: true, descripcion: "Variante con más chispa y efecto serpenteante.", foto: "/brand/productos/toritos.jpg" },
];

export type Movement = {
  id: number;
  productoId: number;
  tipo: 'entrada' | 'venta';
  cantidad: number;
  fecha: string;
  foto?: string;
};

export const demoMovements: Movement[] = [
  { id: 1, productoId: 8, tipo: 'venta', cantidad: 2, fecha: '2026-06-29T18:30:00' },
  { id: 2, productoId: 1, tipo: 'entrada', cantidad: 10, fecha: '2026-06-29T09:00:00' },
  { id: 3, productoId: 6, tipo: 'venta', cantidad: 1, fecha: '2026-06-28T20:15:00' },
  { id: 4, productoId: 3, tipo: 'entrada', cantidad: 5, fecha: '2026-06-28T11:00:00' },
];

export type UserProfile = {
  nombre: string;
  rol: string;
  telefono: string;
  ubicacion: string;
  avatar: string;
};

export const demoProfile: UserProfile = {
  nombre: "Eusebio Ambrosio",
  rol: "Artesano Pirotécnico — Dueño",
  telefono: "951 254 6911",
  ubicacion: "Zimatlan de Álvarez, Oaxaca",
  avatar: "",
};
