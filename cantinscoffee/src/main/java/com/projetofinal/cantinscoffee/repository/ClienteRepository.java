package com.projetofinal.cantinscoffee.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetofinal.cantinscoffee.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
