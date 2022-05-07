import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
   const [people, setPeople] = useState(data);
   return (
      <main>
         <section className="container">
            <List people={people} />
            {/* people,length check how many people are there  */}
            <h3>{people.length} birthdays today</h3>
            <button onClick={() => setPeople([])}>clear all</button>
         </section>
      </main>
   );
}

export default App;
