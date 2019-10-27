import {useState} from 'react';
import Head from 'next/head';

import Card from '../components/Card';
import CreateButton from '../components/CreateButton';


export default () => {
    const [cards, setCards] = useState([
        {key: 0, value: "hello world!", pos: {x: 100, y: 170, order: 0}},
        {key: 1, value: "foo bar", pos: {x: 300, y: 230, order: 0}},
    ]);

    const [orderOffset, _] = useState(new Date().getTime());

    const onChange = card => {
        const cs = cards.slice();
        cs[card.key] = {...cs[card.key], ...card};
        cs[card.key].pos.order = new Date().getTime() - orderOffset;
        setCards(cs);
    };

    const createCard = () => {
        const cs = cards.slice();
        cs.push({
            key: cs.length,
            value: "",
            pos: {x: 200, y: 200, order: new Date().getTime() - orderOffset},
        });
        setCards(cs);
    };

    return (
        <div>
            <Head>
                <title>Sticky Note Board</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <style>{`#forkongithub a{background:indigo;color:#fff;text-decoration:none;font-family:arial,sans-serif;text-align:center;font-weight:bold;padding:5px 40px;font-size:1rem;line-height:2rem;position:relative;transition:0.5s;}#forkongithub a::before,#forkongithub a::after{content:"";width:100%;display:block;position:absolute;top:1px;left:0;height:1px;background:#fff;}#forkongithub a::after{bottom:1px;top:auto;}@media screen and (min-width:800px){#forkongithub{position:fixed;display:block;top:0;right:0;width:200px;overflow:hidden;height:200px;z-index:999999;}#forkongithub a{width:200px;position:absolute;top:60px;right:-60px;transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);box-shadow:3px 3px 3px rgba(0,0,0,0.8);}}`}</style><span id="forkongithub"><a href="https://github.com/macrat/react-sticky-board">Fork me on GitHub</a></span>

            {cards.map(c => (
                <Card key={c.key}
                      value={c.value}
                      onChange={val => onChange({...c, value: val})}
                      pos={c.pos}
                      onChangePos={val => onChange({...c, pos: val})}
                      order={c.timestamp}/>
            ))}

            <CreateButton onClick={createCard} />

            <footer>
                (c)2019 <a href="https://github.com/macrat">MacRat</a>
            </footer>

            <style jsx>{`
                footer {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    text-align: center;
                    font-size: 80%;
                }
                footer, footer a {
                    color: darkgray;
                }
            `}</style>
        </div>
    )
}
