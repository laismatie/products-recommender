import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations ] = useState([])

  const handleRecommendations = (newRecommendations) => {
    setRecommendations(newRecommendations);
  };

  return (
    <div className="bg-[#F1F3F5] min-h-screen flex flex-col justify-center items-center">
      <h1 className="mx-10 text-center text-3xl font-bold my-8">Recomendador de Produtos RD Station</h1>
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-4/5 md:w-3/4 lg:w-1/2 ">
        <p className="text-md md:text-lg mb-6">
          Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode encontrar uma variedade de produtos da RD Station, 
          cada um projetado para atender às necessidades específicas do seu negócio. De CRM a Marketing, de Conversas a Inteligência Artificial, 
          temos uma solução para ajudar você a alcançar seus objetivos. Use o formulário abaixo para selecionar suas preferências e funcionalidades 
          desejadas e receba recomendações personalizadas de produtos que melhor atendam às suas necessidades.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Form onUpdateRecommendations={handleRecommendations}/>
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
