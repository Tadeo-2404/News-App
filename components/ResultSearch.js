import React from 'react'

const ResultSearch = ({buscado, busquedaRealizada}) => {
  return (

    <div>ResultSearch</div>
  )
}

export const getStaticProps = async () => {
    console.log('hola')
    const KEY = "CD2Tgd7zbDcP3pRTi0kwVInpslwrDnbg";
    const data = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${KEY}`);
    const resultado = await data.json();
  
    return {
      props: {
        resultado
      }
    }
}

export default ResultSearch