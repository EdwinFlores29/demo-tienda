package com.example.tienda_demo.servicio;

import com.example.tienda_demo.modelo.Producto;
import com.example.tienda_demo.repositorio.ProductoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductoServicio implements IProductoServicio {

    @Autowired
    private ProductoRepositorio productoRepositorio;

    @Override
    public List<Producto> ListarProductos() {
        return productoRepositorio.findAll();
    }

    @Override
    public Producto BuscarProductoPorId(Integer idProducto) {
        return null;
    }

    @Override
    public Producto SalvarProducto(Producto producto) {
        return null;
    }

    @Override
    public void EliminarCategoria(Producto producto) {

    }
}
