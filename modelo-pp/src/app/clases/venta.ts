import { Producto } from './producto';

export class Venta extends Producto {
    idVenta: number;
    fechaVenta: Date;
    cantidad: number;
}
