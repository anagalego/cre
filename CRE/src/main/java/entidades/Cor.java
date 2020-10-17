package entidades;

public class Cor {

    private String id;
    private String cor;
    private String tipologia;

    public Cor(){};
    private Cor(String id, String cor, String tipologia) {
        this.id = id;
        this.cor = cor;
        this.tipologia = tipologia;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public String getTipologia() {
        return tipologia;
    }

    public void setTipologia(String tipologia) {
        this.tipologia = tipologia;
    }
}
    /*
    //LISO TRANSPARENTE

    V24_AZUL_T1("Azul T1"),
    V24_AZUL_T2("Azul T2"),
    V24_AZUL_T3("Azul T3"),
    V24_AZUL_T4("Azul T4"),
    V24_AZUL_T5("Azul T5"),
    V24_AZUL_T6("Azul T6"),
    V24_AZUL_T7("Azul T7"),
    V24_AZUL_T8("Azul T8"),
    V24_AZUL_T9("Azul T9"),
    V24_AZUL_T10("Azul T10"),
    V24_AZUL_T11("Azul T11"),

    V24_VERDE_T1("Verde T1"),
    V24_VERDE_T2("Verde T2"),
    V24_VERDE_T3("Verde T3"),
    V24_VERDE_T4("Verde T4"),
    V24_VERDE_T5("Verde T5"),
    V24_VERDE_T6("Verde T6"),
    V24_VERDE_T7("Verde T7"),
    V24_VERDE_T8("Verde T8"),
    V24_VERDE_T9("Verde T9"),
    V24_VERDE_T10("Verde T10"),

    V24_VERMELHO_T1("Vermelho T1"),
    V24_VERMELHO_T2("Vermelho T2"),
    V24_VERMELHO_T3("Vermelho T3"),
    V24_VERMELHO_T4("Vermelho T4"),
    V24_VERMELHO_T5("Vermelho T5"),
    V24_VERMELHO_T6("Vermelho T6"),
    V24_VERMELHO_T7("Vermelho T7"),
    V24_VERMELHO_T8("Vermelho T8"),

    V24_LARANJA_T1("Laranja T1"),
    V24_LARANJA_T2("Laranja T2"),
    V24_LARANJA_T3("Laranja T3"),
    V24_LARANJA_T4("Laranja T4"),
    V24_LARANJA_T5("Laranja T5"),
    V24_LARANJA_T6("Laranja T6"),
    V24_LARANJA_T7("Laranja T7"),
    V24_LARANJA_T8("Laranja T8"),
    V24_LARANJA_T9("Laranja T9"),

    V24_MEL("Mel"),
    V24_MEL_T1("Mel T1"),

    V24_CINZA_T1("Cinza T1"),
    V24_CINZA_T2("Cinza T2"),
    V24_CINZA_T3("Cinza T3"),

    V24_CASTANHO("Castanho"),
    V24_CASTANHO_T1("Castanho T1");
    */