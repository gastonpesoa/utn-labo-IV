import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/clases/producto';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UploadService } from '../../servicios/upload.service'

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {


  productoForm = new FormGroup({
    descripcion: new FormControl(''),
    precio: new FormControl(''),
    fecha: new FormControl(''),
    tipo: new FormControl(''),
    imagen: new FormControl('')
  });

  image: string = '../../../assets/imgMesas/mes01.jpg';
  title: string = "Alta de Productos";
  res: any;

  constructor(private prodServ: ProductoService, private toastr: ToastrService, private upload: UploadService) { }

  ngOnInit() {
  }

  altaProducto() {
    console.warn(this.productoForm.value);
    const producto = new Producto();
    producto.descripcion = this.productoForm.value.descripcion;
    producto.precio = this.productoForm.value.precio;
    producto.fecha = this.productoForm.value.fecha;
    producto.tipo = this.productoForm.value.tipo;



    producto.imagen = this.productoForm.value.imagen;
    console.log(producto.imagen);
    // this.prodServ.alta(producto).subscribe(res => {
    //   this.res = res;
    //   console.info("res", res);
    //   this.toastr.success("Alta realizada!");
    // });
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
      // let fielToUpload = {
      //   fileName: file.name,
      //   fileType: file.type,
      //   fileExtension: file.name.slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2),
      //   value: reader.result
      // }
      // this.productoForm.value.imagen = fielToUpload;
      this.productoForm.value.imagen = reader.result;
    };

  }

}
