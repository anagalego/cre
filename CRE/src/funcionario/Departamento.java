package funcionario;

public enum Departamento {

	ADMINISTRATIVO("Administrativo", Seccao.NA),
	FINANCEIRO("Financeiro", Seccao.NA),
	COMERCIAL("Comercial", Seccao.NA),
	RECURSOS_HUMANOS("Recursos Humanos", Seccao.NA),
	OPERACIONAL_OLARIA("Operacional", Seccao.OLARIA),
	OPERACIONAL_FORNO("Operacional", Seccao.OLARIA),
	OPERACIONAL_VIDRACAO("Operacional", Seccao.OLARIA),
	OPERACIONAL_PINTURA("Operacional", Seccao.OLARIA),
	OPERACIONAL_ESCOLHA("Operacional", Seccao.OLARIA),
	NA("", Seccao.NA);
	
	
	private String departamento;
	public Seccao seccao;
	

	private Departamento(String departamento, Seccao seccao) {
		this.departamento = departamento;
		this.seccao = seccao;
	}
	
	
	public String getDepartamento() {
		return departamento;
	}
	
	public Seccao getSeccao() {
		return seccao;
	}
	
	
	
	public enum Seccao {
		OLARIA("Olaria"),
		FORNO("Forno"),
		VIDRACAO("Vidração"),
		PINTURA("Pintura"),
		ESCOLHA("Escolha"),
		NA("");
		
		private String seccao;
		
		private Seccao(String seccao) {
			this.seccao = seccao;
		}
		
		public String getSeccao() {
			return seccao;
		}
 	}
	
}
