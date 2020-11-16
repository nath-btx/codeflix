const fs = require('fs')
const readline = require('readline')

function csv2json(filename) {
  const input = fs.createReadStream(filename)
  const rl = readline.createInterface({ input })

  let header = [];
  let records = [];

  let lineCount = 0

  rl.on('line', (line) => {
    if (lineCount === 0) 
    {
      // Header
      header = line.split(';');
    } else {
        const record = {};

        const values = line.split(';');
        for (let i = 0; i < values.length; i++){
            const key = header[i]
            const value = values[i]
            record[key] = value;

        }
        records.push(record);

      // Data
    }
    
    console.log(records);
    lineCount++
    })
    
    rl.on('close', () => {
        fs.writeFile('something json', JSON.stringify(records))
    })
    

}

/**
 * Entrypoint
 */
csv2json('./Comp0ser.csv')