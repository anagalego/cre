package encomenda;

import java.time.Duration;

import encomenda.Encomenda;
import produto.Produto;

public class Item {
	
	private static int refCounter;
	private int refItem;
	
	private Produto produto;
	private long quantidade;
	private Duration tempoExecucaoItem;
	private Encomenda encomendaItem;
	
	
	public Item(Produto produto, long quantidade) {	
		refCounter += 1;
		refItem = refCounter;
		
		this.produto = produto;
		this.quantidade= quantidade;
	}
	
	
	
	/////
	@Override
	
	public String toString() {
		return "ITEM  " + this.getRefItem() + "  " + this.produto.getTipologia() + "  " + this.produto.getCor() + "  " + this.quantidade;
	}
	
	
	/////
	public int getRefItem() {
		return refItem;
	}
	
	public Duration getTempoExecucaoItem() {
		this.produto.getTempoExecucaoProduto().multipliedBy(quantidade);
		return tempoExecucaoItem;
	}
	
	public void setEncomendaItem(Encomenda encomenda) {
		this.encomendaItem = encomenda;
	}

}
