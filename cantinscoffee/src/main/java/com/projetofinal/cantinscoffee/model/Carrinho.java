package com.projetofinal.cantinscoffee.model;

public class Carrinho {
    private int idCarrinho;
    private int localdatetime;
    private float total;
    private int clienteId;

    public Carrinho() {
    }

    public Carrinho(int idCarrinho, int localdatetime, float total, int clienteId) {
        this.idCarrinho = idCarrinho;
        this.localdatetime = localdatetime;
        this.total = total;
        this.clienteId = clienteId;
    }

    public int getIdCarrinho() {
        return idCarrinho;
    }

    public void setIdCarrinho(int idCarrinho) {
        this.idCarrinho = idCarrinho;
    }

    public int getLocaldatetime() {
        return localdatetime;
    }

    public void setLocaldatetime(int localdatetime) {
        this.localdatetime = localdatetime;
    }

    public float getTotal() {
        return total;
    }

    public void setTotal(float total) {
        this.total = total;
    }

    public int getClienteId() {
        return clienteId;
    }

    public void setClienteId(int clienteId) {
        this.clienteId = clienteId;
    }

}
