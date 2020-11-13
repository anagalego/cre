package models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CriarCategoria {

    private String id;
    private String nome;
    private float x;
    private float y;
    private float z;
    private float pvp;

    public CriarCategoria() {}

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
