package produto;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

import produto.*;


public class Produto {
	
	private static int refCounter;
	private int refProduto;
	
	private Categoria categoria;
	private Cor cor;
	
	private float PVP;
	
	/*
	private Duration duracao_Olaria;
	private Duration duracao_Forno1;
	private Duration duracao_Vidracao;
	private Duration duracao_Pintura;
	private Duration duracao_Forno2;
	private Duration duracao_Escolha;

	private Duration duracao_Total;
	*/
	
	public Produto(Categoria categoria, Cor cor) {
		refCounter += 1;
		refProduto = refCounter;
		
		this.categoria = categoria;		
		this.cor = cor;
	}

	
	
	@Override
	public String toString() {
		return "PRODUTO  " + this.getCategoria().toString() + "  " + this.getCor().toString();
	}
	
	
	
	//
	public int getRefProduto() {
		return refProduto;
	}
	
	public Categoria getCategoria() {
		return categoria;
	}
	
	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	public Cor getCor() {
		return cor;
	}

	public void setCor(Cor cor) {
		this.cor = cor;
	}

	public float getPVP() {
		return PVP;
	}

	public void setPVP(float PVP) {
		this.PVP = PVP;
	}
}
