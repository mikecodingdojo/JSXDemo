function getMood(){
    const moods = ['Angry','Hungry', 'Silly', 'Quiet', 'Paranoid', 'Happy']
    return moods[Math.floor(Math.random() * moods.length)]; 

}


class JSXDemo extends React.Component {
    render() {
        return(
            <div>
                
                    <img src="http://placekitten.com/g/400/500" width="900" height="800"/>
                    <h1>My Current Kitty mood is: {getMood()}</h1>
                
            </div>
        );

    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root')); 