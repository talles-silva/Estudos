import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2022-02-17 para 17-02-2022', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2022-02-17')).toEqual('31/02/2022');
  });
});
