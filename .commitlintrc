module.exports = {}

import { RuleConfigSeverity } from '@commitlint/types';

export default {
    extends: ['@commitlint/config-conventional'],
    parserPreset: 'conventional-changelog-conventionalcommits',
    rules: {
        // Regras para o corpo da mensagem
        'body-full-stop': [RuleConfigSeverity.Error, 'never', '.'],
        'body-leading-blank': [RuleConfigSeverity.Error, 'always'],
        'body-empty': [RuleConfigSeverity.Error, 'never'],
        'body-max-length': [RuleConfigSeverity.Error, 'always', Infinity],
        'body-max-line-length': [RuleConfigSeverity.Error, 'always', Infinity],
        'body-min-length': [RuleConfigSeverity.Error, 'always', 0],
        'body-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],

        // Regras para o rodapé da mensagem
        'footer-leading-blank': [RuleConfigSeverity.Error, 'always'],
        'footer-empty': [RuleConfigSeverity.Error, 'never'],
        'footer-max-length': [RuleConfigSeverity.Error, 'always', Infinity],
        'footer-max-line-length': [RuleConfigSeverity.Error, 'always', Infinity],
        'footer-min-length': [RuleConfigSeverity.Error, 'always', 0],

        // Regras para o cabeçalho da mensagem
        'header-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
        'header-full-stop': [RuleConfigSeverity.Error, 'never', '.'],
        'header-max-length': [RuleConfigSeverity.Error, 'always', 72],
        'header-min-length': [RuleConfigSeverity.Error, 'always', 0],
        'header-trim': [RuleConfigSeverity.Error, 'always'],

        // Regras para o escopo
        'scope-enum': [RuleConfigSeverity.Error, 'always', []],
        'scope-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
        'scope-empty': [RuleConfigSeverity.Error, 'never'],
        'scope-max-length': [RuleConfigSeverity.Error, 'always', Infinity],
        'scope-min-length': [RuleConfigSeverity.Error, 'always', 0],

        // Regras para o assunto da mensagem
        'subject-case': [RuleConfigSeverity.Error, 'always', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
        'subject-empty': [RuleConfigSeverity.Error, 'never'],
        'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'],
        'subject-max-length': [RuleConfigSeverity.Error, 'always', Infinity],
        'subject-min-length': [RuleConfigSeverity.Error, 'always', 0],
        'subject-exclamation-mark': [RuleConfigSeverity.Error, 'never'],

        // Regras para o tipo
        'type-enum': [RuleConfigSeverity.Error, 'always', [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        ]],
        'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
        'type-empty': [RuleConfigSeverity.Error, 'never'],
        'type-max-length': [RuleConfigSeverity.Error, 'always', Infinity],
        'type-min-length': [RuleConfigSeverity.Error, 'always', 0],

        // Regras para trailers
        'signed-off-by': [RuleConfigSeverity.Error, 'always', 'Signed-off-by:'],
        'trailer-exists': [RuleConfigSeverity.Error, 'always', 'Signed-off-by:'],
  },
  prompt: {
    questions: {
      type: {
        description: "Selecione o tipo de mudança que você está comitando",
        enum: {
          feat: {
            description: 'Uma nova feature',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: 'Correção de bug',
            title: 'Correções de Bugs',
            emoji: '🐛',
          },
          docs: {
            description: 'Alterações apenas na documentação',
            title: 'Documentação',
            emoji: '📚',
          },
          style: {
            description: 'Alterações que não afetam o significado do código (espaço em branco, formatação, ponto e vírgula ausente, etc)',
            title: 'Estilos',
            emoji: '💎',
          },
          refactor: {
            description: 'Mudança de código que não corrige um bug nem adiciona uma feature',
            title: 'Refatoração de Código',
            emoji: '📦',
          },
          perf: {
            description: 'Mudança de código que melhora a performance',
            title: 'Melhorias de Performance',
            emoji: '🚀',
          },
          test: {
            description: 'Adição de testes ou correção de testes existentes',
            title: 'Testes',
            emoji: '🚨',
          },
          build: {
            description: 'Mudanças que afetam o sistema de build ou dependências externas (exemplos: gulp, npm)',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description: 'Mudanças na configuração de CI e scripts (exemplos: Travis, CircleCI)',
            title: 'Integração Contínua',
            emoji: '⚙️',
          },
          chore: {
            description: 'Outras mudanças que não modificam arquivos de código ou teste',
            title: 'Tarefas',
            emoji: '♻️',
          },
          revert: {
            description: 'Reverte um commit anterior',
            title: 'Reversões',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: 'Qual é o escopo desta mudança (por exemplo, nome do componente ou arquivo)',
      },
      subject: {
        description: 'Escreva uma descrição curta e imperativa da mudança',
      },
      body: {
        description: 'Forneça uma descrição mais longa da mudança',
      },
      isBreaking: {
        description: 'Há alguma mudança que quebra compatibilidade?',
      },
      breakingBody: {
        description: 'Um commit BREAKING CHANGE requer um corpo. Por favor, insira uma descrição mais longa do commit',
      },
      breaking: {
        description: 'Descreva as mudanças que quebram compatibilidade',
      },
      isIssueAffected: {
        description: 'Esta mudança afeta algum issue aberto?',
      },
      issuesBody: {
        description: 'Se issues forem fechados, o commit requer um corpo. Por favor, insira uma descrição mais longa do commit',
      },
      issues: {
        description: 'Adicione referências aos issues (por exemplo, "fix #123", "re #123")',
      },
    },
  },
};
