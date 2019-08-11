var React = require('react');
var DefaultLayout = require('./layout');

var {Button} = require('antd');


class MyIndex extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        alert(`it's fine!`);
    }

    render(){
        return (
            <DefaultLayout title={this.props.title}>
                <div>
                    Great!
                    <button type='primary' onClick={()=>this.handleClick()}>Click Me!</button>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = MyIndex;