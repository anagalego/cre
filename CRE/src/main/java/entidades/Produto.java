package entidades;

import javax.persistence.Entity;
import javax.xml.bind.annotation.XmlRootElement;
import javax.persistence.*;

@Entity
@Table(name = "Produto")
@XmlRootElement
public class Produto {

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
    @Column(name = "pvp")
    private float pvp;

    @Column(name = "fatura")
    private int fatura;
    @Column(name = "datafatura")
    private String datafatura;
    @Column(name = "cliente")
    private String cliente;
    @Column(name = "faturado")
    private boolean faturado;


    public Produto(){}

    public Produto(String id, String categoria, String cor, String funcionario, String data, float pvp, int fatura, String datafatura, String cliente, boolean faturado) {
        this.id = id;
        this.categoria = categoria;
        this.cor = cor;
        this.funcionario = funcionario;
        this.data = data;
        this.pvp = pvp;

        this.fatura = fatura;
        this.datafatura = datafatura;
        this.cliente = cliente;
        this.faturado = faturado;
    }


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

    public float getPvp() {
        return pvp;
    }

    public void setPvp(float pvp) {
        this.pvp = pvp;
    }

    public int getFatura() {
        return fatura;
    }

    public void setFatura(int fatura) {
        this.fatura = fatura;
    }

    public String getDatafatura() {
        return datafatura;
    }

    public void setDatafatura(String datafatura) {
        this.datafatura = datafatura;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public boolean isFaturado() {
        return faturado;
    }

    public void setFaturado(boolean faturado) {
        this.faturado = faturado;
    }
}
