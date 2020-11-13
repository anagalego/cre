package entidades;

import javax.persistence.Entity;
import javax.xml.bind.annotation.XmlRootElement;
import javax.persistence.*;

@Entity
@Table(name = "Produto")
public class Produto extends Entidade {

    @Id
    @Column(name = "id")
    private String id;
    @Column(name = "categoria")
    private String categoria;
    @Column(name = "cor")
    private String cor;
    @Column(name = "funcionario")
    private String funcionario;
    @Column(name = "data")
    private String data;
    @Column(name = "quantidade")
    private float quantidade;
    @Column(name = "fatura")
    private int fatura;


    public Produto() {}

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getCategoria() {
        return categoria;
    }
    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getCor() {
        return cor;
    }
    public void setCor(String cor) {
        this.cor = cor;
    }

    public String getFuncionario() {
        return funcionario;
    }
    public void setFuncionario(String funcionario) {
        this.funcionario = funcionario;
    }

    public String getData() {
        return data;
    }
    public void setData(String data) {
        this.data = data;
    }

    public float getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(float quantidade) {
        this.quantidade = quantidade;
    }

    public int getFatura() {
        return fatura;
    }
    public void setFatura(int fatura) {
        this.fatura = fatura;
    }


}
