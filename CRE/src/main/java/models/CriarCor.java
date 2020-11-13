package models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CriarCor {

    private String id;
    private String nome;
    private String hex;

    public CriarCor() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getHex() { return hex; }
    public void setHex(String hex) { this.hex = hex; }

}
