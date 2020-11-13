package entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "Fatura")
public class Fatura extends Entidade {

    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "cliente")
    private int cliente;
    @Column(name = "data")
    private String data;


    public Fatura() {}

    public Fatura(int id, int cliente, String data) {
        this.id = id;
        this.cliente = cliente;
        this.data = data;
    }

    public void setId(int id) { this.id = id; }
    public int getId() { return id; }

    public void setCliente(int cliente) { this.cliente = cliente; }
    public int getCliente() { return cliente; }

    public void setData(String data) { this.data = data; }
    public String getData() { return data; }
}
