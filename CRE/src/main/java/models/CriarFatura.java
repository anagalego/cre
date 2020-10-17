package models;

public class CriarFatura {

    private String id;
    private int fatura;
    private String datafatura;
    private String cliente;
    private boolean faturado;



    public CriarFatura(){}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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
