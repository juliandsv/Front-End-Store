package com.eep.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eep.entity.Camiseta;

public interface CamisetaRepository extends JpaRepository<Camiseta, Long> {
	
	List<Camiseta> findByNombre(String nombre);

}
