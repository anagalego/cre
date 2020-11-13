package models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CriarFuncionario {

    private String id;
    private String palavraPasse;
    private String nome;
    private boolean feminino;
    private boolean admin;

    public CriarFuncionario() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getPalavraPasse() { return palavraPasse; }
    public void setPalavraPasse(String palavraPasse) { this.palavraPasse = palavraPasse; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public boolean isFeminino() { return feminino; }
    public void setFeminino(boolean feminino) { this.feminino = feminino; }

    public boolean isAdmin() { return admin; }
    public void setAdmin(boolean admin) { this.admin = admin;}

}
