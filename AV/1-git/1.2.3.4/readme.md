## commits basicos
## gitFlow

fluxo do git

### branchs

branchs em português é ramificações, são versões alternativas do seu código-fonte. Eles permitem que você trabalhe em diferentes recursos, correções de bugs ou experimentos sem interferir diretamente no código principal, conhecido como "branch principal" ou "master" (ou "main" em versões mais recentes do Git).

- DOD: depois que todos os termos forem aceitos pelo cliente ou time, poderá enviar para branch master/main.

- branch develop: é uma cópia da master/main, nessa branch é como um servidor de teste
- versiomamento 0.1.10
<!-- o primeiro 0 é chamado de versão beta, o segundo digito é para alterações que sao muito importantes para o codigo, o terceiro são para bugs-->
-

####

- git checkout -b develop(nome da branch que vai ser criada): com esse comando no git, é criada uma cópia da branch main para a branch dev
- git fetch --all: esse comando verifica se nao tem alteração no repositorio no caso no github

#### merge

mescla de branchs
o merge, em termos simples, é a ação de combinar alterações de diferentes branches (ramificações) do código em uma única branch.
- git merge main/master: