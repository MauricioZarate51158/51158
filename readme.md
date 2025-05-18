TP ANALIZADOR SINTACTICO SSL
Mauricio Zarate 51158

Pasos para probar el programa

1. Clonar el programa abriendo cmd en windows
2. Copiar git clone https://github.com/MauricioZarate51158/51158.git
3. Deberia decir done
![Captura de pantalla (447)](https://github.com/user-attachments/assets/c8cc4a02-8628-4cf7-aaaa-f32543c53e79)

4.Direccionamos el cmd con: 
cd 51158
cd ssl-antlr-calculator

(Por las dudas regenerar lexer y parser con:
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -o generated Calculator.g4
)
5.Se abre el editor desde el cmd con "code ."
![Captura de pantalla (448)](https://github.com/user-attachments/assets/14596027-1606-4573-82da-21fd2993c5af)

6.Si no muestra el tree de antlr reemplazar en vscode>launch.json
{
    "version": "2.0.0",
    "configurations": [
    {
    "name": "Debug ANTLR4 grammar",
    "type": "antlr-debug",
    "request": "launch",
    "input": "input.txt",
    "grammar": "Calculator.g4",
    "printParseTree": true,
    "visualParseTree": true
    }
    ]
}

7.En input.txt ponemos el ejemplo1
![Captura de pantalla (449)](https://github.com/user-attachments/assets/2543596b-970a-4bc6-ab17-cbde0756cab9)


8. Con f5 compilamos y corremos
![Captura de pantalla (450)](https://github.com/user-attachments/assets/9fe8beb3-2939-403c-9c13-a420c7ff058c)


9. Para ver la table de lexemas y tokens en el cmd usamos
   node index.js
![image](https://github.com/user-attachments/assets/ec792246-5d43-41ee-98f2-f46a39c6bb9e)
