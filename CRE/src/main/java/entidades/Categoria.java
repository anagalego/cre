package entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Categoria")
public class Categoria extends Entidade {

    @Id
    @Column(name = "id")
    private String id;
    @Column(name = "nome")
    private String nome;
    @Column(name = "x")
    private float x;
    @Column(name = "y")
    private float y;
    @Column(name = "z")
    private float z;
    @Column(name = "pvp")
    private float pvp;

    public Categoria() {}

    public Categoria(String id, String nome, float x, float y, float z, float pvp) {
        this.id = id;
        this.nome = nome;
        this.x = x;
        this.y = y;
        this.z = z;
        this.pvp = pvp;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public float getX() { return x; }
    public void setX(float x) { this.x = x; }

    public float getY() { return y; }
    public void setY(float y) { this.y = y; }

    public float getZ() { return z; }
    public void setZ(float z) { this.z = z; }

    public float getPvp() { return pvp; }
    public void setPvp(float pvp) { this.pvp = pvp; }

}
