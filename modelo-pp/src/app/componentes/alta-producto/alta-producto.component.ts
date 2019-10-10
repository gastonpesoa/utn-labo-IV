import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Pelicula } from 'src/app/clases/pelicula';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UploadService } from '../../servicios/upload.service'
import { Actor } from 'src/app/clases/actor';
import { VentaService } from 'src/app/servicios/venta.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  actores: Actor[] = [];

  peliculaForm = new FormGroup({
    descripcion: new FormControl(''),
    precio: new FormControl(''),
    fecha: new FormControl(''),
    tipo: new FormControl(''),
    idActor: new FormControl('')
  });

  image: string = '../../../assets/imgMesas/mes01.jpg';
  title: string = "Alta de Peliculas";
  res: any;

  constructor(
    private prodServ: ProductoService,
    private actorServ: VentaService,
    private toastr: ToastrService,
    private upload: UploadService) { }

  ngOnInit() {
    this.getAllActores();
  }

  getAllActores(){
    this.actorServ.getAll().subscribe(res => {
      console.info("actores ", res);
      this.actores = res});
  }

  altaPelicula() {
    console.warn(this.peliculaForm.value);
    const pelicula = new Pelicula();
    pelicula.descripcion = this.peliculaForm.value.descripcion;
    pelicula.precio = this.peliculaForm.value.precio;
    pelicula.fecha = this.peliculaForm.value.fecha;
    pelicula.tipo = this.peliculaForm.value.tipo;
    pelicula.idActor = this.peliculaForm.value.idActor;

    // var file = new File([""], this.image);

    // var blob = null
    // var xhr = new XMLHttpRequest()
    // xhr.open("GET", 'http://localhost:4200/assets/imgMesas/mes01.jpg');
    // xhr.responseType = "blob"
    // xhr.onload = function() 
    // {
    //     blob = xhr.response
    //     var file = new File(blob, 'test.jpeg');
    //     console.info("file ", file);
    // }
    // xhr.send();

    
    // producto.imagen = this.productoForm.value.imagen;
    // console.log(producto.imagen);
    this.prodServ.alta(pelicula).subscribe(res => {
      this.res = res;
      console.info("res", res);
      this.toastr.success("Alta realizada!");
    });
  }

  // readFile(file, onLoadCallback) {
  //   var reader = new FileReader();
  //   reader.onload = onLoadCallback;
  //   reader.readAsText(file);
  // }

  onFileSelected(event) {

    // this.readFile(event.target.files[0], function(){
    //   this.productoForm.value.imagen = event.target.result;
    // })

    // this.upload.fileOverBase(event);

    let reader = new FileReader();

    let file: File = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      let fielToUpload = {
        fileName: file.name,
        fileType: file.type,
        fileExtension: file.name.slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2),
        value: reader.result
      }
      this.peliculaForm.value.imagen = fielToUpload;
    };

  }

}
