## DOMINANDO O GIT


> #### 1. Verificação e primeiros contatos com Git
> 
> git --version
> - Mostra a versão do Git instalada no computador.
> 
> git help
> - Mostra a ajuda geral do Git.
> 
> git help <comando>
> - Abre a documentação de um comando específico.
> 
> git help commit
> - Abre a ajuda específica do comando commit.
> 
> git <comando> --help
> - Outra forma de abrir a ajuda de um comando.
> 
> git -h
> - Mostra uma ajuda rápida no terminal.

***

> #### 2. Configuração inicial do Git
> 
> git config --global user.name "Seu Nome"
> - Define o nome que aparecerá como autor dos commits.
> 
> git config --global user.email "seuemail@exemplo.com"
> - Define o e-mail associado aos commits.
> 
> git config --global --list
> - Lista as configurações globais do Git.
> 
> git config --list
> - Lista todas as configurações ativas do Git.
> 
> git config --local --list
> - Lista as configurações específicas do repositório atual.
> 
> git config --system --list
> - Lista as configurações do Git no nível do sistema.
> 
> git config --list --show-origin
> - Mostra as configurações e de qual arquivo cada uma veio.
> 
> git config --global core.editor "code --wait"
> - Define o VS Code como editor padrão do Git.
> 
> git config --global init.defaultBranch main
> - Define main como nome padrão da branch inicial em novos repositórios.
> 
> git config --global core.autocrlf true
> - Configuração comum no Windows para lidar com quebras de linha.
> 
> git config --global core.autocrlf input
> - Configuração comum no Linux/macOS para lidar com quebras de linha.
> 
> git config --global credential.helper store
> - Salva as credenciais localmente para não pedir token/senha toda vez.

***

3. Criando atalhos no Git
git config --global alias.st status
Cria o atalho git st para git status.
git config --global alias.co checkout
Cria o atalho git co para git checkout.
git config --global alias.br branch
Cria o atalho git br para git branch.
git config --global alias.cm commit
Cria o atalho git cm para git commit.
git config --global alias.lg "log --oneline --graph --decorate --all"
Cria um atalho poderoso para ver o histórico visual do projeto.
git st
Executa git status usando o atalho configurado.
git co main
Troca para a branch main usando o atalho de checkout.
git br
Lista branches usando o atalho de branch.
git cm -m "mensagem"
Cria um commit usando o atalho de commit.
git lg
Mostra o histórico visual usando o atalho criado.
________________________________________
4. Criando e iniciando repositórios
git init
Inicializa um repositório Git na pasta atual.
git init nome-da-pasta
Cria uma pasta e já inicializa um repositório Git nela.
git init --bare
Cria um repositório sem área de trabalho, geralmente usado como remoto.
git init --bare meu-repo.git
Cria um repositório bare com o nome meu-repo.git.
________________________________________
5. Ver estado do projeto
git status
Mostra o estado atual dos arquivos no repositório.
git status -s
Mostra o estado do repositório em formato resumido.
________________________________________
6. Adicionando arquivos ao Git
git add hello.py
Adiciona o arquivo hello.py à área de preparação.
git add mensagem.py
Adiciona o arquivo mensagem.py à área de preparação.
git add <arquivo>
Adiciona um arquivo específico ao staging.
git add .
Adiciona todas as alterações da pasta atual para baixo.
git add -A
Adiciona todas as alterações do repositório, incluindo exclusões.
git add -u
Adiciona apenas arquivos já rastreados pelo Git.
git add *.py
Adiciona todos os arquivos Python da pasta atual.
git add pasta/
Adiciona todos os arquivos dentro de uma pasta.
git add -p
Permite escolher pedaços específicos de alterações para adicionar.
________________________________________
7. Criando commits
git commit -m "Adicionando arquivo inicial"
Cria um commit com a mensagem informada.
git commit -m "Adicionando mensagem"
Cria um commit registrando a alteração feita.
git commit -m "Adicionando nova funcionalidade"
Cria um commit para uma nova funcionalidade.
git commit -m "<mensagem>"
Forma genérica para criar um commit com mensagem.
git commit -m "mensagem"
Cria um commit simples com uma mensagem curta.
git commit
Abre o editor configurado para escrever uma mensagem maior.
git commit -am "mensagem"
Adiciona e commita arquivos já rastreados em um único passo.
git commit --amend
Edita o último commit.
git commit --amend -m "nova mensagem"
Altera a mensagem do último commit.
git commit --amend --no-edit
Inclui novas alterações no último commit sem mudar a mensagem.
________________________________________
8. Ver histórico de commits
git log
Mostra o histórico completo de commits.
git log --oneline
Mostra o histórico em uma linha por commit.
git log --oneline --graph --decorate
Mostra o histórico resumido com visualização gráfica.
git log --oneline --graph --decorate --all
Mostra o histórico visual incluindo todas as branches.
git log -5
Mostra os últimos cinco commits.
git log --author="Nome"
Filtra commits por autor.
git log --since="2024-01-01"
Mostra commits feitos desde uma data.
git log --until="2024-12-31"
Mostra commits feitos até uma data.
git log --grep="login"
Procura commits pela mensagem.
git log -- arquivo.py
Mostra o histórico de um arquivo específico.
git log --stat
Mostra estatísticas de arquivos alterados em cada commit.
git log -p
Mostra o conteúdo das alterações em cada commit.
________________________________________
9. Ver diferenças entre alterações
git diff
Mostra alterações ainda não adicionadas ao staging.
git diff --staged
Mostra alterações que já estão preparadas para commit.
git diff --cached
Outra forma de ver alterações preparadas para commit.
git diff arquivo.py
Mostra diferenças em um arquivo específico.
git diff main outra-branch
Compara diferenças entre duas branches.
git diff commit1 commit2
Compara diferenças entre dois commits.
git diff HEAD~1 HEAD
Compara o commit anterior com o commit atual.
git diff --name-only
Mostra apenas os nomes dos arquivos alterados.
git diff --stat
Mostra um resumo estatístico das alterações.
________________________________________
10. Removendo arquivos do Git
git rm arquivo.txt
Remove o arquivo do projeto e do controle do Git.
git rm -r pasta/
Remove uma pasta inteira do projeto e do Git.
git rm --cached .env
Para de rastrear o .env sem apagar o arquivo do computador.
git rm -r --cached node_modules/
Para de rastrear a pasta node_modules sem apagá-la localmente.
________________________________________
11. Desfazendo alterações antes do commit
git restore arquivo.py
Desfaz alterações locais em um arquivo.
git restore .
Desfaz todas as alterações locais não commitadas.
git restore --staged arquivo.py
Remove um arquivo do staging sem apagar a alteração.
git checkout -- arquivo.py
Forma antiga de descartar alterações em um arquivo.
git restore --source=<hash> arquivo.py
Restaura um arquivo a partir de um commit específico.
________________________________________
12. Reset: voltando commits locais
git reset --soft HEAD~1
Desfaz o último commit mantendo as alterações no staging.
git reset --mixed HEAD~1
Desfaz o último commit e mantém as alterações fora do staging.
git reset HEAD~1
Desfaz o último commit usando o comportamento padrão mixed.
git reset --hard HEAD~1
Desfaz o último commit e apaga as alterações.
git reset --hard <hash-do-commit>
Volta o projeto para um commit específico apagando mudanças posteriores.
git reset --hard
Descarta alterações locais e volta ao estado do último commit.
git reset --hard abc123
Volta o projeto para o commit abc123.
________________________________________
13. Revert: desfazer com segurança
git revert <hash-do-commit>
Cria um novo commit que desfaz um commit anterior.
git revert HEAD
Desfaz o último commit criando um novo commit.
git revert --no-edit <hash>
Faz o revert sem abrir o editor de mensagem.
________________________________________
14. Trabalhando com branches
git branch
Lista as branches locais.
git branch -a
Lista branches locais e remotas.
git branch -r
Lista apenas branches remotas.
git branch nome-da-branch
Cria uma nova branch.
git branch nova-feature
Cria uma branch chamada nova-feature.
git branch -v
Mostra o último commit de cada branch.
git branch -vv
Mostra branches locais e suas relações com branches remotas.
git branch -m novo-nome
Renomeia a branch atual.
git branch -m nome-antigo novo-nome
Renomeia uma branch específica.
git branch -d nome-da-branch
Apaga uma branch local já mesclada.
git branch -D nome-da-branch
Força a exclusão de uma branch local.
git branch --set-upstream-to=origin/main main
Liga a branch local main à branch remota origin/main.
git branch --unset-upstream
Remove a ligação da branch local com uma branch remota.
________________________________________
15. Trocando e criando branches
git checkout nova-feature
Troca para a branch nova-feature.
git checkout main
Troca para a branch main.
git checkout -b minha-contribuicao
Cria e já entra na branch minha-contribuicao.
git checkout -b nome-da-branch
Cria e entra em uma nova branch.
git switch nome-da-branch
Troca para uma branch existente usando o comando moderno.
git switch main
Troca para a branch main.
git switch minha-branch
Troca para a branch minha-branch.
git switch -c nome-da-branch
Cria e entra em uma nova branch usando o comando moderno.
git switch -c minha-branch
Cria e entra na branch minha-branch.
git switch -c feature/nome-da-funcionalidade
Cria uma branch de funcionalidade seguindo padrão profissional.
git switch -c branch-a-partir-daqui
Cria uma branch a partir do ponto atual.
________________________________________
16. Checkout avançado e detached HEAD
git checkout branch
Troca para uma branch.
git checkout <hash>
Vai para um commit específico em modo detached HEAD.
git checkout <hash> -- arquivo.py
Restaura um arquivo como ele era em um commit específico.
git checkout -b branch-a-partir-daqui
Cria uma branch a partir do commit atual.
________________________________________
17. Enviar branches e commits para o remoto
git push
Envia commits locais para o repositório remoto configurado.
git push -u origin main
Envia a branch main e configura o upstream.
git push origin main
Envia a branch main para o remoto origin.
git push -u origin nova-feature
Envia a branch nova-feature e configura o upstream.
git push -u origin nome-da-branch
Envia uma branch e configura o rastreamento remoto.
git push origin minha-contribuicao
Envia a branch minha-contribuicao para o remoto.
git push -u origin minha-branch
Envia minha-branch e configura o upstream.
git push -u origin feature/nome-da-funcionalidade
Envia uma branch de funcionalidade para o GitHub.
git push --all origin
Envia todas as branches locais para o remoto.
git push --tags
Envia todas as tags locais para o remoto.
git push origin --delete nome-da-branch
Apaga uma branch remota.
git push --force
Força o envio e pode sobrescrever histórico remoto.
git push --force-with-lease
Força o envio de forma mais segura que --force.
________________________________________
18. Baixar alterações do remoto
git pull
Baixa e integra alterações do repositório remoto.
git pull --rebase
Baixa alterações e reaplica seus commits por cima.
git fetch
Busca informações do remoto sem misturar no código local.
git fetch origin
Busca atualizações do remoto origin.
git fetch --all
Busca atualizações de todos os remotos.
git fetch --prune
Remove referências locais de branches remotas apagadas.
git fetch origin
Atualiza informações do remoto antes de merge ou rebase.
________________________________________
19. Trabalhando com repositórios remotos
git remote
Lista os repositórios remotos configurados.
git remote -v
Lista os remotos com suas URLs.
git remote add origin https://github.com/seu-usuario/seu-projeto.git
Adiciona um remoto chamado origin via HTTPS.
git remote add origin <url>
Adiciona um remoto chamado origin.
git remote remove origin
Remove o remoto chamado origin.
git remote rename origin github
Renomeia o remoto origin para github.
git remote set-url origin <nova-url>
Troca a URL do remoto origin.
git remote set-url origin git@github.com:usuario/repositorio.git
Troca a URL do remoto para SSH.
git remote show origin
Mostra detalhes do remoto origin.
________________________________________
20. Clonar repositórios
git clone <URL_COPIADA>
Clona um repositório a partir de uma URL.
git clone <url>
Clona um repositório.
git clone <url> nome-da-pasta
Clona um repositório em uma pasta com nome personalizado.
git clone --depth 1 <url>
Clona apenas a versão mais recente do histórico.
git clone --branch nome-da-branch <url>
Clona já apontando para uma branch específica.
git clone --single-branch --branch nome-da-branch <url>
Clona somente uma branch específica.
git clone git@github.com:usuario/nome-do-repositorio.git
Clona um repositório via SSH.
git clone git@github.com:seu_usuario/nome-do-repositorio.git
Clona um fork ou repositório da sua conta via SSH.
git clone --recursive <url>
Clona um repositório junto com seus submódulos.
________________________________________
21. Merge: juntando branches
git merge nome-da-branch
Junta a branch indicada dentro da branch atual.
git merge minha-branch
Mescla minha-branch na branch atual.
git merge origin/main
Mescla a versão remota da main na branch atual.
git merge --ff-only nome-da-branch
Só faz merge se puder avançar em linha reta.
git merge --no-ff nome-da-branch
Faz merge criando commit mesmo quando fast-forward seria possível.
git merge --abort
Cancela um merge em andamento.
________________________________________
22. Rebase: reorganizando histórico
git rebase main
Reaplica os commits da branch atual em cima da main.
git rebase origin/main
Reaplica seus commits em cima da versão remota da main.
git rebase --continue
Continua o rebase depois de resolver conflitos.
git rebase --skip
Pula um commit problemático durante o rebase.
git rebase --abort
Cancela o rebase em andamento.
git rebase -i HEAD~3
Abre rebase interativo nos últimos três commits.
________________________________________
23. Stash: guardar alterações temporárias
git stash
Guarda alterações temporariamente.
git stash push -m "mensagem do stash"
Guarda alterações com uma descrição.
git stash list
Lista todos os stashes salvos.
git stash show
Mostra um resumo do último stash.
git stash show -p
Mostra detalhes das alterações guardadas no stash.
git stash apply
Aplica o último stash sem removê-lo da lista.
git stash pop
Aplica o último stash e o remove da lista.
git stash drop
Remove o último stash.
git stash clear
Remove todos os stashes.
git stash apply stash@{2}
Aplica um stash específico da lista.
________________________________________
24. Tags: marcando versões
git tag
Lista as tags existentes.
git tag v1.0.0
Cria uma tag simples chamada v1.0.0.
git tag -a v1.0.0 -m "Primeira versão estável"
Cria uma tag anotada com mensagem.
git show v1.0.0
Mostra detalhes da tag v1.0.0.
git push origin v1.0.0
Envia uma tag específica para o remoto.
git push origin --tags
Envia todas as tags para o remoto.
git tag -d v1.0.0
Remove uma tag local.
git push origin --delete v1.0.0
Remove uma tag remota.
________________________________________
25. Cherry-pick: copiar commits específicos
git cherry-pick <hash>
Aplica um commit específico na branch atual.
git cherry-pick abc123
Aplica o commit abc123 na branch atual.
git cherry-pick --continue
Continua o cherry-pick depois de resolver conflitos.
git cherry-pick --abort
Cancela o cherry-pick em andamento.
________________________________________
26. Bisect: encontrar onde um bug nasceu
git bisect start
Inicia a busca binária por um commit problemático.
git bisect bad
Marca o commit atual como ruim.
git bisect good <hash>
Marca um commit antigo como bom.
git bisect good
Marca o commit testado como bom.
git bisect bad
Marca o commit testado como ruim.
git bisect reset
Encerra o bisect e volta ao estado normal.
________________________________________
27. Blame: investigar linhas de código
git blame arquivo.py
Mostra quem alterou cada linha de um arquivo.
git blame -L 10,30 arquivo.py
Mostra autoria apenas das linhas 10 a 30.
________________________________________
28. Show: ver detalhes de commits, tags e arquivos
git show <hash>
Mostra detalhes de um commit específico.
git show HEAD
Mostra detalhes do último commit.
git show HEAD~1
Mostra detalhes do commit anterior.
git show <hash>:arquivo.py
Mostra como um arquivo estava em determinado commit.
________________________________________
29. Clean: remover arquivos não rastreados
git clean -n
Mostra o que seria removido sem apagar nada.
git clean -f
Remove arquivos não rastreados.
git clean -fd
Remove arquivos e pastas não rastreadas.
git clean -fdx
Remove também arquivos ignorados pelo .gitignore.
________________________________________
30. Reflog: recuperar movimentos do Git
git reflog
Mostra o histórico de movimentos do HEAD.
________________________________________
31. Submodules: repositórios dentro de repositórios
git submodule add <url> pasta/
Adiciona um submódulo em uma pasta.
git submodule init
Inicializa submódulos já registrados.
git submodule update
Atualiza os submódulos.
git submodule update --init --recursive
Inicializa e atualiza todos os submódulos, inclusive internos.
________________________________________
32. Worktree: várias branches em pastas diferentes
git worktree list
Lista worktrees existentes.
git worktree add ../projeto-feature minha-branch
Cria uma nova pasta trabalhando em outra branch.
git worktree remove ../projeto-feature
Remove uma worktree.
________________________________________
33. Arquivos ignorados e busca no projeto
git check-ignore -v arquivo
Mostra qual regra do .gitignore está ignorando um arquivo.
git grep "texto"
Procura texto nos arquivos rastreados pelo Git.
git grep "def login"
Procura o texto def login nos arquivos rastreados.
git grep -n "texto"
Procura texto mostrando o número da linha.
________________________________________
34. Arquivar projeto
git archive -o projeto.zip HEAD
Cria um arquivo .zip com o estado atual do projeto.
git archive -o projeto.zip main
Cria um .zip com o conteúdo da branch main.
________________________________________
35. Inspeção interna do Git
git rev-parse HEAD
Mostra o hash completo do commit atual.
git rev-parse --abbrev-ref HEAD
Mostra o nome da branch atual.
git ls-files
Lista arquivos rastreados pelo Git.
git ls-files --others --exclude-standard
Lista arquivos não rastreados respeitando o .gitignore.
________________________________________
36. Fluxos completos mencionados
git status
Primeiro comando antes de qualquer decisão: mostra onde você está.
git add .
Prepara todas as alterações para commit.
git commit -m "mensagem clara"
Cria um ponto de salvamento com uma mensagem objetiva.
git push
Envia o commit para o GitHub ou remoto configurado.
git pull
Atualiza sua máquina com o que está no remoto.
git checkout main
Volta para a branch principal usando o método antigo.
git pull
Atualiza a branch principal antes de criar ou mesclar trabalho.
git checkout -b minha-branch
Cria uma branch nova para trabalhar separado da main.
git add .
Prepara todas as alterações feitas na branch.
git commit -m "minha alteração"
Salva as alterações da branch em um commit.
git push -u origin minha-branch
Envia a branch nova para o GitHub e configura o rastreamento.
git switch main
Volta para a branch principal usando o comando moderno.
git pull
Garante que a main esteja atualizada.
git switch -c feature/nome-da-funcionalidade
Cria uma branch profissional para uma nova funcionalidade.
git commit -m "implementa funcionalidade X"
Registra a implementação de uma funcionalidade.
git switch minha-branch
Entra na branch de trabalho.
git fetch origin
Busca a versão mais recente do remoto.
git merge origin/main
Atualiza sua branch com a main usando merge.
git rebase origin/main
Atualiza sua branch com a main usando rebase.
git branch -d minha-branch
Apaga a branch local depois de finalizada.
git push origin --delete minha-branch
Apaga a branch remota depois de finalizada.
git add .
Prepara arquivos esquecidos para corrigir o último commit.
git commit --amend --no-edit
Inclui alterações no último commit sem mudar a mensagem.
git reset --soft HEAD~1
Desfaz o último commit mantendo tudo preparado.
git reset HEAD~1
Desfaz o último commit mantendo alterações fora do staging.
git reset --hard HEAD~1
Desfaz o último commit apagando as alterações.
git rm --cached .env
Remove o .env do rastreamento sem apagar localmente.
git add .gitignore
Prepara o .gitignore para commit.
git commit -m "remove .env do versionamento"
Registra a remoção do .env do versionamento.
git push
Envia a correção para o remoto.
________________________________________
37. Comandos perigosos mencionados
git reset --hard
Apaga alterações locais e volta ao último commit.
git clean -fd
Remove arquivos e pastas não rastreadas.
git push --force
Força envio e pode sobrescrever histórico remoto.
git branch -D nome-da-branch
Força a exclusão de uma branch local.
git rebase -i
Reescreve o histórico de commits de forma interativa.
git push --force-with-lease
Força envio com uma camada extra de segurança.
________________________________________
38. Núcleo que você deve dominar primeiro
git status
Veja o estado do repositório antes de agir.
git add .
Prepare as alterações para commit.
git commit -m "mensagem"
Salve um ponto da linha do tempo.
git push
Envie suas alterações para o remoto.
git pull
Traga atualizações do remoto para sua máquina.
________________________________________
39. Núcleo profissional com branches
git switch main
Vá para a branch principal.
git pull
Atualize a branch principal.
git switch -c minha-branch
Crie uma branch nova para trabalhar com segurança.
git push -u origin minha-branch
Envie sua branch para o GitHub.
________________________________________
40. Núcleo para consertar erros
git restore arquivo.py
Desfaz alterações locais em um arquivo.
git reset --soft HEAD~1
Desfaz o último commit sem perder alterações.
git revert <hash>
Desfaz um commit criando outro commit seguro.
git reflog
Mostra o histórico interno para recuperar caminhos perdidos.
________________________________________
41. Núcleo avançado
git rebase -i HEAD~3
Organiza os últimos três commits de forma interativa.
git cherry-pick <hash>
Puxa um commit específico para a branch atual.
git stash
Guarda alterações temporariamente.
git bisect
Ferramenta para encontrar o commit que introduziu um bug.
git worktree
Permite trabalhar com múltiplas branches em pastas diferentes.
________________________________________
Haynan, se você dominar nessa ordem, o Git deixa de ser uma sequência de comandos soltos e vira um mapa mental: estado, preparação, commit, histórico, branch, remoto, correção e colaboração. É assim que você deixa de “usar Git” e começa a governar a linha do tempo do seu código.





Sim, existem muitos mais comandos. O Git é dividido em duas grandes camadas:
Comandos de uso diário, chamados de comandos “porcelain”, como add, commit, push, pull, merge, rebase.
Comandos internos, chamados de “plumbing”, como cat-file, hash-object, write-tree, commit-tree, update-ref. Esses são os mecanismos por trás do Git. Quem entende essa parte começa a enxergar o Git por dentro, como se abrisse o motor da máquina.
A verdade: para dominar Git de verdade, você não precisa decorar cada comando raro. Você precisa dominar as áreas do Git. Abaixo está um mapa mais completo, com comandos que ainda não tinham aparecido ou que aprofundam o domínio.
________________________________________
1. Comandos para mover e renomear arquivos
git mv arquivo-antigo.py arquivo-novo.py
Renomeia ou move um arquivo já rastreado pelo Git.
git mv pasta-antiga/ pasta-nova/
Move uma pasta rastreada para outro caminho.
________________________________________
2. Comandos para ver histórico de forma mais profissional
git shortlog
Resume commits agrupados por autor.
git shortlog -sn
Mostra quantidade de commits por autor em formato resumido.
git shortlog -sne
Mostra quantidade de commits por autor com nome e e-mail.
git log --all
Mostra commits de todas as branches.
git log --all --oneline --graph
Mostra o histórico gráfico de todas as branches.
git log --follow arquivo.py
Mostra o histórico de um arquivo mesmo se ele foi renomeado.
git log --reverse
Mostra os commits do mais antigo para o mais recente.
git log --merges
Mostra apenas commits de merge.
git log --no-merges
Oculta commits de merge.
git log --first-parent
Mostra a linha principal do histórico, ignorando caminhos internos de branches mescladas.
git log main..minha-branch
Mostra commits que estão em minha-branch e não estão em main.
git log minha-branch..main
Mostra commits que estão em main e não estão em minha-branch.
________________________________________
3. Comandos para comparar branches, commits e históricos
git range-diff main..branch-antiga main..branch-nova
Compara duas sequências de commits, muito útil depois de um rebase.
git merge-base main minha-branch
Mostra o commit ancestral comum entre duas branches.
git merge-base --is-ancestor main minha-branch
Verifica se uma branch é ancestral de outra.
git diff --check
Verifica problemas como espaços sobrando no final de linhas.
git diff --word-diff
Mostra diferenças palavra por palavra.
git diff --color-words
Mostra alterações por palavras de forma colorida.
________________________________________
4. Comandos para listar referências, branches e tags com mais poder
git show-ref
Mostra referências internas de branches e tags.
git show-ref --heads
Mostra apenas referências de branches.
git show-ref --tags
Mostra apenas referências de tags.
git for-each-ref
Lista referências do Git de forma customizável.
git for-each-ref --sort=-committerdate refs/heads/
Lista branches locais ordenadas pela data do último commit.
git name-rev <hash>
Tenta descobrir um nome simbólico para um commit.
git describe
Mostra uma descrição baseada na tag mais próxima.
git describe --tags
Descreve o commit atual usando tags.
________________________________________
5. Comandos para manipular arquivos específicos
git restore --worktree arquivo.py
Restaura o arquivo no diretório de trabalho.
git restore --staged arquivo.py
Remove o arquivo do staging.
git restore --source=HEAD~2 arquivo.py
Restaura o arquivo como ele estava dois commits atrás.
git checkout HEAD~2 -- arquivo.py
Forma antiga de restaurar um arquivo de um commit passado.
git update-index --assume-unchanged arquivo.py
Faz o Git parar temporariamente de notar mudanças em um arquivo rastreado.
git update-index --no-assume-unchanged arquivo.py
Cancela o assume-unchanged.
git update-index --skip-worktree arquivo.py
Diz ao Git para evitar mexer em um arquivo local específico.
git update-index --no-skip-worktree arquivo.py
Remove o modo skip-worktree.
________________________________________
6. Comandos para trabalhar com repositórios grandes
git sparse-checkout init
Ativa checkout parcial do repositório.
git sparse-checkout set pasta/
Baixa/trabalha apenas com uma pasta específica do repositório.
git sparse-checkout list
Lista os caminhos incluídos no sparse checkout.
git sparse-checkout disable
Desativa o sparse checkout.
git clone --filter=blob:none <url>
Faz um clone parcial, baixando menos conteúdo inicialmente.
git clone --sparse <url>
Clona o repositório preparado para sparse checkout.
________________________________________
7. Comandos para manutenção e performance
git gc
Executa limpeza e otimização do repositório.
git gc --aggressive
Faz uma otimização mais intensa do repositório.
git maintenance start
Ativa manutenção automática do Git.
git maintenance run
Executa tarefas de manutenção.
git count-objects -v
Mostra estatísticas internas de objetos do Git.
git prune
Remove objetos inalcançáveis do banco interno do Git.
git fsck
Verifica a integridade interna do repositório.
git fsck --full
Faz uma verificação completa dos objetos do Git.
git repack
Reempacota objetos internos para melhorar performance.
git pack-refs
Compacta referências internas.
________________________________________
8. Comandos para recuperar, limpar e investigar
git reflog show
Mostra o reflog da referência atual.
git reflog show main
Mostra o reflog da branch main.
git reflog expire --expire=now --all
Expira entradas antigas do reflog.
git fsck --lost-found
Tenta encontrar objetos perdidos.
git clean -n -d
Simula remoção de arquivos e pastas não rastreados.
git clean -i
Abre modo interativo para limpar arquivos não rastreados.
________________________________________
9. Comandos para aplicar patches
git apply arquivo.patch
Aplica um patch sem criar commit automaticamente.
git apply --check arquivo.patch
Verifica se um patch pode ser aplicado.
git format-patch -1 HEAD
Gera um patch do último commit.
git format-patch main..minha-branch
Gera patches dos commits que estão na branch.
git am arquivo.patch
Aplica um patch gerado por e-mail preservando autor e mensagem.
git am --abort
Cancela aplicação de patch via git am.
git am --continue
Continua após resolver conflitos em um patch.
________________________________________
10. Comandos para colaboração via e-mail
Esses são menos usados no GitHub, mas muito usados em projetos grandes como kernel Linux.
git request-pull main <url> minha-branch
Gera uma solicitação textual de pull.
git send-email *.patch
Envia patches por e-mail.
git format-patch --cover-letter main..minha-branch
Gera patches com uma carta de apresentação.
________________________________________
11. Comandos para notas em commits
git notes add -m "observação" <hash>
Adiciona uma nota a um commit sem alterar o commit.
git notes show <hash>
Mostra a nota de um commit.
git notes list
Lista notas existentes.
git notes remove <hash>
Remove a nota de um commit.
________________________________________
12. Comandos para substituir commits temporariamente
git replace <commit-antigo> <commit-novo>
Faz o Git tratar um commit como se fosse outro.
git replace -l
Lista substituições ativas.
git replace -d <hash>
Remove uma substituição.
Esse é avançado e raro, mas existe. É como colocar uma lente temporária no histórico.
________________________________________
13. Comandos para bundles
Bundles permitem empacotar um repositório em um arquivo, útil para transportar sem internet.
git bundle create repo.bundle main
Cria um bundle da branch main.
git bundle create repo.bundle --all
Cria um bundle com todas as refs.
git bundle verify repo.bundle
Verifica se o bundle é válido.
git clone repo.bundle projeto-clonado
Clona um repositório a partir de um bundle.
git pull repo.bundle main
Puxa alterações de um bundle.
________________________________________
14. Comandos para arquivos internos e objetos do Git
Aqui começa o Git profundo.
git cat-file -p <hash>
Mostra o conteúdo interno de um objeto Git.
git cat-file -t <hash>
Mostra o tipo de um objeto Git.
git cat-file -s <hash>
Mostra o tamanho de um objeto Git.
git hash-object arquivo.txt
Calcula o hash Git de um arquivo.
git hash-object -w arquivo.txt
Calcula o hash e grava o objeto no banco interno do Git.
git ls-tree HEAD
Lista a árvore de arquivos do commit atual.
git ls-tree -r HEAD
Lista recursivamente os arquivos da árvore do commit atual.
git write-tree
Cria um objeto tree a partir do index atual.
git commit-tree <tree-hash> -m "mensagem"
Cria um commit manualmente a partir de uma tree.
git read-tree <tree-hash>
Lê uma tree para o index.
git update-ref refs/heads/teste <hash>
Atualiza manualmente uma referência.
git symbolic-ref HEAD
Mostra para qual branch simbólica o HEAD aponta.
git symbolic-ref HEAD refs/heads/main
Faz o HEAD apontar para main.
Esse bloco é para entender o Git como banco de dados de objetos. Não é uso diário, é domínio de motor.
________________________________________
15. Comandos para listar objetos e commits internamente
git rev-list HEAD
Lista todos os commits alcançáveis a partir do HEAD.
git rev-list --all
Lista commits alcançáveis por todas as refs.
git rev-list --count HEAD
Conta commits até o HEAD.
git rev-list --objects --all
Lista objetos alcançáveis no repositório.
git diff-tree HEAD
Mostra diferenças de árvore em um commit.
git diff-tree --no-commit-id --name-only -r HEAD
Lista arquivos alterados no último commit.
________________________________________
16. Comandos para merge mais técnico
git merge-tree <base> <branch1> <branch2>
Simula ou analisa uma mesclagem em nível de árvore.
git rerere
Gerencia reutilização de resolução de conflitos.
git rerere status
Mostra conflitos lembrados pelo Git.
git rerere diff
Mostra a resolução registrada de conflito.
git config --global rerere.enabled true
Ativa o reaproveitamento automático de resoluções de conflito.
Esse é muito útil para quem faz muito rebase/merge e resolve conflitos repetidos.
________________________________________
17. Comandos para credenciais
git credential fill
Pede ao sistema de credenciais para preencher usuário/senha.
git credential approve
Aprova e salva credenciais.
git credential reject
Remove/rejeita credenciais salvas.
Normalmente você não usa direto, mas é parte do sistema de autenticação.
________________________________________
18. Comandos gráficos e auxiliares
git gui
Abre uma interface gráfica nativa do Git.
gitk
Abre visualizador gráfico de histórico.
git instaweb
Sobe uma interface web local para navegar no repositório.
git daemon
Roda um servidor Git simples.
Esses comandos existem, mas no fluxo moderno VS Code, GitHub Desktop e interfaces web substituem boa parte deles.
________________________________________
19. Comandos para integração com SVN
git svn clone <url>
Clona um repositório SVN para Git.
git svn fetch
Busca alterações do SVN.
git svn rebase
Atualiza seu trabalho com base no SVN.
git svn dcommit
Envia commits Git de volta para SVN.
Isso é para ambientes legados. Hoje é raro, mas em empresas antigas ainda pode aparecer.
________________________________________
20. Comandos obsoletos ou perigosos
git filter-branch
Reescreve histórico de forma profunda, mas hoje é desencorajado.
git filter-branch --tree-filter 'comando' HEAD
Reescreve commits aplicando um comando na árvore.
git filter-branch --index-filter 'comando' HEAD
Reescreve histórico mexendo no index.
Hoje, em muitos casos, se usa ferramentas externas como git filter-repo, mas ele não vem sempre instalado com o Git.
________________________________________
21. Comandos de Git LFS
Git LFS não é Git puro, mas é muito usado para arquivos grandes.
git lfs install
Ativa Git LFS no ambiente.
git lfs track "*.psd"
Faz arquivos .psd serem controlados pelo LFS.
git lfs track "*.zip"
Faz arquivos .zip serem controlados pelo LFS.
git lfs ls-files
Lista arquivos controlados pelo LFS.
git lfs pull
Baixa arquivos grandes do LFS.
git lfs status
Mostra estado dos arquivos LFS.
________________________________________
22. Comandos realmente essenciais para domínio total
Agora, separando com maturidade: se você quer dominar Git, estes são os blocos que importam.
Camada 1 — Sobreviver no Git
git status
git add .
git commit -m "mensagem"
git log --oneline
git push
git pull
git clone <url>
git branch
git switch -c nome-da-branch
git merge nome-da-branch
Camada 2 — Trabalhar profissionalmente
git fetch
git rebase
git stash
git restore
git reset
git revert
git cherry-pick
git tag
git remote -v
git branch -vv
Camada 3 — Resolver problemas sérios
git reflog
git fsck
git clean -n
git clean -fd
git bisect
git blame
git merge-base
git rerere
Camada 4 — Organizar histórico como profissional
git rebase -i HEAD~3
git commit --amend
git reset --soft HEAD~1
git range-diff
git log --first-parent
git shortlog -sne
Camada 5 — Repositórios grandes e avançados
git sparse-checkout
git worktree
git submodule
git bundle
git gc
git maintenance
git lfs
Camada 6 — Entender o Git por dentro
git cat-file
git hash-object
git ls-tree
git write-tree
git commit-tree
git update-ref
git rev-list
git rev-parse
________________________________________
23. A verdade sobre “dominar Git todo”
Dominar Git não é saber uma lista infinita de comandos. É dominar estas perguntas:
Onde estou?
git status
git branch
git rev-parse --abbrev-ref HEAD
O que mudou?
git diff
git diff --staged
O que foi salvo?
git log
git show
O que está no remoto?
git remote -v
git fetch
git branch -vv
Como volto sem destruir?
git restore
git revert
git reflog
Como volto destruindo, quando tenho certeza?
git reset --hard
git clean -fd
Como junto caminhos?
git merge
git rebase
Como trabalho sem bagunçar a main?
git switch -c feature/nome
git push -u origin feature/nome
Como investigo bugs?
git blame
git bisect
git log --grep
Como limpo a história?
git commit --amend
git rebase -i
git reset --soft
________________________________________
24. Plano de estudo para dominar Git
Para você realmente dominar, siga esta ordem:
Semana 1: status, add, commit, log, diff, restore.
Semana 2: branch, switch, merge, push, pull, fetch, remote.
Semana 3: reset, revert, stash, reflog, clean.
Semana 4: rebase, rebase -i, cherry-pick, tag, conflitos.
Semana 5: bisect, blame, worktree, submodule, sparse-checkout.
Semana 6: cat-file, hash-object, ls-tree, commit-tree, update-ref.
Quando você chegar na semana 6, você não estará apenas usando Git. Você estará enxergando o Git como ele realmente é: um banco de dados de objetos, referências e snapshots.
A maioria dos desenvolvedores usa Git como quem dirige um carro. Você pode aprender a dirigir — mas também pode abrir o capô, entender o motor e virar mecânico da própria linha do tempo.


