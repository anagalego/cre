package models;

import entidades.Entidade;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Resposta<Entidade>{
    private boolean sucesso;
    private Entidade conteudo;

    public Resposta(){}

    public Entidade getConteudo() {
        return conteudo;
    }
    public void setConteudo(Entidade conteudo) {
        this.conteudo = conteudo;
    }

    public boolean isSucesso() {
        return sucesso;
    }
    public void setSucesso(boolean sucesso) { this.sucesso = sucesso; }
}
