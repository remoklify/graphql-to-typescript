import * as fs from 'fs';
import { buildClientSchema, printSchema } from 'graphql';
import { generateTypeScriptTypes } from 'graphql-schema-typescript';

export class GqlToTypeConverterUtil {
  convert = () => {
    const schema = fs.readFileSync('schema.json', 'utf8');
    const schemaObj = JSON.parse(schema);
    const gql = buildClientSchema(schemaObj.data);
    fs.writeFileSync('schema.docs.graphql', printSchema(gql));
    const outputPath = 'schema.generated.ts';
    generateTypeScriptTypes(gql, outputPath)
      .then(() => {})
      .catch((err) => {});
  };
}
