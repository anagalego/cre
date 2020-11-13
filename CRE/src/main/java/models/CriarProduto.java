package models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CriarProduto {
    private String id;
    private String categoria;
    private String cor;
    private String data;
    private String funcionario;
    private int quantidade;

    public CriarProduto(){}

    public String getId() {
        return id;
    }
    public void setId(String id) { this.id = id; }

    public String getCategoria() {
        return categoria;
    }
    public void setCategoria(String categoria) { this.categoria = categoria; }

    public String getCor() {
        return cor;
    }
    public void setCor(String cor) { this.cor = cor; }

    public String getData() {
        return data;
    }
    public void setData(String data) { this.data = data; }

    public String getFuncionario() {
        return funcionario;
    }
    public void setFuncionario(String funcionario) { this.funcionario = funcionario; }

    public int getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(int quantidade) { this.quantidade = quantidade; }
}
