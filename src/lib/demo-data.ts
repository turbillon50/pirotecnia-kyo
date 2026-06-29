export type Product = {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  alerta: boolean;
};

export const demoProducts: Product[] = [
  { id: 1, nombre: "Cohete 7 Patas", categoria: "Cohetes", precio: 120, stock: 12, alerta: false },
  { id: 2, nombre: "Cohete Ala de Fuego", categoria: "Cohetes", precio: 150, stock: 3, alerta: true },
  { id: 3, nombre: "Castillo 15cm", categoria: "Castillos", precio: 250, stock: 8, alerta: false },
  { id: 4, nombre: "Castillo Mágico 20cm", categoria: "Castillos", precio: 350, stock: 2, alerta: true },
  { id: 5, nombre: "Bengala Estrella LED", categoria: "Luces", precio: 45, stock: 30, alerta: false },
  { id: 6, nombre: "Bengala Nitro Multicolor", categoria: "Luces", precio: 60, stock: 4, alerta: true },
  { id: 7, nombre: "Bomba Atronadora 3kg", categoria: "Bombas", precio: 500, stock: 7, alerta: false },
  { id: 8, nombre: "Bomba Tumbadora 5kg", categoria: "Bombas", precio: 850, stock: 1, alerta: true },
  { id: 9, nombre: "Torito Fuego Veloz", categoria: "Toritos", precio: 30, stock: 18, alerta: false },
  { id: 10, nombre: "Torito Chispa Loca", categoria: "Toritos", precio: 28, stock: 3, alerta: true },
];