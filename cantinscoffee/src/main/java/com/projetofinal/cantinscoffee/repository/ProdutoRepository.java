package com.projetofinal.cantinscoffee.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetofinal.cantinscoffee.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

}
