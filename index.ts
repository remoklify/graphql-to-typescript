/**
 * @description holds library index
 */

// util
import yargs from 'yargs/yargs';
import * as inquirer from 'inquirer';
import * as path from 'path';
import { GqlToTypeConverterUtil } from './lib/util/gql-to-type-converter.util';

const QUESTIONS = [
  {
    name: 'url',
    type: 'input',
    message: 'GraphQL API Url: ',
    when: () => yargs().argv,
    validate: (input: string) => {
      return true;
    },
  },
  {
    name: 'auth',
    type: 'input',
    message: 'Auth Token (Optional): ',
    when: () => yargs().argv,
    validate: (input: string) => {
      return true;
    },
  },
];

// current directory
const CURR_DIR = process.cwd();

// prompts questions to user
inquirer.prompt(QUESTIONS).then(async (answers) => {
  let userAnswers = Object.assign({}, answers, yargs().argv);
  const url = userAnswers['url'];
  const auth = userAnswers['auth'];

  const targetPath = path.join(CURR_DIR, 'schema');
  
  const gql = new GqlToTypeConverterUtil();

  if (auth && auth.length > 0) {
    gql.convert(url, 'Bearer ' + auth, targetPath);
  } else {
    gql.convert(url, null, targetPath);
  }
});
