{
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# R Grundlagen\n",
    "Die folgende Darstellung basiert in weiten Teilen auf dem Buch [Programmieren mit R](http://www.statistik.uni-dortmund.de/~ligges/PmitR/) von Uwe Ligges. Aber auch das [R Data Visualization Cookbook](https://www.packtpub.com/big-data-and-business-intelligence/r-data-visualization-cookbook) wurde herangezogen.\n",
    "\n",
    "Die wichtigste Informationsquelle ist sicherlich die [Website des R-Projekts](https://www.r-project.org/). Allerdings gibt es zahlreiche weitere Informationsquellen wie etwa die [R-Bloggers](https://www.r-bloggers.com/). Unzählige Ressourcen zu **R** finden sich im [**C**omprehensive **R A**rchive **N**etwork (CRAN)](https://cran.r-project.org/). "
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## R als Taschenrechner"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 1,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "22"
      ],
      "text/latex": [
       "22"
      ],
      "text/markdown": [
       "22"
      ],
      "text/plain": [
       "[1] 22"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "2+4*5"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "0"
      ],
      "text/latex": [
       "0"
      ],
      "text/markdown": [
       "0"
      ],
      "text/plain": [
       "[1] 0"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "4*3^2-6*6  # hier sollte 0 raus kommen (wichtiger Kommentar!)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "**Punkt vor Strich** wird also beachtet!"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "-2"
      ],
      "text/latex": [
       "-2"
      ],
      "text/markdown": [
       "-2"
      ],
      "text/plain": [
       "[1] -2"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "2*cos(pi)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 4,
   "metadata": {
    "collapsed": true
   },
   "outputs": [],
   "source": [
    "?tan"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "$\\cos()$ und $\\tan()$ sind **eingebaute Funktionen**. Eine Überischt über vorhandene eingebaute Funktionen erhält man zum Beispiel auf der [Referenzkatrte bei CRAN](https://cran.r-project.org/doc/contrib/Short-refcard.pdf). *Hilfe* zu speziellen Funktionen erhält man interaktiv durch ein *vorangestelltes Fragezeichen*."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 5,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "-Inf"
      ],
      "text/latex": [
       "-Inf"
      ],
      "text/markdown": [
       "-Inf"
      ],
      "text/plain": [
       "[1] -Inf"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "-1/0  # negativ unendlich"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 6,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "Inf"
      ],
      "text/latex": [
       "Inf"
      ],
      "text/markdown": [
       "Inf"
      ],
      "text/plain": [
       "[1] Inf"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "1/0  # positiv unendlich"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 7,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "NaN"
      ],
      "text/latex": [
       "NaN"
      ],
      "text/markdown": [
       "NaN"
      ],
      "text/plain": [
       "[1] NaN"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "0/0  # undefiniert (Not a Number)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Es gibt also in R *spezielle Werte* für $+/- \\infty$ oder undefinierte Größen!"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Stilfragen\n",
    "Allgemein empfiehlt sich die Einhaltung von *Guidelines* wie etwa die von [Google](https://google.github.io/styleguide/Rguide.xml) zusammen getragenen."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Zuweisungen in R\n",
    "Hierfür gibt es verschiedene Möglichkeiten. Welche man verwendet ist eine Frage des **Stils** (s.o.), wobei Einiges für den klassischen Stil mit Hilfe des *Zuweisungspfeils* spricht. "
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 8,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "3.14159265358979"
      ],
      "text/latex": [
       "3.14159265358979"
      ],
      "text/markdown": [
       "3.14159265358979"
      ],
      "text/plain": [
       "[1] 3.141593"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "x <- pi  # der Variablen x den Wert von Pi zuweisen (empfohlener klassischer R-Stil)\n",
    "x"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 9,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "2.71828182845905"
      ],
      "text/latex": [
       "2.71828182845905"
      ],
      "text/markdown": [
       "2.71828182845905"
      ],
      "text/plain": [
       "[1] 2.718282"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "x = exp(1)  # der Variablen x den Wert von e zuweisen (möglicher neuerer R-Stil)\n",
    "x"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 10,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "1.22464679914735e-16"
      ],
      "text/latex": [
       "1.22464679914735e-16"
      ],
      "text/markdown": [
       "1.22464679914735e-16"
      ],
      "text/plain": [
       "[1] 1.224647e-16"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "sin(pi) -> x  # der Variablen x den Wert von 0 zuweisen (NICHT ZU EMPFEHLEN, sowohl der Stil, als auch der Weg ...)\n",
    "x"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "***Bemerkung***\n",
    "Hinsichtlich der *Kommentierung* ergeben sich durch die Verwendung des Markdowns in Jupyter Notebooks natürlich ganz neue Möglichkeiten, da man nicht auf Kommentarzeilen im Code selbst angewiesen ist."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Logik und Wahrheitswerte\n",
    "Informationen zu logischen Vektoren und Operatoren erhält man im [R Handbuch](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Logical-vectors) oder etwas dateillierter an der [ETH Zürich](https://stat.ethz.ch/R-manual/R-devel/library/base/html/Logic.html)."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Einfache Vergleiche"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 11,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "FALSE"
      ],
      "text/latex": [
       "FALSE"
      ],
      "text/markdown": [
       "FALSE"
      ],
      "text/plain": [
       "[1] FALSE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "5 > 6"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 12,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "TRUE"
      ],
      "text/latex": [
       "TRUE"
      ],
      "text/markdown": [
       "TRUE"
      ],
      "text/plain": [
       "[1] TRUE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(5 + 1) != 5"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 13,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "TRUE"
      ],
      "text/latex": [
       "TRUE"
      ],
      "text/markdown": [
       "TRUE"
      ],
      "text/plain": [
       "[1] TRUE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "-5 < -4"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Logische Verknüpfungen"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 14,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "TRUE"
      ],
      "text/latex": [
       "TRUE"
      ],
      "text/markdown": [
       "TRUE"
      ],
      "text/plain": [
       "[1] TRUE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(1 >= 0) && (9 == 3^2) # Logisches UND"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 15,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "TRUE"
      ],
      "text/latex": [
       "TRUE"
      ],
      "text/markdown": [
       "TRUE"
      ],
      "text/plain": [
       "[1] TRUE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(1 == 0) || (9 == 3^2) # Logisches ODER"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 16,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "TRUE"
      ],
      "text/latex": [
       "TRUE"
      ],
      "text/markdown": [
       "TRUE"
      ],
      "text/plain": [
       "[1] TRUE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "FALSE || TRUE"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "***Wichtig:*** Die Doppeloperatoren $||$ und $\\$\\$ $ werden nur so lange ausgewertet, bis das Ergebnis fest steht. Bei den Einzeloperatoren werden alle Teilausdrücke evaluiert (siehe die folgenden Schritte). Genauer spricht man von *vektorwertiger* (bei den Einzeloperatoren) bzw. *nicht vektorwertiger* (bei den Doppeloperatoren) Evaluierung."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 17,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "1"
      ],
      "text/latex": [
       "1"
      ],
      "text/markdown": [
       "1"
      ],
      "text/plain": [
       "[1] 1"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "x <- 1\n",
    "x"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 18,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "TRUE"
      ],
      "text/latex": [
       "TRUE"
      ],
      "text/markdown": [
       "TRUE"
      ],
      "text/plain": [
       "[1] TRUE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "TRUE || (x <- 2)  # Ausdruck ist TRUE und die Auswertung des ersten Teilausdrucks genügt"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 19,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "1"
      ],
      "text/latex": [
       "1"
      ],
      "text/markdown": [
       "1"
      ],
      "text/plain": [
       "[1] 1"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "x"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 20,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "TRUE"
      ],
      "text/latex": [
       "TRUE"
      ],
      "text/markdown": [
       "TRUE"
      ],
      "text/plain": [
       "[1] TRUE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "FALSE || (x <- 2)  # Hier muss auch der zweite Teilausdruck evaluiert werden"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 21,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "2"
      ],
      "text/latex": [
       "2"
      ],
      "text/markdown": [
       "2"
      ],
      "text/plain": [
       "[1] 2"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "x"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 22,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "TRUE"
      ],
      "text/latex": [
       "TRUE"
      ],
      "text/markdown": [
       "TRUE"
      ],
      "text/plain": [
       "[1] TRUE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "TRUE | (x <- 3)  # Beide Teilausdrücke werden evaluiert"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 23,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "3"
      ],
      "text/latex": [
       "3"
      ],
      "text/markdown": [
       "3"
      ],
      "text/plain": [
       "[1] 3"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "x"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 24,
   "metadata": {
    "collapsed": true
   },
   "outputs": [],
   "source": [
    "logicalVector1 <- c(TRUE, TRUE)\n",
    "logicalVector2 <- c(FALSE, TRUE)\n",
    "logicalVector3 <- c(FALSE, FALSE)\n",
    "logicalVector4 <- c(TRUE, FALSE)\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 25,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>FALSE</li>\n",
       "\t<li>TRUE</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item FALSE\n",
       "\\item TRUE\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. FALSE\n",
       "2. TRUE\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] FALSE  TRUE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "logicalVector1 & logicalVector2  # vektorwertig, d.h. es gibt ein Ergebnis für beide Vektorelemente"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 26,
   "metadata": {
    "collapsed": false,
    "scrolled": true
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "FALSE"
      ],
      "text/latex": [
       "FALSE"
      ],
      "text/markdown": [
       "FALSE"
      ],
      "text/plain": [
       "[1] FALSE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "logicalVector1 && logicalVector2  # NICHT vektorwertig, d.h. es wird nur das erste Element evaluiert"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 27,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>FALSE</li>\n",
       "\t<li>TRUE</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item FALSE\n",
       "\\item TRUE\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. FALSE\n",
       "2. TRUE\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] FALSE  TRUE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "logicalVector3 | logicalVector2  # vektorwertig, d.h. es gibt ein Ergebnis für beide Vektorelemente"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 28,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "FALSE"
      ],
      "text/latex": [
       "FALSE"
      ],
      "text/markdown": [
       "FALSE"
      ],
      "text/plain": [
       "[1] FALSE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "logicalVector3 || logicalVector2  # NICHT vektorwertig, d.h. es wird nur das erste Element evaluiert"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 29,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "TRUE"
      ],
      "text/latex": [
       "TRUE"
      ],
      "text/markdown": [
       "TRUE"
      ],
      "text/plain": [
       "[1] TRUE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "logicalVector3 || logicalVector4  # NICHT vektorwertig, d.h. es wird nur das erste Element evaluiert"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Vektorielle logische Funktionen"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 30,
   "metadata": {
    "collapsed": true
   },
   "outputs": [],
   "source": [
    "vec <- c(7, 6, 5, 4, 3, 2, 1)  # einfacher Vektor\n",
    "einige <- vec > 3\n",
    "alle <- vec < 10"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 31,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "TRUE"
      ],
      "text/latex": [
       "TRUE"
      ],
      "text/markdown": [
       "TRUE"
      ],
      "text/plain": [
       "[1] TRUE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "any(einige)  # gibt es wahre Elemente in \"einige\"?"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 32,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "TRUE"
      ],
      "text/latex": [
       "TRUE"
      ],
      "text/markdown": [
       "TRUE"
      ],
      "text/plain": [
       "[1] TRUE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "any(alle)  # gibt es wahre Elemente in \"alle\"?"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 33,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "FALSE"
      ],
      "text/latex": [
       "FALSE"
      ],
      "text/markdown": [
       "FALSE"
      ],
      "text/plain": [
       "[1] FALSE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "any(!alle)  # gibt es wahre Elemente in NICHT \"alle\" (der logischen Negation von \"alle\")?"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 34,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "FALSE"
      ],
      "text/latex": [
       "FALSE"
      ],
      "text/markdown": [
       "FALSE"
      ],
      "text/plain": [
       "[1] FALSE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "all(einige)  # sind sämtliche Elemente von \"einige\" wahr?"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 35,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "TRUE"
      ],
      "text/latex": [
       "TRUE"
      ],
      "text/markdown": [
       "TRUE"
      ],
      "text/plain": [
       "[1] TRUE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "all(alle)  # sind sämtliche Elemente von \"alle\" wahr?"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 36,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>1</li>\n",
       "\t<li>2</li>\n",
       "\t<li>3</li>\n",
       "\t<li>4</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 1\n",
       "\\item 2\n",
       "\\item 3\n",
       "\\item 4\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 1\n",
       "2. 2\n",
       "3. 3\n",
       "4. 4\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] 1 2 3 4"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "which(einige)  # an welchen Stellen ist \"einige\" wahr?"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 37,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "1"
      ],
      "text/latex": [
       "1"
      ],
      "text/markdown": [
       "1"
      ],
      "text/plain": [
       "[1] 1"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "which.max(vec)  # an welcher Stelle ist das Maximum von vec?"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Logische Konstante für fehlende Werte"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 38,
   "metadata": {
    "collapsed": true
   },
   "outputs": [],
   "source": [
    "logisch <- NA"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 39,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " logi NA\n"
     ]
    }
   ],
   "source": [
    "str(logisch) # Strukur (Typ und Wert) der Variable \"logisch\" anzeigen"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 40,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " num [1:2] 5 NA\n"
     ]
    }
   ],
   "source": [
    "numVec <- c(5, logisch)\n",
    "str(numVec)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Der Vektor ist also numerisch, d.h. fehlende Werte können sich vom Datentyp her *anpassen*!"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Datentypen (Modi)\n",
    "\n",
    "Es gibt die folgenden Datentypen\n",
    "\n",
    "| Beschreibung |   Beispiel $\\phantom{Platz!}$   | Datentyp (Modus)|\n",
    "|--------------|----------|---------|\n",
    "| die leere Menge $\\emptyset$ | <tt>NULL</tt> | *NULL* |\n",
    "| logische Werte | <tt>TRUE</tt> | *logical* |\n",
    "| ganze und reelle Zahlen | $3.141$ | *numeric* |\n",
    "| komplexe Zahlen | $2.718+3\\mathrm{i}$ | *complex* |\n",
    "| Buchstaben und Zeichenfolgen | \"Hallo!\" | *character* |\n",
    "\n",
    "Diese kann man mit `mode()` abfragen, während der Speichertyp mit `typeof()` abgefragt wird. \n",
    "\n",
    "Die Tabelle gibt dabei eine *Hierarchie* der Modi wieder, wobei die leere Menge eine Sonderrolle einnimmt. Abgesehen davon kann ein Wert eines weiter oben stehenden Modus durch einen weiter unten stehenden repräsentiert werden."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 41,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "2.71828182845905"
      ],
      "text/latex": [
       "2.71828182845905"
      ],
      "text/markdown": [
       "2.71828182845905"
      ],
      "text/plain": [
       "[1] 2.718282"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    },
    {
     "data": {
      "text/html": [
       "2"
      ],
      "text/latex": [
       "2"
      ],
      "text/markdown": [
       "2"
      ],
      "text/plain": [
       "[1] 2"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(x <- exp(1))         # äußere Klammer bewirkt gleichzeitig die Ausgabe des Variablenwertes\n",
    "(y <- as.integer(x))  # Informationsverlust!"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 42,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "'numeric'"
      ],
      "text/latex": [
       "'numeric'"
      ],
      "text/markdown": [
       "'numeric'"
      ],
      "text/plain": [
       "[1] \"numeric\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "mode(x)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 43,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "'double'"
      ],
      "text/latex": [
       "'double'"
      ],
      "text/markdown": [
       "'double'"
      ],
      "text/plain": [
       "[1] \"double\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "typeof(x)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 44,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "'numeric'"
      ],
      "text/latex": [
       "'numeric'"
      ],
      "text/markdown": [
       "'numeric'"
      ],
      "text/plain": [
       "[1] \"numeric\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "mode(y)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 45,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "'integer'"
      ],
      "text/latex": [
       "'integer'"
      ],
      "text/markdown": [
       "'integer'"
      ],
      "text/plain": [
       "[1] \"integer\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "typeof(y)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 46,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "FALSE"
      ],
      "text/latex": [
       "FALSE"
      ],
      "text/markdown": [
       "FALSE"
      ],
      "text/plain": [
       "[1] FALSE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "is.character(y)  # Test auf Zeichenkette"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 47,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "Warning message in sqrt(z):\n",
      "“NaNs wurden erzeugt”"
     ]
    },
    {
     "data": {
      "text/html": [
       "NaN"
      ],
      "text/latex": [
       "NaN"
      ],
      "text/markdown": [
       "NaN"
      ],
      "text/plain": [
       "[1] NaN"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "z <- -1\n",
    "sqrt(z)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 48,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "0+1i"
      ],
      "text/latex": [
       "0+1i"
      ],
      "text/markdown": [
       "0+1i"
      ],
      "text/plain": [
       "[1] 0+1i"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "sqrt(as.complex(z))"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Datenstrukturen\n",
    "\n",
    "In R gibt es die Datenstrukturen *Vekotr*, *Matrix*, *Array*, *Datensatz* (Data Frame) und *Liste*. Selbst die sonst üblichen *Skalare* sind in R in Wahrheit Vektoren der Länge 1."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Vektoren\n",
    "\n",
    "Vektoren werden aus anderen mit Hilfe der Funktion `c()` (*combine* bzw. *concatenate*) gebildet."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 49,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>3.14</li>\n",
       "\t<li>6.2</li>\n",
       "\t<li>6.7</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 3.14\n",
       "\\item 6.2\n",
       "\\item 6.7\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 3.14\n",
       "2. 6.2\n",
       "3. 6.7\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] 3.14 6.20 6.70"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(vec <- c(3.14, 6.2, 6.7))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 50,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>2.2</li>\n",
       "\t<li>3.14</li>\n",
       "\t<li>6.2</li>\n",
       "\t<li>6.7</li>\n",
       "\t<li>7.9</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 2.2\n",
       "\\item 3.14\n",
       "\\item 6.2\n",
       "\\item 6.7\n",
       "\\item 7.9\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 2.2\n",
       "2. 3.14\n",
       "3. 6.2\n",
       "4. 6.7\n",
       "5. 7.9\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] 2.20 3.14 6.20 6.70 7.90"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(vec <- c(2.2, vec, 7.9))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 51,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "'double'"
      ],
      "text/latex": [
       "'double'"
      ],
      "text/markdown": [
       "'double'"
      ],
      "text/plain": [
       "[1] \"double\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "typeof(vec)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 52,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>'Hallo'</li>\n",
       "\t<li>'Welt'</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 'Hallo'\n",
       "\\item 'Welt'\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 'Hallo'\n",
       "2. 'Welt'\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] \"Hallo\" \"Welt\" "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(zVec <- c(\"Hallo\", \"Welt\"))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 53,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "'character'"
      ],
      "text/latex": [
       "'character'"
      ],
      "text/markdown": [
       "'character'"
      ],
      "text/plain": [
       "[1] \"character\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "typeof(zVec)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 54,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>'Hallo'</li>\n",
       "\t<li>'Welt'</li>\n",
       "\t<li>'TRUE'</li>\n",
       "\t<li>'2.2'</li>\n",
       "\t<li>'3.14'</li>\n",
       "\t<li>'6.2'</li>\n",
       "\t<li>'6.7'</li>\n",
       "\t<li>'7.9'</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 'Hallo'\n",
       "\\item 'Welt'\n",
       "\\item 'TRUE'\n",
       "\\item '2.2'\n",
       "\\item '3.14'\n",
       "\\item '6.2'\n",
       "\\item '6.7'\n",
       "\\item '7.9'\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 'Hallo'\n",
       "2. 'Welt'\n",
       "3. 'TRUE'\n",
       "4. '2.2'\n",
       "5. '3.14'\n",
       "6. '6.2'\n",
       "7. '6.7'\n",
       "8. '7.9'\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] \"Hallo\" \"Welt\"  \"TRUE\"  \"2.2\"   \"3.14\"  \"6.2\"   \"6.7\"   \"7.9\"  "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(zVec <- c(zVec, TRUE, vec))  # die reellen Zahlen und der logische Wert werden in eine Zeichenkette umgewandelt"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 55,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "'character'"
      ],
      "text/latex": [
       "'character'"
      ],
      "text/markdown": [
       "'character'"
      ],
      "text/plain": [
       "[1] \"character\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "typeof(zVec)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 56,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "8"
      ],
      "text/latex": [
       "8"
      ],
      "text/markdown": [
       "8"
      ],
      "text/plain": [
       "[1] 8"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "length(zVec)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 57,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>5+0i</li>\n",
       "\t<li>0+1i</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 5+0i\n",
       "\\item 0+1i\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 5+0i\n",
       "2. 0+1i\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] 5+0i 0+1i"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(cVec <- c(5,0+1i))  # die (reelle) Zahl 5 wird in eine komplexe Zahl umgewandelt"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "#### Assoziative Vektoren\n",
    "Man kann die Elemente eines Vektors auch benennen und später durch den Namen oder den Index darauf zugreifen."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 58,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<dl class=dl-horizontal>\n",
       "\t<dt>Alter</dt>\n",
       "\t\t<dd>37</dd>\n",
       "\t<dt>Hausnummer</dt>\n",
       "\t\t<dd>88</dd>\n",
       "</dl>\n"
      ],
      "text/latex": [
       "\\begin{description*}\n",
       "\\item[Alter] 37\n",
       "\\item[Hausnummer] 88\n",
       "\\end{description*}\n"
      ],
      "text/markdown": [
       "Alter\n",
       ":   37Hausnummer\n",
       ":   88\n",
       "\n"
      ],
      "text/plain": [
       "     Alter Hausnummer \n",
       "        37         88 "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(aVec <- c(Alter = 37, Hausnummer = 88))"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "*Zugriff auf Vektorelemente *"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 59,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<strong>Alter:</strong> 37"
      ],
      "text/latex": [
       "\\textbf{Alter:} 37"
      ],
      "text/markdown": [
       "**Alter:** 37"
      ],
      "text/plain": [
       "Alter \n",
       "   37 "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "aVec[1]  # per Index (immer möglich)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 60,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<strong>Alter:</strong> 37"
      ],
      "text/latex": [
       "\\textbf{Alter:} 37"
      ],
      "text/markdown": [
       "**Alter:** 37"
      ],
      "text/plain": [
       "Alter \n",
       "   37 "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "aVec['Alter']  # bei assoziativen Vektoren auch per Key (Name des Elements)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "#### Folgen und Wiederholungen"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 61,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>4</li>\n",
       "\t<li>5</li>\n",
       "\t<li>6</li>\n",
       "\t<li>7</li>\n",
       "\t<li>8</li>\n",
       "\t<li>9</li>\n",
       "\t<li>10</li>\n",
       "\t<li>11</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 4\n",
       "\\item 5\n",
       "\\item 6\n",
       "\\item 7\n",
       "\\item 8\n",
       "\\item 9\n",
       "\\item 10\n",
       "\\item 11\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 4\n",
       "2. 5\n",
       "3. 6\n",
       "4. 7\n",
       "5. 8\n",
       "6. 9\n",
       "7. 10\n",
       "8. 11\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1]  4  5  6  7  8  9 10 11"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "4:11  # Ganzzahlige Zahlenfolge mit Abstand 1"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 62,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>7</li>\n",
       "\t<li>6</li>\n",
       "\t<li>5</li>\n",
       "\t<li>4</li>\n",
       "\t<li>3</li>\n",
       "\t<li>2</li>\n",
       "\t<li>1</li>\n",
       "\t<li>0</li>\n",
       "\t<li>-1</li>\n",
       "\t<li>-2</li>\n",
       "\t<li>-3</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 7\n",
       "\\item 6\n",
       "\\item 5\n",
       "\\item 4\n",
       "\\item 3\n",
       "\\item 2\n",
       "\\item 1\n",
       "\\item 0\n",
       "\\item -1\n",
       "\\item -2\n",
       "\\item -3\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 7\n",
       "2. 6\n",
       "3. 5\n",
       "4. 4\n",
       "5. 3\n",
       "6. 2\n",
       "7. 1\n",
       "8. 0\n",
       "9. -1\n",
       "10. -2\n",
       "11. -3\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       " [1]  7  6  5  4  3  2  1  0 -1 -2 -3"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "7:-3"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 63,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>3</li>\n",
       "\t<li>5</li>\n",
       "\t<li>7</li>\n",
       "\t<li>9</li>\n",
       "\t<li>11</li>\n",
       "\t<li>13</li>\n",
       "\t<li>15</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 3\n",
       "\\item 5\n",
       "\\item 7\n",
       "\\item 9\n",
       "\\item 11\n",
       "\\item 13\n",
       "\\item 15\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 3\n",
       "2. 5\n",
       "3. 7\n",
       "4. 9\n",
       "5. 11\n",
       "6. 13\n",
       "7. 15\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1]  3  5  7  9 11 13 15"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "seq(3,15, by = 2)  # Zahlenfolge mit beliebigem Abstand"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 64,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>4</li>\n",
       "\t<li>3.5</li>\n",
       "\t<li>3</li>\n",
       "\t<li>2.5</li>\n",
       "\t<li>2</li>\n",
       "\t<li>1.5</li>\n",
       "\t<li>1</li>\n",
       "\t<li>0.5</li>\n",
       "\t<li>0</li>\n",
       "\t<li>-0.5</li>\n",
       "\t<li>-1</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 4\n",
       "\\item 3.5\n",
       "\\item 3\n",
       "\\item 2.5\n",
       "\\item 2\n",
       "\\item 1.5\n",
       "\\item 1\n",
       "\\item 0.5\n",
       "\\item 0\n",
       "\\item -0.5\n",
       "\\item -1\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 4\n",
       "2. 3.5\n",
       "3. 3\n",
       "4. 2.5\n",
       "5. 2\n",
       "6. 1.5\n",
       "7. 1\n",
       "8. 0.5\n",
       "9. 0\n",
       "10. -0.5\n",
       "11. -1\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       " [1]  4.0  3.5  3.0  2.5  2.0  1.5  1.0  0.5  0.0 -0.5 -1.0"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "seq(4, -1, by = -0.5)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 65,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 2\n",
       "2. 2\n",
       "3. 2\n",
       "4. 2\n",
       "5. 2\n",
       "6. 2\n",
       "7. 2\n",
       "8. 2\n",
       "9. 2\n",
       "10. 2\n",
       "11. 2\n",
       "12. 2\n",
       "13. 2\n",
       "14. 2\n",
       "15. 2\n",
       "16. 2\n",
       "17. 2\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       " [1] 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "rep(2, 17)  # 17-malige Wiederholung der Zahl 2"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 66,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>2</li>\n",
       "\t<li>3</li>\n",
       "\t<li>2</li>\n",
       "\t<li>3</li>\n",
       "\t<li>2</li>\n",
       "\t<li>3</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 2\n",
       "\\item 3\n",
       "\\item 2\n",
       "\\item 3\n",
       "\\item 2\n",
       "\\item 3\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 2\n",
       "2. 3\n",
       "3. 2\n",
       "4. 3\n",
       "5. 2\n",
       "6. 3\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] 2 3 2 3 2 3"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "rep(c(2,3), 3) # 3-malige Wiederholung des Vektors (2,3)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 67,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>3</li>\n",
       "\t<li>3</li>\n",
       "\t<li>3</li>\n",
       "\t<li>3</li>\n",
       "\t<li>4</li>\n",
       "\t<li>4</li>\n",
       "\t<li>4</li>\n",
       "\t<li>4</li>\n",
       "\t<li>4</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 3\n",
       "\\item 3\n",
       "\\item 3\n",
       "\\item 3\n",
       "\\item 4\n",
       "\\item 4\n",
       "\\item 4\n",
       "\\item 4\n",
       "\\item 4\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 2\n",
       "2. 2\n",
       "3. 2\n",
       "4. 3\n",
       "5. 3\n",
       "6. 3\n",
       "7. 3\n",
       "8. 4\n",
       "9. 4\n",
       "10. 4\n",
       "11. 4\n",
       "12. 4\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       " [1] 2 2 2 3 3 3 3 4 4 4 4 4"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "rep(2:4, 3:5) # 3 mal 2, 4 mal 3, 5 mal 4"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 68,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>6.4</li>\n",
       "\t<li>9</li>\n",
       "\t<li>11.4</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 6.4\n",
       "\\item 9\n",
       "\\item 11.4\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 6.4\n",
       "2. 9\n",
       "3. 11.4\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1]  6.4  9.0 11.4"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(vec <- c(3.2, 4.5, 5.7) * 2)  # Skalarmultiplikation, d.h. jedes Vektorelement wird verdoppelt"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 69,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>9.4</li>\n",
       "\t<li>13</li>\n",
       "\t<li>16.4</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 9.4\n",
       "\\item 13\n",
       "\\item 16.4\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 9.4\n",
       "2. 13\n",
       "3. 16.4\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1]  9.4 13.0 16.4"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "vec + 3:5  # Vektoraddition elementweise"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 70,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>1</li>\n",
       "\t<li>1</li>\n",
       "\t<li>1</li>\n",
       "\t<li>-2</li>\n",
       "\t<li>-2</li>\n",
       "\t<li>-2</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 1\n",
       "\\item 1\n",
       "\\item 1\n",
       "\\item -2\n",
       "\\item -2\n",
       "\\item -2\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 1\n",
       "2. 1\n",
       "3. 1\n",
       "4. -2\n",
       "5. -2\n",
       "6. -2\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1]  1  1  1 -2 -2 -2"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "2:4 - 1:6 # 2-1, 3-2, 4-3, 2-4, 3-5, 4-6 (!! Länge des zweiten Vektors ist Vielfaches der Länge des ersten !!)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 71,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "Warning message in 2:4 - 1:4:\n",
      "“Länge des längeren Objektes\n",
      " \t ist kein Vielfaches der Länge des kürzeren Objektes”"
     ]
    },
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>1</li>\n",
       "\t<li>1</li>\n",
       "\t<li>1</li>\n",
       "\t<li>-2</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 1\n",
       "\\item 1\n",
       "\\item 1\n",
       "\\item -2\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 1\n",
       "2. 1\n",
       "3. 1\n",
       "4. -2\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1]  1  1  1 -2"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "2:4 - 1:4  # Länge kein Vielfaches --> Warnung!"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "#### Matrixmultiplikation\n",
    "Hier sollen zunächst die Spezialfälle des *Skalarprodukts* $(1\\times n \\cdot n \\times 1 \\rightarrow 1\\times 1)$ bzw. des *Matrix-Vektor-Produkts* $(n\\times 1 \\cdot 1 \\times n \\rightarrow n\\times n)$ betrachtet werden. Der Operator für die Matrixmultiplikation ist `%*%`."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 72,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<tbody>\n",
       "\t<tr><td>38</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{l}\n",
       "\t 38\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "| 38 | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "     [,1]\n",
       "[1,] 38  "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "t(3:5) %*% 2:4  # (3,4,5)^t * (2,3,4) -- Skalarprodukt (1x3 * 3x1)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 73,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<tbody>\n",
       "\t<tr><td> 6</td><td> 8</td><td>10</td></tr>\n",
       "\t<tr><td> 9</td><td>12</td><td>15</td></tr>\n",
       "\t<tr><td>12</td><td>16</td><td>20</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{lll}\n",
       "\t  6 &  8 & 10\\\\\n",
       "\t  9 & 12 & 15\\\\\n",
       "\t 12 & 16 & 20\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "|  6 |  8 | 10 | \n",
       "|  9 | 12 | 15 | \n",
       "| 12 | 16 | 20 | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "     [,1] [,2] [,3]\n",
       "[1,]  6    8   10  \n",
       "[2,]  9   12   15  \n",
       "[3,] 12   16   20  "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "2:4 %*% t(3:5) # Vektorprodukt (3x1 * 1x3)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "#### Umgang mit Vektorelementen\n",
    "Das folgende Beispiel erläutert den Umgang mit Vektorelemeneten noch einmal zusammenfassend (siehe die jeweiligen Kommentare)."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 74,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>2</li>\n",
       "\t<li>7</li>\n",
       "\t<li>3</li>\n",
       "\t<li>4</li>\n",
       "\t<li>2</li>\n",
       "\t<li>1</li>\n",
       "\t<li>5</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 2\n",
       "\\item 7\n",
       "\\item 3\n",
       "\\item 4\n",
       "\\item 2\n",
       "\\item 1\n",
       "\\item 5\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 2\n",
       "2. 7\n",
       "3. 3\n",
       "4. 4\n",
       "5. 2\n",
       "6. 1\n",
       "7. 5\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] 2 7 3 4 2 1 5"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(vec <- c(2, 7, 3, 4, 2 , 1, 5))  # Initialisierung mit combine"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 75,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "7"
      ],
      "text/latex": [
       "7"
      ],
      "text/markdown": [
       "7"
      ],
      "text/plain": [
       "[1] 7"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "length(vec)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 76,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "2"
      ],
      "text/latex": [
       "2"
      ],
      "text/markdown": [
       "2"
      ],
      "text/plain": [
       "[1] 2"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "vec[5]  # das 5. Element"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 77,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>1</li>\n",
       "\t<li>3</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 1\n",
       "\\item 3\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 1\n",
       "2. 3\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] 1 3"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "vec[c(6,3)]  # das 6. und das 3. Element (in dieser Reihenfolge!)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 78,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>1</li>\n",
       "\t<li>5</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 1\n",
       "\\item 5\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 2\n",
       "2. 2\n",
       "3. 1\n",
       "4. 5\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] 2 2 1 5"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "vec[-c(2:4)]  # Ausschluss des 2. bis 4. Elements"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 79,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>TRUE</li>\n",
       "\t<li>FALSE</li>\n",
       "\t<li>FALSE</li>\n",
       "\t<li>FALSE</li>\n",
       "\t<li>TRUE</li>\n",
       "\t<li>TRUE</li>\n",
       "\t<li>FALSE</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item TRUE\n",
       "\\item FALSE\n",
       "\\item FALSE\n",
       "\\item FALSE\n",
       "\\item TRUE\n",
       "\\item TRUE\n",
       "\\item FALSE\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. TRUE\n",
       "2. FALSE\n",
       "3. FALSE\n",
       "4. FALSE\n",
       "5. TRUE\n",
       "6. TRUE\n",
       "7. FALSE\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1]  TRUE FALSE FALSE FALSE  TRUE  TRUE FALSE"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(logVec <- vec < 3)  # TRUE, wenn das jeweilige Element von vec kleiner als 3 ist, sonst FALSE"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 80,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>1</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 1\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 2\n",
       "2. 2\n",
       "3. 1\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] 2 2 1"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "vec[logVec]  # logische Indizierung, also alle Elemente von vec, die kleiner als 3 sind"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 81,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>2</li>\n",
       "\t<li>2</li>\n",
       "\t<li>1</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 2\n",
       "\\item 2\n",
       "\\item 1\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 2\n",
       "2. 2\n",
       "3. 1\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] 2 2 1"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "vec[vec < 3]  # auf direktem Wege"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 82,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<strong>Birne:</strong> 2"
      ],
      "text/latex": [
       "\\textbf{Birne:} 2"
      ],
      "text/markdown": [
       "**Birne:** 2"
      ],
      "text/plain": [
       "Birne \n",
       "    2 "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "nameVec <- c(Apfel = 4, Birne = 2, Orange = 5)  # assoziativer Vektor (benannte Elemente)\n",
    "nameVec['Birne']  # Zugriff mittels Namen"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 83,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<dl class=dl-horizontal>\n",
       "\t<dt>Apfel</dt>\n",
       "\t\t<dd>4</dd>\n",
       "\t<dt>Birne</dt>\n",
       "\t\t<dd>10</dd>\n",
       "\t<dt>Orange</dt>\n",
       "\t\t<dd>5</dd>\n",
       "</dl>\n"
      ],
      "text/latex": [
       "\\begin{description*}\n",
       "\\item[Apfel] 4\n",
       "\\item[Birne] 10\n",
       "\\item[Orange] 5\n",
       "\\end{description*}\n"
      ],
      "text/markdown": [
       "Apfel\n",
       ":   4Birne\n",
       ":   10Orange\n",
       ":   5\n",
       "\n"
      ],
      "text/plain": [
       " Apfel  Birne Orange \n",
       "     4     10      5 "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "nameVec['Birne'] <- 10  # Zuweisung eines neuen Werts für ein Element (überschreiben des Elements)\n",
    "nameVec"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 84,
   "metadata": {
    "collapsed": true
   },
   "outputs": [],
   "source": [
    "vec[9:10] <- 12:11  # dem 9. und 10. Element Werte zuweisen"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 85,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>2</li>\n",
       "\t<li>7</li>\n",
       "\t<li>3</li>\n",
       "\t<li>4</li>\n",
       "\t<li>2</li>\n",
       "\t<li>1</li>\n",
       "\t<li>5</li>\n",
       "\t<li>NA</li>\n",
       "\t<li>12</li>\n",
       "\t<li>11</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 2\n",
       "\\item 7\n",
       "\\item 3\n",
       "\\item 4\n",
       "\\item 2\n",
       "\\item 1\n",
       "\\item 5\n",
       "\\item NA\n",
       "\\item 12\n",
       "\\item 11\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 2\n",
       "2. 7\n",
       "3. 3\n",
       "4. 4\n",
       "5. 2\n",
       "6. 1\n",
       "7. 5\n",
       "8. NA\n",
       "9. 12\n",
       "10. 11\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       " [1]  2  7  3  4  2  1  5 NA 12 11"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "vec  # Achtung: NA für das 8. Element, da diesem noch nichts zugewiesen wurde!"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 86,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "10"
      ],
      "text/latex": [
       "10"
      ],
      "text/markdown": [
       "10"
      ],
      "text/plain": [
       "[1] 10"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "length(vec)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 87,
   "metadata": {
    "collapsed": false
   },
   "outputs": [],
   "source": [
    "vec[] <- 0  # alle 10 Elemente durch 0 ersetzen"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 88,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>0</li>\n",
       "\t<li>0</li>\n",
       "\t<li>0</li>\n",
       "\t<li>0</li>\n",
       "\t<li>0</li>\n",
       "\t<li>0</li>\n",
       "\t<li>0</li>\n",
       "\t<li>0</li>\n",
       "\t<li>0</li>\n",
       "\t<li>0</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 0\n",
       "\\item 0\n",
       "\\item 0\n",
       "\\item 0\n",
       "\\item 0\n",
       "\\item 0\n",
       "\\item 0\n",
       "\\item 0\n",
       "\\item 0\n",
       "\\item 0\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 0\n",
       "2. 0\n",
       "3. 0\n",
       "4. 0\n",
       "5. 0\n",
       "6. 0\n",
       "7. 0\n",
       "8. 0\n",
       "9. 0\n",
       "10. 0\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       " [1] 0 0 0 0 0 0 0 0 0 0"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "vec"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 89,
   "metadata": {
    "collapsed": true
   },
   "outputs": [],
   "source": [
    "vec <- 0 # überschreiben, d.h. man erhält einen einelementigen Vektor (Skalar) mit dem Wert 0"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 90,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "0"
      ],
      "text/latex": [
       "0"
      ],
      "text/markdown": [
       "0"
      ],
      "text/plain": [
       "[1] 0"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "vec"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 91,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "1"
      ],
      "text/latex": [
       "1"
      ],
      "text/markdown": [
       "1"
      ],
      "text/plain": [
       "[1] 1"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "length(vec)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Matrizen\n",
    "Matrizen sind *zweidimensional*, d.h., man spricht von $n\\times m$-Matrizen, wobei $n$ die Anzahl der Zeilen und $m$ die Anzahl der Spalten bezeichnet. In R heißen diese Dimensionsgrößen `nrow` bzw. `ncol` und eine der beiden muss zumindest angegeben werden, wenn eine Matrix mit Hilfe der `matrix()`-Funktion erzeugt wird."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 92,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<tbody>\n",
       "\t<tr><td>1</td><td>2</td><td>5</td></tr>\n",
       "\t<tr><td>1</td><td>3</td><td>8</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{lll}\n",
       "\t 1 & 2 & 5\\\\\n",
       "\t 1 & 3 & 8\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "| 1 | 2 | 5 | \n",
       "| 1 | 3 | 8 | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "     [,1] [,2] [,3]\n",
       "[1,] 1    2    5   \n",
       "[2,] 1    3    8   "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(X <- matrix(c(1,1,2,3,5,8), nrow = 2))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 93,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>1</li>\n",
       "\t<li>2</li>\n",
       "\t<li>5</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 1\n",
       "\\item 2\n",
       "\\item 5\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 1\n",
       "2. 2\n",
       "3. 5\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] 1 2 5"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "X[1, ]  # erste Zeile"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 94,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>2</li>\n",
       "\t<li>3</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 2\n",
       "\\item 3\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 2\n",
       "2. 3\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] 2 3"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "X[, 2]  # zweite Spalte"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Beim *Zugriff* auf Matrixelemente ist Vorsicht geboten. Je nachdem, ob man wirklich nur den *Wert* des Elements braucht (eindimensional) oder ob man eine $1\\times1$-Matrix (zweidimensional) als Ergenis möchte, muss man ggf. verhindern, dass eine Dimension *fallen gelassen* wird."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 95,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "8"
      ],
      "text/latex": [
       "8"
      ],
      "text/markdown": [
       "8"
      ],
      "text/plain": [
       "[1] 8"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "X[2,3]  # Skalar (eindimensional)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 96,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<tbody>\n",
       "\t<tr><td>8</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{l}\n",
       "\t 8\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "| 8 | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "     [,1]\n",
       "[1,] 8   "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "X[2, 3, drop = FALSE]  # 1x1-Matrix (zweidimensional)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Eine Übersicht über **Matrixfunktionen** findet man z.B. bei [Quick-R](http://www.statmethods.net/advstats/matrix.html). Im Folgenden sehen wir exemplarisch die Verwendung der Funktion `diag()`."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 97,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<tbody>\n",
       "\t<tr><td>3</td><td>5</td></tr>\n",
       "\t<tr><td>4</td><td>6</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{ll}\n",
       "\t 3 & 5\\\\\n",
       "\t 4 & 6\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "| 3 | 5 | \n",
       "| 4 | 6 | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "     [,1] [,2]\n",
       "[1,] 3    5   \n",
       "[2,] 4    6   "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(A <- matrix(3:6, nrow = 2))  # Erzeugug einer 2x2 Matrix"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 98,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>3</li>\n",
       "\t<li>6</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 3\n",
       "\\item 6\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 3\n",
       "2. 6\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] 3 6"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "diag(A)  # Ausgabe der Diagonale von A"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 99,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<tbody>\n",
       "\t<tr><td>0</td><td>5</td></tr>\n",
       "\t<tr><td>4</td><td>0</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{ll}\n",
       "\t 0 & 5\\\\\n",
       "\t 4 & 0\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "| 0 | 5 | \n",
       "| 4 | 0 | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "     [,1] [,2]\n",
       "[1,] 0    5   \n",
       "[2,] 4    0   "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "diag(A) <- 0  # Diagonalelemente von A auf Null setzen\n",
    "A"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 100,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<tbody>\n",
       "\t<tr><td>1</td><td>0</td><td>0</td></tr>\n",
       "\t<tr><td>0</td><td>1</td><td>0</td></tr>\n",
       "\t<tr><td>0</td><td>0</td><td>1</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{lll}\n",
       "\t 1 & 0 & 0\\\\\n",
       "\t 0 & 1 & 0\\\\\n",
       "\t 0 & 0 & 1\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "| 1 | 0 | 0 | \n",
       "| 0 | 1 | 0 | \n",
       "| 0 | 0 | 1 | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "     [,1] [,2] [,3]\n",
       "[1,] 1    0    0   \n",
       "[2,] 0    1    0   \n",
       "[3,] 0    0    1   "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "diag(3)  # die 3x3 Einheitsmatrix"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "#### Struktur einer Matrix\n",
    "aus Sicht von R ist eine Matrix ein Vektor mit zwei Dimensionsattributen. Dies schauen wir uns im einzelnen an und lernen noch einen weiteren Weg kennen, eine Matrix zu erzeugen."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 101,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " num [1:2, 1:3] 1 1 2 3 5 8\n"
     ]
    }
   ],
   "source": [
    "str(X)  # Struktur der Matrix X beschreiben"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 102,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>1</li>\n",
       "\t<li>1</li>\n",
       "\t<li>2</li>\n",
       "\t<li>3</li>\n",
       "\t<li>5</li>\n",
       "\t<li>8</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 1\n",
       "\\item 1\n",
       "\\item 2\n",
       "\\item 3\n",
       "\\item 5\n",
       "\\item 8\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 1\n",
       "2. 1\n",
       "3. 2\n",
       "4. 3\n",
       "5. 5\n",
       "6. 8\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] 1 1 2 3 5 8"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(Y <- c(1,1,2,3,5,8))  # eindimensionaler Vektor mit den gleichen Werten, wie in der Matrix X"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 103,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " num [1:6] 1 1 2 3 5 8\n"
     ]
    }
   ],
   "source": [
    "str(Y)  # Struktur von Y"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 104,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<tbody>\n",
       "\t<tr><td>1</td><td>2</td><td>5</td></tr>\n",
       "\t<tr><td>1</td><td>3</td><td>8</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{lll}\n",
       "\t 1 & 2 & 5\\\\\n",
       "\t 1 & 3 & 8\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "| 1 | 2 | 5 | \n",
       "| 1 | 3 | 8 | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "     [,1] [,2] [,3]\n",
       "[1,] 1    2    5   \n",
       "[2,] 1    3    8   "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "dim(Y) <- c(2,3)  # aus Y eine Matrix machen (die gleiche wie X!)\n",
    "Y"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 105,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " num [1:2, 1:3] 1 1 2 3 5 8\n"
     ]
    }
   ],
   "source": [
    "str(Y)  # Struktur von Y"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {
    "collapsed": true
   },
   "source": [
    "## Arrays\n",
    "Diese können beliebig viele Dimsionen besitzen, wobei aber zumeist nicht mehr als drei Dimensionen verwendet werden. Arrays sind somit *Verallgemeinerungen* von Matrizen."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 106,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>2</li>\n",
       "\t<li>4</li>\n",
       "\t<li>6</li>\n",
       "\t<li>8</li>\n",
       "\t<li>10</li>\n",
       "\t<li>12</li>\n",
       "\t<li>14</li>\n",
       "\t<li>16</li>\n",
       "\t<li>18</li>\n",
       "\t<li>20</li>\n",
       "\t<li>22</li>\n",
       "\t<li>24</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 2\n",
       "\\item 4\n",
       "\\item 6\n",
       "\\item 8\n",
       "\\item 10\n",
       "\\item 12\n",
       "\\item 14\n",
       "\\item 16\n",
       "\\item 18\n",
       "\\item 20\n",
       "\\item 22\n",
       "\\item 24\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 2\n",
       "2. 4\n",
       "3. 6\n",
       "4. 8\n",
       "5. 10\n",
       "6. 12\n",
       "7. 14\n",
       "8. 16\n",
       "9. 18\n",
       "10. 20\n",
       "11. 22\n",
       "12. 24\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       ", , 1\n",
       "\n",
       "     [,1] [,2]\n",
       "[1,]    2    6\n",
       "[2,]    4    8\n",
       "\n",
       ", , 2\n",
       "\n",
       "     [,1] [,2]\n",
       "[1,]   10   14\n",
       "[2,]   12   16\n",
       "\n",
       ", , 3\n",
       "\n",
       "     [,1] [,2]\n",
       "[1,]   18   22\n",
       "[2,]   20   24\n"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(Ar <- array(seq(2,24, by = 2), dim = c(2,2,3)))  # Ausgabe erfolgt linear"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 107,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " num [1:2, 1:2, 1:3] 2 4 6 8 10 12 14 16 18 20 ...\n"
     ]
    }
   ],
   "source": [
    "str(Ar)  # Struktur des Arrays (--> wie erwartet)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 108,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      ", , 1\n",
      "\n",
      "     [,1] [,2]\n",
      "[1,]    2    6\n",
      "[2,]    4    8\n",
      "\n",
      ", , 2\n",
      "\n",
      "     [,1] [,2]\n",
      "[1,]   10   14\n",
      "[2,]   12   16\n",
      "\n",
      ", , 3\n",
      "\n",
      "     [,1] [,2]\n",
      "[1,]   18   22\n",
      "[2,]   20   24\n",
      "\n"
     ]
    }
   ],
   "source": [
    "print(Ar)  # strukuriert ausgeben"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 109,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "20"
      ],
      "text/latex": [
       "20"
      ],
      "text/markdown": [
       "20"
      ],
      "text/plain": [
       "[1] 20"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "Ar[2,1,3]  # Zugriff auf ein bestimmtes Element"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Listen\n",
    "Listen sind einfach *Sammlungen* verschiedener Objekte. Erzegut werden sie mit `list()`. Der Zugriff auf Listenelemente erfolgt mittels der eckigen Doppelklammer `[[]]`."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 110,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol>\n",
       "\t<li><ol class=list-inline>\n",
       "\t<li>3</li>\n",
       "\t<li>4</li>\n",
       "\t<li>5</li>\n",
       "\t<li>6</li>\n",
       "</ol>\n",
       "</li>\n",
       "\t<li><table>\n",
       "<tbody>\n",
       "\t<tr><td>2 </td><td> 8</td></tr>\n",
       "\t<tr><td>5 </td><td>13</td></tr>\n",
       "</tbody>\n",
       "</table>\n",
       "</li>\n",
       "\t<li><ol class=list-inline>\n",
       "\t<li>'Ein'</li>\n",
       "\t<li>'Text'</li>\n",
       "</ol>\n",
       "</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate}\n",
       "\\item \\begin{enumerate*}\n",
       "\\item 3\n",
       "\\item 4\n",
       "\\item 5\n",
       "\\item 6\n",
       "\\end{enumerate*}\n",
       "\n",
       "\\item \\begin{tabular}{ll}\n",
       "\t 2  &  8\\\\\n",
       "\t 5  & 13\\\\\n",
       "\\end{tabular}\n",
       "\n",
       "\\item \\begin{enumerate*}\n",
       "\\item 'Ein'\n",
       "\\item 'Text'\n",
       "\\end{enumerate*}\n",
       "\n",
       "\\end{enumerate}\n"
      ],
      "text/markdown": [
       "1. 1. 3\n",
       "2. 4\n",
       "3. 5\n",
       "4. 6\n",
       "\n",
       "\n",
       "\n",
       "2. \n",
       "| 2  |  8 | \n",
       "| 5  | 13 | \n",
       "\n",
       "\n",
       "\n",
       "3. 1. 'Ein'\n",
       "2. 'Text'\n",
       "\n",
       "\n",
       "\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[[1]]\n",
       "[1] 3 4 5 6\n",
       "\n",
       "[[2]]\n",
       "     [,1] [,2]\n",
       "[1,]    2    8\n",
       "[2,]    5   13\n",
       "\n",
       "[[3]]\n",
       "[1] \"Ein\"  \"Text\"\n"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(L1 <- list(3:6, matrix(c(2,5,8,13), 2), c(\"Ein\",\"Text\")))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 111,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "List of 3\n",
      " $ : int [1:4] 3 4 5 6\n",
      " $ : num [1:2, 1:2] 2 5 8 13\n",
      " $ : chr [1:2] \"Ein\" \"Text\"\n"
     ]
    }
   ],
   "source": [
    "str(L1)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 112,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>'Ein'</li>\n",
       "\t<li>'Text'</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 'Ein'\n",
       "\\item 'Text'\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 'Ein'\n",
       "2. 'Text'\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] \"Ein\"  \"Text\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "L1[[3]]  # 3. Element von L1"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 113,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "2"
      ],
      "text/latex": [
       "2"
      ],
      "text/markdown": [
       "2"
      ],
      "text/plain": [
       "[1] 2"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "L1[[2]][1,1]  # 1. Element des 2. Elements von L1"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 114,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "'Text'"
      ],
      "text/latex": [
       "'Text'"
      ],
      "text/markdown": [
       "'Text'"
      ],
      "text/plain": [
       "[1] \"Text\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "L1[[c(3,2)]]  # rekursive Angabe: 2. Element des dritten Elements von L1"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 115,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<dl>\n",
       "\t<dt>$Idee</dt>\n",
       "\t\t<dd>'Uwe Ligges'</dd>\n",
       "\t<dt>$Liste1</dt>\n",
       "\t\t<dd><ol>\n",
       "\t<li><ol class=list-inline>\n",
       "\t<li>3</li>\n",
       "\t<li>4</li>\n",
       "\t<li>5</li>\n",
       "\t<li>6</li>\n",
       "</ol>\n",
       "</li>\n",
       "\t<li><table>\n",
       "<tbody>\n",
       "\t<tr><td>2 </td><td> 8</td></tr>\n",
       "\t<tr><td>5 </td><td>13</td></tr>\n",
       "</tbody>\n",
       "</table>\n",
       "</li>\n",
       "\t<li><ol class=list-inline>\n",
       "\t<li>'Ein'</li>\n",
       "\t<li>'Text'</li>\n",
       "</ol>\n",
       "</li>\n",
       "</ol>\n",
       "</dd>\n",
       "</dl>\n"
      ],
      "text/latex": [
       "\\begin{description}\n",
       "\\item[\\$Idee] 'Uwe Ligges'\n",
       "\\item[\\$Liste1] \\begin{enumerate}\n",
       "\\item \\begin{enumerate*}\n",
       "\\item 3\n",
       "\\item 4\n",
       "\\item 5\n",
       "\\item 6\n",
       "\\end{enumerate*}\n",
       "\n",
       "\\item \\begin{tabular}{ll}\n",
       "\t 2  &  8\\\\\n",
       "\t 5  & 13\\\\\n",
       "\\end{tabular}\n",
       "\n",
       "\\item \\begin{enumerate*}\n",
       "\\item 'Ein'\n",
       "\\item 'Text'\n",
       "\\end{enumerate*}\n",
       "\n",
       "\\end{enumerate}\n",
       "\n",
       "\\end{description}\n"
      ],
      "text/markdown": [
       "$Idee\n",
       ":   'Uwe Ligges'\n",
       "$Liste1\n",
       ":   1. 1. 3\n",
       "2. 4\n",
       "3. 5\n",
       "4. 6\n",
       "\n",
       "\n",
       "\n",
       "2. \n",
       "| 2  |  8 | \n",
       "| 5  | 13 | \n",
       "\n",
       "\n",
       "\n",
       "3. 1. 'Ein'\n",
       "2. 'Text'\n",
       "\n",
       "\n",
       "\n",
       "\n",
       "\n",
       "\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "$Idee\n",
       "[1] \"Uwe Ligges\"\n",
       "\n",
       "$Liste1\n",
       "$Liste1[[1]]\n",
       "[1] 3 4 5 6\n",
       "\n",
       "$Liste1[[2]]\n",
       "     [,1] [,2]\n",
       "[1,]    2    8\n",
       "[2,]    5   13\n",
       "\n",
       "$Liste1[[3]]\n",
       "[1] \"Ein\"  \"Text\"\n",
       "\n"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(L2 <- list(Idee = 'Uwe Ligges', Liste1 = L1))  # Elemente können auch benannt werden (assoziative Listen)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 116,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "'Uwe Ligges'"
      ],
      "text/latex": [
       "'Uwe Ligges'"
      ],
      "text/markdown": [
       "'Uwe Ligges'"
      ],
      "text/plain": [
       "[1] \"Uwe Ligges\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "L2$Idee  # Zugriff mit dem $-Operator"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 117,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol>\n",
       "\t<li><ol class=list-inline>\n",
       "\t<li>3</li>\n",
       "\t<li>4</li>\n",
       "\t<li>5</li>\n",
       "\t<li>6</li>\n",
       "</ol>\n",
       "</li>\n",
       "\t<li><ol class=list-inline>\n",
       "\t<li>'Ein'</li>\n",
       "\t<li>'Text'</li>\n",
       "</ol>\n",
       "</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate}\n",
       "\\item \\begin{enumerate*}\n",
       "\\item 3\n",
       "\\item 4\n",
       "\\item 5\n",
       "\\item 6\n",
       "\\end{enumerate*}\n",
       "\n",
       "\\item \\begin{enumerate*}\n",
       "\\item 'Ein'\n",
       "\\item 'Text'\n",
       "\\end{enumerate*}\n",
       "\n",
       "\\end{enumerate}\n"
      ],
      "text/markdown": [
       "1. 1. 3\n",
       "2. 4\n",
       "3. 5\n",
       "4. 6\n",
       "\n",
       "\n",
       "\n",
       "2. 1. 'Ein'\n",
       "2. 'Text'\n",
       "\n",
       "\n",
       "\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[[1]]\n",
       "[1] 3 4 5 6\n",
       "\n",
       "[[2]]\n",
       "[1] \"Ein\"  \"Text\"\n"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "L2[['Liste1']][c(1,3)]  # 1. und 3. Element des Elements Liste1 von L2 (Ergebnis ist auch eine Liste!)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 118,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "List of 2\n",
      " $ : int [1:4] 3 4 5 6\n",
      " $ : chr [1:2] \"Ein\" \"Text\"\n"
     ]
    }
   ],
   "source": [
    "str(L2[['Liste1']][c(1,3)])"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Datensätze - Data Frames\n",
    "Dies ist *die* Datenstruktur in R für Data Science - eigentlich benötigen die meisten Funktionen in R Data Frames als Eingabe. Datensätze entsprechen beispielsweise auch Tabellen in relationalen Datenbanken.\n",
    "\n",
    "Aus Sicht von R sind Data Frames spezielle Listen, nämlich solche, deren Elemente jeweils Vektoren gleicher Länge sind (genau wie Spalten einer Datenbank-Tabelle). Meist sind diese auch benannt (wie die Attribute (= Spalten) einer Datenbank-Tabelle). Erzeugt werden sie mit der Funktion `data.frame()`.\n",
    "\n",
    "Normalerweise werden Data Frames daher auch auf Basis *externer Datenquellen* wie <tt>csv</tt>-Dateien oder Datenbank-Tabellen erzaugt. Hier betrachten wir zunächst ein Beispiel von Hand."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 119,
   "metadata": {
    "collapsed": true
   },
   "outputs": [],
   "source": [
    "Hochschule <- data.frame(Studiengang = c('WF', 'IG', 'DSM', 'INF', 'IEW', 'WL', 'DM', 'ET'),\n",
    "                         Fakultaet   = c('I',  'I',  'I',   'I',    'P',  'P',  'E',  'E' ),\n",
    "                         Studierende = c(147,  153,  60,    33,    112,   143,  87 ,  101 ))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 120,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<thead><tr><th scope=col>Studiengang</th><th scope=col>Fakultaet</th><th scope=col>Studierende</th></tr></thead>\n",
       "<tbody>\n",
       "\t<tr><td>WF </td><td>I  </td><td>147</td></tr>\n",
       "\t<tr><td>IG </td><td>I  </td><td>153</td></tr>\n",
       "\t<tr><td>DSM</td><td>I  </td><td> 60</td></tr>\n",
       "\t<tr><td>INF</td><td>I  </td><td> 33</td></tr>\n",
       "\t<tr><td>IEW</td><td>P  </td><td>112</td></tr>\n",
       "\t<tr><td>WL </td><td>P  </td><td>143</td></tr>\n",
       "\t<tr><td>DM </td><td>E  </td><td> 87</td></tr>\n",
       "\t<tr><td>ET </td><td>E  </td><td>101</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{r|lll}\n",
       " Studiengang & Fakultaet & Studierende\\\\\n",
       "\\hline\n",
       "\t WF  & I   & 147\\\\\n",
       "\t IG  & I   & 153\\\\\n",
       "\t DSM & I   &  60\\\\\n",
       "\t INF & I   &  33\\\\\n",
       "\t IEW & P   & 112\\\\\n",
       "\t WL  & P   & 143\\\\\n",
       "\t DM  & E   &  87\\\\\n",
       "\t ET  & E   & 101\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "Studiengang | Fakultaet | Studierende | \n",
       "|---|---|---|---|---|---|---|---|\n",
       "| WF  | I   | 147 | \n",
       "| IG  | I   | 153 | \n",
       "| DSM | I   |  60 | \n",
       "| INF | I   |  33 | \n",
       "| IEW | P   | 112 | \n",
       "| WL  | P   | 143 | \n",
       "| DM  | E   |  87 | \n",
       "| ET  | E   | 101 | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "  Studiengang Fakultaet Studierende\n",
       "1 WF          I         147        \n",
       "2 IG          I         153        \n",
       "3 DSM         I          60        \n",
       "4 INF         I          33        \n",
       "5 IEW         P         112        \n",
       "6 WL          P         143        \n",
       "7 DM          E          87        \n",
       "8 ET          E         101        "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "Hochschule"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 121,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "'data.frame':\t8 obs. of  3 variables:\n",
      " $ Studiengang: Factor w/ 8 levels \"DM\",\"DSM\",\"ET\",..: 7 5 2 6 4 8 1 3\n",
      " $ Fakultaet  : Factor w/ 3 levels \"E\",\"I\",\"P\": 2 2 2 2 3 3 1 1\n",
      " $ Studierende: num  147 153 60 33 112 143 87 101\n"
     ]
    }
   ],
   "source": [
    "str(Hochschule)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Die Strukturuntersuchung zeigt, dass Studiengang und Fakultaet als *Faktoren* aufgefasst werden. Nähere Informationen hierzu findet man etwa im [Gnu R Wikibook](https://de.wikibooks.org/wiki/GNU_R:_factor). Allgemein sind Faktoren *unabhängige Variablen* in einem (statistischen) Experiment und die Werte, die diese annehmen können, nennt man *Faktorstufen* (siehe auch [StatistikGuru](http://statistikguru.de/lexikon/faktor-faktorstufe.html)).\n",
    "\n",
    "Der *Zugriff* auf einzelne Elemente kann wie bei Listen oder wie bei Matrizen erfolgen."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 122,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "WF"
      ],
      "text/latex": [
       "WF"
      ],
      "text/markdown": [
       "WF"
      ],
      "text/plain": [
       "[1] WF\n",
       "Levels: DM DSM ET IEW IG INF WF WL"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "Hochschule$Studiengang[1]  # erste Variante"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 123,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "WF"
      ],
      "text/latex": [
       "WF"
      ],
      "text/markdown": [
       "WF"
      ],
      "text/plain": [
       "[1] WF\n",
       "Levels: DM DSM ET IEW IG INF WF WL"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "Hochschule[[1]][1]  # zweite Variante"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 124,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "WF"
      ],
      "text/latex": [
       "WF"
      ],
      "text/markdown": [
       "WF"
      ],
      "text/plain": [
       "[1] WF\n",
       "Levels: DM DSM ET IEW IG INF WF WL"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "Hochschule[1,1]  # dritte Variante"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 125,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>WF</li>\n",
       "\t<li>IG</li>\n",
       "\t<li>WL</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item WF\n",
       "\\item IG\n",
       "\\item WL\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. WF\n",
       "2. IG\n",
       "3. WL\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] WF IG WL\n",
       "Levels: DM DSM ET IEW IG INF WF WL"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "Hochschule$Studiengang[Hochschule$Studierende > 120]  # lästig: wiederholte Angabe des Data Frame"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 126,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>WF</li>\n",
       "\t<li>IG</li>\n",
       "\t<li>WL</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item WF\n",
       "\\item IG\n",
       "\\item WL\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. WF\n",
       "2. IG\n",
       "3. WL\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] WF IG WL\n",
       "Levels: DM DSM ET IEW IG INF WF WL"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "with(Hochschule, Studiengang[Studierende > 120])  # praktisch: Data Frame als Namensraum"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 127,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<thead><tr><th scope=col>Studiengang</th><th scope=col>Fakultaet</th><th scope=col>Studierende</th></tr></thead>\n",
       "<tbody>\n",
       "\t<tr><td>WF </td><td>I  </td><td>147</td></tr>\n",
       "\t<tr><td>IG </td><td>I  </td><td>153</td></tr>\n",
       "\t<tr><td>DSM</td><td>I  </td><td> 60</td></tr>\n",
       "\t<tr><td>INF</td><td>I  </td><td> 33</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{r|lll}\n",
       " Studiengang & Fakultaet & Studierende\\\\\n",
       "\\hline\n",
       "\t WF  & I   & 147\\\\\n",
       "\t IG  & I   & 153\\\\\n",
       "\t DSM & I   &  60\\\\\n",
       "\t INF & I   &  33\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "Studiengang | Fakultaet | Studierende | \n",
       "|---|---|---|---|\n",
       "| WF  | I   | 147 | \n",
       "| IG  | I   | 153 | \n",
       "| DSM | I   |  60 | \n",
       "| INF | I   |  33 | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "  Studiengang Fakultaet Studierende\n",
       "1 WF          I         147        \n",
       "2 IG          I         153        \n",
       "3 DSM         I          60        \n",
       "4 INF         I          33        "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "Hochschule[Hochschule[['Fakultaet']] == 'I',]  # wieder lästig (auch das Komma am Ende des Index ...)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 128,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<thead><tr><th scope=col>Studiengang</th><th scope=col>Fakultaet</th><th scope=col>Studierende</th></tr></thead>\n",
       "<tbody>\n",
       "\t<tr><td>WF </td><td>I  </td><td>147</td></tr>\n",
       "\t<tr><td>IG </td><td>I  </td><td>153</td></tr>\n",
       "\t<tr><td>DSM</td><td>I  </td><td> 60</td></tr>\n",
       "\t<tr><td>INF</td><td>I  </td><td> 33</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{r|lll}\n",
       " Studiengang & Fakultaet & Studierende\\\\\n",
       "\\hline\n",
       "\t WF  & I   & 147\\\\\n",
       "\t IG  & I   & 153\\\\\n",
       "\t DSM & I   &  60\\\\\n",
       "\t INF & I   &  33\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "Studiengang | Fakultaet | Studierende | \n",
       "|---|---|---|---|\n",
       "| WF  | I   | 147 | \n",
       "| IG  | I   | 153 | \n",
       "| DSM | I   |  60 | \n",
       "| INF | I   |  33 | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "  Studiengang Fakultaet Studierende\n",
       "1 WF          I         147        \n",
       "2 IG          I         153        \n",
       "3 DSM         I          60        \n",
       "4 INF         I          33        "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "subset(Hochschule, Fakultaet == 'I')  # wieder praktisch: Teilmenge mit Funktion mit Namensraum"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 129,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<thead><tr><th scope=col>Studiengang</th><th scope=col>Studierende</th></tr></thead>\n",
       "<tbody>\n",
       "\t<tr><td>WF </td><td>147</td></tr>\n",
       "\t<tr><td>IG </td><td>153</td></tr>\n",
       "\t<tr><td>DSM</td><td> 60</td></tr>\n",
       "\t<tr><td>INF</td><td> 33</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{r|ll}\n",
       " Studiengang & Studierende\\\\\n",
       "\\hline\n",
       "\t WF  & 147\\\\\n",
       "\t IG  & 153\\\\\n",
       "\t DSM &  60\\\\\n",
       "\t INF &  33\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "Studiengang | Studierende | \n",
       "|---|---|---|---|\n",
       "| WF  | 147 | \n",
       "| IG  | 153 | \n",
       "| DSM |  60 | \n",
       "| INF |  33 | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "  Studiengang Studierende\n",
       "1 WF          147        \n",
       "2 IG          153        \n",
       "3 DSM          60        \n",
       "4 INF          33        "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "subset(Hochschule, Fakultaet == 'I', select = c(1,3))  # die Fakultät kennen wir ja"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 130,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<thead><tr><th scope=col>Studiengang</th><th scope=col>Studierende</th></tr></thead>\n",
       "<tbody>\n",
       "\t<tr><td>WF </td><td>147</td></tr>\n",
       "\t<tr><td>IG </td><td>153</td></tr>\n",
       "\t<tr><td>DSM</td><td> 60</td></tr>\n",
       "\t<tr><td>INF</td><td> 33</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{r|ll}\n",
       " Studiengang & Studierende\\\\\n",
       "\\hline\n",
       "\t WF  & 147\\\\\n",
       "\t IG  & 153\\\\\n",
       "\t DSM &  60\\\\\n",
       "\t INF &  33\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "Studiengang | Studierende | \n",
       "|---|---|---|---|\n",
       "| WF  | 147 | \n",
       "| IG  | 153 | \n",
       "| DSM |  60 | \n",
       "| INF |  33 | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "  Studiengang Studierende\n",
       "1 WF          147        \n",
       "2 IG          153        \n",
       "3 DSM          60        \n",
       "4 INF          33        "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "subset(Hochschule, Fakultaet == 'I', select = -2)  # das Gleiche durch Ausschließen der zweiten Spalte"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 131,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<thead><tr><th></th><th scope=col>Studiengang</th><th scope=col>Fakultaet</th><th scope=col>Studierende</th></tr></thead>\n",
       "<tbody>\n",
       "\t<tr><th scope=row>1</th><td>WF </td><td>I  </td><td>147</td></tr>\n",
       "\t<tr><th scope=row>2</th><td>IG </td><td>I  </td><td>153</td></tr>\n",
       "\t<tr><th scope=row>3</th><td>DSM</td><td>I  </td><td> 60</td></tr>\n",
       "\t<tr><th scope=row>4</th><td>INF</td><td>I  </td><td> 33</td></tr>\n",
       "\t<tr><th scope=row>7</th><td>DM </td><td>E  </td><td> 87</td></tr>\n",
       "\t<tr><th scope=row>8</th><td>ET </td><td>E  </td><td>101</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{r|lll}\n",
       "  & Studiengang & Fakultaet & Studierende\\\\\n",
       "\\hline\n",
       "\t1 & WF  & I   & 147\\\\\n",
       "\t2 & IG  & I   & 153\\\\\n",
       "\t3 & DSM & I   &  60\\\\\n",
       "\t4 & INF & I   &  33\\\\\n",
       "\t7 & DM  & E   &  87\\\\\n",
       "\t8 & ET  & E   & 101\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "| <!--/--> | Studiengang | Fakultaet | Studierende | \n",
       "|---|---|---|---|---|---|\n",
       "| 1 | WF  | I   | 147 | \n",
       "| 2 | IG  | I   | 153 | \n",
       "| 3 | DSM | I   |  60 | \n",
       "| 4 | INF | I   |  33 | \n",
       "| 7 | DM  | E   |  87 | \n",
       "| 8 | ET  | E   | 101 | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "  Studiengang Fakultaet Studierende\n",
       "1 WF          I         147        \n",
       "2 IG          I         153        \n",
       "3 DSM         I          60        \n",
       "4 INF         I          33        \n",
       "7 DM          E          87        \n",
       "8 ET          E         101        "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "subset(Hochschule, Fakultaet %in% c('I', 'E'))  # Enthaltensein mit %in% testen"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 132,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<thead><tr><th></th><th scope=col>Studiengang</th><th scope=col>Fakultaet</th><th scope=col>Studierende</th></tr></thead>\n",
       "<tbody>\n",
       "\t<tr><th scope=row>1</th><td>WF </td><td>I  </td><td>147</td></tr>\n",
       "\t<tr><th scope=row>2</th><td>IG </td><td>I  </td><td>153</td></tr>\n",
       "\t<tr><th scope=row>8</th><td>ET </td><td>E  </td><td>101</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{r|lll}\n",
       "  & Studiengang & Fakultaet & Studierende\\\\\n",
       "\\hline\n",
       "\t1 & WF  & I   & 147\\\\\n",
       "\t2 & IG  & I   & 153\\\\\n",
       "\t8 & ET  & E   & 101\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "| <!--/--> | Studiengang | Fakultaet | Studierende | \n",
       "|---|---|---|\n",
       "| 1 | WF  | I   | 147 | \n",
       "| 2 | IG  | I   | 153 | \n",
       "| 8 | ET  | E   | 101 | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "  Studiengang Fakultaet Studierende\n",
       "1 WF          I         147        \n",
       "2 IG          I         153        \n",
       "8 ET          E         101        "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "subset(Hochschule, Fakultaet %in% c('I', 'E') & Studierende > 100)  # kombinierte Bedingung"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "#### Aufteilung von Datensätzen\n",
    "Mittels `split()` lassen sich Data Frames in mehrere andere aufteilen."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 133,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<dl>\n",
       "\t<dt>$E</dt>\n",
       "\t\t<dd><table>\n",
       "<thead><tr><th></th><th scope=col>Studiengang</th><th scope=col>Fakultaet</th><th scope=col>Studierende</th></tr></thead>\n",
       "<tbody>\n",
       "\t<tr><th scope=row>7</th><td>DM </td><td>E  </td><td> 87</td></tr>\n",
       "\t<tr><th scope=row>8</th><td>ET </td><td>E  </td><td>101</td></tr>\n",
       "</tbody>\n",
       "</table>\n",
       "</dd>\n",
       "\t<dt>$I</dt>\n",
       "\t\t<dd><table>\n",
       "<thead><tr><th scope=col>Studiengang</th><th scope=col>Fakultaet</th><th scope=col>Studierende</th></tr></thead>\n",
       "<tbody>\n",
       "\t<tr><td>WF </td><td>I  </td><td>147</td></tr>\n",
       "\t<tr><td>IG </td><td>I  </td><td>153</td></tr>\n",
       "\t<tr><td>DSM</td><td>I  </td><td> 60</td></tr>\n",
       "\t<tr><td>INF</td><td>I  </td><td> 33</td></tr>\n",
       "</tbody>\n",
       "</table>\n",
       "</dd>\n",
       "\t<dt>$P</dt>\n",
       "\t\t<dd><table>\n",
       "<thead><tr><th></th><th scope=col>Studiengang</th><th scope=col>Fakultaet</th><th scope=col>Studierende</th></tr></thead>\n",
       "<tbody>\n",
       "\t<tr><th scope=row>5</th><td>IEW</td><td>P  </td><td>112</td></tr>\n",
       "\t<tr><th scope=row>6</th><td>WL </td><td>P  </td><td>143</td></tr>\n",
       "</tbody>\n",
       "</table>\n",
       "</dd>\n",
       "</dl>\n"
      ],
      "text/latex": [
       "\\begin{description}\n",
       "\\item[\\$E] \\begin{tabular}{r|lll}\n",
       "  & Studiengang & Fakultaet & Studierende\\\\\n",
       "\\hline\n",
       "\t7 & DM  & E   &  87\\\\\n",
       "\t8 & ET  & E   & 101\\\\\n",
       "\\end{tabular}\n",
       "\n",
       "\\item[\\$I] \\begin{tabular}{r|lll}\n",
       " Studiengang & Fakultaet & Studierende\\\\\n",
       "\\hline\n",
       "\t WF  & I   & 147\\\\\n",
       "\t IG  & I   & 153\\\\\n",
       "\t DSM & I   &  60\\\\\n",
       "\t INF & I   &  33\\\\\n",
       "\\end{tabular}\n",
       "\n",
       "\\item[\\$P] \\begin{tabular}{r|lll}\n",
       "  & Studiengang & Fakultaet & Studierende\\\\\n",
       "\\hline\n",
       "\t5 & IEW & P   & 112\\\\\n",
       "\t6 & WL  & P   & 143\\\\\n",
       "\\end{tabular}\n",
       "\n",
       "\\end{description}\n"
      ],
      "text/markdown": [
       "$E\n",
       ":   \n",
       "| <!--/--> | Studiengang | Fakultaet | Studierende | \n",
       "|---|---|\n",
       "| 7 | DM  | E   |  87 | \n",
       "| 8 | ET  | E   | 101 | \n",
       "\n",
       "\n",
       "\n",
       "$I\n",
       ":   \n",
       "Studiengang | Fakultaet | Studierende | \n",
       "|---|---|---|---|\n",
       "| WF  | I   | 147 | \n",
       "| IG  | I   | 153 | \n",
       "| DSM | I   |  60 | \n",
       "| INF | I   |  33 | \n",
       "\n",
       "\n",
       "\n",
       "$P\n",
       ":   \n",
       "| <!--/--> | Studiengang | Fakultaet | Studierende | \n",
       "|---|---|\n",
       "| 5 | IEW | P   | 112 | \n",
       "| 6 | WL  | P   | 143 | \n",
       "\n",
       "\n",
       "\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "$E\n",
       "  Studiengang Fakultaet Studierende\n",
       "7          DM         E          87\n",
       "8          ET         E         101\n",
       "\n",
       "$I\n",
       "  Studiengang Fakultaet Studierende\n",
       "1          WF         I         147\n",
       "2          IG         I         153\n",
       "3         DSM         I          60\n",
       "4         INF         I          33\n",
       "\n",
       "$P\n",
       "  Studiengang Fakultaet Studierende\n",
       "5         IEW         P         112\n",
       "6          WL         P         143\n"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "split(Hochschule, Hochschule$Fakultaet)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 134,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<thead><tr><th scope=col>Studiengang</th><th scope=col>XINGGruppe</th></tr></thead>\n",
       "<tbody>\n",
       "\t<tr><td>WF  </td><td>ja  </td></tr>\n",
       "\t<tr><td>IG  </td><td>ja  </td></tr>\n",
       "\t<tr><td>WI  </td><td>nein</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{r|ll}\n",
       " Studiengang & XINGGruppe\\\\\n",
       "\\hline\n",
       "\t WF   & ja  \\\\\n",
       "\t IG   & ja  \\\\\n",
       "\t WI   & nein\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "Studiengang | XINGGruppe | \n",
       "|---|---|---|\n",
       "| WF   | ja   | \n",
       "| IG   | ja   | \n",
       "| WI   | nein | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "  Studiengang XINGGruppe\n",
       "1 WF          ja        \n",
       "2 IG          ja        \n",
       "3 WI          nein      "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(XING <- data.frame(Studiengang = c('WF', 'IG', 'WI'), XINGGruppe = c('ja', 'ja', 'nein')))"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "#### Zusammenführen von Datensätzen\n",
    "Mittels `merge()` lassen sich Datensätze (mit gemeinsamen Attributen) zusammen führen."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 135,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<thead><tr><th scope=col>Studiengang</th><th scope=col>Fakultaet</th><th scope=col>Studierende</th><th scope=col>XINGGruppe</th></tr></thead>\n",
       "<tbody>\n",
       "\t<tr><td>DM  </td><td>E   </td><td> 87 </td><td>NA  </td></tr>\n",
       "\t<tr><td>DSM </td><td>I   </td><td> 60 </td><td>NA  </td></tr>\n",
       "\t<tr><td>ET  </td><td>E   </td><td>101 </td><td>NA  </td></tr>\n",
       "\t<tr><td>IEW </td><td>P   </td><td>112 </td><td>NA  </td></tr>\n",
       "\t<tr><td>IG  </td><td>I   </td><td>153 </td><td>ja  </td></tr>\n",
       "\t<tr><td>INF </td><td>I   </td><td> 33 </td><td>NA  </td></tr>\n",
       "\t<tr><td>WF  </td><td>I   </td><td>147 </td><td>ja  </td></tr>\n",
       "\t<tr><td>WL  </td><td>P   </td><td>143 </td><td>NA  </td></tr>\n",
       "\t<tr><td>WI  </td><td>NA  </td><td> NA </td><td>nein</td></tr>\n",
       "</tbody>\n",
       "</table>\n"
      ],
      "text/latex": [
       "\\begin{tabular}{r|llll}\n",
       " Studiengang & Fakultaet & Studierende & XINGGruppe\\\\\n",
       "\\hline\n",
       "\t DM   & E    &  87  & NA  \\\\\n",
       "\t DSM  & I    &  60  & NA  \\\\\n",
       "\t ET   & E    & 101  & NA  \\\\\n",
       "\t IEW  & P    & 112  & NA  \\\\\n",
       "\t IG   & I    & 153  & ja  \\\\\n",
       "\t INF  & I    &  33  & NA  \\\\\n",
       "\t WF   & I    & 147  & ja  \\\\\n",
       "\t WL   & P    & 143  & NA  \\\\\n",
       "\t WI   & NA   &  NA  & nein\\\\\n",
       "\\end{tabular}\n"
      ],
      "text/markdown": [
       "\n",
       "Studiengang | Fakultaet | Studierende | XINGGruppe | \n",
       "|---|---|---|---|---|---|---|---|---|\n",
       "| DM   | E    |  87  | NA   | \n",
       "| DSM  | I    |  60  | NA   | \n",
       "| ET   | E    | 101  | NA   | \n",
       "| IEW  | P    | 112  | NA   | \n",
       "| IG   | I    | 153  | ja   | \n",
       "| INF  | I    |  33  | NA   | \n",
       "| WF   | I    | 147  | ja   | \n",
       "| WL   | P    | 143  | NA   | \n",
       "| WI   | NA   |  NA  | nein | \n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "  Studiengang Fakultaet Studierende XINGGruppe\n",
       "1 DM          E          87         NA        \n",
       "2 DSM         I          60         NA        \n",
       "3 ET          E         101         NA        \n",
       "4 IEW         P         112         NA        \n",
       "5 IG          I         153         ja        \n",
       "6 INF         I          33         NA        \n",
       "7 WF          I         147         ja        \n",
       "8 WL          P         143         NA        \n",
       "9 WI          NA         NA         nein      "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "merge(Hochschule, XING, all = TRUE)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {
    "collapsed": true
   },
   "source": [
    "## Programm-Ablaufsteuerung\n",
    "Schleifen und bedingte Anweisungen ermöglichen erst das eigentliche Prgrammieren.\n",
    "### Bedingte Anweisungen\n",
    "An verschiedenen Stellen in einem Programm werden *Fallunterscheidungen* benötigt. Dabei werden meist in Abhängigkeit vom Wahrheitswert einer *Bedingung* unterschiedliche Programmteile durchlaufen oder aber Schleifendurchläufe abgebrochen.\n",
    "\n",
    "In R können Fallunterscheidungen mittels der Konstrukte\n",
    "1. `if(Bedingung){Ausdruck1} else {Ausdurck2}`\n",
    "2. `ifelse(Bedingung, Ausdruck1, Ausdruck2)`\n",
    "getroffen werden oder aber mit Hilfe der Funktion `switch()`.\n",
    "\n",
    "Dabei ist bei der ersten Variante des `if`-Konstrukts zu beachten, dass durch die Verwendung der geschweiften Klammern `{}` die Möglichkeit geschaffen wird, mehrere zusammenhängende Befehle zu einem Ausdruck zusammen zu fassen, also einen ganzen *Block* von Anweisungen bedingt ausführen zu lassen.\n",
    "\n",
    "#### if ... else\n",
    "Bei diesem Konstruckt ist zu beachten, dass die Bedingung *nicht vektorwertig* betrachtet wird. Dies bedeutet, dass im Falle einer vektorwertigen Bedingung nur das erste Element betrachtet würde. Außerdem ist es erlaubt, den `else`-Zweig wegzulassen. Das folgende kleine Beispiel verdeutlicht die Möglichkeiten."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<dl class=dl-horizontal>\n",
       "\t<dt>x</dt>\n",
       "\t\t<dd>9</dd>\n",
       "\t<dt>y</dt>\n",
       "\t\t<dd>5</dd>\n",
       "</dl>\n"
      ],
      "text/latex": [
       "\\begin{description*}\n",
       "\\item[x] 9\n",
       "\\item[y] 5\n",
       "\\end{description*}\n"
      ],
      "text/markdown": [
       "x\n",
       ":   9y\n",
       ":   5\n",
       "\n"
      ],
      "text/plain": [
       "x y \n",
       "9 5 "
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "x <- 8\n",
    "if (x == 8) {\n",
    "    x <- x + 1\n",
    "    y <- 5\n",
    "} else y<-7  # keine {}, da nur eine Anweisung\n",
    "c(x = x, y = y)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "[1] \"x ist kleiner als 10\"\n"
     ]
    }
   ],
   "source": [
    "if (x < 10) print(\"x ist kleiner als 10\")"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "#### ifelse\n",
    "Hier erfolgt ein *vektorwertiger Vergleich*, d.h., es wird eine komponentenweise Auswertung der Bedingung vorgenommen. Führen wir das Beispile von eben weiter (wo $x$ derzeit den Wert 9 hat), dann könnten wir beispielsweise folgende Überprüfung samt Ausgabe vornehmen:"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 4,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>'v21'</li>\n",
       "\t<li>'v12'</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 'v21'\n",
       "\\item 'v12'\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 'v21'\n",
       "2. 'v12'\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] \"v21\" \"v12\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "ifelse(x == c(8,9), c(\"v11\", \"v12\"), c(\"v21\", \"v22\"))"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "In der ersten Komponente wird geprüft, ob $x=8$ gilt. Das ist nicht der Fall, also ergibt sich der Wert `v21` aus der zweiten Alternative. Bei der zweiten Komponente wird geprüft, ob $x=9$ gilt. Das ist der Fall, also ergibt sich der Wert `v12` aus der ersten Alternative.\n",
    "#### switch()\n",
    "Mit `switch()` lassen sich in Abhängigkeit von einem Ausdruck mehrere Alternativen angeben."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 11,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "2"
      ],
      "text/latex": [
       "2"
      ],
      "text/markdown": [
       "2"
      ],
      "text/plain": [
       "[1] 2"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "switch(2, a = 1, b = 2, cc = 3, dd = 4)  # das 2. Element ausgeben "
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 13,
   "metadata": {
    "collapsed": true
   },
   "outputs": [],
   "source": [
    "# das Element namens \"c\" (nicht existent!) ausgeben \n",
    "switch(\"c\", a = 1, b = 2, cc = 3, dd = 4)  "
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 14,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "3"
      ],
      "text/latex": [
       "3"
      ],
      "text/markdown": [
       "3"
      ],
      "text/plain": [
       "[1] 3"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "# das Element namens \"cc\" ausgeben \n",
    "switch(\"cc\", a = 1, b = 2, cc = 3, dd = 4)  "
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Weitere Beispiele sowie die Unterschiede zwischen einem numerischen Ausdruck und einem Zeichenketten-Ausdruck als Bedingung erhält man unter Verwendung der Hilfe mittels `?switch`."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Schleifen\n",
    "In R gibt es folgende Schleifentypen und Kontrollworte.\n",
    "\n",
    "\n",
    "Schlleife bzw. Kontrollwort | Beschreibung\n",
    "-------|------\n",
    "`repeat{Ausdruck}` | Wiederholung des *Ausdruck*s\n",
    "`while(Bedingung){AUsdruck}` | Wiederholung, solange *Bedingung* erfüllt ist\n",
    "`for(i in M){Ausdruck}` | Wiederhole *Ausdruck* für jedes $i\\in M$\n",
    "`next` | Sprung in den nächsten Iterationsschritt\n",
    "`break`| Sofortiges Verlassen der Schleife\n",
    "\n",
    "#### repeat, next und break\n",
    "Will man in R eine sogenannte *fußgesteuerte Schleife*, also eine Schleife, die mindestens einmal durchlaufen wird, verwenden, so geschieht das mit `repeat`. Allerdings bekäme man so eine *Endlosschleife*, wenn man nicht die Möglichkeit hätte, die Schelife auch wieder zu verlassen. Dies geschieht aufgrund des Eintretens einer Bedingung somit mit Hilfe der bereits betrachteten *bedingten Anweisung*."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 15,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "5"
      ],
      "text/latex": [
       "5"
      ],
      "text/markdown": [
       "5"
      ],
      "text/plain": [
       "[1] 5"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "i <- 0\n",
    "repeat{\n",
    "    i <- i + 1        # wiederholte Anweisung\n",
    "    if(i == 5) break  # Abbruchbedingung\n",
    "}\n",
    "i"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Nun lassen wir das Ergebnis noch innerhalb der Schleife ausgeben. Da dies nur ganz am Ende geschehen soll, müssen wir dafür sorgen, dass anderenfalls der nächste Schleifendurchlauf begonnen wird. Das ganze sieht dann so aus:"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 16,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "[1] 5\n"
     ]
    }
   ],
   "source": [
    "i <- 0\n",
    "repeat{\n",
    "    i <- i + 1        # wiederholte Anweisung\n",
    "    if(i < 5) next    # nächste Iteration\n",
    "    print(i)\n",
    "    if(i == 5) break  # Abbruchbedingung\n",
    "}"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "#### while\n",
    "Die vorhergehenden Beispiele hätte man auch *kopfgesteuert* lösen können, wofür sich eine `while`-Schleife anbietet. Hier wird *vor* der Ausführung der Anweisungen überprüft, ob die Bedingung erfüllt ist. Dies führt dazu, dass eine solche Schleife unter Umständen gar nicht durchlaufen wird. Unser Beispiel sähe dann wie folgt aus:"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 17,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "5"
      ],
      "text/latex": [
       "5"
      ],
      "text/markdown": [
       "5"
      ],
      "text/plain": [
       "[1] 5"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "i <- 0\n",
    "while(i < 5)\n",
    "    i <- i + 1  # ohne {}, da nur eine Anweisung\n",
    "i"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "***Anmerkung:*** Zwar können `break` und `next` auch in `while`-Schleifen verwendet werden, aber dies ist definitiv nicht zu empfehlen und wird allgemein als *schlechter Stil* betrachtet.\n",
    "#### for\n",
    "In einer `for`-Schleife wird über die Elemente einer Menge (häufig eines *Vektors*) iteriert. D.h. die *Laufvariable* nimmt die Werte sämtlicher Elemente der Menge an und die Schleife wird mit diesem Wert ausgeführt. Unser bisheriges Beispiel sähe dann wie folgt aus:"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 21,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "5"
      ],
      "text/latex": [
       "5"
      ],
      "text/markdown": [
       "5"
      ],
      "text/plain": [
       "[1] 5"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "ivec <- 0:4\n",
    "for(i in ivec)  # Laufvariable i\n",
    "    i <- i + 1\n",
    "i"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Ein weitergehendes Beispiel wäre das folgende:"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 22,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "[1] 4\n",
      "[1] 25\n",
      "[1] 9\n",
      "[1] 49\n",
      "[1] 36\n",
      "[1] 0\n"
     ]
    }
   ],
   "source": [
    "set <- c(2, 5, 3, 7, 6, 0)  # ein Vektor\n",
    "for(i in set)\n",
    "    print(i^2)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Allerdings geht das auch einfacher:"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 24,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "[1]  4 25  9 49 36  0\n"
     ]
    }
   ],
   "source": [
    "print(set^2)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "#### Keine Schleifen!\n",
    "Wie das gerade gesehene Beispiel zeigt, können Schleifen in R oft durch den Einsatz *vektorwertiger Funktionen* vermieden werden. Dies sollte man unbedingt anstreben, da Schleifen in einer *interpretierten* Sprache wie R recht *ineffizient* sind!"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Zeichenketten\n",
    "Eine kleinere Übersicht über die Funktionen zur Manipulation von Zeichenketten findet man wieder bei [Quick-R](http://www.statmethods.net/management/functions.html). Etwas umfangreicher ist die folgende Übersicht, wobei sich für die genaue Syntax zur Verwendung immer ien Blick auf die entsprechende Hilfeseite empfiehlt.\n",
    "\n",
    "Funktion | Beschreibung\n",
    "----|-----\n",
    "`cat()` | Zusammenfügen und Ausgabe (auch in Dateien)\n",
    "`deparse()` | Ausdruck in Zeichenfolge wandeln\n",
    "`format()` | Formatierung\n",
    "`grep()` | Suche von Zeichenfolgen in Vektoren\n",
    "`match()`, `pmatch()` | Suche von (Teil-)Zeichenketten in anderen\n",
    "`nchar()` | Anzahl Zeichen in einer Zeichenkette\n",
    "`parse()` | Konvertierung in einen Ausdruck\n",
    "`paste()` | Zusammensetzung von Zeichenketten\n",
    "`strsplit()` | Zerlegen von Zeichenketten\n",
    "`sub()`, `gsub()` | Ersetzen von (Teil-)Zeichenfolgen\n",
    "`substring()` | Ausgabe (und Ersetzung) von Teil-Zeichenfolgen\n",
    "`toupper`, `tolower()` | Umwandlung in Groß-/Kleinbuchstaben\n",
    "\n",
    "Eine extensive Behandlung des Themas findet man im eBook von [Gaston Sanchez](http://gastonsanchez.com/Handling_and_Processing_Strings_in_R.pdf).\n",
    "\n",
    "Es folgen ein paar wenige Beispiele."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 26,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Der Wert von x ist:\t7.4217\t\n"
     ]
    }
   ],
   "source": [
    "# informative Ausgabe\n",
    "x <- 7.4217\n",
    "cat(\"Der Wert von x ist:\", x, \"\\n\", sep=\"\\t\")"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "In diesem Beispiel wurde als Trenner zwischen den Elementen nicht das standardmäßige Leerzeichen verwendet, sondern ein *Tabulator* (`\\t`). Ebenso wurde für einen *Zeilenumbruch* (engl. *newline*; `\\n`) gesorgt. Möchte man statt einer Ausgabe ein neues Objekt erzeugen, so verwendet man `paste()`."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 85,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>'Datei1.txt'</li>\n",
       "\t<li>'Datei2.txt'</li>\n",
       "\t<li>'Datei3.txt'</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 'Datei1.txt'\n",
       "\\item 'Datei2.txt'\n",
       "\\item 'Datei3.txt'\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 'Datei1.txt'\n",
       "2. 'Datei2.txt'\n",
       "3. 'Datei3.txt'\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] \"Datei1.txt\" \"Datei2.txt\" \"Datei3.txt\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "dateien <- paste(\"Datei\",1:3,\".txt\", sep=\"\")\n",
    "dateien"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 68,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol>\n",
       "\t<li><ol class=list-inline>\n",
       "\t<li>'Datei1'</li>\n",
       "\t<li>'txt'</li>\n",
       "</ol>\n",
       "</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate}\n",
       "\\item \\begin{enumerate*}\n",
       "\\item 'Datei1'\n",
       "\\item 'txt'\n",
       "\\end{enumerate*}\n",
       "\n",
       "\\end{enumerate}\n"
      ],
      "text/markdown": [
       "1. 1. 'Datei1'\n",
       "2. 'txt'\n",
       "\n",
       "\n",
       "\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[[1]]\n",
       "[1] \"Datei1\" \"txt\"   \n"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "# Aufteilung in Name und Endung\n",
    "strsplit(dateien[1],\"[.]\")"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Hier ist zu *beachten*, dass es sich bei der Zeichenfolge, anhand derer getilt werden soll, um einen [*regulären Ausdruck*](https://de.wikipedia.org/wiki/Regul%C3%A4rer_Ausdruck) handelt. Dabei ist der Punkt ein *Metazeichen*, welcher innerhalb der durch die eckigen Klammern getroffenen *Zeichenauswahl* seine ursprüngliche Bedeutung erhält. Dies wird auch explizit in der Hilfe zu `?strsplit` aufgegriffen."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 43,
   "metadata": {
    "collapsed": true
   },
   "outputs": [],
   "source": [
    "?strsplit"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 82,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "2"
      ],
      "text/latex": [
       "2"
      ],
      "text/markdown": [
       "2"
      ],
      "text/plain": [
       "[1] 2"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "# regulären Ausdruck suchen\n",
    "grep(\"2\", dateien)  # Ausgabe des Elements, in dem gefunden"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 83,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>1</li>\n",
       "\t<li>2</li>\n",
       "\t<li>3</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 1\n",
       "\\item 2\n",
       "\\item 3\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 1\n",
       "2. 2\n",
       "3. 3\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] 1 2 3"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "grep(\"ei\", dateien)  # Ausgabe der Elemente, in denen gefunden"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 75,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>'Datei1.csv'</li>\n",
       "\t<li>'Datei2.csv'</li>\n",
       "\t<li>'Datei3.csv'</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 'Datei1.csv'\n",
       "\\item 'Datei2.csv'\n",
       "\\item 'Datei3.csv'\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 'Datei1.csv'\n",
       "2. 'Datei2.csv'\n",
       "3. 'Datei3.csv'\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] \"Datei1.csv\" \"Datei2.csv\" \"Datei3.csv\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "# Ersetzung von \"txt\" durch \"csv\"\n",
    "sub(\"txt\",\"csv\",dateien)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 79,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>'Datei1.txt'</li>\n",
       "\t<li>'Datei2.txt'</li>\n",
       "\t<li>'Datei3.txt'</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 'Datei1.txt'\n",
       "\\item 'Datei2.txt'\n",
       "\\item 'Datei3.txt'\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 'Datei1.txt'\n",
       "2. 'Datei2.txt'\n",
       "3. 'Datei3.txt'\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] \"Datei1.txt\" \"Datei2.txt\" \"Datei3.txt\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "# überschrieben wurde nicht!\n",
    "dateien"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 87,
   "metadata": {
    "collapsed": true
   },
   "outputs": [],
   "source": [
    "# so wird überschrieben!\n",
    "dateien <- sub(\"txt\",\"csv\",dateien)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 81,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<ol class=list-inline>\n",
       "\t<li>'DATEI1.CSV'</li>\n",
       "\t<li>'DATEI2.CSV'</li>\n",
       "\t<li>'DATEI3.CSV'</li>\n",
       "</ol>\n"
      ],
      "text/latex": [
       "\\begin{enumerate*}\n",
       "\\item 'DATEI1.CSV'\n",
       "\\item 'DATEI2.CSV'\n",
       "\\item 'DATEI3.CSV'\n",
       "\\end{enumerate*}\n"
      ],
      "text/markdown": [
       "1. 'DATEI1.CSV'\n",
       "2. 'DATEI2.CSV'\n",
       "3. 'DATEI3.CSV'\n",
       "\n",
       "\n"
      ],
      "text/plain": [
       "[1] \"DATEI1.CSV\" \"DATEI2.CSV\" \"DATEI3.CSV\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "toupper(dateien)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "#### parse\n",
    "Diese Funktion eröffnet die Möglichkeit, *berechnete Variablen* zur Laufzeit zu erzeugen, wenn man möchte (ob das gut ist, muss jeder selbst entscheiden). Man kann mit Hilfe on `parse()` einen *Ausdruck* erzeugen und diesen dann auswerten, als habe man ihn direkt eingegeben. Das folgende Beispiel verdeutlichet die Funktionsweise."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 92,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/plain": [
       "expression(neueVariable <- 9)"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(ep <- parse(text = \"neueVariable <- 9\"))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 93,
   "metadata": {
    "collapsed": true
   },
   "outputs": [],
   "source": [
    "# Ausdruck auswerten\n",
    "eval(ep)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 94,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "9"
      ],
      "text/latex": [
       "9"
      ],
      "text/markdown": [
       "9"
      ],
      "text/plain": [
       "[1] 9"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "# neue Variable existiert und hat den Wert 9\n",
    "neueVariable"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "#### Anführungszeichen\n",
    "Will man Anführungszeichen innerhalb einer Zeichenkette haben, so muss man zwischen einfachen und doppelten Anführungszeichen wechseln oder den *Bsckslash* (`\\`) zum escapen verwenden. Man hat also folgende Möglichkeiten:"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 95,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "'\\'str' in str'"
      ],
      "text/latex": [
       "'\\textbackslash{}'str' in str'"
      ],
      "text/markdown": [
       "'\\'str' in str'"
      ],
      "text/plain": [
       "[1] \"'str' in str\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "\"'str' in str\""
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 96,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "'\"str\" in str'"
      ],
      "text/latex": [
       "'\"str\" in str'"
      ],
      "text/markdown": [
       "'\"str\" in str'"
      ],
      "text/plain": [
       "[1] \"\\\"str\\\" in str\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "\"\\\"str\\\" in str\""
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 97,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "'\"str\" in str'"
      ],
      "text/latex": [
       "'\"str\" in str'"
      ],
      "text/markdown": [
       "'\"str\" in str'"
      ],
      "text/plain": [
       "[1] \"\\\"str\\\" in str\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "'\"str\" in str'"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 98,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "'\\'str' in str'"
      ],
      "text/latex": [
       "'\\textbackslash{}'str' in str'"
      ],
      "text/markdown": [
       "'\\'str' in str'"
      ],
      "text/plain": [
       "[1] \"'str' in str\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "'\\'str\\' in str'"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "#### Ungewöhnliche Objektnamen\n",
    "Unter Zuhilfenahme von rückwärtsgerichteten Anführungszeichen (*Backticks*; \\`) lassen sich beliebige Objektnamen vergeben, was aber unbedingt zu vermeiden ist. Wir werden nun der Variablen \"`Das ist nicht gut auch wegen des ö!?* 1/2`\" den Wert 5 zuweisen und anschließend damit rechnen:"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 101,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "5"
      ],
      "text/latex": [
       "5"
      ],
      "text/markdown": [
       "5"
      ],
      "text/plain": [
       "[1] 5"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(`Das ist nicht gut auch wegen des ö!?* 1/2` <- 5)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 102,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "2"
      ],
      "text/latex": [
       "2"
      ],
      "text/markdown": [
       "2"
      ],
      "text/plain": [
       "[1] 2"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "`Das ist nicht gut auch wegen des ö!?* 1/2` - 3"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Dennoch ist es nützlich, dies zu wissen, da es im Zusammenhang mit dem Laden von Datensätzen vorkommen kann, dass Spalten Namen haben, auf die man dann nur auf diese Art zugreifen kann.\n",
    "## Datum und Zeit\n",
    "In sehr vielen Analysen gibt es eine Zeitdimension, so dass ein Analysewerkzeug mit Zeitangaben umgehen können muss. Dabei gibt es einige Herausforderungen wie beispielsweise Zeitzonen, Sommer-/Winterzeit und vor allem auch regionale Unterschiede in der *Darstellung* von Datum und Uhrzeit. So ist nicht von vornherein klar, wie etwa die folgende *Datumsangabe* zu interpretieren ist: 06/09/12\n",
    "1. Es könnte ich nach deutscher Lesart um den 6. September 2012 hndeln\n",
    "2. Ein Amerikaner würde wohl denken, es handle sich um dem 9. Juni 2012\n",
    "3. Ein nach ISO-Norm arbeitender Computer würde daraus den 12. September 2006 lesen\n",
    "\n",
    "Bei *Zeitangaben* ist es zwar meist klar, wie diese zu interpretieren sind, aber es gibt eben sehr unterschiedliche Formate (man denke nur an die im angelsächsichen Sprachraum gebräuchliche 12-Stunden-Darstellung unter Hinzufügen von `a.m.` (ante meridies = Vormittag = vor 12 Uhr mittags) und `p.m.?` (post meridies = Nachmittag = nach 12 Uhr mittags). Einen Überblick findet man in den entsprechenden Artikeln bei Wikipedia zu [Datumsangaben](https://de.wikipedia.org/wiki/Datumsformat) und [Schreibweisen von Uhrzeiten](https://de.wikipedia.org/wiki/Uhrzeit#Schreibweise).\n",
    "\n",
    "Eine kurze Einführung zum Umgang von R mit Datum und Zeit findet man am im [Gnu R Wikibook](https://de.wikibooks.org/wiki/GNU_R:_Datum-_und_Zeitfunktionen). Wir betrachten ein ähnliches Beispiel, welches aber außerdem zeigt, dass die zum Parsen der Zeichenketten mit den Zeitangaben verwendete Funktion `strptime()` auch mit deutschen Monatsnamen umgehen kann und außerdem die Umstellung von Winter- auf Sommerzeit berücksichtigt."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 106,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " chr [1:3] \"17. Mär 2017 14:00\" \"24. Mär 2017 15:45\" ...\n"
     ]
    }
   ],
   "source": [
    "# Zeitangaben als Zeichenketten\n",
    "zeiten <- c(\"17. Mär 2017 14:00\", \"24. Mär 2017 15:45\", \"31. Mär 2017 17:15\")\n",
    "str(zeiten)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 107,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/plain": [
       "[1] \"2017-03-17 14:00:00 CET\"  \"2017-03-24 15:45:00 CET\" \n",
       "[3] \"2017-03-31 17:15:00 CEST\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "(zeitenParsed <- strptime(zeiten, format=\"%d. %b %Y %R\"))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 108,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " POSIXlt[1:3], format: \"2017-03-17 14:00:00\" \"2017-03-24 15:45:00\" ...\n"
     ]
    }
   ],
   "source": [
    "str(zeitenParsed)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Genauere Informationen zur Funktion `strptime()` erhält man wieder über die eingebaute Hilfeseite. Hier lohnt sich insbesndere ein Blick auf die Möglichkeiten, die der Parameter `format` bietet (während man sich erst einmal nicht darum kümmern muss, was genau S3 bzw. S4 Klassen sind :smile:).\n",
    "\n",
    "Weitere nützliche Funktionen sind `ISOdate(Jahr,Monat,Tag,Stunde,Minute,Sekunde)` zur einfachen Definition eines Datums sowie `Sys.time()` zur Ermittlung des aktuellen Datums und `difftime()` zur Berechnung von Zeitintervallen."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 114,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/plain": [
       "[1] \"1989-11-09 18:57:00 CET\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "# Zeitpunkt des Mauerfalls\n",
    "(mauerfall <- ISOdate(1989,11,09,18,57, tz=\"CET\"))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 112,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/plain": [
       "[1] \"2017-03-19 13:26:32 CET\""
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "# Aktuelle Zeit\n",
    "(jetzt <- Sys.time())"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 115,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Class 'difftime'  atomic [1:1] 9992\n",
      "  ..- attr(*, \"units\")= chr \"days\"\n"
     ]
    }
   ],
   "source": [
    "vergangeneZeit <- jetzt-mauerfall\n",
    "str(vergangeneZeit)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 116,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "239802.492476981"
      ],
      "text/latex": [
       "239802.492476981"
      ],
      "text/markdown": [
       "239802.492476981"
      ],
      "text/plain": [
       "[1] 239802.5"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "as.numeric(vergangeneZeit, units=\"hours\")"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 117,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "9991.77051987421"
      ],
      "text/latex": [
       "9991.77051987421"
      ],
      "text/markdown": [
       "9991.77051987421"
      ],
      "text/plain": [
       "[1] 9991.771"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "as.numeric(vergangeneZeit, units=\"days\")"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Dies beschließt die Einführung in die wichtigsten Grundlagen von R, wobei die Stärken von R natürlich in den umfangreichen *statistischen Funktionalitäten* inkl. *grafischer Ausgabe* liegen. Diese Themen werden später aufgegriffen, nachdem ebenfalls später der Umgang mit *(externen) Datenquellen* betrachtet wurde."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {
    "collapsed": true
   },
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "R",
   "language": "R",
   "name": "ir"
  },
  "language_info": {
   "codemirror_mode": "r",
   "file_extension": ".r",
   "mimetype": "text/x-r-source",
   "name": "R",
   "pygments_lexer": "r",
   "version": "3.3.2"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 2
}
