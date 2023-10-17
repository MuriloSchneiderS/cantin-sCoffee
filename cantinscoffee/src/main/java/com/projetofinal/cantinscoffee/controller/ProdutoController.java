package com.projetofinal.cantinscoffee.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.projetofinal.cantinscoffee.model.Produto;
import com.projetofinal.cantinscoffee.repository.ProdutoRepository;

@Controller
public class ProdutoController {

    @Autowired
    ProdutoRepository repository;

    @GetMapping("/produto/cadastro")
    public String cadastro() {
        return "cadastro";
    }

    @PostMapping("/cadastro")
    public String cadastroProduto(Produto produto) {
        repository.save(produto);
        return "redirect:/produto/lista";
    }

    @GetMapping("/produto/lista")
    public ModelAndView lista() {
        ModelAndView mv = new ModelAndView("lista");
        List<Produto> produtos = new ArrayList<>();
        produtos = repository.findAll();
        mv.addObject("produtos", produtos);
        return mv;
    }

    @GetMapping("/produto/excluir/{idProduto}")
    public String excluir(@PathVariable("idProduto") int idProduto) {
        repository.deleteById(idProduto);
        return "redirect:/produto/lista";
    }

}
