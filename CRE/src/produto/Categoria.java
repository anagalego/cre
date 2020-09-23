package produto;

public enum Categoria {
	
	//MEDIDAS EM CM
	
	AVL_AZULEJO("Azulejo", 14, 14, 0),
	XAL_AZULEJO("Azulejo", 10, 10, 0),
	
	FTBL_FAIXA("Faixa", 14, 5, 0),
	FAL_FAIXA("Faixa", 14, 7, 0),
	FTL_FAIXA("Faixa", 14, 4, 0),
	
	CTL4_CANTONEIRA_RETA("Cantoneira Reta", 14, 4, 4),
	CTL2_CANTONEIRA_RETA("Cantoneira Reta", 14, 2.5f, 2.5f),
	
	CVL_CANTONEIRA_CONVEXA("Cantoneira Convexa", 14, 4, 4),
	CVL_CANTONEIRA_CONCAVA("Cantoneira Côncava", 14, 2.5f, 2.5f),
	
	FQBL_CANTO("Canto", 5, 5, 0),
	FCL_CANTO("Canto", 7, 7, 0),
	FQL_CANTO("Canto", 4, 4, 0),
	CCTL4_CANTO("Canto", 4, 4, 4),
	CCTL2_CANTO("Canto", 2.5f, 2.5f, 2.5f),
	CCVL4_CANTO("Canto", 4, 4, 4),
	CCVL2_CANTO("Canto", 2.5f, 2.5f, 2.5f);	
	
	
	
	private String descricao;
	private float x;
	private float y;
	private float z;
	
	private Categoria(String descricao, float x, float y, float z) {
		this.descricao = descricao;
		this.setX(x);
		this.setY(y);
		this.setZ(z);
	}

	//
	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
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
}
