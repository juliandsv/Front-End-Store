package com.eep.servicio;


import java.util.List;
import java.util.Optional;

import com.eep.entity.Camiseta;


public interface CamisetaServicio {
	
	List<Camiseta> findAll();
	List<Camiseta> findByNombre(String nombre);
	public abstract Camiseta findById(Long Id);
	

}
