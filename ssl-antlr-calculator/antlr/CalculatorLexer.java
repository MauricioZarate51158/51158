// Generated from c:/Users/MegaTecnologia/51158/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CalculatorLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, LETRA_MINUS=3, LETRA_MAYUS=4, DIGITO=5, SIMBOLO=6, WS=7, 
		NEWLINE=8, IF=9, ELSE=10, RETURN=11, PRINTF=12, LPAREN=13, RPAREN=14, 
		LBRACE=15, RBRACE=16, SEMI=17, QUOTE=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "LETRA_MINUS", "LETRA_MAYUS", "DIGITO", "SIMBOLO", "WS", 
			"NEWLINE", "IF", "ELSE", "RETURN", "PRINTF", "LPAREN", "RPAREN", "LBRACE", 
			"RBRACE", "SEMI", "QUOTE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'0'", "'1'", null, null, null, null, null, null, "'if'", "'else'", 
			"'return'", "'printf'", "'('", "')'", "'{'", "'}'", "';'", "'\"'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "LETRA_MINUS", "LETRA_MAYUS", "DIGITO", "SIMBOLO", 
			"WS", "NEWLINE", "IF", "ELSE", "RETURN", "PRINTF", "LPAREN", "RPAREN", 
			"LBRACE", "RBRACE", "SEMI", "QUOTE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public CalculatorLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Calculator.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0012a\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0004\u00063\b\u0006\u000b\u0006\f\u00064\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0004\u0007:\b\u0007\u000b\u0007\f\u0007;\u0001\u0007\u0001"+
		"\u0007\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t"+
		"\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0000\u0000\u0012\u0001"+
		"\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007"+
		"\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d"+
		"\u000f\u001f\u0010!\u0011#\u0012\u0001\u0000\u0006\u0001\u0000az\u0001"+
		"\u0000AZ\u0001\u000009\u0006\u0000!\"\'\',,..:;??\u0002\u0000\t\t  \u0002"+
		"\u0000\n\n\r\rb\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001"+
		"\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001"+
		"\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000"+
		"\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000"+
		"\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000"+
		"\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000"+
		"\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000"+
		"\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000"+
		"\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0001"+
		"%\u0001\u0000\u0000\u0000\u0003\'\u0001\u0000\u0000\u0000\u0005)\u0001"+
		"\u0000\u0000\u0000\u0007+\u0001\u0000\u0000\u0000\t-\u0001\u0000\u0000"+
		"\u0000\u000b/\u0001\u0000\u0000\u0000\r2\u0001\u0000\u0000\u0000\u000f"+
		"9\u0001\u0000\u0000\u0000\u0011?\u0001\u0000\u0000\u0000\u0013B\u0001"+
		"\u0000\u0000\u0000\u0015G\u0001\u0000\u0000\u0000\u0017N\u0001\u0000\u0000"+
		"\u0000\u0019U\u0001\u0000\u0000\u0000\u001bW\u0001\u0000\u0000\u0000\u001d"+
		"Y\u0001\u0000\u0000\u0000\u001f[\u0001\u0000\u0000\u0000!]\u0001\u0000"+
		"\u0000\u0000#_\u0001\u0000\u0000\u0000%&\u00050\u0000\u0000&\u0002\u0001"+
		"\u0000\u0000\u0000\'(\u00051\u0000\u0000(\u0004\u0001\u0000\u0000\u0000"+
		")*\u0007\u0000\u0000\u0000*\u0006\u0001\u0000\u0000\u0000+,\u0007\u0001"+
		"\u0000\u0000,\b\u0001\u0000\u0000\u0000-.\u0007\u0002\u0000\u0000.\n\u0001"+
		"\u0000\u0000\u0000/0\u0007\u0003\u0000\u00000\f\u0001\u0000\u0000\u0000"+
		"13\u0007\u0004\u0000\u000021\u0001\u0000\u0000\u000034\u0001\u0000\u0000"+
		"\u000042\u0001\u0000\u0000\u000045\u0001\u0000\u0000\u000056\u0001\u0000"+
		"\u0000\u000067\u0006\u0006\u0000\u00007\u000e\u0001\u0000\u0000\u0000"+
		"8:\u0007\u0005\u0000\u000098\u0001\u0000\u0000\u0000:;\u0001\u0000\u0000"+
		"\u0000;9\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000<=\u0001\u0000"+
		"\u0000\u0000=>\u0006\u0007\u0000\u0000>\u0010\u0001\u0000\u0000\u0000"+
		"?@\u0005i\u0000\u0000@A\u0005f\u0000\u0000A\u0012\u0001\u0000\u0000\u0000"+
		"BC\u0005e\u0000\u0000CD\u0005l\u0000\u0000DE\u0005s\u0000\u0000EF\u0005"+
		"e\u0000\u0000F\u0014\u0001\u0000\u0000\u0000GH\u0005r\u0000\u0000HI\u0005"+
		"e\u0000\u0000IJ\u0005t\u0000\u0000JK\u0005u\u0000\u0000KL\u0005r\u0000"+
		"\u0000LM\u0005n\u0000\u0000M\u0016\u0001\u0000\u0000\u0000NO\u0005p\u0000"+
		"\u0000OP\u0005r\u0000\u0000PQ\u0005i\u0000\u0000QR\u0005n\u0000\u0000"+
		"RS\u0005t\u0000\u0000ST\u0005f\u0000\u0000T\u0018\u0001\u0000\u0000\u0000"+
		"UV\u0005(\u0000\u0000V\u001a\u0001\u0000\u0000\u0000WX\u0005)\u0000\u0000"+
		"X\u001c\u0001\u0000\u0000\u0000YZ\u0005{\u0000\u0000Z\u001e\u0001\u0000"+
		"\u0000\u0000[\\\u0005}\u0000\u0000\\ \u0001\u0000\u0000\u0000]^\u0005"+
		";\u0000\u0000^\"\u0001\u0000\u0000\u0000_`\u0005\"\u0000\u0000`$\u0001"+
		"\u0000\u0000\u0000\u0003\u00004;\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}