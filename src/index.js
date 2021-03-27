/* React'ın çalışmaya başladığı dosya.Biz bu dosya içerisine component yazacağız ve tarayıcımızda göstereceğiz.
Component: Bir fonksiyon yada bir classdan oluşan js kodu.
JSX : Biz jsx sayesinde oluşturduğumuz elemanları sayfamızda görüntüleyebiliyoruz. */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Collapse from './components/Collapse';



const App = () => {

    return (
        <div className="container">

            <div className="row">

                <div className="card-group w-100">

                    <div className="col">

                        <Collapse href="collapseExample1">
                            <Card
                                cardText="Lorem ipsum... I"
                                updatedTime="Last Updated 1 min ago."
                                image="https://picsum.photos/id/1025/200/300">
                            </Card>
                        </Collapse>

                    </div>

                    <div className="col">

                        <Collapse href="collapseExample2">
                            <Card
                                cardTitle="Card Title II"
                                cardText="Lorem ipsum... II"
                                updatedTime="Last Updated 2 min ago."
                                image="https://picsum.photos/id/1020/200/300">
                            </Card>
                        </Collapse>

                    </div>

                    <div className="col">

                        <Collapse href="collapseExample3">
                            <Card
                                cardTitle="Card Title III"
                                cardText="Lorem ipsum... III"
                                updatedTime="Last Updated 3 min ago."
                                image="https://picsum.photos/id/1021/200/300">
                            </Card>
                        </Collapse>

                    </div>
                </div>
            </div>




        </div>

    );
}





ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)
