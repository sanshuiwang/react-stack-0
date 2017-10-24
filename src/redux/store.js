import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers.js';

/*我们现在的这个action创建函数 getUserInfo则是返回函数了。
*为了让action创建函数除了返回action对象外，还可以返回函数，我们需要引用redux-thunk中间件。*/
/*函数形式的action，把他们转为标准的action给reducer。这是redux-thunk的作用。*/
let store = createStore(combineReducers,applyMiddleware(thunkMiddleware));

export default store;
