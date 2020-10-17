package entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Categoria")
public class Categoria {

    @Id
    @Column(name = "id")
    private String id;
    @Column(name = "categoria")
    private String categoria;
    @Column(name = "x")
    private float x;
    @Column(name = "y")
    private float y;
    @Column(name = "z")
    private float z;
    @Column(name = "area")
    private float area;

    public Categoria(){};
    public Categoria(String id, String categoria, float x, float y, float z) {
        this.id = id;
        this.categoria = categoria;
        this.x = x;
        this.y = y;
        this.z = z;
        this.area = x*y;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public float getZ() {
        return z;
    }

    public void setZ(float z) {
        this.z = z;
    }

    public float getArea() {
        return area;
    }
}

