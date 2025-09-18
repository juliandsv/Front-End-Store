package com.eep.servicio;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eep.entity.Camiseta;
import com.eep.repositories.CamisetaRepository;

@Service
public class CamisetaServicioImpl implements CamisetaServicio {
	@Autowired
	private CamisetaRepository repositorio;

	@Override
	public List<Camiseta> findAll() {
		// TODO Auto-generated method stub
		return (List<Camiseta>) repositorio.findAll();
	}

	@Override
	public List<Camiseta> findByNombre(String nombre) {
		// TODO Auto-generated method stub
		return repositorio.findByNombre(nombre);
	}

	@Override
	public Camiseta findById(Long Id) {
		// TODO Auto-generated method stub
		 return repositorio.findById(Id).orElseThrow(() -> new RuntimeException("Camiseta no encontrada"));
	}



}
