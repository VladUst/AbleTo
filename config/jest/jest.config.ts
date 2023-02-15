import path from 'path';

export default {
  globals: {
    _IS_DEV_: true,
    __API__: '',
    __PROJECT__: 'jest'
  },
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\'
  ],
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  moduleDirectories: ['node_modules', 'src'],
  rootDir: '../../',
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx')
  },
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: '<rootDir>/reports/unit',
      filename: 'report.html',
      openReport: true,
      inlineSource: true
    }]
  ]
};
