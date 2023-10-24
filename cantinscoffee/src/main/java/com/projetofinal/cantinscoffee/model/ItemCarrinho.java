package com.projetofinal.cantinscoffee.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ItemCarrinho {
    @Id
    private int idItemCarrinho;
    private int carrinhoId;
    private int produtoId;
    private int qntProduto;
    private float subtotal;

    public ItemCarrinho() {
    }

    public ItemCarrinho(int idItemCarrinho, int carrinhoId, int produtoId, int qntProduto, float subtotal) {
        this.idItemCarrinho = idItemCarrinho;
        this.carrinhoId = carrinhoId;
        this.produtoId = produtoId;
        this.qntProduto = qntProduto;
        this.subtotal = subtotal;
    }

    public int getIdItemCarrinho() {
        return idItemCarrinho;
    }

    public void setIdItemCarrinho(int idItemCarrinho) {
        this.idItemCarrinho = idItemCarrinho;
    }

    public int getCarrinhoId() {
        return carrinhoId;
    }

    public void setCarrinhoId(int carrinhoId) {
        this.carrinhoId = carrinhoId;
    }

    public int getProdutoId() {
        return produtoId;
    }

    public void setProdutoId(int produtoId) {
        this.produtoId = produtoId;
    }

    public int getQntProduto() {
        return qntProduto;
    }

    public void setQntProduto(int qntProduto) {
        this.qntProduto = qntProduto;
    }

    public float getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(float subtotal) {
        this.subtotal = subtotal;
    }

}
