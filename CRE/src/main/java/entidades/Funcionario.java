package entidades;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlType;


@Entity
@Table(name = "Funcionario")
public class Funcionario extends Entidade {

    @Id
    @Column(name = "id")
    private String id;
    @Column(name = "palavraPasse")
    private String palavraPasse;
    @Column(name = "nome")
    private String nome;
    @Column(name = "feminino")
    private boolean feminino = false;
    @Column(name = "admin")
    private boolean admin = false;

    public Funcionario(){}

    public Funcionario(String id, String palavraPasse, String nome, boolean feminino, boolean admin) {
        this.id = id;
        this.palavraPasse = palavraPasse;
        this.nome = nome;
        this.feminino = feminino;
        this.admin = admin;
    }

    public String getId(){
        return id;
    }
    public void setId(String utilizador) {
        this.id = utilizador;
    }

    public String getPalavraPasse() {
        return palavraPasse;
    }
    public void setPalavraPasse(String palavraPasse) {
        this.palavraPasse = palavraPasse;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public boolean isFeminino() { return feminino; }
    public void setFeminino(boolean feminino) { this.feminino = feminino; }

    public boolean isAdmin() { return admin; }
    public void setAdmin(boolean admin) { this.admin = admin; }
}
