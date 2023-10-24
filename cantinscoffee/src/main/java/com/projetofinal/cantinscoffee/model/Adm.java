package com.projetofinal.cantinscoffee.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Adm {
    @Id
    private int admId;

    private String loginAdm;
    private String senhaAdm;

    public Adm() {
    }

    public Adm(int admId, String loginAdm, String senhaAdm) {
        this.admId = admId;
        this.loginAdm = loginAdm;
        this.senhaAdm = senhaAdm;
    }

    public int getAdmId() {
        return admId;
    }

    public void setAdmId(int admId) {
        this.admId = admId;
    }

    public String getLoginAdm() {
        return loginAdm;
    }

    public void setLoginAdm(String loginAdm) {
        this.loginAdm = loginAdm;
    }

    public String getSenhaAdm() {
        return senhaAdm;
    }

    public void setSenhaAdm(String senhaAdm) {
        this.senhaAdm = senhaAdm;
    }

}
