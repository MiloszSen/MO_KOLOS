window.questionsRobotyka = [
  {
    "question": "Ile stopni swobody posiada para kinematyczna klasy V?",
    "options": [
      "jeden",
      "dwa",
      "pięć",
      "zero"
    ],
    "answer": [
      "jeden"
    ]
  },
  {
    "question": "Liczba stopni swobody łańcucha kinematycznego robota określona jest wzorem:",
    "options": [
      "𝑤 = 6 ∙ 𝑛 − Σ𝑖 = 𝑖 ∙ 𝑝𝑖, gdzie 𝑛 – liczba ogniw, 𝑖 – klasa połączenia, 𝑝𝑖 – liczba par i-tej klasy",
      "𝑤 = 6 − Σ𝑖 = 𝑖 ∙ 𝑝𝑖, gdzie 𝑖 – klasa połączenia, 𝑝𝑖 – liczba par i-tej klasy",
      "𝑤 = 5 ∙ 𝑛 − Σ𝑖 = 𝑖 ∙ 𝑝𝑖, gdzie 𝑛 – liczba ogniw, 𝑖 – klasa połączenia, 𝑝𝑖 – liczba par i-tej klasy",
      "𝑤 = 6 ∙ 𝑛, gdzie 𝑛 – liczba ogniw"
    ],
    "answer": [
      "𝑤 = 6 ∙ 𝑛 − Σ𝑖 = 𝑖 ∙ 𝑝𝑖, gdzie 𝑛 – liczba ogniw, 𝑖 – klasa połączenia, 𝑝𝑖 – liczba par i-tej klasy"
    ]
  },
  {
    "question": "Jaki typ struktury kinematycznej posiada łańcuch kinematyczny przedstawiony na rysunku?",
    "options": [
      "PPP",
      "RRR",
      "RRP",
      "RPP"
    ],
    "answer": [
      "RRP"
    ],
    image: "img/pr1.png" 
  },
  {
    "question": "Jaka jest przestrzeń robocza dla robota o strukturze kinematycznej typu RPP?",
    "options": [
      "współrzędne kartezjańskie (x, y, z)",
      "współrzędne cylindryczne (r, φ, z)",
      "współrzędne SCARA/sferyczne (r, θ, φ)",
      "współrzędne stawowe/toroidalne (θ1, θ2, d3)"
    ],
    "answer": [
      "współrzędne cylindryczne (r, φ, z)"
    ]
  },
  {
    "question": "Co to jest „przestrzeń robocza pełnej sprawności” dla robota stacjonarnego?",
    "options": [
      "Zbiór punktów w przestrzeni, które końcówka robota może osiągnąć z zadaną pozycją",
      "Zbiór punktów w przestrzeni, w których końcówka robota może być ustawiona z zadaną pozycją i zadaną orientacją",
      "Obszar całkowity, do którego sięga końcówka robota przy pełnych zakresach możliwych ruchów",
      "Przestrzeń wynikająca z typu struktury kinematycznej"
    ],
    "answer": [
      "Zbiór punktów w przestrzeni, w których końcówka robota może być ustawiona z zadaną pozycją i zadaną orientacją",
    ]
  },
  {
    "question": "Podać definicję redundancji robota",
    "options": [
      "Ilość stopni swobody jest mniejsza od ilości zmiennych koniecznych do opisu",
      "Gdy istnieją konfiguracje w których nie da się rozwiązać odwrotnego zadania kinematyki",
      "Ilość stopni swobody jest większa od ilości zmiennych koniecznych do opisu",
      "Ilość stopni swobody jest równa ilości zmiennych koniecznych do opisu"
    ],
    "answer": [
      "Ilość stopni swobody jest większa od ilości zmiennych koniecznych do opisu",
    ]
  },
  {
    "question": "Co to jest zadanie proste kinematyki położenia?",
    "options": [
      "przeliczenie opisu położenia we współrzędnych kartezjańskich na opis położenia we współrzędnych przegubowych",
      "przeliczenie opisu położenia we współrzędnych złączowych na opis położenia we współrzędnych zadaniowych",
      "przeliczenie opisu położenia we współrzędnych złączowych na opis położenia we współrzędnych kartezjańskich",
      "przeliczenie opisu położenia we współrzędnych złączowych na opis położenia we współrzędnych przegubowych"
    ],
    "answer": [
      "przeliczenie opisu położenia we współrzędnych złączowych na opis położenia we współrzędnych zadaniowych",
      "przeliczenie opisu położenia we współrzędnych złączowych na opis położenia we współrzędnych kartezjańskich"
    ]
  },
  {
    "question": "Co to jest zadanie odwrotne kinematyki położenia?",
    "options": [
      "przeliczenie opisu położenia we współrzędnych przegubowych na opis położenia we współrzędnych kartezjańskich",
      "przeliczenie opisu położenia we współrzędnych złączowych na opis położenia we współrzędnych zadaniowych",
      "przeliczenie opisu położenia we współrzędnych kartezjańskich na opis położenia we współrzędnych złączowych",
      "przeliczenie opisu położenia we współrzędnych przegubowych na opis położenia we współrzędnych złączowych"
    ],
    "answer": [
      "przeliczenie opisu położenia we współrzędnych kartezjańskich na opis położenia we współrzędnych złączowych"
    ]
  },
  {
    "question": "Wyliczyć wartość bezwzględną błędu ustalonego w serwomechanizmie przedstawionym poniżej dla zakłócenia skokowego",
    "options": [
      "𝜀 𝑢𝑠𝑡 = ∞",
      "𝜀 𝑢𝑠𝑡 = 𝑇𝑐/𝐾r",
      "𝜀 𝑢𝑠𝑡 = 1/𝐾r",
      "𝜀 𝑢𝑠𝑡 = 0"
    ],
    "answer": [
      "𝜀 𝑢𝑠𝑡 = 1/𝐾r",
    ],
    image: "img/pr2.png" 
  },
  {
    "question": "Jak wpływa sprzężenie tachometryczne w serwomechanizmie robota na błąd ustalony oraz na przebiegi przejściowe?",
    "options": [
      "nie zmienia wielkości błędu ustalonego, zwiększa współczynnik tłumienia przebiegów przejściowych",
      "zmniejsza wielkość błędu ustalonego, zwiększa współczynnik tłumienia przebiegów przejściowych",
      "nie zmienia wielkości błędu ustalonego, nie wpływa na przebiegi przejściowe",
      "zwiększa wielkość błędu ustalonego, zwiększa współczynnik tłumienia przebiegów przejściowych"
    ],
    "answer": [
      "nie zmienia wielkości błędu ustalonego, zwiększa współczynnik tłumienia przebiegów przejściowych"
    ]
  },
  {
    "question": "Ile jest rozwiązań odwrotnego zadania kinematyki dla płaskiego robota przedstawionego na rysunku?",
    "options": [
      "nieskończenie wiele",
      "jedno",
      "trzy",
      "brak rozwiązań"
    ],
    "answer": [
      "nieskończenie wiele",
      "brak rozwiązań"
    ],
    image: "img/pr3.png" 
  },
  {
    "question": "Zdefiniować pojęcie „jakobianu” manipulatora",
    "options": [
      "macierz, umożliwiająca wyliczenie prędkości w złączach łańcucha kinematycznego na podstawie zadanej prędkości kątowej końcówki",
      "macierz, umożliwiająca wyliczenie prędkości liniowej i kątowej końcówki łańcucha kinematycznego na podstawie prędkości w złączach",
      "macierz, umożliwiająca wyliczenie prędkości w złączach łańcucha kinematycznego na podstawie zadanej prędkości liniowej końcówki",
      "macierz, umożliwiająca wyliczenie orientacji końcówki łańcucha kinematycznego na podstawie prędkości w złączach"
    ],
    "answer": [
      "macierz, umożliwiająca wyliczenie prędkości liniowej i kątowej końcówki łańcucha kinematycznego na podstawie prędkości w złączach"
    ]
  },
  {
    "question": "Co to jest konfiguracja osobliwa w łańcuchu kinematycznym robota?",
    "options": [
      "takie ustawienie ramion robota, dla którego istnieje więcej niż jedno rozwiązanie odwrotnego zadania kinematyki",
      "nietypowe ustawienie ramion robota",
      "takie ustawienie ramion robota, dla którego istnieje jednoznaczne rozwiązanie odwrotnego zadania kinematyki",
      "takie ustawienie ramion robota, w którym następuje utrata stopni swobody, czyli brak wpływu na pozycję i orientację końcówki"
    ],
    "answer": [
      "takie ustawienie ramion robota, w którym następuje utrata stopni swobody, czyli brak wpływu na pozycję i orientację końcówki"
    ]
  },
  {
    "question": "Na czym polega pozycjonowanie CP (continuous-path) dla robotów?",
    "options": [
      "przejście końcówki robota w przestrzeni zadaniowej od punktu początkowego do punktu końcowego po zadanej trajketorii z zadaną prędkością",
      "przejście końcówki robota w przestrzeni zadaniowej od punktu początkowego do punktu końcowego poprzez dodatkowe punkty podporowe",
      "przejście końcówki robota w przestrzeni zadaniowej od punktu do punktu bez możliwości wpływania na kształt trajektorii",
      "przejście końcówki robota w przestrzeni zadaniowej od punktu do punktu po trajektorii prostoliniowej"
    ],
    "answer": [
      "przejście końcówki robota w przestrzeni zadaniowej od punktu początkowego do punktu końcowego po zadanej trajketorii z zadaną prędkością"
    ]
  },
  {
    "question": "Podać rozwiązanie odwrotnego zadania kinematyki pozycji dla przedstawionego robota",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": [
      "C"
    ],
    image: "img/pr4.png" 
  },
  {
    "question": "Jaki jest cel stosowania przekładni w napędach wykorzystujących silniki prądu stałego?",
    "options": [
      "zwiększenie prędkości obrotowej i zmniejszenie momentu napędowego",
      "zwiększenie momentu napędowego i zmniejszenie prędkości obrotowej",
      "zmniejszenie momentu napędowego i prędkości obrotowej",
      "zwiększenie momentu napędowego i zwiększenie prędkości obrotowej"
    ],
    "answer": [
      "zwiększenie momentu napędowego i zmniejszenie prędkości obrotowej"
    ]
  },
  {
    "question": "Ile jest rozwiązań odwrotnego zadania kinematyki położenia dla robota redundantnego?",
    "options": [
      "nieskończenie wiele",
      "jedno",
      "dwa",
      "brak rozwiązań"
    ],
    "answer": [
      "nieskończenie wiele",
      "brak rozwiązań"
    ]
  },
  {
    "question": "Co to jest odwrotne zadanie kinematyki prędkości?",
    "options": [
      "przeliczenie prędkości liniowych i kątowych końcówki łańcucha kinematycznego zadanych w układzie kartezjańskim na prędkość w złączach",
      "przeliczenie prędkości w złączach na prędkość liniową końcówki łańcucha kinematycznego",
      "przeliczenie prędkości liniowych końcówki łańcucha kinematycznego na prędkość w złączach",
      "przeliczenie prędkości w złączach na prędkość liniową i kątową końcówki łańcucha kinematycznego"
    ],
    "answer": [
      "przeliczenie prędkości liniowych i kątowych końcówki łańcucha kinematycznego zadanych w układzie kartezjańskim na prędkość w złączach"
    ]
  },
  {
    "question": "Jakie są etapy procedury planowania i generowania trajektorii w przestrzeni kartezjańskiej?",
    "options": [
      "1.Utworzenie szkieletu trajektorii w przestrzeni zmiennych złączowych 2. Utworzenie szkieletu trajektorii w przestrzeni zmiennych złączowych poprzez rozwiązanie odwrotnego zadania kinematyki położenia 3. Interpolacja trajektorii w przestrzeni zmiennych złączowych",
      "1.Utworzenie szkieletu trajektorii w przestrzeni zmiennych kartezjańskich 2. Utworzenie szkieletu trajektorii w przestrzeni zmiennych złączowych poprzez rozwiązanie prostego zadania kinematyki położenia 3. Interpolacja trajektorii w przestrzeni zmiennych kartezjańskich",
      "1.Utworzenie szkieletu trajektorii w przestrzeni zmiennych kartezjańskich 2. Utworzenie szkieletu trajektorii w przestrzeni zmiennych złączowych poprzez rozwiązanie odwrotnego zadania kinematyki położenia 3. Interpolacja trajektorii w przestrzeni zmiennych złączowych dla wyznaczenia sterowania w dowolnej chwili czasu",
      "1.Utworzenie szkieletu trajektorii w przestrzeni zmiennych złączowych poprzez rozwiązanie odwrotnego zadania kinematyki położenia 2. Interpolacja trajektorii w przestrzeni zmiennych kartezjańskich"
    ],
    "answer": [
      "1.Utworzenie szkieletu trajektorii w przestrzeni zmiennych kartezjańskich 2. Utworzenie szkieletu trajektorii w przestrzeni zmiennych złączowych poprzez rozwiązanie odwrotnego zadania kinematyki położenia 3. Interpolacja trajektorii w przestrzeni zmiennych złączowych dla wyznaczenia sterowania w dowolnej chwili czasu"
    ]
  },
  {
    "question": "Na czym polega tryb „synchroniczny PTP” w pozycjonowaniu robota manipulacyjnego?",
    "options": [
      "wszystkie osie robota wykonują ruch w określonej kolejności",
      "wszystkie osie robota kończą ruch w jednym momencie czasowym",
      "wszystkie osie robota poruszają się z maksymalnymi prędkościami",
      "wszystkie osie robota poruszają się z dowolną prędkością"
    ],
    "answer": [
      "wszystkie osie robota kończą ruch w jednym momencie czasowym"
    ]
  },
  {
    "question": "W jaki sposób można wyznaczyć „konfiguracje osobliwe” w łańcuchu kinematycznym robota?",
    "options": [
      "przyrównując wyznacznik Jakobianu do nieskończoności",
      "poprzez wyliczenie wartości Jakobianu",
      "przyrównując wyznacznik Jakobianu do zera",
      "poprzez wyliczenie maksymalnej wartości wyznacznika Jakobianu"
    ],
    "answer": [
      "przyrównując wyznacznik Jakobianu do zera"
    ]
  },
  {
    "question": "Na czym polega programowanie robota „metodą uczenia”?",
    "options": [
      "1. ustawienie i zapamiętanie punktów podporowych trajektorii 2. sposób przejścia między punktami dowolny",
      "1. przy użyciu programatora ręcznego zdalnie i zapamiętanie punktów w których robot ma być zpozycjonowany 2. poprzez wykorzystanie dyrektyw języka programowania robota zdefiniowanie sposobu przejścia pomiędzy kolejnymi zapamiętanymi punktami",
      "1. ustawienie i zapamiętanie punktów podporowych 2. sterownik robota wybiera rodzaj trajektorii",
      "1. Poprzez obwiedzenie końcówki łańcucha kinematycznego po zadanej trajektorii 2. w pracy automatycznej sterownik powtarza zapamiętaną trajektorię"
    ],
    "answer": [
      "1. przy użyciu programatora ręcznego zdalnie i zapamiętanie punktów w których robot ma być zpozycjonowany 2. poprzez wykorzystanie dyrektyw języka programowania robota zdefiniowanie sposobu przejścia pomiędzy kolejnymi zapamiętanymi punktami"
    ]
  },
  {
    "question": "Wartość bezwzględna błędu ustalonego w serwomechanizmie przedstawionym poniżej dla wymuszenia skokowego wynosi:",
    "options": [
      "𝜀 𝑢𝑠𝑡 = ∞",
      "𝜀 𝑢𝑠𝑡 = 𝑇𝑐/𝐾r",
      "𝜀 𝑢𝑠𝑡 = 1/𝐾r",
      "𝜀 𝑢𝑠𝑡 = 0"
    ],
    "answer": [
      "𝜀 𝑢𝑠𝑡 = 0"
    ],
    image: "img/pr5.png" 
  },
];