package com.eep.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eep.entity.Camiseta;
import com.eep.servicio.CamisetaServicio;

@RestController
@RequestMapping("/api/camisetas")
@CrossOrigin(origins = "http://127.0.0.1:5500")  // Habilitar CORS solo para este controlador
public class CamisetaController {
	
	
	@Autowired
	private CamisetaServicio servicio;
	
	@GetMapping
    public List<Camiseta> getAllCamisetas() {
        return servicio.findAll();
    }
	
	 // Endpoint para buscar camisetas por nombre
    @GetMapping("/buscar")
    public List<Camiseta> getCamisetasByName(@RequestParam String nombre) {
        return servicio.findByNombre(nombre);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Camiseta> getCamisetaById(@PathVariable Long id) {
        Camiseta camiseta = servicio.findById(id);
        
        if (camiseta != null) {
            return ResponseEntity.ok(camiseta); // Devuelve la camiseta si la encuentra
        } else {
            return ResponseEntity.notFound().build(); // Devuelve un 404 si no encuentra la camiseta
        }
    }

    

}
