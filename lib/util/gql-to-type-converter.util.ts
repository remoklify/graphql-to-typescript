import * as fs from 'fs';
import axios from 'axios';
import { buildClientSchema, printSchema } from 'graphql';
import { generateTypeScriptTypes } from 'graphql-schema-typescript';

export class GqlToTypeConverterUtil {
  convert = async (url: string, authorization: any) => {
    const query = fs.readFileSync('query.graphql', 'utf8');
    const response = await axios.post<any>(
      url,
      { query },
      {
        headers: { Authorization: authorization },
      }
    );
    if (response && response.data) {
      console.log('Reponse is taken from: ', url);
      console.log('Processing code generation..');
      console.log('response.data', response.data);
      const schema = response.data;
      const gql = buildClientSchema(schema.data);
      fs.writeFileSync('schema.docs.graphql', printSchema(gql));
      const outputPath = 'schema.generated.ts';
      generateTypeScriptTypes(gql, outputPath)
        .then(() => {
          console.log(
            'Code is generated, please check the file: schema.generated.ts'
          );
        })
        .catch((err) => {
          throw err;
        });
    } else {
      throw new Error('The GraphQL Url not responding.');
    }
  };
}
