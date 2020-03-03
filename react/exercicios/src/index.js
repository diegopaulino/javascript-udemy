import React from 'react';
import ReactDom from 'react-dom';
import Filho from './componentes/Filho'
import Pai from './componentes/Pai';

ReactDom.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva">
      {/* Como passo os componentes filhos aqui */}
      <Filho nome="Pedro"/>
      <Filho nome="Paulo" sobrenome="Silva" />
      <Filho nome="Carla" sobrenome="Silva" />
    </Pai>
  </div>,
  document.getElementById('root'),
);
