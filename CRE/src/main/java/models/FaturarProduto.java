package models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class FaturarProduto {

    private String idProduto;
    private int id;
    private int cliente;
    private String data;

    public FaturarProduto() {}

    public String getIdProduto() { return idProduto; }
    public void setIdProduto(String idProduto) { this.idProduto = idProduto; }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getCliente() { return cliente; }
    public void setCliente(int cliente) { this.cliente = cliente; }

    public String getData() { return data; }
    public void setData(String data) { this.data = data; }

}
