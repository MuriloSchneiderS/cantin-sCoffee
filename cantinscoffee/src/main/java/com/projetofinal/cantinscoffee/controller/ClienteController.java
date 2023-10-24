package com.projetofinal.cantinscoffee.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.projetofinal.cantinscoffee.model.Cliente;
import com.projetofinal.cantinscoffee.repository.ClienteRepository;

@Controller
public class ClienteController {
    @Autowired
    ClienteRepository repository;

    @GetMapping("/index")
    public String index() {
        return "index";
    }

    @GetMapping("/cliente/cadastro")
    public String cadastro() {
        return "cadastroCliente";
    }

    @PostMapping("/cadastroCliente")
    public String cadastroCliente(Cliente cliente) {
        repository.save(cliente);
        return "redirect:/index";
    }

    @GetMapping("/adm/cliente/lista")
    public ModelAndView listaCliente() {
        ModelAndView mv = new ModelAndView("listaCliente");

        List<Cliente> clientes = new ArrayList<>();
        clientes = repository.findAll();
        mv.addObject("clientes", clientes);
        return mv;
    }

    @GetMapping("/adm/cliente/excluir/{idCliente}")
    public String excluir(@PathVariable("idCliente") int idCliente) {
        repository.deleteById(idCliente);
        return "redirect:/adm/cliente/lista";
    }

    @GetMapping("/cliente/login")
    public String login() {
        return "loginCliente";
    }

    @PostMapping("/login")
    public String loginCliente(Cliente cliente) {
        List<Cliente> clientes = new ArrayList<>();
        clientes = repository.findAll();

        for (Cliente c : clientes) {
            if (c.getLogin().equals(cliente.getLogin()) && c.getSenha().equals(cliente.getSenha())) {
                return "redirect:/index";
            }
        }
        return "redirect:/cliente/login";
    }
}