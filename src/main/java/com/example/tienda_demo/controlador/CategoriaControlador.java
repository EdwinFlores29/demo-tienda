package com.example.tienda_demo.controlador;

import com.example.tienda_demo.excepcion.RecursoNoEncontradoExcepcion;
import com.example.tienda_demo.modelo.Categoria;
import com.example.tienda_demo.servicio.ICategoriaServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/agregar-categoria")
    public Categoria agregarCategoria(@RequestBody Categoria categoria ){
        looger.info("Categoria a agregar:" + categoria);
        return categoriaServicio.SalvarCategoria(categoria);
    }

    @GetMapping ("/categorias/{id}")
    public ResponseEntity<Categoria> obtenerCategoria(@PathVariable Integer id){
        Categoria categoria = categoriaServicio.BuscarCategoriaPorId(id);
        if(categoria == null)
            throw new RecursoNoEncontradoExcepcion(("No se encontro el empleado con el id: " + id));
        return ResponseEntity.ok(categoria);
    }
}
