import React, { useEffect, useState } from "react";
import styles from "./Colour.module.css";

// Imagens
import MascBermudaDuplaTactel from "../../../public/image1.png";
import MascCamisetaDry from "../../../public/image2.png";
import MascCamisetaDryTechAthlleisure from "../../../public/image3.png";
import MascJaquetaTactelTecnosport from "../../../public/image4.png";
import MascMangaLongaLighttermica2Pele from "../../../public/image5.png";
import MascRegataDryArmyNeck from "../../../public/image6.png";
import FemBermudaPowerFit from "../../../public/image7.png";
import FemCalcaAthenasLight from "../../../public/image8.png";
import FemCalcaLeggingPeluciada from "../../../public/image9.png";
import FemCamisetaDryPeccato from "../../../public/image10.png";
import FemCamisetaFitLine from "../../../public/image11.png";
import FemLeggingSeamlessMesh from "../../../public/image12.png";
import FemRegataCropped from "../../../public/image13.png";
import FemShortDuploDryTech from "../../../public/image14.png";
import FemShortDuploTactel from "../../../public/image15.png";
import FemShortSaiaDry from "../../../public/image16.png";
import FemShortSupermicrofibra from "../../../public/image17.png";
import FemTopFemininoEstilodoCorpoOpaq from "../../../public/image18.png";
import FemTopSuperMicroFibra from "../../../public/image19.png";

const Colour = () => {
  const [selectedCategory, setSelectedCategory] = useState("masculino");
  const [loading, setLoading] = useState(true);
  const [selectedTattoo, setSelectedTattoo] = useState(null); // Modal aberto

  const roupas = {
    masculino: [
      {
        id: 1,
        url: MascBermudaDuplaTactel,
        nome: "Bermuda Dupla Tactel",
        descricao:
          "Sua base com textura proporciona um ótimo caimento, enquanto o cós com elástico garante ajuste confortável. Os detalhes contrastantes adicionam um toque moderno ao design. Além disso, a Bermuda Dupla possui um short interno que fornece mais liberdade para os movimentos, garantindo conforto durante todo o treino.",
        preco: "R$ 132,90",
      },
      {
        id: 2,
        url: MascCamisetaDry,
        nome: "Camiseta Dry",
        descricao:
          "A camiseta é confeccionada em poliamida, um material conhecido por sua leveza, resistência e capacidade de absorver a umidade, tornando-a uma escolha adequada para atividades físicas. A presença de elastano na composição adiciona elasticidade à peça, permitindo maior liberdade de movimento.",
        preco: "R$ 98,90",
      },
      {
        id: 3,
        url: MascCamisetaDryTechAthlleisure,
        nome: "Camiseta Dry Tech Athleisure",
        descricao:
          "A Camiseta Dry Tech Every Day é a combinação perfeita de estilo e funcionalidade, com o conceito Athleisure, a Camiseta Dry Tech Athleisure é fabricada com fio de poliamida e tecido dry, garantindo alta respirabilidade e conforto, mantendo você seco em treinos de alta intensidade e momentos casuais. Com proteção solar FPS 50, essa camiseta moderna protege sua pele dos raios UV, tornando-se indispensável para atividades ao ar livre.",
        preco: "R$ 114,90",
      },
      {
        id: 4,
        url: MascJaquetaTactelTecnosport,
        nome: "Jaqueta Tactel Tecnosport",
        descricao:
          "Estilo e funcionalidade em cada detalhe! Conheça nossa jaqueta masculina em tactel tecnosport com textura, perfeita para quem busca alta durabilidade e conforto.",
        preco: "R$ 158,90",
      },
      {
        id: 5,
        url: MascMangaLongaLighttermica2Pele,
        nome: "Manga Longa Light Térmica 2º Pele",
        descricao:
          "Uma roupa “segunda pele” veste como uma nova camada da nossa pele, seu modelo é JUSTO AO CORPO e normalmente elas são usadas por baixo de outras roupas. Elaborada com tecido térmico, peluciado em seu interior, as baselayers (nome como também é conhecida a segunda pele), ajudam a manter o equilíbrio corporal. Em temperaturas não muito baixas, somente ela já é o suficiente para que você não passe frio! Os tecidos em que as roupas segunda pele são elaboradas são sintéticos, e aliado a isso uma tecnologia de ponta está incorporada, garantindo que o calor do seu corpo não saia, mantendo o equilíbrio térmico tão confortável em temperaturas baixas. ",
        preco: "R$ 132,90",
      },
      {
        id: 6,
        url: MascRegataDryArmyNeck,
        nome: "Regata Dry Army Neck",
        descricao:
          "Finalmente a queridinha da ARMY® chegou! A Regata Dry Army Neck foi inspirada na tendência européia, trazendo toda a modernidade do seu corte, aliada a melhor qualidade de mercado, o poliamida ARMY®. Marcante e charmosa com sua gola alta, a Regata Dry Army Neck traz também todo o conforto com seu design, regulando a temperatura corporal durante os treinos (não esquenta) e trazendo o nosso detalhe marcante do refletivo ARMY®. Não deixe de fora esse incrível produto do seu guarda-roupa.",
        preco: "R$ 49,90",
      },
    ],

    feminino: [
      {
        id: 1,
        url: FemBermudaPowerFit,
        nome: "Bermuda Powerfit",
        descricao:
          "Confeccionada em malha de poliamida com elastano, possui modelagem equilibrada com cintura alta e se ajusta perfeitamente ao corpo. O tecido tem boa compressão, oferecendo maior suporte e segurança durante as atividades.",
        preco: "R$ 84,90",
      },
      {
        id: 2,
        url: FemCalcaAthenasLight,
        nome: "Calça Athenas Light",
        descricao:
          "Com um visual despojado e mood super confortável, o modelo pode te acompanhar em diversas atividades no dia a dia. A calça é confeccionada em moletinho e possui um caimento leve, além de ser super macia. A modelagem jogger, que é mais soltinha, garante conforto e estilo despojado, perfeito para combinar com tênis. O modelo possui cintura alta e cós largo com elástico e cordão, que oferece um ajuste perfeito. Possui punhos com elástico e bolsos laterais que trazem mais praticidade.",
        preco: "R$ 185,90",
      },
      {
        id: 3,
        url: FemCalcaLeggingPeluciada,
        nome: "Calça Legging Peluciada",
        descricao:
          "Cheia de estilo, esta legging de cirrê proporciona uma alta compressão, deixando a peça ainda mais confortável. Ele também é ideal para treinos ao ar livre pois possui tecnologia dry, facilitando na evaporação do suor e transportando-o para fora do corpo. Dessa forma, sua temperatura ficará regulada, mesmo em climas quentes. O principal destaque, é a TRANSPARÊNCIA ZERO, você terá muito mais confiança em seus treinos.",
        preco: "R$ 118,90",
      },
      {
        id: 4,
        url: FemCamisetaDryPeccato,
        nome: "Camiseta Dry Peccato",
        descricao:
          "A Blusa Feminina Estilo do Corpo Dry Peccato Preto é ideal para seu treino, caminhada ou corrida. É confeccionada em malha Dry de poliamida, com um caimento super leve e confortável. Possui modelagem soltinha garantindo conforto, liberdade para seus movimentos e bem estar durante seus treinos e dia a dia. Além disso, a peça oferece Proteção UV35+, sendo ideal também para a prática de atividades ao ar livre.",
        preco: "R$ 95,90",
      },
      {
        id: 5,
        url: FemCamisetaFitLine,
        nome: "Camiseta Fit Line",
        descricao:
          "Dê um up no seu look fitness com a Regata Feminina Estilo do Corpo Fit Line Preto. Trazendo muita praticidade e conforto, esse modelo é ideal para dias de temperaturas altas e seu design versátil permite várias combinações. O modelo é confeccionado em malha de poliéster com secagem rápida, que garante leveza e frescor. Possui modelagem alongada com gola em U, além de estampa frontal.",
        preco: "R$ 65,90",
      },
      {
        id: 6,
        url: FemLeggingSeamlessMesh,
        nome: "Legging Seamless Mesh",
        descricao:
          "A verdadeira força vem da nossa essência. Não importa o desafio, o segredo está em nunca perder o foco no que somos e no que buscamos. Vamos com tudo!",
        preco: "R$ 103,80",
      },
      {
        id: 7,
        url: FemRegataCropped,
        nome: "Regata Cropped",
        descricao:
          "É confeccionada em malha Dry de poliamida, com um caimento super leve e confortável. Possui modelagem soltinha garantindo conforto, liberdade para seus movimentos e bem estar durante seus treinos e dia a dia. Além disso, a peça oferece Proteção UV35+, sendo ideal também para a prática de atividades ao ar livre.",
        preco: "R$ 112,90",
      },
      {
        id: 8,
        url: FemShortDuploDryTech,
        nome: "Short Duplo Dry Tech",
        descricao:
          "Treine com liberdade e conforto usando o Short Estilo Do Corpo Duplo Sport Feminino. Essa peça conta com bermuda interna oferencendo melhor suporte para as atividades de rua ou academia, além de tecido respirável e leve. Combine com camiseta ou seu tênis favorito e dê o seu melhor no esporte!",
        preco: "R$ 136,00",
      },
      {
        id: 9,
        url: FemShortDuploTactel,
        nome: "Short Duplo Tactel",
        descricao:
          "Com design moderno e visual versátil, o short é ideal para atividades e treinos diários. O short tem modelagem 2 em 1, contando com short interno que se ajusta perfeitamente ao corpo, enquanto o short externo oferece cobertura leve e resistente. O modelo tem cintura alta e possui cós com elástico reforçado para garantir o ajuste e dar segurança durante os movimentos.",
        preco: "R$ 112,90",
      },
      {
        id: 10,
        url: FemShortSaiaDry,
        nome: "Short Saia Dry",
        descricao:
          "Com design moderno e confortável, o modelo garante segurança e liberdade de movimentos. Confeccionado em malha de poliamida e elastano, o short possui toque macio e ótimo ajuste no corpo. Com cós largo de cintura média, o short interno tem modelagem justa, enquanto a saia superior é soltinha.",
        preco: "R$ 136,90",
      },
      {
        id: 11,
        url: FemShortSupermicrofibra,
        nome: "Short Supermicrofibra",
        descricao:
          "Shorts esportivo Estilo do Corpo Produto desenvolvido em poliamida com excelente qualidade e macia ao toque. Tecido com alta durabilidade que garante total conforto ao treino.",
        preco: "R$ 106,90",
      },
      {
        id: 12,
        url: FemTopFemininoEstilodoCorpoOpaq,
        nome: "Top Feminino Estilo do Corpo Opaque Gym",
        descricao:
          "O Top Feminino Estilo do Corpo Opaque Gym Preto/Pink é projetado para mulheres que não abrem mão de estilo e conforto durante suas atividades físicas. Este top esportivo é confeccionado em poliamida e elastano, materiais que oferecem elasticidade e suporte, permitindo liberdade de movimentos e uma excelente adaptação ao corpo.",
        preco: "R$ 133,90",
      },
      {
        id: 13,
        url: FemTopSuperMicroFibra,
        nome: "Top Supermicrofibra",
        descricao:
          "O Top Feminino Estilo do Corpo Supermicrofibra Preto é a escolha ideal para atividades esportivas, combinando conforto e estilo. Feito em malha de poliamida e elastano, o top oferece média compressão, proporcionando firmeza e sustentação durante os treinos. O tecido leve e flexível se ajusta perfeitamente ao corpo, garantindo liberdade de movimento e conforto durante todo o uso. O modelo apresenta gola em U e um design diferenciado com as costas mais abertas, que não só adiciona um toque moderno, mas também melhora a ventilação e a respirabilidade, ideal para práticas de exercícios intensos. O bojo removível oferece a versatilidade de ajuste personalizado, permitindo adaptar o uso conforme a necessidade.",
        preco: "R$ 89,90",
      },
    ],
  };

  return (
    <>
      {/* Navbar para alternar entre masculino e feminino */}
      <div className={styles.navbar}>
        <button
          className={`${styles.navButton} ${
            selectedCategory === "masculino" ? styles.active : ""
          }`}
          onClick={() => setSelectedCategory("masculino")}
        >
          Masculino
        </button>
        <button
          className={`${styles.navButton} ${
            selectedCategory === "feminino" ? styles.active : ""
          }`}
          onClick={() => setSelectedCategory("feminino")}
        >
          Feminino
        </button>
      </div>

      {/* Galeria de tatuagens */}
      <div className={styles.gallery}>
        {roupas[selectedCategory].map((tattoo, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => setSelectedTattoo({ ...tattoo, index })}
          >
            <img src={tattoo.url} alt={tattoo.nome} className={styles.image} />
            <div className={styles.cardContent}>
              <h3>{tattoo.nome}</h3>
              <p>{tattoo.preco}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para exibir detalhes */}
      {selectedTattoo && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedTattoo(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedTattoo.url}
              alt={selectedTattoo.nome}
              className={styles.modalImage}
            />
            <div className={styles.modalText}>
              <h2>{selectedTattoo.nome}</h2>
              <p>{selectedTattoo.descricao}</p>
              <p>
                <strong>Preço:</strong> {selectedTattoo.preco}
              </p>
              <button
                onClick={() => setSelectedTattoo(null)}
                className={styles.closeBtn}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Colour;
