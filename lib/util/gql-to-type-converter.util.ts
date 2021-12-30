import * as fs from 'fs';
import axios from 'axios';
import { introspectionQuery, buildClientSchema, printSchema } from 'graphql';
import { generateTypeScriptTypes } from 'graphql-schema-typescript';
import * as path from 'path';

export class GqlToTypeConverterUtil {
  convert = async (url: string, authorization: any, targetPath: string) => {
    const query = introspectionQuery;
    const response = await axios.post<any>(
      url,
      { query },
      {
        headers: { Authorization: authorization },
      }
    );
    if (response && response.data) {
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath);
      }
      console.log('Reponse is taken from: ', url);
      console.log('Processing code generation..');
      const schema = response.data;
      const gql = buildClientSchema(schema.data);
      const schemaDocsPath = path.join(targetPath, 'schema.docs.graphql');
      fs.writeFileSync(schemaDocsPath, printSchema(gql));
      const schemaGeneratedPath = path.join(targetPath, 'schema.generated.ts');
      generateTypeScriptTypes(gql, schemaGeneratedPath)
        .then(() => {
          console.log('Code is generated, please check the directory: /schema');
        })
        .catch((err) => {
          throw err;
        });
    } else {
      throw new Error('The GraphQL Url not responding.');
    }
  };
}
