window.questionsTS = [
  {
    "question": "Rozważmy sterowany system dynamiczny generowany przez równanie różniczkowe: 𝒙̇(𝒕) = 𝑨𝒙(𝒕) + 𝑩𝒖(𝒕), 𝑨 ∈ ℝ𝒏×𝒏, 𝑩 ∈ ℝ 𝒏×𝒓, 𝟎 ≤ 𝒕 ≤ 𝒕𝒌 < ∞ Niech 𝒓𝒛ą𝒅 𝑩 = 𝒓. Niech stopień wielomianu minimalnego macierzy 𝑨 ∈ ℝ𝒏×𝒏 będzie równy 𝒎 . Ustalmy dowolnie dwa punkty w przestrzeni 𝑹𝒏∶ 𝒙𝟎 ∈ 𝑹 𝒏 oraz 𝒙𝒌 ∈ 𝑹𝒏. Kiedy istnieje sterowanie 𝒖 ∈ 𝑷𝑪(𝟎, 𝒕𝒌,𝑹𝒓) takie, że 𝒙(𝟎) = 𝒙𝟎 oraz 𝒙(𝒕𝒌) = 𝒙𝒌?",
    "options": [
      "u(𝑡) = 𝛿(𝑡)",
      "u(𝑡) = 𝐵𝑇 𝑒−𝑡𝐴𝑇 𝑊𝑡𝑘−1 (𝑒−𝑡𝑘𝐴 𝑥𝑘 − 𝑥0), 𝑊𝑠 = ∫𝑒−𝑟𝐴 𝐵 𝐵𝑇 𝑒−𝑟𝐴𝑇 𝑑𝑟, det𝑊𝑠 ≠ 0",
      "u(𝑡) = sin(𝜔𝑡) + 1(𝑡)",
      "u(𝑡) = 1(t)"
    ],
    "answer": [
      "u(𝑡) = 𝐵𝑇 𝑒−𝑡𝐴𝑇 𝑊𝑡𝑘−1 (𝑒−𝑡𝑘𝐴 𝑥𝑘 − 𝑥0), 𝑊𝑠 = ∫𝑒−𝑟𝐴 𝐵 𝐵𝑇 𝑒−𝑟𝐴𝑇 𝑑𝑟, det𝑊𝑠 ≠ 0"
    ]
  },
  {
    "question": "Rozważmy sterowany system dynamiczny generowany przez równanie różniczkowe: 𝒙̇(𝒕) = 𝑨𝒙(𝒕) + 𝑩𝒖(𝒕), 𝑨 ∈ ℝ𝒏×𝒏, 𝑩 ∈ ℝ𝒏×𝒓, 𝟎 ≤ 𝒕 ze sprzężeniem 𝒖(𝒕) = 𝑲𝒙(𝒕),𝑲 ∈ ℝ𝒓×𝒏. System zamknięty jest opisany równaniem różniczkowym 𝒙̇(𝒕) = [𝑨 + 𝑩𝑲]𝒙(𝒕). Niech 𝒔𝒊(𝑨),𝒊 = 𝟏,𝟐, … , 𝒏 będą wartościami własnymi macierzy 𝑨 ∈ ℝ𝒏×𝒏. Kiedy istnieje regulator 𝒖(𝒕) = 𝑲𝒙(𝒕),𝑲 ∈ ℝ𝒓×𝒏 taki, że system zamknięty jest wykładniczo stabilny? Innymi słowy kiedy istnieje 𝑲 takie, że wszystkie wartości własne macierzy 𝑨 + 𝑩𝑲 mają części rzeczywiste ujemne?",
    "options": [
      "Zawsze",
      "Wtedy i tylko wtedy, gdy rząd [𝑠𝑖𝐼 − 𝐴 𝐵] = 𝑛 dla wszystkich wartości własnych 𝑠𝑖(𝐴) macierzy 𝐴 ∈ ℝ𝑛×𝑛, których części rzeczywiste są dodatnie lub równe zeru",
      "Wtedy i tylko wtedy, gdy para macierzy (𝐴; 𝐵) jest stabilizowalna, czyli wtedy i tylko wtedy, gdy nasz system jest stabilizowalny",
      "Nigdy"
    ],
    "answer": [
      "Wtedy i tylko wtedy, gdy rząd [𝑠𝑖𝐼 − 𝐴 𝐵] = 𝑛 dla wszystkich wartości własnych 𝑠𝑖(𝐴) macierzy 𝐴 ∈ ℝ𝑛×𝑛, których części rzeczywiste są dodatnie lub równe zeru",
      "Wtedy i tylko wtedy, gdy para macierzy (𝐴; 𝐵) jest stabilizowalna, czyli wtedy i tylko wtedy, gdy nasz system jest stabilizowalny"
    ]
  },
  {
    "question": "Rozważmy sterowany system dynamiczny generowany przez równanie różniczkowe: 𝒙̇(𝒕) = 𝑨𝒙(𝒕) + 𝑩𝒖(𝒕), 𝑨 ∈ ℝ𝒏×𝒏, 𝑩 ∈ ℝ𝒏×𝒓, 𝟎 ≤ 𝒕 ≤ 𝒕𝒌 < ∞. Ustalmy dowolnie dwa punkty w przestrzeni 𝑹𝒏∶ 𝒙𝟎 ∈ 𝑹𝒏 oraz 𝒙𝒌 ∈ 𝑹𝒏. Które sterowanie 𝒖 ∈ 𝑷𝑪(𝟎, 𝒕𝒌,𝑹𝒓) przeprowadza system z punktu 𝒙(𝟎) = 𝒙𝟎 do punktu 𝒙(𝒕𝒌) =𝒙𝒌?",
    "options": [
      "u(𝑡) = 𝛿(𝑡)",
      "u(𝑡) = 𝐵𝑇 𝑒−𝑡𝐴𝑇 𝑊𝑡𝑘−1 (𝑒−𝑡𝑘𝐴 𝑥𝑘 − 𝑥0), 𝑊𝑠 = ∫𝑒−𝑟𝐴 𝐵 𝐵𝑇 𝑒−𝑟𝐴𝑇 𝑑𝑟, det𝑊𝑠 ≠ 0",
      "u(𝑡) = sin(𝜔𝑡) + 1(𝑡)",
      "u(𝑡) = 1(t)"
    ],
    "answer": [
      "u(𝑡) = 𝛿(𝑡)",
      "u(𝑡) = 𝐵𝑇 𝑒−𝑡𝐴𝑇 𝑊𝑡𝑘−1 (𝑒−𝑡𝑘𝐴 𝑥𝑘 − 𝑥0), 𝑊𝑠 = ∫𝑒−𝑟𝐴 𝐵 𝐵𝑇 𝑒−𝑟𝐴𝑇 𝑑𝑟, det𝑊𝑠 ≠ 0",
    ]
  },
  {
    "question": "Rozważmy sterowany system dynamiczny generowany przez równanie różniczkowe: 𝒙̇(𝒕) = 𝑨𝒙(𝒕) + 𝑩𝒖(𝒕), 𝑨 ∈ ℝ𝒏×𝒏, 𝑩 ∈ ℝ𝒏×𝒓, 𝟎 ≤ 𝒕 ze sprzężeniem 𝒖(𝒕) = 𝑲𝒙(𝒕) + 𝒗(𝒕),𝑲 ∈ ℝ𝒓×𝒏. System zamknięty jest opisany równaniem różniczkowym 𝒙̇(𝒕) = [𝑨 + 𝑩𝑲]𝒙(𝒕) + 𝑩𝒗(𝒕). Niech para (𝑨; 𝑩) będzie sterowalna. Dla których macierzy 𝑲 ∈ ℝ𝒓×𝒏 system zamknięty jest sterowalny? Proszę wskazać konkretne realizacje takich macierzy lub klasy macierzy.",
    "options": [
      "Dla macierzy 𝐾 = −𝐵𝑇 𝑊𝑠−1, 𝑊𝑠 = ∫𝑒−𝑟𝐴 𝐵𝐵𝑇 𝑒−𝑟𝐴𝑇 𝑑𝑟, det 𝑊𝑠 ≠ 0",
      "Dla wszystkich macierzy rzeczywistych 𝐾 ∈ ℝ𝑟×𝑛",
      "Dla żadnej macierzy 𝐾 ∈ ℝ𝑟×n",
      "Dla macierzy zerowej, czyli gdy 𝐾 = 0 ∈ ℝ𝑟×𝑛"
    ],
    "answer": [
      "Dla macierzy 𝐾 = −𝐵𝑇 𝑊𝑠−1, 𝑊𝑠 = ∫𝑒−𝑟𝐴 𝐵𝐵𝑇 𝑒−𝑟𝐴𝑇 𝑑𝑟, det 𝑊𝑠 ≠ 0",
      "Dla wszystkich macierzy rzeczywistych 𝐾 ∈ ℝ𝑟×𝑛",
    ]
  },
  {
    "question": "Rozważmy system dynamiczny generowany przez równanie różniczkowe: 𝒙̇(𝒕) = 𝑨𝒙(𝒕), 𝒙(𝟎) ∈ ℝ𝒏, 𝑨 ∈ ℝ𝒏×𝒏, 𝟎 ≤ 𝒕 Oznaczmy przez 𝒔𝒊(𝑨) i-tą wartość własną macierzy 𝑨 ∈ ℝ𝒏×𝒏. Niech ||𝒗|| oznacza normę euklidesową wektora 𝒗 ∈ 𝑹𝒏. Kiedy dla każdego 𝒙(𝟎) ∈ 𝑹𝒏 przy 𝒕 → ∞ zachodzi zbieżność ||𝒙(𝒕)|| → 𝟎? Innymi słowy, kiedy nasz system jest asymptotycznie stabilny? ",
    "options": [
      "Wtedy i tylko wtedy, gdy wszystkie wartości własne 𝑠𝑖(𝐴) są równe zeru",
      "Wtedy i tylko wtedy, gdy części rzeczywiste wszystkich wartości własnych 𝑠𝑖(𝐴) są ujemne",
      "Wtedy i tylko wtedy, gdy części rzeczywiste wszystkich wartości własnych 𝑠𝑖(𝐴) są ujemne lub równe zeru",
      "Wtedy, gdy rzeczywiste wartości własne 𝑠𝑖(𝐴) są ujemne"
    ],
    "answer": [
      "Wtedy i tylko wtedy, gdy części rzeczywiste wszystkich wartości własnych 𝑠𝑖(𝐴) są ujemne",
    ]
  },
  {
    "question": "Rozważmy system dynamiczny generowany przez równanie różniczkowe: 𝒙̇(𝒕) = 𝑨𝒙(𝒕), 𝒙(𝟎) ∈ ℝ𝒏, 𝑨 ∈ ℝ𝒏×𝒏, 𝟎 ≤ 𝒕 Oznaczmy przez 𝒔𝒊(𝑨) i-tą wartość własną macierzy 𝑨 ∈ ℝ𝒏×𝒏. Które parametry są nazywane częstościami drgań własnych naszego systemu ?",
    "options": [
      "Części urojone wartości własnych 𝑠𝑖(𝐴)",
      "Czysto urojone wartości własne 𝑠𝑖(𝐴)",
      "𝜔𝑖 = 𝐼𝑚 𝑠𝑖(A)",
      "Zespolone wartości własne 𝑠𝑖(𝐴)"
    ],
    "answer": [
      "Części urojone wartości własnych 𝑠𝑖(𝐴)",
      "𝜔𝑖 = 𝐼𝑚 𝑠𝑖(A)"
    ]
  },
  {
    "question": "Rozważmy układ dynamiczny opisany równościami 𝒙̇(𝒕) = 𝑨𝒙(𝒕) + 𝑩𝒖(𝒕), 𝑨 ∈ ℝ𝒏×𝒏, 𝑩 ∈ ℝ𝒏×𝒓, 𝟎 ≤ 𝒕 𝒚(𝒕) = 𝑪𝒙(𝒕), 𝑪 ∈ ℝ𝒎×𝒏. Która macierz o wymiarach 𝒎 × 𝒓 jest nazywana transmitancją macierzową naszego układu?",
    "options": [
      "𝑌(𝑠) = 𝐶[𝑠𝐼 − 𝐴]−1𝑥(0) + 𝐶[𝑠𝐼 − 𝐴]−1𝐵𝑈(𝑠)",
      "𝐺1(𝑠) + 𝐺(𝑠)",
      "𝐺(𝑠) = 𝐶[𝑠𝐼 − 𝐴]−1 B",
      "𝐺(𝑠) = 𝐶[𝑠𝐼 − 𝐴]−1"
    ],
    "answer": [
      "𝐺(𝑠) = 𝐶[𝑠𝐼 − 𝐴]−1 B"
    ]
  },
  {
    "question": "Rozważmy układ dynamiczny opisany równościami 𝒙̇(𝒕) = 𝑨𝒙(𝒕) + 𝑩𝒖(𝒕), 𝑨 ∈ ℝ𝒏×𝒏, 𝑩 ∈ ℝ𝒏×𝒓, 𝟎 ≤ 𝒕 𝒚(𝒕) = 𝑪𝒙(𝒕),𝑪 ∈ ℝ𝒎×𝒏 i jego transmitancję macierzową 𝑮(𝒔) = 𝑪[𝒔𝑰 − 𝑨]−𝟏 𝑩. Niech części rzeczywiste wszystkich wartości własnych 𝒔𝒊(𝑨) będą ujemne, co jest równoważne asymptotycznej stabilności naszego układu. Niech 𝒙(𝒕) = 𝟎 dla 𝒕 < 𝟎. Niech 𝒎 = 𝒓 = 𝟏 (układ o jednym wejściu i jednym wyjściu). Oznaczmy 𝑮(𝒔) = ∫𝒈(𝒕) 𝒆−𝒔𝒕 𝒅𝒕. Jak wygląda odpowiedź układu 𝒚(𝒕) , gdy 𝒖(𝒕) = 𝜹(𝒕)?",
    "options": [ 
      "𝑦(𝑡) = 𝐶 𝑒𝑡𝐴 𝐵, −≤ 𝑡",
      "𝑦(𝑡) = 1(𝑡)",
      "𝑦(𝑡) = 𝑔(𝑡), 0 ≤ 𝑡",
      "𝑦(𝑡) = 0, 0 ≤ t"
    ],
    "answer": [
      "𝑦(𝑡) = 𝐶 𝑒𝑡𝐴 𝐵, −≤ 𝑡",
      "𝑦(𝑡) = 𝑔(𝑡), 0 ≤ 𝑡",
    ]
  },
  {
    "question": "Rozważmy układ dynamiczny opisany równościami: 𝒙̇(𝒕) = 𝑨𝒙(𝒕) + 𝑩𝒖(𝒕), 𝑨 ∈ ℝ𝒏×𝒏, 𝑩 ∈ ℝ𝒏×𝒓, 𝟎 ≤ 𝒕 𝒚(𝒕) = 𝑪𝒙(𝒕),𝑪 ∈ ℝ𝒎×𝒏 i jego transmitancję macierzową 𝑮(𝒔) = 𝑪[𝒔𝑰 − 𝑨]−𝟏 𝑩. Niech części rzeczywiste wszystkich wartości własnych 𝒔𝒊(𝑨) będą ujemne, co jest równoważne asymptotycznej stabilności naszego układu. Oznaczmy przez 𝒚̃(𝒕) funkcję, do której dąży 𝒚(𝒕) przy 𝒕 → ∞. Niech ||𝒗|| oznacza normę euklidesową wektora 𝒗 ∈ 𝑹𝒎. Zbieżność jest rozumiana jako zbieżność w sensie normy, czyli przy 𝒕 → ∞ mamy ||𝒚(𝒕)|| → ||𝒚̃(𝒕)||. Niech 𝒎 = 𝒓 = 𝟏 (układ o jednym wejściu i jednym wyjściu). Jak wygląda odpowiedź układu w stanie ustalonym 𝒚̃(𝒕) przy dowolnym 𝒙(𝟎) , gdy 𝒖(𝒕) = 𝒄𝟏(𝒕), 𝒄 ∈ 𝑹 ?",
    "options": [ 
      "y(𝑡) = 𝐺(0)𝑐 = 𝑐𝑜𝑛𝑠𝑡",
      "y(𝑡) = 1(t)",
      "y(𝑡) = 0, 0 ≤ t",
      "𝑦(𝑡) = 𝐶 𝑒𝑡𝐴 𝐵, 0 ≤ t"
    ],
    "answer": [
      "y(𝑡) = 𝐺(0)𝑐 = 𝑐𝑜𝑛𝑠𝑡",
    ]
  },
  {
    "question": "Rozważmy układ dynamiczny dyskretny w czasie: 𝒙[𝒌 + 𝟏] = 𝑨𝒙[𝒌], 𝑨 ∈ 𝑹𝒏×𝒏, 𝒌 = 𝟎, 𝟏, 𝟐 … Oznaczmy przez 𝒛𝒊(𝑨) i-tą wartość własną macierzy 𝑨 ∈ 𝑹𝒏×𝒏. Kiedy układ dyskretny jest asymptotycznie stabilny, czyli kiedy dla każdego 𝒙[𝟎] ∈ 𝑹𝒏 przy 𝒌 → ∞ zachodzi zbieżność ||𝒙[𝒌]|| → 𝟎 ?",
    "options": [ 
      "Gdy |𝑧𝑖(𝐴)| ≤ 1 dla wszystkich wartości własnych macierzy 𝐴 ∈ ℝ𝑛×𝑛",
      "Gdy 𝑧𝑖(𝐴) < 1, ∀i",
      "Wtedy i tylko wtedy, gdy wszystkie wartości własne 𝑧𝑖(𝐴) leżą na płaszczyźnie zespolonej wewnątrz koła o promieniu równym jeden, przy czym środek tego koła znajduje się w zerze",
      "Wtedy i tylko wtedy, gdy |𝑧𝑖(𝐴)| < 1 dla wszystkich wartości własnych macierzy 𝐴 ∈ ℝ𝑛×n"
    ],
    "answer": [
      "Wtedy i tylko wtedy, gdy wszystkie wartości własne 𝑧𝑖(𝐴) leżą na płaszczyźnie zespolonej wewnątrz koła o promieniu równym jeden, przy czym środek tego koła znajduje się w zerze",
      "Wtedy i tylko wtedy, gdy |𝑧𝑖(𝐴)| < 1 dla wszystkich wartości własnych macierzy 𝐴 ∈ ℝ𝑛×n"
    ]
  },
  {
    "question": "Rozważmy jednorodne równanie różniczkowe rzędu drugiego: 𝒙̈(𝒕) + 𝒃𝒙̇(𝒕) + 𝒄𝒙(𝒕) = 𝟎, 𝒃, 𝒄 ∈ 𝑹, 𝒕 ∈ 𝑹 Niech 𝚫 = 𝒃𝟐 − 𝟒𝒄. Niech 𝝀𝟐 + 𝐛𝛌 + 𝐜 = (𝛌 − 𝛌𝟏)(𝝀 − 𝝀𝟐). Które wyrażenia określają poprawnie rozwiązanie naszego równania?",
    "options": [ 
      "Jeżeli Δ > 0 ∶ 𝑥(𝑡) = 𝑐1𝑒𝜆1𝑡 + 𝑐2𝑒𝜆2t",
      "Jeżeli Δ = 0 ∶ 𝑥(𝑡) = 𝑐1𝑒𝜆1𝑡 + 𝑐2𝑡𝑒𝜆2t",
      "Jeżeli Δ < 0 ∶ 𝑥(𝑡) = (𝑐1 sin 𝜔𝑡 + 𝑐2 cos 𝜔𝑡)𝑒𝛼𝑡 𝜆1, 𝜆2 = 𝛼 ± 𝜔i",
      "Jeżeli 𝑥(0) = 0 i 𝑥̇(0) = 0 to 𝑥(𝑡) = 0"
    ],
    "answer": [
      "Jeżeli Δ > 0 ∶ 𝑥(𝑡) = 𝑐1𝑒𝜆1𝑡 + 𝑐2𝑒𝜆2t",
      "Jeżeli Δ = 0 ∶ 𝑥(𝑡) = 𝑐1𝑒𝜆1𝑡 + 𝑐2𝑡𝑒𝜆2t",
      "Jeżeli Δ < 0 ∶ 𝑥(𝑡) = (𝑐1 sin 𝜔𝑡 + 𝑐2 cos 𝜔𝑡)𝑒𝛼𝑡 𝜆1, 𝜆2 = 𝛼 ± 𝜔i",
      "Jeżeli 𝑥(0) = 0 i 𝑥̇(0) = 0 to 𝑥(𝑡) = 0"
    ]
  },
  {
    "question": "Rozważmy układ dynamiczny opisany równościami: 𝒙̇(𝒕) = 𝑨𝒙(𝒕) + 𝑩𝒖(𝒕), 𝑨 ∈ ℝ𝒏×𝒏, 𝑩 ∈ ℝ𝒏×𝒓, 𝟎 ≤ 𝒕 𝒚(𝒕) = 𝑪𝒙(𝒕), 𝑪 ∈ ℝ𝒎×𝒏 oraz obserwator z nim związany: 𝒘̇(𝒕) = [𝑨 − 𝑮𝑪]𝒘(𝒕) + 𝑩𝒖(𝒕) + 𝑮𝒚(𝒕), 𝑮 ∈ ℝ𝒏×𝒎, 𝟎 ≤ 𝒕 Kiedy istnieje macierz 𝑮 ∈ ℝ𝒏×𝒎 taka, że ||𝒘(𝒕) − 𝒙(𝒕)|| → 𝟎 dla 𝒕 → ∞ przy wszystkich 𝒙(𝟎), 𝒘(𝟎) oraz wszystkich 𝒖 ∈ 𝑷𝑪(𝟎, ∞; 𝑹𝒓)? ",
    "options": [ 
      "Wtedy i tylko wtedy, gdy para (𝐶; 𝐴) jest wykrywalna",
      "Wtedy i tylko wtedy, gdy para (𝐴𝑇; 𝐶𝑇) jest stabilizowalna",
      "Wtedy, gdy para (𝐴𝑇; 𝐶𝑇) jest sterowalna",
      "Wtedy, gdy para (𝐶; 𝐴) jest obserwowalna"
    ],
    "answer": [
      "Wtedy i tylko wtedy, gdy para (𝐶; 𝐴) jest wykrywalna",
      "Wtedy, gdy para (𝐶; 𝐴) jest obserwowalna"
    ]
  },
  {
    "question": "Rozważmy system nieliniowy: 𝒙̇(𝒕) = 𝑨𝒙(𝒕) + 𝝋(𝒙(𝒕)), 𝑨 ∈ ℝ𝒏×𝒏,||𝝋(𝒛)|| / ||𝒛|| → 𝟎 𝒈𝒅𝒚 ||𝒛|| → 𝟎 oraz jego liniowe przybliżenie 𝒘̇ (𝒕) = 𝑨𝒘(𝒕). Kiedy w pewnym małym otoczeniu zera trajektorie fazowe systemu nieliniowego zachowują się „podobnie” jak trajektorie fazowe liniowego przybliżenia?",
    "options": [ 
      "Nigdy",
      "Wtedy, gdy wartości własne macierzy A mają wyłącznie części rzeczywiste ujemne",
      "Wtedy, gdy wartości własne macierzy A mają części rzeczywiste ujemne lub równe zeru",
      "Wtedy, gdy det|𝑗𝜔 − 𝐴| ≠ 0, 𝜔 ∈ ℝ , 𝑗2 = −1"
    ],
    "answer": [
      "Wtedy, gdy det|𝑗𝜔 − 𝐴| ≠ 0, 𝜔 ∈ ℝ , 𝑗2 = −1"
    ]
  },
  {
    "question": "Rozważmy układ dynamiczny asymptotycznie stabilny i wykrywalny opisany 𝒙̇(𝒕) = 𝑨𝒙(𝒕), 𝒙(𝟎) ∈ ℝ𝒏, 𝑨 ∈ ℝ𝒏×𝒏, 𝟎 ≤ 𝒕 𝒚(𝒕) = 𝑪𝒙(𝒕), 𝑪 ∈ 𝑹𝒎×𝒏 Niech 𝒗(𝒛) = 𝒛𝑻𝑽𝒛, 𝑽𝑻 = 𝑽 ∈ ℝ𝒏×𝒏, będzie funkcjonałem Lapunowa naszego układu, przy czym 𝑽 jest rozwiązaniem równania Lapunowa 𝑨𝑻𝑽 + 𝑽𝑨 = −𝑪𝑻𝑪. W tym przypadku mamy 𝒗̇(𝒛) = −𝒛𝑻𝑪𝑻𝑪𝒛. Niech 𝑱(𝒙(𝟎)) = ∫𝒚(𝒕)𝑻𝒚(𝒕)𝒅𝒕. Znając funkcjonał Lapunowa dla naszego układu, proszę podać ile wynosi wartość wskaźnika jakości 𝑱(𝒙(𝟎)), który ocenia szybkość zanikania przebiegu 𝒚(𝒕) do zera?",
    "options": [ 
      "𝐽(𝑥(0)) = 𝑐 < 0",
      "𝐽(𝑥(0)) = 𝑐 ≤ 0",
      "𝐽(𝑥(0)) = 𝑣(𝑥(0))",
      "𝐽(𝑥(0)) = 𝑥(0)𝑇𝑉𝑥(0), 𝑉 = ∫𝑒𝑡𝐴𝑇𝐶𝑇𝐶𝑒𝑡𝐴𝑑𝑡"
    ],
    "answer": [
      "𝐽(𝑥(0)) = 𝑣(𝑥(0))",
      "𝐽(𝑥(0)) = 𝑥(0)𝑇𝑉𝑥(0), 𝑉 = ∫𝑒𝑡𝐴𝑇𝐶𝑇𝐶𝑒𝑡𝐴𝑑𝑡"
    ]
  },
  {
    "question": "Rozważmy sterowany system dynamiczny generowany przez równanie różniczkowe: 𝒙̇(𝒕) = 𝑨𝒙(𝒕) + 𝑩𝒖(𝒕), 𝑨 ∈ ℝ𝒏×𝒏, 𝑩 ∈ ℝ 𝒏×𝒓, 𝟎 ≤ 𝒕 ≤ 𝒕𝒌 < ∞ Niech 𝒓𝒛ą𝒅 𝑩 = 𝒓. Niech stopień wielomianu minimalnego macierzy 𝑨 ∈ ℝ𝒏×𝒏 będzie równy 𝒎. Ustalmy dowolnie dwa punkty w przestrzeni 𝑹𝒏∶ 𝒙𝟎 ∈ 𝑹 𝒏 oraz 𝒙𝒌 ∈ 𝑹𝒏. Kiedy istnieje sterowanie 𝒖 ∈ 𝑷𝑪(𝟎, 𝒕𝒌,𝑹𝒓) takie, że 𝒙(𝟎) = 𝒙𝟎 oraz 𝒙(𝒕𝒌) = 𝒙𝒌?",
    "options": [ 
      "Wtedy i tylko wtedy, gdy rząd [B AB A²B ... A^(m-1) B] = n",
      "Wtedy i tylko wtedy, gdy rząd [B AB A²B ... A^(n-r) B] = n",
      "Wtedy i tylko wtedy, gdy rząd [sI - A B] = n dla wszystkich wartości własnych s(A) macierzy A ∈ ℝⁿˣⁿ",
      "Wtedy i tylko wtedy, gdy rząd [B AB A²B ... A^(n-1) B] = n"
    ],
    "answer": [
      "Wtedy i tylko wtedy, gdy rząd [sI - A B] = n dla wszystkich wartości własnych s(A) macierzy A ∈ ℝⁿˣⁿ",
      "Wtedy i tylko wtedy, gdy rząd [B AB A²B ... A^(n-1) B] = n"
    ]
  },
];