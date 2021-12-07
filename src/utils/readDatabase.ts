import fs from 'fs';
import path from 'path';
import csvParse from 'csv-parse';

interface IDataBCG {
  id_estado: string;
  estado_abrev: string;
  ano: string;
}

export function readDataBase(): Promise<IDataBCG[]> {
  return new Promise((resolve, reject) => {
    const csvPath = path.resolve(__dirname, "..", "..", "services")
    // const stream = fs.createReadStream(csvPath);
    
    console.log(csvPath)
    // const datas: IDataBCG[] = [];


  
  //   const parseFile = csvParse();

  //   stream.pipe(parseFile);

  //   parseFile
  //     .on('data', async (line) => {
  //       const [name, description] = line;
  //       categories.push({
  //         name,
  //         description,
  //       });
  //     })
  //     .on('error', (err) => {
  //       reject(err);
  //     });
  });
}
