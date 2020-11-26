/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import Checkbox from './components/Checkbox/Checkbox';
import Box, { CloseBtn } from './components/Box/Box';
import Wrapper from './components/Wrapper/Wrapper';
import './App.css';
import 'flexboxgrid';

const currencies = [
  {
    id: 1,
    name: 'EUR',
    select: false,
  },
  {
    id: 2,
    name: 'PLN',
    select: false,
  },
  {
    id: 3,
    name: 'GEL',
    select: false,
  },
  {
    id: 4,
    name: 'DKK',
    select: false,
  },
  {
    id: 5,
    name: 'CZK',
    select: false,
  },
  {
    id: 6,
    name: 'GBP',
    select: false,
  },
  {
    id: 7,
    name: 'SEK',
    select: false,
  },
  {
    id: 8,
    name: 'USD',
    select: false,
  },
  {
    id: 9,
    name: 'RUB',
    select: false,
  },
];

const App = () => {
  const [curr, setCurr] = useState(currencies);

  const filtered = curr.filter((i) => i.select);

  return (
    <section className='section'>
      <div className="container container-fluid">
        <div className="row center-xs">
          <div className="col-xs-12">
            <Wrapper className="wrapper">
              <Wrapper className="boxes boxes--upper">
                {filtered.map(({ id, name }) => {
                  return (
                    <Box key={id} className="box--upper">
                      <div>{name}</div>
                      <CloseBtn
                        onClick={() => {
                          setCurr(
                            curr.map((i) => {
                              if (id === i.id) {
                                i.select = false;
                              }
                              return i;
                            })
                          );
                        }}
                      />
                    </Box>
                  );
                })}
              </Wrapper>
              <Wrapper className="boxes">
                {curr.map(({ id, name, select }) => {
                  return (
                    <Box className={`${select && 'active'}`} key={id}>
                      <Checkbox
                        id={`${id}`}
                        checked={select}
                        name={name}
                        onChange={(e) => { // @ts-ignore
                          const ch = e.target.checked;
                          setCurr(
                            curr.map((i) => {
                              if (id === i.id) {
                                i.select = ch;
                              }
                              return i;
                            })
                          );
                        }}
                      />
                    </Box>
                  );
                })}
              </Wrapper>
            </Wrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
