Basta! - Protótipo
==================

Nosso protótipo consiste de um projeto [Cordova][cordova], utilizando o framework [Ionic][ionic] (HTML, Css, Javascript, Ajax, [Angular][angular]).

Para o produto final, pretendemos acrescer o framework [LeafletJS][leafletjs] com cartografia [OpenStreetMap][openstreetmap] e conceito de cluster.

Inicialmente visamos a plataforma iOS e sendo assim, utilizamos navegação e iconografia aderentes ao guidance da mesma.

Este mesmo projeto, pode ser facilmente reaproveitado para plataforma Android, também respeitando seu guidance.

Não é contemplado, dados vivos nem algum serviço backend para os dados simulados. Os dados são hardcode.


## Como instalar e/ou testar

Se você pretente alterar o projeto ou executá-lo dentro de um ambiente Cordova/Ionic, precisará instalar o [NodeJS][nodejs] (use a versão LTS), o [Cordova][cordova] e por último o framework [Ionic][ionic]. 

Após isto, mova-se até a pasta `/Basta/Prototipo/Basta` através do prompt de shell de seu sistema operacional e execute o comando: `ionic serve`.

<img width="360px" hspace="0" vspace="5" src="https://raw.githubusercontent.com/h2atecnologia/Basta/master/Prototipo/Instrucoes/ionic_ou_html.png">

Desta maneira você poderá simular a app em um browser.

Se preferir, poderá ver a app simulando iOS e Android, lado a lado com o comando: `ionic serve --lab`

<img width="600px" hspace="0" vspace="5" src="https://raw.githubusercontent.com/h2atecnologia/Basta/master/Prototipo/Instrucoes/ionic_lado_a_lado.png">

Se pretente somente funcionar a app, lembre-se que este é um projeto HTML. Portanto, vá até a pasta `/Basta/Prototipo/Basta/www` e abra o arquivo `index.html` em seu browser.


## Contribua!

1. Faça um fork deste projeto
2. Envie seus comentários e críticas
3. Contribua nos enviando seu valioso código


## Licença

Este projeto de software é licenciado sob a [GPL v2.0 ou superior][gpl-2.0-pt-br] / [GNU General Public License v2.0][gpl-2.0].

[cordova]: https://cordova.apache.org
[ionic]: http://ionicframework.com/
[angular]: https://angularjs.org/
[leafletjs]: http://leafletjs.com/
[openstreetmap]: http://www.openstreetmap.org/copyright
[nodejs]: https://nodejs.org/en/
[gpl-2.0-pt-br]: http://www.magnux.org/doc/GPL-pt_BR.txt
[gpl-2.0]: https://opensource.org/licenses/GPL-2.0