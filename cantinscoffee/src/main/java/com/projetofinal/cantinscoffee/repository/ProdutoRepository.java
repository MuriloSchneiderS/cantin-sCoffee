package com.projetofinal.cantinscoffee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;

import com.projetofinal.cantinscoffee.model.Produto;
//import java.util.List;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
    /*
     * busca produto
     * 
     * @Query("select p from Produto p where p.nomeProduto like %?1%")
     * List<Produto> findByNomeProduto(String nomeProduto);
     */
}
