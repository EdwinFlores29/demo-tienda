package com.example.tienda_demo.controlador;

import com.example.tienda_demo.modelo.Categoria;
import com.example.tienda_demo.modelo.Producto;
import com.example.tienda_demo.servicio.IProductoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("tienda-app")
@CrossOrigin(value = "http://localhost:3000")
public class ProductoControlador {
    private static final Logger looger =
            LoggerFactory.getLogger(ProductoControlador.class);

    @Autowired
    private IProductoServicio productoServicio;

    @GetMapping("/productos")
    public List<Producto> listaProductos() {
        var productos = productoServicio.ListarProductos();
        productos.forEach((producto -> looger.info(producto.toString())));
        return productos;
    }
}
