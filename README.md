# Counter App

Un'applicazione web interattiva che implementa un contatore numerico, sviluppata come progetto finale di JavaScript vanilla.

## Demo

La pagina mostra un contatore centrato sullo schermo con due pulsanti per incrementare e decrementare il valore. Il contatore non scende mai sotto zero.

## Tecnologie

- HTML5
- CSS3
- JavaScript (vanilla, nessuna libreria esterna)

## Struttura del progetto

```
progetto javascript/
├── index.html    # Entry point
├── app.js        # Logica e generazione del DOM
└── style.css     # Stile e layout
```

## Funzionamento

Il DOM viene costruito interamente tramite JavaScript con `createElement`. Due event listener gestiscono i click sui pulsanti:

- **+** — incrementa il valore di 1
- **-** — decrementa il valore di 1 (solo se maggiore di 0)

## Come avviare

Apri `index.html` direttamente nel browser. Nessuna installazione o dipendenza richiesta.
