package entidades;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlType;

@Entity
@Table(name = "Funcionario")
public class Funcionario {

    @Id
    @Column(name = "id")
    private String id;
    @Column(name = "palavraPasse")
    private String palavraPasse;
    @Column(name = "nome")
    private String nome;

    public Funcionario(){}

    public Funcionario(String id, String palavraPasse, String nome) {
        this.id = id;
        this.palavraPasse = palavraPasse;
        this.nome = nome;
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
}
