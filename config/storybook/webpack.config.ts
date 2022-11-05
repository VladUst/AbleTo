import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
export default ({ config }: { config: webpack.Configuration }) => {
  // чтобы storybook понимал абсолютные импорты в компонентах
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');
  // убираем правила с svg в стандартном конфиге
  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    // eslint-disable-next-line
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  // добавляем наш настроенный svgr в массив rules
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  });
  // чтобы понимал css модули
  config.module.rules.push(buildCssLoader(true));
  return config;
};
