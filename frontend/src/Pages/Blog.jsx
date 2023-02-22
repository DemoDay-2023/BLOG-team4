import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import Proimg1 from "../img/profileimg1.svg";
import Proimg2 from "../img/profileimg2.svg";
import img2 from "../img/img2.png";

export const Blog = () => {
  return (
    <div>
      <Header />
      <div className="mx-[600px]">
        <p className="text-5xl font-Mukta mt-[279px]">
          10 Secrets for managing a remote team{" "}
        </p>
        <div className="flex justify-around text-center w-[20vw] my-[99px]">
          <img className="h-[55px] " src={Proimg1} alt="img" />
          <p className="h-[2vh] mt-[1vh] text-grey border-r-2 pr-[2vw]">Shedrack eze</p>
          <p className="h-[2vh] mt-[1vh] text-grey">2nd January,2022</p>
        </div>
        <img className="w-[900px] my-[99px]" src={img2} alt="img" />
        <p className="w-[800px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eaque
          quo! Nesciunt nobis, tempora temporibus numquam ratione iste? Amet
          numquam quia saepe impedit consectetur temporibus ipsum delectus,
          quibusdam cum sequi optio placeat eum nulla sunt illum tempora
          inventore nisi architecto commodi perspiciatis recusandae debitis,
          eligendi quas possimus. Voluptatem maxime accusantium, asperiores
          nostrum nemo excepturi quod corrupti, minus et eveniet, est sequi
          impedit voluptatibus ipsa laborum? Corporis, explicabo nostrum error
          commodi sint alias non, eligendi perspiciatis delectus modi deleniti,
          quae iste ipsa fugit. Voluptates, veritatis! Id adipisci ratione totam
          eius dolor sapiente reiciendis nobis a voluptatibus, ipsum, cumque cum
          molestias saepe rerum delectus ad voluptatum aliquid! Perspiciatis
          iure totam repellat ex adipisci temporibus nostrum provident sequi
          magnam aperiam consequatur placeat quis vero ratione, laborum vel
          nihil eum pariatur illo assumenda maiores minus! Officiis velit labore
          explicabo rem nobis ullam voluptates tenetur veniam molestiae non quis
          illo iste debitis in consectetur quasi, consequatur minus eaque aut
          architecto odio esse culpa ab autem. Doloremque aliquid, officia
          itaque omnis cum deserunt dolorum in repellendus nulla reprehenderit
          at aut necessitatibus expedita, quidem eligendi nihil ducimus
          similique optio. Cumque culpa provident quo repellat debitis ex quod
          eligendi aliquam sunt, sit ipsa fugiat, placeat obcaecati voluptatibus
          aut error similique, nisi blanditiis officiis optio voluptates. Soluta
          facilis iusto, quaerat libero alias fugit quam placeat! Aspernatur
          deserunt suscipit cum reprehenderit maxime laboriosam alias id
          distinctio eum delectus, sed numquam consequatur nesciunt rerum sunt
          ut amet placeat consectetur, illum ab odit! Reprehenderit,
          exercitationem commodi necessitatibus fugiat unde voluptates quia
          modi. Architecto aperiam qui rem error quod minus aspernatur hic,
          mollitia iure voluptatem nostrum! Eligendi accusamus nesciunt
          consequuntur harum maiores rerum, dolor ex libero quae facere quasi
          laborum sit molestiae modi voluptas rem sunt voluptates perspiciatis
          ipsa! Rerum reprehenderit labore quas! Perferendis voluptatibus
          inventore, est veritatis in fugit dolorem expedita voluptas.
        </p>
        <div className="my-[99px]">
          <img className="h-[55px] mb-[-8vh]" src={Proimg1} alt="img" />
          <div className="ml-[100px] ">
          <p className="text-jij">Written by</p>
          <p className="text-[24px]">Shedrack Eze</p>
          <p className="text-jij text-grey">CEO Team App</p>
          </div>
        </div>
        <div>
          <p className="text-blackgr text-[24px] font-Mulish mb-[1vw]" >Join the conversation</p>
          <img className="h-[55px] " src={Proimg2} alt="img" />
          <input
            type="text"
            placeholder="Comments"
            className="border-2 border-blackgr w-[630px] h-[148px] ml-20 mt-[-4vh]"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
