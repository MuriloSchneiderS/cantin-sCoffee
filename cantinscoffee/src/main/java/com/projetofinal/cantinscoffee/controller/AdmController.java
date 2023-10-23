package com.projetofinal.cantinscoffee.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.projetofinal.cantinscoffee.model.Adm;
import com.projetofinal.cantinscoffee.repository.AdmRepository;

@Controller
public class AdmController {
    @Autowired
    AdmRepository repository;

    @GetMapping("/adm/login")
    public String loginAdm() {
        return "amdLogin";
    }

    @PostMapping("/loginAdm")
    public String loginCliente(Adm adm) {
        List<Adm> adms = new ArrayList<>();
        adms = repository.findAll();

        for (Adm a : adms) {
            if (a.getLoginAdm().equals(adm.getLoginAdm()) && a.getSenhaAdm().equals(adm.getSenhaAdm())) {
                return "redirect:/adm/cliente/lista";
            }
        }
        return "redirect:/adm/login";
    }
}
