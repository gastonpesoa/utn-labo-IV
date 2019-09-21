import { Juego } from '../clases/juego'

export class JuegoTateti extends Juego {
    tablero: Array<Array<string>> = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];


    jugada: number;
    jugadaUsuario: number = 0;

    juegoTerminado: boolean = true;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Ta Te Ti", true, jugador);
    }

    verificarTresEnLinea(marca: string): boolean {
        if (//horizontales
            (this.tablero[0][0] == marca && this.tablero[0][1] == marca && this.tablero[0][2] == marca) ||
            (this.tablero[1][0] == marca && this.tablero[1][1] == marca && this.tablero[1][2] == marca) ||
            (this.tablero[2][0] == marca && this.tablero[2][1] == marca && this.tablero[2][2] == marca) ||
            //verticales
            (this.tablero[0][0] == marca && this.tablero[1][0] == marca && this.tablero[2][0] == marca) ||
            (this.tablero[0][1] == marca && this.tablero[1][1] == marca && this.tablero[2][1] == marca) ||
            (this.tablero[0][2] == marca && this.tablero[1][2] == marca && this.tablero[2][2] == marca) ||
            //diagonales
            (this.tablero[0][0] == marca && this.tablero[1][1] == marca && this.tablero[2][2] == marca) ||
            (this.tablero[0][2] == marca && this.tablero[1][1] == marca && this.tablero[2][0] == marca)) {
            this.juegoTerminado = true;
            if (marca == 'O')
                this.gano = true;

            // this.reset();
        }
        return this.juegoTerminado;
    }

    verificar(): boolean {
        if (this.juegoTerminado && this.gano)
            return true;
        else
            return false;
    }

    reset(): void {
        this.gano = false;
        this.tablero = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        console.info("tablero: ", this.tablero)
    }
}

    // generarJugada(jugadaUsr) {

    //     switch (jugadaUsr) {
    //         case jugadaUsr[[0][0]]:
    //             this.jugadas = [[0][1],[1][1],[2][0]]
    //             this.jugada = this.jugadas[Math.floor(Math.random() * this.jugadas.length)];

    //             row = (Math.random() * 2)
    //             col = (Math.random() * 2)
    //             break
    //         case jugadaUsr[[0][1]]:
    //             break
    //         case jugadaUsr[[0][2]]:
    //             break
    //         case jugadaUsr[[1][0]]:
    //             break
    //         case jugadaUsr[[1][1]]:
    //             break
    //         case jugadaUsr[[1][2]]:
    //             break
    //         case jugadaUsr[[2][0]]:
    //             break
    //         case jugadaUsr[[2][1]]:
    //             break
    //         case jugadaUsr[[2][2]]:
    //             break

    //         case jugadaUsr[[0][0], [0][0]]:
    //             break
    //         case jugadaUsr[[0][0], [0][1]]:
    //             break
    //         case jugadaUsr[[0][0], [0][2]]:
    //             break
    //         case jugadaUsr[[0][0], [1][0]]:
    //             break
    //         case jugadaUsr[[0][0], [1][1]]:
    //             break
    //         case jugadaUsr[[0][0], [1][2]]:
    //             break
    //         case jugadaUsr[[0][0], [2][0]]:
    //             break
    //         case jugadaUsr[[0][0], [2][1]]:
    //             break
    //         case jugadaUsr[[0][0], [2][2]]:
    //             break
    //     }
    // }