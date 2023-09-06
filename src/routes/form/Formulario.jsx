import React from 'react';
import Input from '../../components/input/Input.jsx';
import InputDrop from '../../components/inputDrop/InputDrop.jsx';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import './Form.css';

export const Formulario = () => {
  const initialValues = {
    nome: '',
    dtnascimento: '',
    endereco: '',
    cursando: '',
    tecnologia: '',
    escolha: '',
    tamanhocamiseta: '',
    responsaveis: '',
  };

  const schema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    dtnascimento: Yup.date().required("Campo obrigatório"),
    endereco: Yup.string().required("Campo obrigatório"),
    cursando: Yup.string().required("Campo obrigatório"),
    tecnologia: Yup.string().required("Campo obrigatório"),
    escolha: Yup.string().required("Campo obrigatório"),
    tamanhocamiseta: Yup.string().required("Campo obrigatório"),
    responsaveis: Yup.string().required("Campo obrigatório"),
  });

  const handleSubmit = (values) => {
    console.log("agr deu boa", values);
  };

  return (
    <section className='sectionForm'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
        {({ errors, touched }) => (
          <Form className='form'>
            <div style={{display: "flex", alignItems: "center", gap:"20px"}}>
              <img src="/public/img/aprendereCrescer2.png" alt="" style={{width:"150px", height:"150px"}}/>
              <h1 className='title'>Inscrever-se para o programa de qualificação Aprender e Crescer</h1>
            </div>
            <Input
              placeholder='Digite Seu Nome'
              type='text'
              id="nome"
              name="nome"
            >
              Nome
            </Input>
            {errors.nome && touched.nome ? (
              <div className="error" style={{color:"red"}}>{errors.nome}</div>
            ) : null}
            <Input
              id="dtnascimento"
              name="dtnascimento"
              type="date"
            >
              Data de Nascimento:
            </Input>
            {errors.dtnascimento && touched.dtnascimento ? (
              <div className="error" style={{color:"red"}}>{errors.dtnascimento}</div>
            ) : null}
            <Input
              placeholder='Digite Seu Endereço'
              type='text'
              id="endereco"
              name="endereco"
            >
              Endereço:
            </Input>
            {errors.endereco && touched.endereco ? (
              <div className="error" style={{color:"red"}}>{errors.endereco}</div>
            ) : null}
            <InputDrop
              name="cursando"
              id="cursando"
              options={[
                'Ensino Médio',
                'Faculdade',
                'Pós Graduação',
                'Já sou formado'
              ]}
            >
              Está Cursando:
            </InputDrop>
            {errors.cursando && touched.cursando ? (
              <div className="error" style={{color:"red"}}>{errors.cursando}</div>
            ) : null}
            <InputDrop
              type='text'
              id="tecnologia"
              name="tecnologia"
              options={[
                'Sim, muito!',
                'Mais ou Menos',
                'Não, porém é necessário',
                'Não gosto nenhum pouco!'
              ]}
            >
              Gosta de Tecnologia?
            </InputDrop>
            {errors.tecnologia && touched.tecnologia ? (
              <div className="error" style={{color:"red"}}>{errors.tecnologia}</div>
            ) : null}
            <InputDrop
              id="escolha"
              type='text'
              name="escolha"
              options={["Programação", "Suporte", "RH", "Design", "Atendimento"]}
            >
              Se hoje você pudesse escolher dentro de uma indústria de tecnologia o setor para trabalhar qual é a sua preferência?
            </InputDrop>
            {errors.escolha && touched.escolha ? (
              <div className="error" style={{color:"red"}}>{errors.escolha}</div>
            ) : null}
            <InputDrop
              placeholder='Digite Seu Nome'
              type='text'
              id="tamanhocamiseta"
              name="tamanhocamiseta"
              options={['PP', 'P', 'M', 'G', 'GG']}
            >
              Tamanho da camiseta que você veste:
            </InputDrop>
            {errors.tamanhocamiseta && touched.tamanhocamiseta ? (
              <div className="error" style={{color:"red"}}>{errors.tamanhocamiseta}</div>
            ) : null}
            <Input
              placeholder='Nome do pai/mãe ou responsável'
              id="responsaveis"
              name="responsaveis"
            >
              Nome completo dos responsáveis, caso não seja maior que 18 anos:
            </Input>
            {errors.responsaveis && touched.responsaveis ? (
              <div className="error" style={{color:"red"}}>{errors.responsaveis}</div>
            ) : null}
            <div className='buttons'>
              <button className='buttoncleanform' type="reset">Limpar Formulário</button>
              <button className='button' type="submit">Enviar</button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
