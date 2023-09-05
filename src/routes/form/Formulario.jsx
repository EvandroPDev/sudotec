import React, { useState, useEffect } from 'react';
import Input from '../../components/input/Input.jsx';
import InputDrop from '../../components/inputDrop/InputDrop.jsx';
import './Form.css';

export const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    datanasc: '',
    endereco: '',
    cursando: '',
    tecnologia: '',
    escolha: '',
    tamanhocamiseta: '',
    responsaveis: '',
  });

  const handleInputChange = (e) => { 
    console.log(handleInputChange)
    const {name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    }) 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = { ...formData }
  }
  const formValues = {
    nome: formData.nome,
    datanasc: formData.datanasc,
    endereco: formData.endereco,
    cursando: formData.cursando,
    tecnologia: formData.tecnologia,
    escolha: formData.escolha,
    tamanhocamiseta: formData.tamanhocamiseta,
    responsaveis: formData.responsaveis,
  }
  console.log("agr deu boa", formValues)

  return (
    <section className='sectionForm'>
      <form className='form' onSubmit={handleSubmit}>
        <h1 className='title'>Inscrever-se para o programa de qualificação Aprender e Crescer</h1>
        <Input
          placeholder='Digite Seu Nome'
          type='text'
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
        >
          {formData.nome}
        </Input>
        <Input
          name="datanasc"
          value={formData.datanasc}
          onChange={handleInputChange}
        >
          Data de Nascimento:
        </Input>
        <Input
          placeholder='Digite Seu Endereço'
          type='text'
          name="endereco"
          value={formData.endereco}
          onChange={handleInputChange}
        >
          Endereço:
        </Input>
        <InputDrop
          name="cursando"
          value={formData.cursando}
          onChange={handleInputChange}
          options={[
            'Ensino Médio',
            'Faculdade',
            'Pós Graduação',
            'Já sou formado'
          ]}
        >
          Está Cursando:
        </InputDrop>
        <InputDrop
          type='text'
          name="tecnologia"
          value={formData.tecnologia}
          onChange={handleInputChange}
          options={[
            'Sim, muito!',
            'Mais ou Menos',
            'Não, porém é necessário',
            'Não gosto nenhum pouco!'
          ]}
        >
          Gosta de Tecnologia?
        </InputDrop>
        <InputDrop
          type='text'
          name="escolha"
          value={formData.escolha}
          onChange={handleInputChange}
          options={["Programação", "Suporte", "RH", "Design", "Atendimento"]}
        >
          Se hoje você pudesse escolher dentro de uma indústria de tecnologia o setor para trabalhar qual é a sua preferência?
        </InputDrop>
        <InputDrop
          placeholder='Digite Seu Nome'
          type='text'
          name="tamanhocamiseta"
          value={formData.tamanhocamiseta}
          onChange={handleInputChange}
          options={['PP', 'P', 'M', 'G', 'GG']}
        >
          Tamanho da camiseta que você veste:
        </InputDrop>
        <Input
          placeholder='Nome do pai/mãe ou responsável'
          name="responsaveis"
          value={formData.responsaveis}
          onChange={handleInputChange}
        >
          Nome completo dos responsáveis, caso não seja maior que 18 anos:
        </Input>
        <div className='buttons'>
          <button className='buttoncleanform'>Limpar Formulário</button>
          <button className='button' type="submit">Enviar</button>
        </div>
      </form>
    </section>
  );
};
