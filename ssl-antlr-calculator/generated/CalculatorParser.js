// Generated from Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
const serializedATN = [4,1,18,92,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
13,7,13,1,0,1,0,1,0,1,1,1,1,3,1,34,8,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,3,3,50,8,3,1,4,1,4,3,4,54,8,4,1,4,3,4,57,8,4,1,5,1,
5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,3,8,72,8,8,1,8,1,8,1,9,4,9,
77,8,9,11,9,12,9,78,1,10,1,10,1,10,3,10,84,8,10,1,11,1,11,1,12,1,12,1,13,
1,13,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,2,1,0,1,2,1,0,3,
4,85,0,28,1,0,0,0,2,31,1,0,0,0,4,35,1,0,0,0,6,37,1,0,0,0,8,56,1,0,0,0,10,
58,1,0,0,0,12,64,1,0,0,0,14,67,1,0,0,0,16,69,1,0,0,0,18,76,1,0,0,0,20,83,
1,0,0,0,22,85,1,0,0,0,24,87,1,0,0,0,26,89,1,0,0,0,28,29,3,2,1,0,29,30,5,
0,0,1,30,1,1,0,0,0,31,33,3,4,2,0,32,34,3,2,1,0,33,32,1,0,0,0,33,34,1,0,0,
0,34,3,1,0,0,0,35,36,3,6,3,0,36,5,1,0,0,0,37,38,5,9,0,0,38,39,5,13,0,0,39,
40,3,14,7,0,40,41,5,14,0,0,41,42,5,15,0,0,42,43,3,8,4,0,43,49,5,16,0,0,44,
45,5,10,0,0,45,46,5,15,0,0,46,47,3,8,4,0,47,48,5,16,0,0,48,50,1,0,0,0,49,
44,1,0,0,0,49,50,1,0,0,0,50,7,1,0,0,0,51,53,3,10,5,0,52,54,3,8,4,0,53,52,
1,0,0,0,53,54,1,0,0,0,54,57,1,0,0,0,55,57,3,12,6,0,56,51,1,0,0,0,56,55,1,
0,0,0,57,9,1,0,0,0,58,59,5,12,0,0,59,60,5,13,0,0,60,61,3,16,8,0,61,62,5,
14,0,0,62,63,5,17,0,0,63,11,1,0,0,0,64,65,5,11,0,0,65,66,5,17,0,0,66,13,
1,0,0,0,67,68,7,0,0,0,68,15,1,0,0,0,69,71,5,18,0,0,70,72,3,18,9,0,71,70,
1,0,0,0,71,72,1,0,0,0,72,73,1,0,0,0,73,74,5,18,0,0,74,17,1,0,0,0,75,77,3,
20,10,0,76,75,1,0,0,0,77,78,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,19,1,
0,0,0,80,84,3,22,11,0,81,84,3,24,12,0,82,84,3,26,13,0,83,80,1,0,0,0,83,81,
1,0,0,0,83,82,1,0,0,0,84,21,1,0,0,0,85,86,7,1,0,0,86,23,1,0,0,0,87,88,5,
5,0,0,88,25,1,0,0,0,89,90,5,6,0,0,90,27,1,0,0,0,7,33,49,53,56,71,78,83];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'0'", "'1'", null, null, null, null, 
                            null, null, "'if'", "'else'", "'return'", "'printf'", 
                            "'('", "')'", "'{'", "'}'", "';'", "'\"'" ];
    static symbolicNames = [ null, null, null, "LETRA_MINUS", "LETRA_MAYUS", 
                             "DIGITO", "SIMBOLO", "WS", "NEWLINE", "IF", 
                             "ELSE", "RETURN", "PRINTF", "LPAREN", "RPAREN", 
                             "LBRACE", "RBRACE", "SEMI", "QUOTE" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "decision", 
                         "sentencia", "salida", "terminar", "condicion", 
                         "cadena", "caracteres", "caracter", "letra", "digito", 
                         "simbolo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.instrucciones();
	        this.state = 29;
	        this.match(CalculatorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.instruccion();
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 32;
	            this.instrucciones();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.decision();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decision() {
	    let localctx = new DecisionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_decision);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(CalculatorParser.IF);
	        this.state = 38;
	        this.match(CalculatorParser.LPAREN);
	        this.state = 39;
	        this.condicion();
	        this.state = 40;
	        this.match(CalculatorParser.RPAREN);
	        this.state = 41;
	        this.match(CalculatorParser.LBRACE);
	        this.state = 42;
	        this.sentencia();
	        this.state = 43;
	        this.match(CalculatorParser.RBRACE);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 44;
	            this.match(CalculatorParser.ELSE);
	            this.state = 45;
	            this.match(CalculatorParser.LBRACE);
	            this.state = 46;
	            this.sentencia();
	            this.state = 47;
	            this.match(CalculatorParser.RBRACE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_sentencia);
	    var _la = 0;
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.salida();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===11 || _la===12) {
	                this.state = 52;
	                this.sentencia();
	            }

	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(CalculatorParser.PRINTF);
	        this.state = 59;
	        this.match(CalculatorParser.LPAREN);
	        this.state = 60;
	        this.cadena();
	        this.state = 61;
	        this.match(CalculatorParser.RPAREN);
	        this.state = 62;
	        this.match(CalculatorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(CalculatorParser.RETURN);
	        this.state = 65;
	        this.match(CalculatorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CalculatorParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CalculatorParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(CalculatorParser.QUOTE);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 120) !== 0)) {
	            this.state = 70;
	            this.caracteres();
	        }

	        this.state = 73;
	        this.match(CalculatorParser.QUOTE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracteres() {
	    let localctx = new CaracteresContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CalculatorParser.RULE_caracteres);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 75;
	            this.caracter();
	            this.state = 78; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 120) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CalculatorParser.RULE_caracter);
	    try {
	        this.state = 83;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 80;
	            this.letra();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
	            this.digito();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 82;
	            this.simbolo();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	letra() {
	    let localctx = new LetraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CalculatorParser.RULE_letra);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	digito() {
	    let localctx = new DigitoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CalculatorParser.RULE_digito);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(CalculatorParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simbolo() {
	    let localctx = new SimboloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, CalculatorParser.RULE_simbolo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(CalculatorParser.SIMBOLO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.LETRA_MINUS = 3;
CalculatorParser.LETRA_MAYUS = 4;
CalculatorParser.DIGITO = 5;
CalculatorParser.SIMBOLO = 6;
CalculatorParser.WS = 7;
CalculatorParser.NEWLINE = 8;
CalculatorParser.IF = 9;
CalculatorParser.ELSE = 10;
CalculatorParser.RETURN = 11;
CalculatorParser.PRINTF = 12;
CalculatorParser.LPAREN = 13;
CalculatorParser.RPAREN = 14;
CalculatorParser.LBRACE = 15;
CalculatorParser.RBRACE = 16;
CalculatorParser.SEMI = 17;
CalculatorParser.QUOTE = 18;

CalculatorParser.RULE_programa = 0;
CalculatorParser.RULE_instrucciones = 1;
CalculatorParser.RULE_instruccion = 2;
CalculatorParser.RULE_decision = 3;
CalculatorParser.RULE_sentencia = 4;
CalculatorParser.RULE_salida = 5;
CalculatorParser.RULE_terminar = 6;
CalculatorParser.RULE_condicion = 7;
CalculatorParser.RULE_cadena = 8;
CalculatorParser.RULE_caracteres = 9;
CalculatorParser.RULE_caracter = 10;
CalculatorParser.RULE_letra = 11;
CalculatorParser.RULE_digito = 12;
CalculatorParser.RULE_simbolo = 13;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(CalculatorParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_instrucciones;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitInstrucciones(this);
		}
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_instruccion;
    }

	decision() {
	    return this.getTypedRuleContext(DecisionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitInstruccion(this);
		}
	}


}



class DecisionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_decision;
    }

	IF() {
	    return this.getToken(CalculatorParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	LBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.LBRACE);
	    } else {
	        return this.getToken(CalculatorParser.LBRACE, i);
	    }
	};


	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	RBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.RBRACE);
	    } else {
	        return this.getToken(CalculatorParser.RBRACE, i);
	    }
	};


	ELSE() {
	    return this.getToken(CalculatorParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterDecision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitDecision(this);
		}
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitSentencia(this);
		}
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_salida;
    }

	PRINTF() {
	    return this.getToken(CalculatorParser.PRINTF, 0);
	};

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(CalculatorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitSalida(this);
		}
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_terminar;
    }

	RETURN() {
	    return this.getToken(CalculatorParser.RETURN, 0);
	};

	SEMI() {
	    return this.getToken(CalculatorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitTerminar(this);
		}
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_condicion;
    }


	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCondicion(this);
		}
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_cadena;
    }

	QUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.QUOTE);
	    } else {
	        return this.getToken(CalculatorParser.QUOTE, i);
	    }
	};


	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCadena(this);
		}
	}


}



class CaracteresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_caracteres;
    }

	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCaracteres(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCaracteres(this);
		}
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_caracter;
    }

	letra() {
	    return this.getTypedRuleContext(LetraContext,0);
	};

	digito() {
	    return this.getTypedRuleContext(DigitoContext,0);
	};

	simbolo() {
	    return this.getTypedRuleContext(SimboloContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCaracter(this);
		}
	}


}



class LetraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_letra;
    }

	LETRA_MINUS() {
	    return this.getToken(CalculatorParser.LETRA_MINUS, 0);
	};

	LETRA_MAYUS() {
	    return this.getToken(CalculatorParser.LETRA_MAYUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterLetra(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitLetra(this);
		}
	}


}



class DigitoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_digito;
    }

	DIGITO() {
	    return this.getToken(CalculatorParser.DIGITO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterDigito(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitDigito(this);
		}
	}


}



class SimboloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_simbolo;
    }

	SIMBOLO() {
	    return this.getToken(CalculatorParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterSimbolo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitSimbolo(this);
		}
	}


}




CalculatorParser.ProgramaContext = ProgramaContext; 
CalculatorParser.InstruccionesContext = InstruccionesContext; 
CalculatorParser.InstruccionContext = InstruccionContext; 
CalculatorParser.DecisionContext = DecisionContext; 
CalculatorParser.SentenciaContext = SentenciaContext; 
CalculatorParser.SalidaContext = SalidaContext; 
CalculatorParser.TerminarContext = TerminarContext; 
CalculatorParser.CondicionContext = CondicionContext; 
CalculatorParser.CadenaContext = CadenaContext; 
CalculatorParser.CaracteresContext = CaracteresContext; 
CalculatorParser.CaracterContext = CaracterContext; 
CalculatorParser.LetraContext = LetraContext; 
CalculatorParser.DigitoContext = DigitoContext; 
CalculatorParser.SimboloContext = SimboloContext; 
