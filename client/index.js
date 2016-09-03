import './css/index.css'
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Router, Route } from 'react-router'
import { hashHistory } from 'react-router'

import { syncHistory } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'store/middleware/thunkMiddleware' 
import loggerMiddleware from 'store/middleware/loggerMiddleware'
import reducers from 'store/index'

import Global from './containers/base/Global'
import Yard from './containers/base/Yard'
import Login from './containers/user/Login'
import Home from './containers/home/Home'

import BarChart from './containers/example/BarChart'
import List from './containers/example/List'
import Tabs from './containers/example/Tabs'
import TodoList from './containers/example/TodoList'
import CreateContent from './containers/example/CreateContent'
import X from './containers/example/X'

injectTapEventPlugin()

const createStoreWithMiddleware = applyMiddleware(syncHistory(hashHistory), thunkMiddleware, loggerMiddleware)(createStore)
const store = createStoreWithMiddleware(reducers)

function requestAuth(location, replace) {
	console.log('auth...')
	const state = store.getState()
	if (!state.user.auth.get('token')) replace('/login')
}

let rooEl = document.createElement('div')
document.body.appendChild(rooEl)

ReactDOM.render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route component={Global}>
				<Route component={Yard} onEnter={requestAuth}>
					<Route path="/" component={Home} />
					<Route path="/example">
						<Route path="bar-chart" component={BarChart} />
						<Route path="list" component={List} />
						<Route path="tabs" component={Tabs} />
						<Route path="todo-list" component={TodoList} />
						<Route path="create-content" component={CreateContent} />
						<Route path="x" component={X} />
					</Route>
				</Route>
				<Route path="/login" component={Login} />
			</Route>
		</Router>
	</Provider>
), rooEl)