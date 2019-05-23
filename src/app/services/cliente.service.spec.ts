import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';
import { Cliente } from '../model/cliente.model'

describe('ClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('deve ser criado', () => {
    const service: ClienteService = TestBed.get(ClienteService);
    expect(service).toBeTruthy();
  });

  //   it('deve ser criado um objeto do tipo cliente',() => {
    
  //   let cliente: Cliente = new Cliente();
  //   cliente.clienteNome = "ative";

  //   const services: ClienteService =;    
  // });
});