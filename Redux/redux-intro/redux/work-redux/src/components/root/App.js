import React from 'react'
import { Route, Switch } from 'react-router';
import { Container } from 'reactstrap';
import CartDetail from '../cart/CartDetail';
import NotFound from '../common/NotFound';
import Navi from '../navi/Navi';
import AddorUpdateProduct from '../products/AddorUpdateProduct';
import Dashboard from './Dashboard';

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/product" exact component={Dashboard} />
        <Route path="/saveproduct/:productId"  component={AddorUpdateProduct} />{/* bir parametre vereceğimiz zaman : ile veriyoruz!! */}
        <Route path="/saveproduct"  component={AddorUpdateProduct} />
        <Route path="/cart" exact component={CartDetail} />
        <Route  component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;
