import { writeFileSync, mkdirSync } from 'fs';

const saveMultiplicationTable = (base: number) => {
  const outputPath = 'outputs';
  let outputMessage = '';
  const headerMessage = `
  ==============================
        Tabla del ${base}
  ==============================\n`;

  for (let i = 1; i <= 10; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
  }
  outputMessage = headerMessage + outputMessage;
  mkdirSync(outputPath, { recursive: true });
  writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
  console.log(`Tabla del ${base} guardada en outputs/tabla-${base}.txt`);
}

saveMultiplicationTable(5);

