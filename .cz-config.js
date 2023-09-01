'use strict';

module.exports = {
  types: [
    {
      value: ':sparkles: feat',
      name: '✨ feat:      新功能'
    },
    {
      value: ':bug: fix',
      name: '🐛 fix:      修复'
    },
    {
      value: ':memo: docs',
      name: '📝 docs:      文档变更'
    },
    {
      value: ':lipstick: style',
 
      name: '💄 style:     代码格式(不影响代码运行的变动)'
    },
    {
      value: ':recycle: refactor',
 
      name: '♻️  refactor:    重构 (既不增加feature, 也不是修复bug)'
    },
    {
      value: ':zap: perf',
      name: '⚡️ perf:      性能优化'
    },
    {
      value: ':white_check_mark: test',
      name: '✅ test:      增加测试'
    },
    {
      value: ':wrench: chore',
      name: '🔧 chore:     构建过程或辅助工具的变动'
    },
    {
      value: ':rewind: revert',
      name: '⏪ revert:     回退'
    },
    {
      value: ':rocket: build',
      name: '🚀 build:     打包'
    }
  ],

  scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

  usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*

  scopeOverrides: {
    fix: [

      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    // breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['scope', 'body','footer'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
