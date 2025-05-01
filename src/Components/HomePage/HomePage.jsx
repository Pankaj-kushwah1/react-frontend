import React from "react";
import "./HomePage.css";
function HomePage({ data }) {
  console.log("data: ", data);
  if (data?.data) {
    data = data.data;
  }
  document.title = data?.title || "Home";
  return (
    <div className="container home-page">
      {/* <h1 style={{ color: "blue" }} >This is Home page</h1> */}
    <h2 className="home-heading"><a href="">{data?.title}</a></h2>  
      <span>{data?.about}</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iusto
        odio iure quis repellendus fugiat ab sed? Rerum, nihil possimus? Quasi
        saepe tempore dolor totam facilis nostrum praesentium ut cum autem ea
        eum vero velit iusto minima sequi aperiam itaque ullam aut molestiae, et
        sed beatae. Rerum voluptas libero eius ad natus magnam quaerat
        recusandae velit itaque, necessitatibus autem aspernatur iste veniam
        inventore possimus unde hic totam alias tenetur. Pariatur doloribus,
        harum sint in earum reiciendis debitis ipsum iure illum, ipsa aspernatur
        placeat error quaerat doloremque. Porro praesentium labore tenetur
        numquam aliquid, ab corrupti. Dignissimos ab eius iure eos dolores
        commodi possimus explicabo laborum blanditiis eaque qui et, amet
        consequatur neque dolor delectus quo voluptatum dolorem, dolore
        perferendis expedita itaque maxime? Omnis laborum asperiores nobis
        dicta, repellendus incidunt pariatur voluptates commodi ab aliquid
        facilis, necessitatibus, voluptas eius. Dolor, nobis est alias obcaecati
        numquam illum minus quisquam ratione nam quo impedit reprehenderit fugit
        adipisci? Maiores sed ipsam soluta similique eum commodi perferendis
        dicta culpa repellat quod dolores aliquam voluptatum pariatur temporibus
        officia debitis aperiam, expedita, nisi fuga! Corporis animi repellendus
        natus ipsum eos sit molestiae nobis rerum inventore eveniet velit,
        dolorum architecto, magnam voluptates, blanditiis harum. Autem tempore
        nisi delectus mollitia excepturi ab, maxime placeat cumque vel culpa
        quas beatae omnis magnam, fuga quod sed assumenda fugiat rem! Dicta
        beatae debitis mollitia sint non ex quisquam animi quod quibusdam fuga
        consectetur nemo temporibus placeat dolorem ad velit atque aperiam
        ipsum, minima harum sunt? Vitae neque, consequatur incidunt praesentium
        veritatis eveniet laborum, omnis veniam similique facere libero ipsam in
        soluta accusantium minus non. Ea officia natus odit incidunt iure, enim
        cupiditate quas temporibus accusamus ratione laboriosam asperiores
        labore consequatur reiciendis libero aut, modi debitis fuga quasi sint
        illo facilis eveniet. Quae libero numquam modi magni optio, et dolorum
        voluptatum dolore maxime. Minima eius est perferendis quod non quia quis
        reprehenderit amet neque officia ut laudantium quas animi magnam
        molestiae temporibus, recusandae iure culpa nobis deleniti nihil ullam
        porro cum. Odio iste, nam ipsam, obcaecati eum delectus nobis odit
        consectetur quasi eaque aliquam neque est saepe laudantium laborum
        nostrum molestias officiis! Aperiam in necessitatibus, fugiat sit
        assumenda architecto amet soluta, aliquid maxime vero cupiditate odio,
        quos libero beatae illo numquam tempore molestias vitae quasi
        laboriosam. Sint quisquam cupiditate exercitationem, quibusdam illo
        necessitatibus, aperiam iusto facere deserunt dolore voluptates hic non,
        temporibus enim atque. Modi quae eos dolor facilis nobis delectus vitae
        eaque! Necessitatibus dolorem totam dolorum veniam beatae, eveniet
        voluptate consequatur voluptates explicabo accusamus tenetur debitis,
        magni praesentium officia incidunt, error mollitia earum libero
        voluptatum odio sit vel ullam distinctio? Eaque, quas minima
        consequuntur dolore pariatur temporibus harum illum, vero corrupti
        molestiae possimus enim a voluptas accusamus, sunt placeat eum?
        Perferendis, beatae possimus distinctio, praesentium, id natus quibusdam
        recusandae ad eveniet sapiente quo. Error, laboriosam. Ipsa incidunt
        dolor, vero harum sint, ea a error ullam odio molestiae quia, distinctio
        alias esse consectetur voluptatem tempora officia quod? Soluta facere
        veniam perferendis temporibus corrupti quasi reprehenderit, beatae
        consequatur velit corporis eveniet! Ratione quidem omnis, temporibus
        beatae natus, facilis fugit autem optio culpa ullam quaerat in! Velit
        recusandae enim perspiciatis eius, ut dignissimos nemo nesciunt cumque
        illum obcaecati sunt quas ipsum voluptates error. Sint commodi quo
        repellat rem iusto cumque adipisci esse quam reprehenderit praesentium
        pariatur dignissimos assumenda veniam tenetur temporibus voluptate
        perferendis corrupti illum sed eius, distinctio a laboriosam dolorum!
        Obcaecati ea reprehenderit autem illum impedit, nobis ratione quam
        maiores mollitia cum exercitationem ipsum at aspernatur fugiat placeat
        quasi velit ut excepturi sequi deserunt optio. Modi consectetur numquam
        deleniti repellendus. Accusamus magni facilis fugit suscipit minima eos
        excepturi molestias perspiciatis maiores alias. Accusamus unde, placeat
        magni explicabo asperiores sed voluptatem quaerat ea animi natus
        eligendi maxime accusantium exercitationem quia nobis id commodi sit
        ipsam ipsa alias deserunt esse modi, deleniti quisquam. Deserunt
        suscipit quam nesciunt non, eaque voluptatum earum sint, amet dolores
        ducimus aliquam consequatur doloremque perspiciatis cumque distinctio
        quaerat voluptate tempore ipsam, expedita enim! Veniam, aliquam itaque
        alias eligendi praesentium ex enim in. Nisi et, pariatur odit possimus
        consectetur ipsum perferendis iste ipsam voluptatibus maxime sed
        praesentium, porro facilis dolores, tenetur impedit suscipit atque
        commodi molestiae modi laborum? Obcaecati deserunt voluptates doloribus
        fugiat, minima soluta voluptatum vel dolor laudantium vero non fugit
        corrupti distinctio perspiciatis magnam nam asperiores at quidem cumque.
        Odit officiis ad iste ducimus minima. At voluptatem, accusamus quod
        cumque, exercitationem iure veniam ea nesciunt assumenda sequi
        praesentium, distinctio vel aperiam dolore expedita perferendis
        suscipit. Similique qui quod eius culpa! Tempore a rem modi repudiandae
        sint libero error. Dicta, dolores? Molestiae vitae quia error modi
        officiis quam quis, quibusdam nobis accusamus, a voluptatibus
        necessitatibus. Suscipit magnam non rerum? Tempore earum ipsa quaerat
        ducimus sapiente praesentium nemo porro vel quasi perferendis, dolorem
        voluptatum alias, molestias deserunt et repellendus! Mollitia minus, et
        libero facilis voluptatum voluptatem velit iure eaque nemo amet hic,
        optio tempora neque soluta accusamus? Nobis exercitationem fugit eaque
        quidem labore eius voluptate. Excepturi necessitatibus ipsa vero
        accusamus corrupti amet obcaecati voluptate harum aperiam atque
        accusantium sit, asperiores unde omnis libero placeat. Quae numquam,
        quisquam optio quas corrupti ullam, nihil aperiam voluptate mollitia qui
        officia minima corporis fugiat ipsam delectus exercitationem consectetur
        doloribus. Quaerat perspiciatis dolores exercitationem reprehenderit
        illum sequi pariatur cupiditate delectus eligendi iusto. Est dignissimos
        fugit deleniti eum, quibusdam voluptatibus a voluptates at nihil
        provident, blanditiis alias voluptas ipsa corporis explicabo similique
        sequi fuga sunt. Inventore animi facilis voluptatem, vitae ducimus
        recusandae minima accusamus culpa aperiam temporibus iusto facere
        aspernatur porro mollitia? Atque id aspernatur minima nemo error neque
        quam! Accusantium praesentium beatae rerum voluptatem ducimus nulla illo
        fuga. Sequi fuga ducimus repellat. Necessitatibus corporis eius
        dignissimos, optio fuga explicabo. Minus incidunt mollitia sit ullam
        rem! Explicabo assumenda recusandae animi ad cupiditate perspiciatis
        esse, mollitia dolorum quod placeat officiis expedita totam labore
        tenetur, quae magnam non accusamus! A quod consequuntur dolor facilis!
        Natus eius quis tenetur animi unde aspernatur, ut quae perspiciatis
        optio, quibusdam fuga expedita reiciendis! Alias, repellat officiis.
        Inventore ullam alias soluta quaerat repellendus ducimus, velit possimus
        similique a sapiente vero nulla, animi recusandae odio ea laudantium
        omnis?
      </p>
    </div>
  );
}
HomePage.defaultProps = {
  data: {
    title: "Thi is defualt title",
    about: "This is defualt about",
  },
};
export default HomePage;
