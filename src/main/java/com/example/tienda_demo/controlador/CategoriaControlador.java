package com.example.tienda_demo.controlador;

import com.example.tienda_demo.modelo.Categoria;
import com.example.tienda_demo.servicio.ICategoriaServicio;
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
public class CategoriaControlador {
    private static final Logger looger =
            LoggerFactory.getLogger(CategoriaControlador.class);

    @Autowired
    private ICategoriaServicio categoriaServicio;

    @GetMapping("/categorias")
    public List<Categoria> listaCategorias() {
        var categorias = categoriaServicio.ListarCategorias();
        categorias.forEach((categoria -> looger.info(categoria.toString())));
        return categorias;
    }
}
