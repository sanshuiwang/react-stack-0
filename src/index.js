import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';

import Hello from 'component/Hello';

/*初始化项目的render*/
// import getRouter from 'router/router';
//
// /*初始化*/
// renderWithHotReload(getRouter());
//
// /*热更新*/
// if(module.hot){
//   module.hot.accept('./router/router',()=>{
//     const getRouter = require('./router/router').default;
//     renderWithHotReload(getRouter());
//   });
// }
//
// /*Provider组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听*/
// function renderWithHotReload(rootElement){
//   ReactDom.render(
//     <AppContainer>
//       <Provider store={store}>
//         {rootElement}
//       </Provider>
//     </AppContainer>,
//     document.getElementById('app'));
// }

/*路由引练习*/
import BasicExample from 'router/rr4/1';
import ParamsExample from 'router/rr4/2';
import AuthExample from 'router/rr4/3';
ReactDom.render(
  <AppContainer>
    <Provider store={store}>
      {AuthExample()}
    </Provider>
  </AppContainer>,
  document.getElementById('app'));
