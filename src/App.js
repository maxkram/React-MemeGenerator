import './App.css';

import { data } from './data';

function App() {
    return (
        <main className='container'>
            <ul>
                {data.map((name) => {
                    return (
                        <li key={name} className='listItem'>
                            {name}
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}

export default App;
