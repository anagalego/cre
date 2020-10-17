package entidades;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "Fatura")
@XmlRootElement
public class Fatura {

    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "produto")
    private int produto;
    @Column(name = "funcionario")
    private int funcionario;
    @Column(name = "cliente")
    private int cliente;

    public Fatura(){}

    public Fatura(int id, int produto, int funcionario, int cliente){
        this.id = id;
        this.produto = produto;
        this.funcionario = funcionario;
        this.cliente = cliente;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProduto() {
        return produto;
    }

    public void setProduto(int produto) {
        this.produto = produto;
    }

    public int getFuncionario() {
        return funcionario;
    }

    public void setFuncionario(int funcionario) {
        this.funcionario = funcionario;
    }

    public int getCliente() {
        return cliente;
    }

    public void setCliente(int cliente) {
        this.cliente = cliente;
    }
}
