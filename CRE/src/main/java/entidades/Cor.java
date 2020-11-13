package entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "Cor")
public class Cor extends Entidade {

    @Id
    @Column(name = "id")
    private String id;
    @Column(name = "nome")
    private String nome;
    @Column(name = "hex")
    private String hex;

    public Cor() {}

    public Cor(String id, String nome, String hex) {
        this.id = id;
        this.nome = nome;
        this.hex = hex;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getHex() { return hex; }
    public void setHex(String hex) { this.hex = hex; }
}
