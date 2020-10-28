import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 1990-04-20 para 20/04/1990', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('1990-04-20')).toEqual('20/04/1990');
  });

});
