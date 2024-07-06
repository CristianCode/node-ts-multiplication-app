import { mkdirSync, writeFileSync } from 'fs';

export interface SaveFileUseCase {
  execute: ( options: SaveFileOptions ) => boolean;
}

export interface SaveFileOptions {
  fileContent     : string;
  fileDestination : string;
  fileName        : string;
}

export class SaveFile implements SaveFileUseCase{

  constructor(
    /**
     *  DI - Dependency Injection
     *  repository: StorageRepository
     */
  ){}

  execute( { 
    fileContent, 
    fileDestination, 
    fileName
  }: SaveFileOptions): boolean {

    try{

      mkdirSync(fileDestination, { recursive: true });
      writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      return true;

    } catch( error ){

      console.error( error );
      return false;

    }

  }

}

