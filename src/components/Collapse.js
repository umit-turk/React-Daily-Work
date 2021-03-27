import React from "react";
/*İlk constructor çalışıyor ve constructor sayesinde state'in ilk durumunu oluşturuyoruz 
ve sonra render metodu ilk defa çalıştı.
Onclik eventi çalıştı ve showMore metodunu çalıştırdı, bu showMore metodu ise setStae nesnesini güncelledi ve
render metodunu tekrar çalıştırdı.*/


class Collapse extends React.Component {

   

    state = {showContent: false }


    showMore = () => {
        this.setState({showContent: !this.state.showContent})//var olan durum neyse onun tersi olarak değiştir.
    }

    /* componentDidMount(){

    }

    componentDidUpdate(){

    } */

    render() {
        
        return (
            <div>
                <button onClick={this.showMore} className="btn btn-primary w-100">

                   {/*  {this.props.children.props.cardTitle} */}

                   {React.Children.map(this.props.children, children => children.props.cardTitle)}

                </button>


                {
                    this.state.showContent ? (
                        <div className="collapse show">
                        
                           {/*  {this.props.children} */}

                            {React.Children.map(this.props.children, children => children)}

                        </div>
                    ) : null
                }

            </div>
        );
    }

};



export default Collapse;

