function LikeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? '좋아요 취소' : '좋아요';
    return React.createElement(
        'button',
        { onClick: () => setLiked(!liked) },
        text
    );
}

const domContainer = document.getElementById('root');

ReactDOM.render(
    React.createElement(LikeButton), domContainer
);
const domContainer1 = document.getElementById('root1');

ReactDOM.render(
    React.createElement('div', null, [
        React.createElement('p', {key : 'aa'}, 'hello'),
        React.createElement('p', {key : 'aa1'}, 'hello1')]), domContainer1
);
const domContainer2 = document.getElementById('root2');

ReactDOM.render(
    React.createElement(LikeButton), domContainer2
);



