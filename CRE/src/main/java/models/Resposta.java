package models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Resposta<T>{
    private boolean sucesso;
    private T conteudo;



    public T getConteudo() {
        return conteudo;
    }

    public void setConteudo(T conteudo) {
        this.conteudo = conteudo;
    }

    public boolean isSucesso() {
        return sucesso;
    }

    public void setSucesso(boolean sucesso) {
        this.sucesso = sucesso;
    }
}
