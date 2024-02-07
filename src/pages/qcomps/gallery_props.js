function Scientist({scientist, img}) {
  return (
  <section className="profile">
    <h2>{scientist.name}</h2>
    <img
      className="avatar"
      src={`https://i.imgur.com/${img.imageId}.jpg`}
      alt={scientist.name}
      width={img.size}
      height={img.size}
    />
    <ul>
      <li>
        <b>Profession: </b>
        {scientist.profession}
      </li>
      <li>
        <b>Awards: {scientist.awards} </b>
        {scientist.awardList}
      </li>
      <li>
        <b>Discovered: </b>
        {scientist.discovery}
      </li>
    </ul>
  </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Scientist
        scientist={{name:"Maria Skłodowska-Curie", profession:"physicist and chemist", awards:4,
                    awardList:"(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
                    discovery:"polonium (element)"}}
        img={{imageId:"szV5sdGs", size:70}} />
      <Scientist
        scientist={{name:"Katsuko Saruhashi", profession:"geochemist", awards:2,
                    awardList:"(Miyake Prize for geochemistry, Tanaka Prize)",
                    discovery:"a method for measuring carbon dioxide in seawater"}}
        img={{imageId:"YfeOqp2s", size:70}} />
    </div>
  );
}
