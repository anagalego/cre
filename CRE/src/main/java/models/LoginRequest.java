package models;

import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement
public class LoginRequest {

    private String id;
    private String palavraPasse;

    public LoginRequest(){}

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getPalavraPasse() {
        return palavraPasse;
    }
    public void setPalavraPasse(String palavraPasse) {
        this.palavraPasse = palavraPasse;
    }
}
