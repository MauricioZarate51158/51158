// Generated from c:/Users/MegaTecnologia/51158/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CalculatorParser}.
 */
public interface CalculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(CalculatorParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(CalculatorParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterInstrucciones(CalculatorParser.InstruccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitInstrucciones(CalculatorParser.InstruccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(CalculatorParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(CalculatorParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#decision}.
	 * @param ctx the parse tree
	 */
	void enterDecision(CalculatorParser.DecisionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#decision}.
	 * @param ctx the parse tree
	 */
	void exitDecision(CalculatorParser.DecisionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(CalculatorParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(CalculatorParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(CalculatorParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(CalculatorParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(CalculatorParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(CalculatorParser.TerminarContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(CalculatorParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(CalculatorParser.CondicionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(CalculatorParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(CalculatorParser.CadenaContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#caracteres}.
	 * @param ctx the parse tree
	 */
	void enterCaracteres(CalculatorParser.CaracteresContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#caracteres}.
	 * @param ctx the parse tree
	 */
	void exitCaracteres(CalculatorParser.CaracteresContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#caracter}.
	 * @param ctx the parse tree
	 */
	void enterCaracter(CalculatorParser.CaracterContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#caracter}.
	 * @param ctx the parse tree
	 */
	void exitCaracter(CalculatorParser.CaracterContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#letra}.
	 * @param ctx the parse tree
	 */
	void enterLetra(CalculatorParser.LetraContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#letra}.
	 * @param ctx the parse tree
	 */
	void exitLetra(CalculatorParser.LetraContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#digito}.
	 * @param ctx the parse tree
	 */
	void enterDigito(CalculatorParser.DigitoContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#digito}.
	 * @param ctx the parse tree
	 */
	void exitDigito(CalculatorParser.DigitoContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#simbolo}.
	 * @param ctx the parse tree
	 */
	void enterSimbolo(CalculatorParser.SimboloContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#simbolo}.
	 * @param ctx the parse tree
	 */
	void exitSimbolo(CalculatorParser.SimboloContext ctx);
}