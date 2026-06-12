import { Component } from '@angular/core';
import { Acreedor } from 'src/app/models/acreedor';
import { CategoriaProducto } from 'src/app/models/categoria-producto.enum';
import { Producto } from 'src/app/models/producto';
import { ProductoInterface } from 'src/app/models/producto-interface';
import { AcreedorService } from 'src/app/services/acreedor.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
    selector: 'app-productos',
    standalone:false,
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.css'
})
export class ProductosComponent {

    public productos: Producto[] = [];
    public acreedores: Acreedor[] = [];
    public productoNew: ProductoInterface = {id: null, nombre: '', categoria: null, acreedor: {id: 0 , nombre: ''}};
    public productoUpdate: ProductoInterface = {id: null, nombre: '', categoria: null, acreedor: {id: 0 , nombre: ''}};
    public showToast = false;
    public success = false;
    public error = false;
    public successMessage: string = "";
    public errorMessage: string = "";
    public categorias: CategoriaProducto[] = [];
    constructor(private _productoService:ProductoService, private _acreedorService: AcreedorService) { }

    ngOnInit(): void {
      this.getAllProductos();
      this.getAllAcreedores();
      this.getCategorias();
    }

    getAllProductos(): void {
      this._productoService.getAllProductos().subscribe(
        (productos: Producto[]) => {
          this.productos = productos;
        }
      );
    }
    getAllAcreedores(): void {
      this._acreedorService.getAllAcreedores().subscribe(
        (acreedores: Acreedor[]) => {
          this.acreedores = acreedores;
        }
      );
    }

    getProducto(id:number): void {
      this._productoService.getProducto(id).subscribe(
        (response) => {
          this.productoUpdate.id = response.id;
          this.productoUpdate.nombre = response.nombre;
          this.productoUpdate.acreedor.id = response.acreedor.id;
          this.productoUpdate.categoria = response.categoria;

        }
      );
    }

    getCategorias(): void {
      this._productoService.getcategorias().subscribe(
        (response) => {
          this.categorias = response;
        }
      );
    }

    crearProducto(): void {
      this._productoService.crearProducto(this.productoNew).subscribe(
        (response) => {
          this.showToast = true;
          this.success = true;
          this.successMessage = "Producto creado correctamente";
          setTimeout(() => {
            this.showToast = false;
            this.success = false;
          }, 3000);
          this.getAllProductos()
          this.productoNew = {id: null, nombre: '', categoria: '' as CategoriaProducto, acreedor: {id: 0 , nombre: ''}};
        },
        (error) => {
          this.showToast = true;
          this.error = true;
          this.errorMessage = "Error al crear el producto";
          setTimeout(() => {
            this.showToast = false;
            this.error = false;
          }, 3000);
        }
      );
    }

    actualizarProducto(): void {

      console.log('Categoria seleccionada:', this.productoUpdate.categoria);
      console.log(this.productoUpdate);
      this._productoService.updateProducto(this.productoUpdate).subscribe(
        (response) => {
          this.showToast = true;
          this.success = true;
          this.successMessage = "Producto actualizado correctamente";
          setTimeout(() => {
            this.showToast = false;
            this.success = false;
          }, 3000);
          this.getAllProductos()
          this.productoUpdate = {id: null, nombre: '', categoria: '' as CategoriaProducto, acreedor: {id: 0 , nombre: ''}};
        },
        (error) => {
          this.showToast = true;
          this.error = true;
          this.errorMessage = "Error al actualizar el producto";
          setTimeout(() => {
            this.showToast = false;
            this.error = false;
          }, 3000);
        }
      );
    }

    eliminarProducto(): void {
      this._productoService.deleteProducto(this.productoUpdate.id).subscribe(
        (response) => {
          this.showToast = true;
          this.success = true;
          this.successMessage = "Producto eliminado correctamente";
          setTimeout(() => {
            this.showToast = false;
            this.success = false;
          }, 3000);
          this.getAllProductos()
          this.productoUpdate = {id: null, nombre: '', categoria: null, acreedor: {id: 0 , nombre: ''}};
        },
        (error) => {
          this.showToast = true;
          this.error = true;
          this.errorMessage = "Error al eliminar el producto";
          setTimeout(() => {
            this.showToast = false;
            this.error = false;
          }, 3000);
        }
      );
    }

    hideToast() {
      this.showToast = false;
      this.error = false;
      this.success = true;
    }
}
