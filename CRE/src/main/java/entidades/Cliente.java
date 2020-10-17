package entidades;

public class Cliente {
    private int id;
    private String cliente;

    public Cliente(){}

    public Cliente(int id, String cliente) {
        this.id = id;
        this.cliente = cliente;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCliente() {
        return cliente;
    }

    public void setNome(String cliente) {
        this.cliente = cliente;
    }
}
