package encomenda;

import java.time.Duration;
import java.time.LocalDate;
import java.time.Period;
import java.util.List;

import cliente.Cliente;

import funcionario.Funcionario;

public class Encomenda {
	
	private static int refCounter;
	private int refEncomenda;
	
	private Cliente cliente;
	private String nome;
	
	private LocalDate dataEncomenda;
	private LocalDate dataEntrega;
	
	private boolean projetoEspecial;
	private Estado estado;
	
	
	public List<Item> listaItems;
	
	
	
	private static LocalDate hoje = LocalDate.now(); 
	private Period tempoEncomenda = Period.between(dataEncomenda, hoje);
	private Period prazoEncomenda = Period.between(hoje, dataEntrega);
	
	private Duration tempoExecucaoEncomenda;
	
	private List<Funcionario> listaFuncionariosEncomenda;
	
	/////
	
	public Encomenda(LocalDate dataEncomenda, LocalDate dataEntrega, Cliente cliente, String nome) {	
		refCounter += 1;
		refEncomenda = refCounter;
		
		cliente.adicionarEncomenda(this);
		
		this.estado = Estado.NOVA;
		this.dataEncomenda = dataEncomenda;
		this.dataEntrega = dataEntrega;
		this.cliente = cliente;
		this.nome = nome;
		
	}
	
	
	//ADICIONAR ITEM
	public void adicionarItem(Item item) {
		item.setEncomendaItem(this);
		listaItemsEncomenda.add(item);
	}
	
	//REMOVER ITEM
	public void removerItem(Item item) {
		item.setEncomendaItem(null);
		listaItemsEncomenda.remove(item);
	}
	
	//CONFIRMAR SE O PRAZO DE ENTREGA E REALISTA
	public boolean preverAtraso() {
		int horasPrazo = prazoEncomenda.getDays() * 8;
		int horasExecucaoEncomenda = (int) tempoExecucaoEncomenda.getSeconds() / 60 / 60 * 2;
		boolean previsao = horasPrazo > horasExecucaoEncomenda;
		return previsao;
	}
	
	//ADICIONAR FUNCIONARIO
	public void adicionarFuncionario(Funcionario funcionario) {
		funcionario.adicionarEncomendasFuncionario(this);
		listaFuncionariosEncomenda.add(funcionario);
	}
	
	//REMOVER FUNCIONARIO
	public void removerFuncionario(Funcionario funcionario) {
		funcionario.removerEncomendasFuncionario(this);
		listaFuncionariosEncomenda.remove(funcionario);
	}

	
	@Override 
	
	public String toString() {
		return "\n" + "ENCOMENDA  " + this.getRefEncomenda() + "  " + this.getNomeEncomenda() + "  " + this.cliente.getNomeCliente()
		+ "  " + this.getListaItemsEncomenda();
	}
	
	/////
	
	public Cliente getCliente() {
		return cliente;
	}
	
	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public int getRefEncomenda() {
		return refEncomenda;
	}

	public LocalDate getDataEncomenda() {
		return dataEncomenda;
	}
	
	public LocalDate getDataEntrega() {
		return dataEntrega;
	}
	

	public List<Item> getListaItemsEncomenda(){
		return listaItemsEncomenda;
	}
	
	public void setEstado() {
		if(tempoEncomenda.getDays() > 5)
			this.estado = Estado.NA;
		if(prazoEncomenda.getDays() == 0)
			this.estado = Estado.ENTREGA;
		if(prazoEncomenda.getDays() < 0)
			this.estado = Estado.ATRASADA;
	}
	
	public Estado getEstado() {
		return estado;
	}
	
	public void setNomeEncomenda(String nomeEncomenda) {
		this.nomeEncomenda = nomeEncomenda;
	}
	
	public String getNomeEncomenda() {
		return nomeEncomenda;
	}
	
	public Duration getTempoExecucaoEncomenda() {
		for (Item i : listaItemsEncomenda) {
			tempoExecucaoEncomenda.plus(i.getTempoExecucaoItem());
		}
		return tempoExecucaoEncomenda;
	}
}
