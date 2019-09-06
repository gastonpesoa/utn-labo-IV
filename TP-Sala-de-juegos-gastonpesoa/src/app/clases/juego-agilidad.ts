import { Juego } from '../clases/juego';


export class JuegoAgilidad extends Juego {
    operadores: Array<string> = ["+", "-", "*", "/"];
    operador: string;
    operandoUno: number;
    operandoDos: number;
    resultado: number;
    operacion: any;
    numeroIngresado: number;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Adivina el número", gano, jugador);
    }

    public generarOperacion(): void {
        this.operandoUno = Math.floor((Math.random() * 10) + 1);
        this.operandoDos = Math.floor((Math.random() * 10) + 1);
        this.operador = this.operadores[Math.floor(Math.random() * this.operadores.length)];
    }

    public calcular(): void {
        switch (this.operador) {
            case "+":
                this.resultado = this.operandoUno + this.operandoDos;
                break;
            case "-":
                this.resultado = this.operandoUno - this.operandoDos;
                break;
            case "*":
                this.resultado = this.operandoUno * this.operandoDos;
                break;
            case "/":
                this.resultado = this.operandoUno / this.operandoDos;
                break;
        }
    }

    public verificar(){
        if (this.numeroIngresado == this.resultado)
            this.gano = true;
        if (this.gano) {
            return true
        }
        else {
            return false
        };
    }
}
