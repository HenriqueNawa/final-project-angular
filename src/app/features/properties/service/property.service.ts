import { Injectable } from '@angular/core';
import { Property } from '../components/models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  imoveis: Array<Property> = [
    {
      id: 1,
      description: 'Casa 2 quartos, 2 banheiros, cozinha, sala',
      loanPrice: 2200,
      title: 'Casa Av. Nelson davila',
      status: 'ALUGUEL',
      mainImage: 'https://www.decorfacil.com/wp-content/uploads/2017/03/20171011fachada-casa-simples-pequena-99-960x600.jpg',
      cep: '11111-000',
      bairro: 'Centro',
      logradouro: "Av. Dr. Nelson d'Avila",
      municipio : 'São José dos Campos/SP',
      image: ['https://www.decorfacil.com/wp-content/uploads/2017/03/20171011fachada-casa-simples-pequena-99-960x600.jpg', 
      'https://casa.abril.com.br/wp-content/uploads/2021/06/erros-comuns-banheiro-pequeno-my-domain-house-of-chais.jpg?quality=95&strip=info&w=819',
      'https://fotos.vivadecora.com.br/decoracao-banheiro-simples-nichos-em-marcenaria-azul-e-cuba-de-apoio-branca-karinakorn-221998-proportional-height_cover_medium.jpg',
      'https://casa.abril.com.br/wp-content/uploads/2018/07/saladeestar.jpg',
      'https://cdn.leroymerlin.com.br/products/cozinha_planejada_u_casa_brasileira_90069560_5625_600x600.jpeg',
      'https://a-static.mlcdn.com.br/1500x1500/quarto-casal-completo-com-cama-monaco-e-guarda-roupa-2-portas-6-gavetas-florida-tcil-moveis-cumaru-rustic-cumaru-rustic/madeiramadeira-openapi/630501/922197ca45064d58579a1be35ba11033.jpg'
    ]
    },
    {
      id: 2,
      description: 'Apartamento 1 quarto, 1 banheiro, cozinha, sala',
      buyPrice: 800000,
      title: 'Apt. São Cristovao',
      status: 'COMPRA',
      mainImage: 'https://casa.abril.com.br/wp-content/uploads/2021/02/reforma-apartamento-Karen-pisacane13.jpg?quality=95&strip=info',
      image: ['https://casa.abril.com.br/wp-content/uploads/2021/02/reforma-apartamento-Karen-pisacane13.jpg?quality=95&strip=info',
      'https://cdn.leroymerlin.com.br/contents/banheiros_pequenos_4_dicas_faceis_de_decoracao_para_ampliar_e_deixar_o_ambiente_mais_moderno_4e00_original.jpg',
      'https://cdn.leroymerlin.com.br/products/cozinha_planejada_u_casa_brasileira_90069560_5625_600x600.jpeg'],
      cep: '22222-000',
      bairro: 'Centro',
      logradouro: "Av. Paulista",
      municipio : 'São José dos Campos/SP',
    },
    {
      id: 3,
      description: 'Edicula 2 quartos, 1 banheiro, cozinha, sala',
      loanPrice: 1500,
      title: 'Edícula Centro',
      status: 'ALUGUEL',
      mainImage: 'https://www.decorfacil.com/wp-content/uploads/2017/03/20171011fachada-casa-simples-pequena-99-960x600.jpg',
      image: ['https://www.decorfacil.com/wp-content/uploads/2017/03/20171011fachada-casa-simples-pequena-99-960x600.jpg',
      'https://a-static.mlcdn.com.br/618x463/quadro-parede-decoracao-sala-cozinha-natureza-podium/lojapodium/paisagens364/9149bb11054ace5aab61ca7370406df3.jpg'
    ],
      cep: '99999-000',
      bairro: 'Centro',
      logradouro: "Av. Pedro Alvares Cabrasl",
      municipio : 'São José dos Campos/SP',
    },
    {
      id: 4,
      description: 'Casa 4 quartos, 2 banheiros, cozinha, sala, piscina',
      buyPrice: 10400000,
      title: 'Casa Pq. Res. Flamboyant',
      status: 'COMPRA', 
      mainImage: 'https://s2.glbimg.com/l5tf5ALrBpZgm6SyiYv55yoUlh0=/620x413/smart/e.glbimg.com/og/ed/f/original/2020/01/20/leve-e-iluminada-esta-casa-na-bahia-mistura-estrutura-metalica-madeira-e-vidro_9.jpg',
      image: ['https://s2.glbimg.com/l5tf5ALrBpZgm6SyiYv55yoUlh0=/620x413/smart/e.glbimg.com/og/ed/f/original/2020/01/20/leve-e-iluminada-esta-casa-na-bahia-mistura-estrutura-metalica-madeira-e-vidro_9.jpg'],
      cep: '12345-000',
      bairro: 'Parque Residencial Flamboyant',
      logradouro: "Avenida Domingos Maldonado Campoy",
      municipio : 'São José dos Campos/SP',
    },
    {
      id: 5,
      description: 'Casa 3 quartos, 3 banheiros, cozinha, sala, piscina',
      loanPrice: 6000,
      title: 'Casa Jd. Colinas',
      status: 'ALUGUEL',
      mainImage: 'https://casa.abril.com.br/wp-content/uploads/2019/07/1-agra.jpg?quality=95&strip=info&w=1024',
      image: ['https://casa.abril.com.br/wp-content/uploads/2019/07/1-agra.jpg?quality=95&strip=info&w=1024',
      'https://media.gazetadopovo.com.br/haus/2019/10/decoracao-de-quarto-com-cores-neutras-13-1024x631-3cf2c1b0.jpg',
      'https://images.madeiramadeira.com.br/product/images/40258556-cozinha-completa-com-bancada-e-balcao-com-tampo-6-pecas-calabria-multimoveis-7908041026085-1_zoom-1500x1500.jpg?width=900&canvas=900,900&bg-color=FFFFFF',
      'https://s2.glbimg.com/2jg2jg4vEi04-J-X_XO6t6r3PUs=/smart/e.glbimg.com/og/ed/f/original/2021/04/22/sala-de-estar-fernanda-sa.jpg',
      'https://s2.glbimg.com/T6rHY30R7JwU1duiFsNUEXgzZ80=/620x650/e.glbimg.com/og/ed/f/original/2019/11/06/07_banheiro_2_img_0364-1.jpg',
      'https://cdn.leroymerlin.com.br/contents/banheiro_clean_e_com_personalidade_5a93_original.jpg'
    ],
      cep: '12222-000',
      bairro: 'Jardim das Colinas',
      logradouro: "Rua Silveira",
      municipio : 'São José dos Campos/SP',
    },
    {
      id: 6,
      description: 'Casa 1 quarto, 1 banheiro, cozinha, sala',
      loanPrice: 1000,
      title: 'Casa Centro',
      status: 'ALUGUEL',
      mainImage: 'https://www.tuacasa.com.br/wp-content/uploads/2019/05/fachadas-de-casas-simples-80-730x666.jpg',
      image: ['https://www.tuacasa.com.br/wp-content/uploads/2019/05/fachadas-de-casas-simples-80-730x666.jpg',
      'https://www.tuacasa.com.br/wp-content/uploads/2019/06/banheiro-simples-44-730x730.jpg'
    ],
      cep: '12245-000',
      bairro: 'Centro',
      logradouro: "Rua Eugênio Bonadio",
      municipio : 'São José dos Campos/SP',
    },
    {
      id: 7,
      description: 'Apt. 1 quarto, 1 banheiro, cozinha, sala',
      loanPrice: 1300,
      buyPrice: 300000,
      title: 'Apt. Centro',
      status: 'COMPRA/ALUGUEL',
      mainImage: 'https://bi.mrv.com.br/upload/GaleriaBlogs/1/como-escolher-tamanho-apartamento_636894722518592033.jpg',
      image: ['https://bi.mrv.com.br/upload/GaleriaBlogs/1/como-escolher-tamanho-apartamento_636894722518592033.jpg'
    ],
      cep: '12245-000',
      bairro: 'Centro',
      logradouro: "Rua Eugênio Bonadio",
      municipio : 'São José dos Campos/SP',
    },
  ];

  constructor() { }

  getProperty() {
    return this.imoveis;
  }

  filteredBuyList: Array<Property> = this.imoveis.filter(function (buy) {
    return buy.status.includes('COMPRA')
  } );

  filteredLoanList: Array<Property> = this.imoveis.filter(function (buy) {
    return buy.status.includes('ALUGUEL')
  } );
  
  getPropertyById(id: number) {
    return this.imoveis.find((imovel) => imovel.id === Number(id));
  }

  getImages(){
    const arr = ['https://www.decorfacil.com/wp-content/uploads/2017/03/20171011fachada-casa-simples-pequena-99-960x600.jpg', 
    'https://casa.abril.com.br/wp-content/uploads/2021/06/erros-comuns-banheiro-pequeno-my-domain-house-of-chais.jpg?quality=95&strip=info&w=819',
    'https://fotos.vivadecora.com.br/decoracao-banheiro-simples-nichos-em-marcenaria-azul-e-cuba-de-apoio-branca-karinakorn-221998-proportional-height_cover_medium.jpg']
    console.log(arr)
    return arr
  }

  getPropertyByFilterId(id: number) {
    const imovel = this.getPropertyById(Number(id));
    if(!imovel) {
      return 'Nennhum Imóvel Encontrado';
    }
    return [imovel];
  }


}
